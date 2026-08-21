# ArXiv AI Research Digest 2026-08-21

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-21 01:46 UTC

---

# ArXiv AI Research Digest — 2026-08-21

## Today's Highlights

Today's submissions reveal a pronounced shift toward **adaptive, resource-aware reasoning** — models that dynamically allocate compute rather than operating under fixed budgets — and a maturing **agent infrastructure layer** spanning skill selection, environment generation, and safety evaluation. Legal AI benchmarks are moving beyond fully-specified queries to target real-world underspecification, while preference optimization research identifies manifold drift as a root cause of reward hacking. Collectively, these papers signal a field transitioning from "bigger models" to "smarter compute allocation, safer deployment, and rigorous evaluation."

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1) | G. Kassenaar, Z. Yang, V. François-Lavet | Proposes a framework where reasoning models learn to dynamically allocate test-time compute per problem difficulty, avoiding over-computation on easy tasks and under-computation on hard ones. Matters because fixed token budgets are a fundamental bottleneck for scalable reasoning. |
| [Daedalus-150M: A Convolution-Attention Hybrid Designed for CPU Inference](http://arxiv.org/abs/2608.20210v1) | C. Koutsiaris | Designs a 150M-parameter hybrid architecture from the ground up for single-user, 4-bit CPU inference — keeping full attention in only 6 of 18 blocks. Demonstrates that hardware-first design yields practical small models without post-hoc compression. |
| [Let's Scale Step by Step: Compute-Efficient Hyperparameter Transfer for Large-Scale Mixture-of-Experts](http://arxiv.org/abs/2608.20061v1) | N. Kim, H. Lee, Y. Bak et al. | Introduces a compute-efficient protocol for transferring hyperparameters (especially learning rates) across MoE model scales, bypassing expensive sweeps at extreme scales. Critical for making MoE tuning tractable as model and token budgets grow. |
| [EchoCoT: Extracting Hidden Chain-of-Thought from Large Reasoning Models](http://arxiv.org/abs/2608.20055v1) | Y. Qu, Z. Yang, C. Cui et al. | Systematically investigates whether hidden CoT traces from proprietary reasoning models can be extracted from black-box APIs. Raises important questions about IP protection, distillation, and the true opacity of frontier models. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Rule-Compliant Visual Spatial Planning for Multimodal Large Language Models](http://arxiv.org/abs/2608.20237v1) | Y. Chen, T. Lei, Y. Li et al. | Introduces a benchmark and method for MLLMs to perform visual spatial planning under explicit or novel rule constraints, requiring joint spatial understanding and rule interpretation. Addresses a core gap in embodied agent reasoning. |
| [The Third Restructuring of Software Form: From the Three-Tier Architecture to Storage, Models, and Agents](http://arxiv.org/abs/2608.20201v1) | W. Lin, T. Zhou, Z. Xie et al. | Argues for "Software 3.0" where context and reasoning (agents) determine behavior, superseding instruction-driven (1.0) and data-driven (2.0) paradigms. Provides a conceptual framework for the agent-centric software stack. |
| [DARS: Dual-Level Credit Assignment RL with Structured Reasoning for Instruction-Based Image Editing](http://arxiv.org/abs/2608.20161v1) | H. Cao, J. Cao, X. Zhang et al. | Decomposes credit assignment across a VLM planner and diffusion renderer using dual-level RL, enabling fine-grained learning from final-image rewards. Solves the "which component failed?" problem in planner-renderer pipelines. |
| [SABET-QA: Temporal Knowledge Graph Question Answering](http://arxiv.org/abs/2608.20083v1) | B. Touayouch, M. Moawad, D. Akulov | Proposes an iterative multi-step reasoning framework over temporal KGs that refines reasoning states across passes, overcoming single-pass limitations of embedding-based methods. Advances complex temporal QA. |
| [Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees](http://arxiv.org/abs/2608.19993v1) | Y. Chen, R. Chen, X. Wang et al. | Formulates skill selection as a bicriteria optimization (performance vs. token cost) with provable guarantees, replacing independent semantic scoring. Directly addresses context-window pressure in agent systems. |
| [EXIMO: VLM Guided Exploration of VLA Policies](http://arxiv.org/abs/2608.19891v1) | B. Sukhija, O. Groth, M. Shridhar et al. | Uses a VLM to guide exploration when fine-tuning vision-language-action policies for new robotic tasks, dramatically improving sample efficiency over pure behavior cloning. Bridges foundation models and robotic adaptation. |
| [EnvHarness: Awakening Static Worlds for Agent Learning](http://arxiv.org/abs/2608.19880v1) | C. Huang, Z. Wang, R. Han et al. | Generates dynamic, agent-aware environments that adapt to an agent's weaknesses, replacing hand-built static benchmarks. Enables continuous curriculum generation for agent training and evaluation. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Manifold Drift in Flow Preference Optimization: A Root Cause of Reward Hacking](http://arxiv.org/abs/2608.20011v1) | Y. Han, S. Liao, Y. Zhang et al. | Identifies that reward-driven flow matching updates drift off the pretrained data manifold without explicit constraints, causing reward hacking. Provides a mechanistic explanation and mitigation for a pervasive alignment failure mode. |
| [MaliciousSkillBench: A Comprehensive Benchmark for Malicious Agent Skill Detection](http://arxiv.org/abs/2608.19901v1) | Y. Wang, Y. Liu, G. Deng et al. | Consolidates fragmented malicious skill datasets into a unified benchmark with standardized formats and evidence requirements. Addresses a critical safety gap in the agent skill distribution supply chain. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [InsufficiencyBench: Evaluating LLM legal advice on underspecified user queries](http://arxiv.org/abs/2608.20220v1) | S. Vincent, D. Calloway, F. Yu et al. | First benchmark targeting query-side insufficiency in legal QA — where users omit material facts. Shifts evaluation from "answer correctness" to "appropriate clarification behavior," mirroring real deployment needs. |
| [ContractScrub: A benchmark for final review of legal contracts](http://arxiv.org/abs/2608.20204v1) | Y. Bang, K. Fielding, B. Oliver et al. | Creates a benchmark for the "contract scrubbing" task — final review of transactional agreements for errors and inconsistencies. Targets a high-value, well-scoped legal automation task with clear ground truth. |
| [Bringing analytic rigor to agentic AI for science: The Brain Researcher platform for neuroimaging data analysis](http://arxiv.org/abs/2608.19902v1) | Z. Chen, N. Lu, X. Li et al. | Builds an agentic platform that enforces analytic rigor (alternative weighing, evidence-limited claims) in neuroimaging analysis, countering selective analysis and premature success declarations. A template for trustworthy scientific agents. |
| [A knowledge-guided agentic framework for mitigating patient-context ambiguity in health queries](http://arxiv.org/abs/2608.19875v1) | M. Abbasian, S. Farahani, A. Ilaty et al. | Deploys an agent that actively resolves patient-context ambiguity in underspecified health queries using knowledge-guided reasoning, rather than guessing. Addresses a critical safety issue in healthcare AI deployment. |

---

## Research Trend Signal

Three convergent directions dominate this batch. **First, adaptive compute allocation** has moved from theory to practice: Paper 1's "learning when to think," Paper 22's MoE hyperparameter transfer, and Paper 29's manifold-drift analysis all tackle the same meta-problem — how to spend FLOPs where they matter — whether at inference, training, or alignment time. **Second, the agent infrastructure stack is hardening**: skill selection with provable guarantees (Paper 31), dynamic environment generation (Paper 48), malicious skill detection (Paper 41), and VLM-guided policy exploration (Paper 43) together form a nascent "MLOps for agents" layer. **Third, evaluation is shifting from static correctness to behavioral robustness**: InsufficiencyBench (Paper 6), ContractScrub (Paper 9), ReguSim (Paper 32), MemTrapBench (Paper 10), and TESTNAV (Paper 47) all measure how systems handle underspecification, memory traps, regulatory grounding, and compositional corruptions — failure modes that only appear in deployment. The legal domain is serving as a leading indicator: its high-stakes, text-heavy, underspecified nature makes it a stress test for capabilities that will soon be required everywhere.

---

## Worth Deep Reading

1. **[Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1)** — The most direct attack on the fixed-budget reasoning bottleneck; if the approach generalizes, it changes how we deploy and scale reasoning models.

2. **[Manifold Drift in Flow Preference Optimization: A Root Cause of Reward Hacking](http://arxiv.org/abs/2608.20011v1)** — Provides a mechanistic, geometrically grounded explanation for a pervasive alignment failure; the proposed constraint is simple enough to adopt widely.

3. **[The Third Restructuring of Software Form](http://arxiv.org/abs/2608.20201v1)** — A rare architectural manifesto that reframes the entire software stack around agents; worth reading to calibrate where tooling, runtimes, and developer workflows are headed.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*