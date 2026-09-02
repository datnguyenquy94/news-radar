# ArXiv AI Research Digest 2026-09-02

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-02 04:06 UTC

---

# ArXiv AI Research Digest — 2026-09-02

## Today's Highlights

Today's submissions reveal a field increasingly focused on **operationalizing LLMs as reliable, efficient agents** rather than merely scaling model size. Three convergent directions stand out: (1) **mechanistic understanding of evaluation and alignment** — papers like *Beyond Scores* and *When Safety Routing Breaks* expose fragile internals of LLM judges and refusal mechanisms; (2) **agent infrastructure and lifelong autonomy** — *Harness-of-Harness*, *CordisBench*, and *TRIAGE* treat the agent harness, lifecycle reasoning, and routing as first-class research objects; (3) **data-efficient post-training** — *Scaling SFT-RL Budget Allocation*, *Knowledge Distillation at Mid-Training*, and *LatentPress* compress context and annotation cost without sacrificing reasoning. Together, these signal a maturation from "model-centric" to "system-centric" AI research.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Beyond Scores: Understanding LLM-as-a-Judge Mechanisms in Summarization Evaluation](http://arxiv.org/abs/2609.01604v1) | Himil Vasava, Ming Jiang et al. | Dissects how LLM judges assign ratings via eight perturbation attacks, revealing that judges rely on surface heuristics rather than deep semantic understanding. Critical for trusting automated evaluation pipelines. |
| [The Structure of Quantization Damage in LLMs: Why the Next Bit Should Be Spent Globally](http://arxiv.org/abs/2609.01587v1) | Jundong Hu, Shekar Ramachandran et al. | Uses causal mixed-precision analysis to map where quantization error accumulates, showing that global bit allocation outperforms per-layer tuning. Directly informs efficient LLM deployment. |
| [Scaling Near-Optimal SFT-RL Annotation Budget Allocation from Small to Large LLMs](http://arxiv.org/abs/2609.01573v1) | Jingtan Wang, Arun Verma, Xiaoqiang Lin et al. | Derives a principled framework for splitting annotation budgets between SFT and RL that scales predictably across model sizes. Solves a major practical bottleneck in post-training. |
| [When Safety Routing Breaks: Understanding Alignment Fragility under Benign Fine-Tuning](http://arxiv.org/abs/2609.01455v1) | Yitong Guo, Xiaoyi Chen, Siyuan Zhang et al. | Proposes a Fisher-geometric explanation for why refusal behavior collapses during fine-tuning: safety directions are low-rank and easily overwritten. Reframes alignment robustness as a subspace problem. |
| [Knowledge Distillation During Mid-Training Favors Reasoning over Factual Recall](http://arxiv.org/abs/2609.01532v1) | Jacqueline He, Howard Yen, Shuyue Stella Li et al. | Shows forward KL distillation at mid-training selectively boosts reasoning while leaving factual recall unchanged, contrary to late-stage distillation. Guides curriculum design for student models. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?](http://arxiv.org/abs/2609.01600v1) | Damien Sileo, Dimitri Kachler et al. | Introduces a 1,200-question benchmark for lifecycle reasoning in self-modifying agent harnesses, where local plugin changes propagate through dependencies. First benchmark targeting this critical failure mode. |
| [The Rise of Verbal Reinforcement Learning](http://arxiv.org/abs/2609.01597v1) | Kshitij Tayal, Arun Sharma, Genta Indra Winata et al. | Formalizes Verbal Reinforcement Learning (VRL) — using natural language as reward signal — and provides a unified framework. Opens a human-interpretable feedback channel for agent alignment. |
| [EvoSCM: Scientific Belief Revision Through Causal Model Evolution and Experimentation](http://arxiv.org/abs/2609.01526v1) | Qing Zhao, Haowei Li, Weijian Deng et al. | Equips scientific agents with explicit, revisable causal models instead of implicit text hypotheses, enabling structured belief updates via experimentation. Advances AI for Science beyond free-form reasoning. |
| [GlossoGen: Emergent Language in Complex Multi-Agent LLM Interactions](http://arxiv.org/abs/2609.01491v1) | Elias Stengel-Eskin, Newton Sander, Carlos Bonetti et al. | Presents a platform for studying language evolution among interacting LLM agents, with implications for safety monitoring and linguistic theory. First systematic environment for multi-LLM language drift. |
| [Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement](http://arxiv.org/abs/2609.01481v1) | Haoyang Yan, Min-le Su, Hangfan Zhang et al. | Demonstrates coding agents that autonomously develop software over days, continually improving their own harness. Pushes autonomous SE from single-task to lifelong, self-improving workflows. |
| [TRIAGE: Three-level Routing and Intelligent Agent Guidance for Efficient Execution](http://arxiv.org/abs/2609.01428v1) | Ruocan Wei et al. | Replaces ReAct's per-query full reasoning loops with a three-level router that reuses prior trajectories, cutting latency for repeated queries. Addresses the core efficiency pathology of current agent loops. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Efficient SWE Agent Benchmarking via Trajectory-Aware Evaluation](http://arxiv.org/abs/2609.01603v1) | Kefeng Duan, Dewu Zheng, Yanlin Wang et al. | Proposes trajectory-aware subset selection for SWE benchmarks, estimating full-benchmark performance from partial runs by modeling multi-step execution paths. Cuts evaluation cost dramatically. |
| [Selective Agent Guidance via Entropy: Learning Autonomous Policies from Imperfect VLM Teachers](http://arxiv.org/abs/2609.01567v1) | Matteo Merler, Giovanni Bonetta, Davide Zago et al. | Uses teacher entropy to filter unreliable VLM guidance, enabling a cheap student policy to learn from noisy demonstrations without replicating systematic errors. Practical distillation for embodied agents. |
| [LatentPress: Context Compression Beyond Text and Vision](http://arxiv.org/abs/2609.01507v1) | Zhengze Zhou, Hejian Sang et al. | Compresses conversation history into continuous memory tokens consumed directly by a frozen LLM, bypassing text/image decoding. Achieves 10× compression with minimal quality loss. |
| [Diffusion as a Training Curriculum for Timestep-Free Iterative Reasoning](http://arxiv.org/abs/2609.01449v1) | Mariia Drozdova, Aidan Sirbu, Pietro Miotti et al. | Removes timestep conditioning from diffusion denoisers and adds persistent hidden state, yielding a timestep-free recursive reasoner. Unifies diffusion and iterative reasoning architectures. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Facet-0: A Robotic Foundation Model for Contact-Rich Precise Manipulation](http://arxiv.org/abs/2609.01596v1) | Haoyuan Deng, Haichao Liu, Wenkai Guo et al. | Presents a robotic foundation model that predicts contact consequences for sub-millimeter assembly, unifying multimodal representation, dynamics, and control. Sets a new bar for precision manipulation. |
| [Closing Cost-Quality Gap in Document VLMs: Difficulty-Aware Data Curation and Quality-Adjusted Deployment Economics](http://arxiv.org/abs/2609.01575v1) | Maksim Evdokimov, Matvey Ivanov, Dmitrii Tsiupin et al. | Introduces difficulty-aware curation and deployment economics modeling to make open-source document VLMs cost-competitive with human operators in regulated industries. Bridges the last-mile deployment gap. |

---

## Research Trend Signal

The 2026-09-02 batch reveals **four emerging research vectors**. First, **agent infrastructure as a research discipline**: *Harness-of-Harness*, *CordisBench*, *HarnessDev*, and *TRIAGE* collectively treat the execution environment, lifecycle reasoning, self-evolving harnesses, and routing as objects of systematic study — moving beyond "prompt the model" to "engineer the agent system." Second, **mechanistic interpretability for trust-critical components**: *Beyond Scores* (judges), *When Safety Routing Breaks* (alignment), and *Structure of Quantization Damage* (compression) apply causal/geometric analysis to exposed failure modes, shifting evaluation from behavioral to structural. Third, **verbal and entropy-based supervision**: *Verbal RL* and *Selective Agent Guidance* replace scalar rewards with natural language feedback and uncertainty-aware distillation, enabling human-aligned, sample-efficient learning from imperfect teachers. Fourth, **deployment economics as a first-class constraint**: *Closing Cost-Quality Gap* and *Scaling SFT-RL Budget* explicitly model cost-quality tradeoffs and annotation allocation, signaling that production viability now drives architectural choices. Expect upcoming work to blend these: mechanistic analysis of agent harnesses, verbal RL for lifelong agents, and economics-aware model design.

---

## Worth Deep Reading

1. **[Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement](http://arxiv.org/abs/2609.01481v1)** — The most ambitious demonstration of **lifelong agent autonomy** to date. It reframes the agent harness as a mutable artifact the agent itself improves, closing the loop between code generation and infrastructure evolution. Essential for anyone building or evaluating autonomous SE agents.

2. **[When Safety Routing Breaks: Understanding Alignment Fragility under Benign Fine-Tuning](http://arxiv.org/abs/2609.01455v1)** — Provides a **geometric mechanism** (low-rank Fisher subspace) for alignment collapse, not just empirical observation. This reframing enables targeted defenses (e.g., subspace regularization) and connects to broader interpretability literature. A pivot point for alignment robustness research.

3. **[The Rise of Verbal Reinforcement Learning](http://arxiv.org/abs/2609.01597v1)** — **Formalizes a new paradigm** where natural language replaces scalar rewards. The unified framework (VRL) and taxonomy of verbal feedback types (intent, preference, causal explanation) will likely become the standard reference for language-based agent learning. High impact for alignment, human-AI interaction, and sample-efficient RL.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*