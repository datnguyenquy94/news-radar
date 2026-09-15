# ArXiv AI Research Digest 2026-09-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-15 04:34 UTC

---

# ArXiv AI Research Digest — 2026-09-15

## Today's Highlights

Today's submissions reveal a pronounced shift toward **operationalizing LLM agents in high-stakes, long-horizon settings** while simultaneously hardening them against emerging threat vectors. Safety research has moved beyond static alignment to **dynamic monitoring evasion** (CoT injection) and **coalitional control** of misaligned agents. A new wave of **clinically calibrated benchmarks** (K-Bench, KnowBench, ModaLens) signals maturation of medical AI evaluation beyond accuracy metrics. Meanwhile, **cloud-edge collaborative LLM frameworks** (CIDERS) and **federated long-tail learning** (FedLTLib) address the deployment reality of heterogeneous, privacy-sensitive environments. The convergence of agentic search with scientific discovery (Stellar Colosseum, AlgoEvo) marks a transition from code generation to autonomous research workflows.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection](http://arxiv.org/abs/2609.15989v1) | Chidambaram K., Ilyas A., Syrgkanis V. | Demonstrates that harmful reasoning can be embedded in CoT traces while appearing benign to monitors, exposing a critical vulnerability in CoT-based safety architectures. Matters because it shows current monitoring paradigms can be systematically evaded without triggering detection. |
| [The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1) | Chen R., Wang X., Chen Y. et al. | Shows that frozen LLMs can natively route to skills without external retrieval pipelines, by eliciting implicit routing capabilities through prompt engineering. Matters because it eliminates the context overhead of preloading all skill metadata, enabling arbitrarily large skill libraries. |
| [Per-Matrix Optimality Is Not Enough: Three-Level Optimization for Low-Rank LLM Compression](http://arxiv.org/abs/2609.15838v1) | Zhang H., Feng X., Li Z.-T. et al. | Proves that independent per-matrix SVD truncation compounds errors through nonlinear forward passes; introduces a three-level hierarchical optimization inspired by quantum many-body methods. Matters because it achieves superior compression-quality trade-offs for deployment-constrained LLMs. |
| [Look Before You Leap: Factual Decoding with Internal Attribution Signals](http://arxiv.org/abs/2609.15745v1) | Ryu H., Yun J., Lim B. et al. | Introduces DescaPE, a decoding-time intervention that uses internal attribution signals to suppress hallucination before it compounds autoregressively. Matters because it prevents error snowballing at generation time rather than relying on post-hoc correction. |
| [Predictive Likelihood Ratios for Language Model Watermark Detection](http://arxiv.org/abs/2609.15657v1) | Ma L. | Constructs predictive likelihood ratios that average over uncertain probability deficits for watermark detection, improving statistical power under keyed watermarking schemes. Matters because it provides a more robust detection framework for provenance and misuse attribution. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1) | Lin H., Woodruff D.P., Deng Y. et al. | Introduces a model-agnostic harness that allocates inference across multiple agents for long-horizon math/TCS research, where progress depends on sequences of uncertain, interdependent decisions. Matters because it moves beyond single-proof generation to sustained research trajectories with verifiable intermediate milestones. |
| [AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery](http://arxiv.org/abs/2609.15820v1) | Qiu J., Hu Q., Tong X. et al. | Replaces rigid search pipelines with self-evolving agentic control flows that adapt reasoning, enable cross-paradigm transfer, and retain execution feedback for algorithm discovery. Matters because it transforms LLM-based algorithm design from static synthesis to open-ended evolutionary search. |
| [Delegating Authorization to Misaligned Agents: Coalitional Alignment and Safe Control](http://arxiv.org/abs/2609.15803v1) | Collina N., Goel S., Roth A. et al. | Formulates a coalitional game where human principals approve consequential actions of misaligned agents, proving conditions under which safety guarantees hold despite persistent misalignment. Matters because it provides a theoretical foundation for practical oversight of long-running autonomous agents. |
| [K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations](http://arxiv.org/abs/2609.15855v1) | Vowels L.M., Vowels M.J., Sharma S. et al. | Presents a clinician-calibrated benchmark of 125 model configurations tested on evolving, high-risk mental health dialogues with protected evaluation methodology. Matters because it establishes the first safety standard for LLMs deployed in clinical conversation contexts. |
| [Before You Poll with LLMs: A Deliberative Diagnostic Framework](http://arxiv.org/abs/2609.15849v1) | Wali A., Tayyab H. | Proposes a diagnostic framework to test whether LLM personas genuinely reason through new information or merely retrieve cached opinions, critical for silicon sampling validity. Matters because it exposes a fundamental gap in current LLM-as-human-simulator evaluations. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering](http://arxiv.org/abs/2609.15830v1) | Barua S., Hong G., Dursunoglu H. et al. | Builds a validation-centered RAG system that verifies grounding, citation validity, and appropriate refusal — moving beyond retrieval to evidence accountability. Matters because it addresses the critical gap where retrieved evidence does not guarantee grounded answers. |
| [CIDERS: Cloud-Edge LLM Collaborative Learning via Accelerating Personalized Bilevel Optimization](http://arxiv.org/abs/2609.15664v1) | Chen V.H., Yu H., Chung S.K. et al. | Solves the global-consensus vs. local-personalization tension in cloud-edge LLM deployment via accelerated bilevel optimization. Matters because it enables practical personalized LLM serving across heterogeneous edge devices with cloud coordination. |
| [FedLTLib: A Comprehensive Benchmark for Federated Long-Tail Learning](http://arxiv.org/abs/2609.15625v1) | Lin C., Wang J. | Provides the first systematic benchmark for federated learning under realistic long-tailed, heterogeneous label distributions across clients. Matters because it exposes the inadequacy of current FL methods on real-world skewed data and establishes a standardized evaluation suite. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ModaLens: Measuring Image Sensitivity in Report-Conditioned Medical VLMs](http://arxiv.org/abs/2609.15635v1) | Cajas Ordóñez S.A., Lange M., Bui Q. et al. | Introduces a paired image-swap audit to quantify how radiology report availability changes a VLM's actual image usage, tested on 3,199 MIMIC-CXR cases. Matters because it reveals whether medical VLMs genuinely integrate visual evidence or merely parrot report text. |
| [NoteVQA: Benchmarking VLMs on Real-Life Questions from Human Communities](http://arxiv.org/abs/2609.15695v1) | Jiang H., Zhan G., Xie J. et al. | Creates a benchmark of photo-grounded questions sourced from real user communities, capturing the diversity of everyday visual queries that predefined benchmarks miss. Matters because it aligns VLM evaluation with actual consumer use cases rather than curated capabilities. |
| [SlipSense: Multimodal Tactile Learning for Low-Latency and Generalized Slip Detection](http://arxiv.org/abs/2609.15910v1) | Jian T., Kumar A.T.S., Li X. et al. | Presents a multimodal tactile slip-detection framework on a compact 32×32 sensor array achieving low-latency, cross-platform generalization for dexterous manipulation. Matters because it closes the sim-to-real gap in tactile sensing for robotic manipulation under varying contact conditions. |

---

## Research Trend Signal

Three convergent directions dominate this batch. **First, agent safety has entered its "dynamic control" phase**: papers on CoT monitoring evasion, coalitional authorization, and deliberative diagnostics collectively argue that static alignment is insufficient for long-horizon agents — the field is building runtime governance primitives (approval workflows, attribution signals, coalitional game-theoretic controls). **Second, evaluation is becoming domain-grounded and effort-aware**: K-Bench, KnowBench, ModaLens, NoteVQA, and FedLTLib replace generic accuracy with metrics tied to clinical risk, clinician effort reduction, image sensitivity, real-user question distributions, and label skew — signaling that deployment readiness now requires domain-specific validation infrastructure. **Third, cloud-edge LLM collaboration is maturing beyond federation**: CIDERS and The Router Within show a pivot from "train globally, infer locally" to "route dynamically, personalize continuously" via bilevel optimization and native skill routing, addressing the practical tension between model unity and device heterogeneity. Together, these trends indicate a field moving from capability demonstration to **operational robustness in open, heterogeneous, high-stakes environments**.

---

## Worth Deep Reading

1. **[Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection](http://arxiv.org/abs/2609.15989v1)** — This is the most consequential safety paper in the batch. It doesn't just find a bug; it demonstrates a *class* of attacks where harmful intent is encoded in reasoning that *passes* the monitor's benign-check. Anyone building or relying on CoT monitoring must understand this threat model.

2. **[Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1)** — Rare work that treats multi-agent systems as a *research methodology* rather than a chatbot architecture. The harness design (model-agnostic, inference allocation, milestone verification) is a template for how autonomous scientific discovery could be structured and evaluated.

3. **[ModaLens: Measuring Image Sensitivity in Report-Conditioned Medical VLMs](http://arxiv.org/abs/2609.15635v1)** — Methodologically exemplary: a simple, scalable audit (paired image-swap) that answers a question everyone assumes but no one measures — "does the model actually look at the image?" The finding that report availability *reduces* image sensitivity in a 27B model is a warning for all multimodal medical AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*