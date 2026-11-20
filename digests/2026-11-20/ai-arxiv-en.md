# ArXiv AI Research Digest 2026-11-20

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-20 06:52 UTC

---

# ArXiv AI Research Digest
**2026-11-20**

---

## Today's Highlights

Today's arXiv batch reveals a maturation of AI systems toward specialized efficiency and robustness. A dominant theme is the optimization of inference and training pipelines: from *TideCache*’s hybrid LLM serving breakthroughs to *Cost-Aware Agentic Feature Optimization*’s fleet-scale ranking improvements. Simultaneously, there is a surge in multimodal deployment, with *AURA* targeting streaming avatar latency and *Depth Pro 2* pushing real-time metric depth estimation. Finally, safety and reliability remain paramount, highlighted by *Verify the Verifier*’s approach to specification-grounded bug detection and *SoK*’s comprehensive assessment of LLM vulnerability research capabilities.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A CPU Inside an LLM: Zero-Gradient Compilation of Exact Circuits into Pretrained Weights](http://arxiv.org/abs/2611.26450v1) | Tanmay Sah et al. | Introduces zero-gradient circuit-grafting primitives that compile deterministic computation directly into frozen LLM weights, eliminating the need for gradient fine-tuning to achieve exact multi-digit arithmetic. This matters because it offers a lightweight, zero-training pathway to enhance LLM reliability on symbolic tasks. |
| [SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research](http://arxiv.org/abs/2611.26601v1) | Amine Lbath et al. | Provides a comprehensive systematization of knowledge on how LLM-based agents are transforming software vulnerability discovery, validation, and patching. It matters because it maps a rapidly evolving field, identifying gaps between reported capabilities and rigorous evaluation standards. |
| [One Prior, Two Dynamics: Repurposing Video Diffusion Transformers for Self-Supervised Latent Action Learning](http://arxiv.org/abs/2611.26617v1) | Yuxin Jiang et al. | Explores using pretrained video diffusion models as priors for learning latent action dynamics, significantly reducing the need to learn dynamics from scratch. It matters because it bridges the gap between generative vision models and robotic/agent learning, offering a data-efficient route to action recovery. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1) | Yiyang Du et al. | Addresses the limitation of episode-level success rates by proposing a fine-grained benchmark for frontier multimodal agents controlling robots via low-level actions. It matters because it provides the detailed diagnostics needed to advance reliable real-world robot manipulation. |
| [PlayCraft: Designing Engaging Games from Agent Play Experience](http://arxiv.org/abs/2611.26624v1) | Weihao Cheng | Proposes an automated framework using vision-based agents to play games and derive design principles for engagement, specifically targeting mastery-driven game design. It matters because it automates the iterative game design loop, potentially lowering the barrier to creating compelling AI-synthesized entertainment. |
| [Replication of Agentic Security Events: Audit and Investigation (ROGUE-AI)](http://arxiv.org/abs/2611.26553v1) | Mengxiao Wang et al. | Focuses on backtracking agent security incidents to identify compromise entry points and prevent recurrence, a critical issue as agents gain file and payment access. It matters because it tackles the forensic challenges of deploying autonomous agents in safety-critical environments. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming](http://arxiv.org/abs/2611.26619v1) | Jinbin Luo et al. | Presents a serving system for hybrid CPU--GPU language models featuring transparent cache management and layer-wise streaming to handle heterogeneous cache demands. It matters because it directly addresses the scalability bottlenecks of deploying increasingly long-context open-weight models. |
| [Cost-Aware Agentic Feature Optimization System for Fleet-Scale Ranking Models](http://arxiv.org/abs/2611.26531v1) | Chang Yang et al. | Proposes an end-to-end agentic system that optimizes feature selection across large fleets of ranking models under shared and per-model resource constraints. It matters because it operationalizes efficient feature management at the scale of modern web platforms, balancing performance and cost. |
| [Active Feature Acquisition by Distilling an Oracle Teacher](http://arxiv.org/abs/2611.26598v1) | Yang Meng et al. | Formulates Active Feature Acquisition (AFA) as learning a policy to decide which features to acquire per instance under a budget, trained by distilling an oracle teacher. It matters because it provides a general framework for cost-sensitive inference, applicable beyond vision to any domain with expensive feature measurement. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth](http://arxiv.org/abs/2611.26603v1) | Peiyun Hu et al. | Introduces a monocular depth estimation approach achieving full-resolution, metric depth with sharp boundaries and temporal consistency for video. It matters because it resolves the common trade-off between sharpness and consistency, pushing forward real-time AR and autonomous driving perception. |
| [AURA: AUudio-dRiven streaming Avatar](http://arxiv.org/abs/2611.26540v1) | Nathaniel Cohen et al. | Proposes a system for low-latency, audio-driven avatar streaming that moves beyond multi-second diffusion chunks to real-time applications. It matters because it solves the latency barrier currently preventing audio-driven avatars from being used in interactive voice assistants. |
| [MM-SystemOneBias: Evaluating Bias in Multimodal Jev-Style System One Decision Models](http://arxiv.org/abs/2611.26557v1) | Jinzhe Li et al. | Evaluates bias preservation in multimodal decision models across presentation changes, focusing on task-relevant vs. confounding information. It matters because it provides a much-needed framework for assessing reliability when these models moderate content or make quality judgments. |

---

## Research Trend Signal

The November 20th arXiv snapshot underscores a pivotal shift from “bigger is better” toward “smarter and leaner.” A pronounced efficiency imperative is evident across training and inference: *TideCache* and *Cost-Aware Agentic Feature Optimization* reveal that the community is actively solving the scalability and cost crunch associated with deploying massive models. Concurrently, there is a strong focus on robustness and reliability, with works like *Verify the Verifier* and *AgentRoboCritic* moving beyond aggregate success metrics to diagnose specific failure modes and specification violations. Finally, the integration of vision and language continues to refine its safety and utility, as seen in *AURA*’s streaming breakthroughs and *MM-SystemOneBias*’s scrutiny of multimodal decision fidelity, suggesting that the next frontier of AI research is as much about architectural discipline and safety engineering as it is about capability scaling.

---

## Worth Deep Reading

1.  **TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming**
    *   **Why:** It offers a practical, systems-level solution to one of the most pressing deployment bottlenecks for open-weight LLMs. By introducing layer-wise streaming and transparent cache management on CPU--GPU superchips, it directly enables the feasible deployment of long-context models at scale, making it essential reading for anyone building production LLM serving infrastructure.

2.  **One Prior, Two Dynamics: Repurposing Video Diffusion Transformers for Self-Supervised Latent Action Learning**
    *   **Why:** It presents a clever and data-efficient paradigm shift—using the strong prior of a pretrained video generator to learn world dynamics. This approach could significantly accelerate robotic and agent learning by reducing the reliance on expensive, from-scratch dynamics modeling, representing a key bridge between generative AI and embodied intelligence.

3.  **SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research**
    *   **Why:** As LLM agents become increasingly integrated into software development lifecycles, understanding their actual capabilities and limitations regarding security is critical. This systematic review provides the much-needed meta-analysis to ground expectations and guide future research and auditing efforts in this high-stakes domain.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*