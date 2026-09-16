# ArXiv AI Research Digest 2026-09-16

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-16 04:29 UTC

---

# ArXiv AI Research Digest — 2026-09-16

## Today's Highlights

Today's submissions reveal a maturing field grappling with **deployment-scale challenges**: multi-agent coordination across trust boundaries, verifiable reproducibility of training runs, and practical efficiency for long-context inference on consumer hardware. A cluster of papers tackles **safety and calibration**—selective abstention, conformal guarantees, and teacher-bias mitigation in distillation—moving beyond average-case metrics to distribution-free assurances. Simultaneously, **scientific AI agents** are advancing from demo to infrastructure, with recursive self-improvement loops and verified autonomy in quantum engineering. Notably, the SWE-bench leaderboard has saturated, prompting a methodological audit of what coding-agent benchmarks actually measure.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control](http://arxiv.org/abs/2609.17516v1) | Ali Şenol | Introduces CoSQ, a prompt-only framework that conditions answer commitment on an explicit self-questioning assessment of required information. Provides a lightweight, training-free mechanism for selective risk control without external verifiers. |
| [JustFit: 200K-Token LLM Serving on a 24 GiB Laptop with Just-in-Time State Management](http://arxiv.org/abs/2609.17475v1) | Yuhua Chen | Presents an MLX-based runtime combining compressed KV execution, component residency swapping, and state-preserving transitions to serve 200K-context models on a single 24 GB GPU—making long-context local inference practical. |
| [Coupled Calibration and Learning: Mitigating Teacher Bias in LLM Distillation without Target-Domain Reward Feedback](http://arxiv.org/abs/2609.17474v1) | Haichen Hu, Yuheng Zhang, David Simchi-Levi et al. | Proposes a coupled calibration-distillation framework that corrects systematic teacher bias under covariate shift without requiring target-domain reward signals, improving student reliability in distribution-shifted settings. |
| [OPEN-1B: A Fully Auditable Training Run](http://arxiv.org/abs/2609.17380v1) | John Donaghy, Brian Wilcox, Oğuzhan Ersoy et al. | Delivers the first provably reproducible 1B-parameter training run by addressing floating-point non-associativity through deterministic execution modes and a fully audited artifact pipeline—setting a new standard for open science. |
| [Persistent Recurrent Memory Between Transformer Layers - Improves Language Model Generalization](http://arxiv.org/abs/2609.17251v1) | Eduardo Novaes Hering | Inserts a GRU-based persistent recurrent state between transformer halves, enabling cross-layer information flow that improves generalization on language modeling benchmarks with minimal parameter overhead. |
| [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1) | Ziyang Ma, Zihong Zhang, Zuchao Li et al. | Proposes a dual-loop speculative decoding framework that leverages early-layer draft candidates and hierarchical verification to reduce stale drafts and verification cost, accelerating draft-model-free inference. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Agentic Societies Need a Social Harness](http://arxiv.org/abs/2609.17527v1) | Tapan Chugh, Vidushi Singh, Krish Jain et al. | Defines "agentic societies" as autonomous agents coordinating across trust boundaries with partially aligned objectives. Shows experimentally that even honest, competent agents fail to reach satisfactory outcomes without explicit social coordination mechanisms. |
| [ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](http://arxiv.org/abs/2609.17523v1) | Shuhan Xue, Jianyuan Zhong, Ziyuan Nan et al. | Releases ScienceBuddy, an interactive research workspace where agents continually improve by transforming researcher requests, feedback, and execution traces into self-improvement data—closing the loop between human-in-the-loop use and agent evolution. |
| [Mo' Models, Mo' Problems: How to best select model pools when designing Multi-Agent Systems](http://arxiv.org/abs/2609.17306v1) | Sara Vera Marjanović, Jiacheng Xu, Aleksandr Laptev et al. | Systematically evaluates 8 model selection strategies for multi-agent systems across diverse reasoning tasks, finding that diversity-aware selection outperforms pure performance-based pooling, with implications for cost-effective MAS design. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Coding Agents Have Converged: Why the SWE-bench Leaderboard Can No Longer Order Its Top Entries, and What to Measure Instead](http://arxiv.org/abs/2609.17394v1) | Fengshuo Liu, Ying Liu, Ruize Sun et al. | Audits 254 SWE-bench submissions and demonstrates that top entries are statistically indistinguishable. Argues for replacing point estimates with confidence intervals, pairwise comparisons, and capability profiles to restore meaningful evaluation. |
| [ECHO: A Matched-Contrast Benchmark for Context-Sensitive Turn-Taking in Full-Duplex Dialogue](http://arxiv.org/abs/2609.17360v1) | Shuofeng Zhao, Hongwei Cai, Wenke Fan et al. | Introduces ECHO, a benchmark that pairs matched-contrast scenarios to evaluate context-sensitive turn-taking decisions (yield vs. continue) in full-duplex dialogue, exposing fixed-preference biases in current models. |
| [Conformal Policy Learning with Distribution-Free Safety Guarantees](http://arxiv.org/abs/2609.17296v1) | Ying Jin, Naoki Egami | Develops a conformal prediction framework for policy learning that provides finite-sample, distribution-free safety guarantees for individual treatment decisions—critical for high-stakes medical and policy applications. |
| [Personalized Federated Learning through Global Knowledge Distillation and Local Head Adaptation](http://arxiv.org/abs/2609.17284v1) | Polycarpo Souza Neto, José Mairton Barros da Silva Júnior, Charles Casimiro Cavalcante | Proposes pFedKDH, which aggregates only a shared backbone globally while keeping persistent local heads, enabling personalization under statistical heterogeneity without communicating client-specific parameters. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Evaluating Verified Autonomy in Quantum Engineering](http://arxiv.org/abs/2609.17439v1) | Naixu Guo, Changhao Li, Siyu Cheng et al. | Establishes a framework for verifying AI agent autonomy in quantum device characterization and operation, combining formal verification with experimental validation on superconducting quantum processors. |
| [Enhancing Accessibility of Medical Texts through Large Language Model-Driven Plain Language Adaptation](http://arxiv.org/abs/2609.17398v1) | Ting-Wei Chang, Hen-Hsen Huang, Hsin-Hsi Chen | Develops a PLA pipeline that simplifies medical jargon while preserving clinical accuracy, evaluated against patient comprehension metrics—demonstrating measurable improvement in accessibility for low-health-literacy populations. |

---

## Research Trend Signal

Three convergent directions are crystallizing. First, **agentic infrastructure** is shifting from single-agent prowess to *societal* concerns: coordination under partial alignment (Paper 1), recursive self-improvement in human-in-the-loop workflows (Paper 2), and governance of viral skill ecosystems (Paper 47). This mirrors the historical trajectory from standalone services to platform governance. Second, **verifiability** is becoming a first-class requirement across the stack: auditable training runs (Paper 28), conformal safety certificates for policies (Paper 43), verifiable social reasoning (Paper 8), and verified autonomy in physical systems (Paper 19). The reproducibility crisis is being addressed not with transparency pledges but with cryptographic-grade determinism. Third, **efficiency is specializing**—from generic quantization to *context-aware* runtime systems (Paper 14), *hierarchical* speculative decoding (Paper 50), and *agent-driven* serving-stack optimization (Paper 26). The next wave of benchmark saturation (Paper 25) will likely force evaluation toward *capability profiling* and *pairwise reliability* over scalar leaderboards.

---

## Worth Deep Reading

1. **[Agentic Societies Need a Social Harness](http://arxiv.org/abs/2609.17527v1)** — *Foundational framing.* This paper names and formalizes the next major deployment paradigm: heterogeneous agents operating across trust boundaries with misaligned principals. The experimental demonstration that competence and honesty are insufficient without explicit coordination mechanisms will likely catalyze a subfield of "agentic mechanism design."

2. **[OPEN-1B: A Fully Auditable Training Run](http://arxiv.org/abs/2609.17380v1)** — *Infrastructural breakthrough.* By achieving bitwise reproducibility for a 1B-parameter run—addressing floating-point non-associativity, framework nondeterminism, and artifact provenance—this work establishes the methodological floor for trustworthy open-source AI. The auditing protocol itself is a template for future model releases.

3. **[When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control](http://arxiv.org/abs/2609.17516v1)** — *Practical safety primitive.* CoSQ provides a zero-training, prompt-only abstention mechanism grounded in explicit epistemic self-assessment. Unlike confidence-thresholding, it surfaces *why* the model lacks support, enabling both safer deployment and interpretable failure analysis. Its simplicity makes it immediately adoptable.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*