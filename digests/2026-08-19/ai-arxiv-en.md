# ArXiv AI Research Digest 2026-08-19

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-19 01:42 UTC

---

# ArXiv AI Research Digest — 2026-08-19

## Today's Highlights

Today's submissions reveal a strong convergence on **grounding and reliability** for foundation models in open-ended, long-horizon settings. Multiple papers tackle the "compounding error" problem in embodied agents through neurosymbolic decomposition, transition-aware memory, and hierarchical action flow. On the LLM side, two distinct vulnerability classes emerge: **model hypnosis** (systematic control via weak subliminal cues) and **query dominance** in RAG, each met with new diagnostics and mitigation frameworks. Benchmarks are maturing beyond scalar metrics—CaliBench and TRACE-Bench introduce fine-grained, physics-aware and compositional evaluation for world models and multi-reference generation. Finally, automated scientific discovery (AutoSR) and test-driven code agents (TDD-Agent) signal a shift toward *self-improving* research and engineering pipelines.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Proteus: Incremental Memory Activation for Long-Context Sequence Modeling](http://arxiv.org/abs/2608.16844v1) | Bayat R., Behrouz A., Mirrokni V. et al. | Introduces a memory-based architecture that *incrementally* activates compressed context rather than exposing a static memory, enabling efficient long-context modeling without quadratic attention. Matters because it directly addresses the context-window bottleneck in production LLM deployments. |
| [Model Hypnosis: Strong control of AI via additive subliminal effects](http://arxiv.org/abs/2608.16834v1) | Boix-Adsera E., Tessler B. | Demonstrates that individually imperceptible prompt perturbations can be composed to reliably steer model behavior across families and scales, revealing a new class of adversarial vulnerability. Matters because it implies current alignment and guardrails may be bypassed by distributed, low-magnitude attacks. |
| [Le Critique: Privileged Value Functions for LLM Reinforcement Learning](http://arxiv.org/abs/2608.16739v1) | Venkatraman S., Dinot M., Aitchison L. | Proposes a critic with privileged information (ground-truth rewards) to provide dense, token-level credit assignment for LLM RL, overcoming the sparsity and variance of group-relative methods. Matters because it could make RLHF/RLHF-style post-training significantly more sample-efficient. |
| [Semantic Bandits: In-Context Exploration-Exploitation is Biased by Semantic Priors](http://arxiv.org/abs/2608.16707v1) | Austin D.E., Suleman K., Cheung J.C.K. | Shows LLM agents' exploration is systematically skewed by semantic priors rather than uncertainty, leading to suboptimal decision-making in novel environments. Matters because it exposes a fundamental mismatch between LLM-driven exploration and classical bandit optimality. |
| [Learning to Unlearn: Machine Unlearning via Learning the Unlearning Behaviors](http://arxiv.org/abs/2608.16700v1) | Zhang H., Zhang K., Ma Y. et al. | Frames unlearning as a learnable behavior, training a meta-unlearner to remove target data influence without retraining. Matters because it offers a scalable, amortized alternative to exact unlearning for large models under privacy regulations. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory](http://arxiv.org/abs/2608.16889v1) | Xu B., Shang Y., Ferrara E. | Decomposes long-horizon manipulation into agentic subtasks with a transition-aware memory that tracks pre/post conditions, preventing silent constraint propagation between stages. Matters because it directly addresses compounding errors that break multi-stage contact-rich tasks. |
| [Neurosymbolic Embodied Agents](http://arxiv.org/abs/2608.16794v1) | Albinhassan M., Feng Y., Russo A. et al. | Factors household tasks into symbolic task plans grounded by visual execution monitors, guaranteeing executability and correcting grounding errors online. Matters because it bridges LLM planning flexibility with formal executability guarantees for real-world deployment. |
| [When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding](http://arxiv.org/abs/2608.16801v1) | Destefanis G., Aste T. | Introduces quantitative metrics (communication entropy, role specialization, consensus latency) to measure coordination quality in multi-agent coding teams beyond task success. Matters because it enables principled optimization of agent team topologies and interaction protocols. |
| [TDD-Agent: Test-Driven Reasoning for Code Generation](http://arxiv.org/abs/2608.16742v1) | Yu H., Li K., Li J. et al. | Integrates test generation *during* implementation as a reasoning guide, using failing tests to iteratively refine code rather than post-hoc validation. Matters because it transforms tests from static checks into dynamic steering signals for complex repository-level tasks. |
| [Policy Iteration with Human Feedback: Bringing Post-Training RL to In-context Learning](http://arxiv.org/abs/2608.16831v1) | Nguyen M.-H., Shyr C. | Extends policy iteration to the in-context regime, using human feedback to update a context-conditioned policy without weight updates. Matters because it enables rapid, personalized adaptation of frozen LLMs at inference time. |
| [HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation via Hierarchical Action Flow and Spectral Latent RL](http://arxiv.org/abs/2608.16837v1) | Gu L., Hou C., Li M. et al. | Hierarchically decomposes humanoid control into locomotion/manipulation latents with spectral RL for coordination, adapting generalist VLAs to 50+ DoF whole-body tasks. Matters because it unlocks foundation models for high-dimensional humanoid embodiments. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AutoSR: Automatic Symbolic Regression by Searching Research States](http://arxiv.org/abs/2608.16876v1) | Zhang K., Sun Y., Ren X. et al. | Treats symbolic regression as a persistent research process—hypothesizing, experimenting, and refining over time—rather than single-equation fitting. Matters because it mimics scientific discovery, yielding more robust and interpretable expressions from noisy data. |
| [Q-based Variational Inverse Reinforcement Learning](http://arxiv.org/abs/2608.16888v1) | Bajgar O., Tisnikar P., Abate A. et al. | Derives a variational IRL objective using Q-functions, enabling scalable reward inference without adversarial training or density estimation. Matters because it simplifies and stabilizes reward learning for complex continuous-control tasks. |
| [GRIP: Grounded Reasoning via Information-Restricted Premises](http://arxiv.org/abs/2608.16776v1) | Teng L. | Mitigates "query dominance" in RAG by restricting premise information flow, forcing the generator to rely on retrieved evidence. Matters because it improves factual grounding without architectural changes or additional supervision. |
| [TRACE-Bench: Decomposing and Diagnosing Multi-Reference Image Generation](http://arxiv.org/abs/2608.16765v1) | Wang H., Ma C., Yi R. et al. | Decomposes multi-reference generation into atomic capabilities (subject consistency, style transfer, spatial reasoning) with fine-grained diagnostics. Matters because it replaces fragmented task-specific benchmarks with a composable, systematic evaluation framework. |
| [CaliBench: Are the Stochastic Dynamics of Video World Models Physically Calibrated?](http://arxiv.org/abs/2608.16829v1) | Sadeghi J., Seidenschwarz J., Allardice J. et al. | Benchmarks the *aleatoric uncertainty calibration* of video world models per physical phenomenon (e.g., fluid, rigid-body) rather than aggregate distributional metrics. Matters because it exposes whether models capture correct stochastic physics for planning and safety. |
| [UniDot: A Unified Network for Sequence Modeling and Feature Interaction in Large-scale Recommendation](http://arxiv.org/abs/2608.16797v1) | Lin R., Sun Y., Zhang J. et al. | Unifies sequential behavior modeling and multi-field feature interaction in a single architecture with dot-product attention, eliminating ensemble coupling. Matters because it simplifies production recommendation stacks while improving both accuracy and latency. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LAVA: Logic-Aware Validation and Augmentation Framework for Large-Scale Financial Document Auditing](http://arxiv.org/abs/2608.16763v1) | Shu R., Wang X., Wang I. et al. | Combines symbolic rule engines with LLM reasoning to validate heterogeneous financial documents (payroll, tax, loans) with audit-grade reproducibility. Matters because it addresses the "last mile" of deploying LLMs in regulated, high-stakes document processing. |
| [MIRROR: Multimodal Intelligent Radiology Reasoning and Observation Reporter](http://arxiv.org/abs/2608.16709v1) | Nagarajan V., Venkatapathy S. | Chains multi-label classification, grounded reasoning, and controllable report generation to prevent hallucinated clinical claims in radiology outputs. Matters because it separates detection, reasoning, and narration—critical for medical AI accountability. |
| [The Ethical Decision Head: Operationalizing Normative Ethics in Autonomous Vehicles via RLHF](http://arxiv.org/abs/2608.16710v1) | Mbrice T., Ali A., Mian S. et al. | Implements a dedicated ethical decision module trained via RLHF on moral dilemmas, integrating with AV planning stacks for Level 4/5 autonomy. Matters because it moves beyond abstract trolley problems to deployable, auditable ethical subsystems. |
| [zLend: A Dual-Scope Cash-Flow Reconstruction Framework for On-Chain Credit Underwriting](http://arxiv.org/abs/2608.16856v1) | Girish G.N., Sahoo A., SP A. et al. | Reconstructs daily wallet cash flows from public on-chain data using dual-scope (micro/macro) temporal modeling for DeFi credit scoring without off-chain identity. Matters because it enables permissionless underwriting in decentralized lending markets. |

---

## Research Trend Signal

Three convergent directions are visible in today's batch. **First, grounding at the system level**: multiple papers (BATON, Neurosymbolic Agents, HAF, GRIP, MIRROR, LAVA) move beyond "model-centric" fixes to *architectural* grounding—decomposing tasks, restricting information flow, chaining verifiable modules, and adding symbolic guards. This suggests the community treats hallucination and compounding error as *systems engineering* problems, not just model scaling issues. **Second, fine-grained, physics-aware evaluation**: CaliBench and TRACE-Bench replace aggregate metrics with phenomenon-level and capability-level diagnostics, signaling a maturation of generative evaluation toward *scientific rigor* and *deployability criteria*. **Third, self-improving pipelines**: AutoSR (research-state search), TDD-Agent (test-driven reasoning), and Policy Iteration with Human Feedback (in-context RL) all implement *iterative, feedback-driven improvement loops* inside the model or agent itself. Together, these trends point toward **reliable, auditable, self-correcting AI systems** that can be deployed in high-stakes, long-horizon, and regulated domains—robotics, medicine, finance, and autonomous vehicles—rather than chat-centric assistants.

---

## Worth Deep Reading

1. **[Don't Drop the BATON](http://arxiv.org/abs/2608.16889v1)** — The cleanest systems-level attack on compounding errors in long-horizon manipulation I've seen; the transition-aware memory design is directly transferable to any multi-stage agentic workflow (code, web, robotics).

2. **[Model Hypnosis](http://arxiv.org/abs/2608.16834v1)** — Reveals a fundamentally new attack surface (distributed subliminal control) that likely generalizes beyond prompts to any continuous input modality; the implications for alignment, watermarking, and safety evaluation are profound.

3. **[AutoSR](http://arxiv.org/abs/2608.16876v1)** — Reframing symbolic regression as a *persistent research process* rather than equation fitting is a conceptual leap; the architecture (hypothesis→experiment→refine loops) is a blueprint for automated scientific discovery agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*