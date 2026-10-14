# ArXiv AI Research Digest 2026-10-14

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-14 04:33 UTC

---

**ArXiv AI Research Digest – 2026‑10‑14**  

---

## Today’s Highlights
- Multilingual dense retrieval is shown to be **unstable across languages**, opening a new diagnostic signal for cross‑lingual retrievers.  
- A **log‑linear geometry** of language‑model logits has been uncovered, suggesting a universal structure that could simplify calibration and training.  
- Safety‑focused work on **LLM agents** (information‑flow guarantees, transactional guards, and self‑repairing terminal agents) indicates a rapid shift from post‑hoc alignment to **provable autonomy guarantees**.  
- Several papers expose **evaluation blind‑spots**—from watermark tampering to hidden biases in quantised models—highlighting the need for stronger robustness and audit tools.

---

## Key Papers  

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [The Geometry of Language Model Logits: Generic Structure and Learned Departures](http://arxiv.org/abs/2610.18520v1) | Narashiman, Venkatraman, Seshadri et al. | Shows that ordered vocab‑head logits follow a stable log‑linear law across models and tasks, with learned deviations encoding task‑specific knowledge. This insight may enable new calibration and regularisation techniques. |
| [Imprinting: Knowledge Distillation Can Shift Student Behavior](http://arxiv.org/abs/2610.18517v1) | Tang, Yen, et al. | Demonstrates that teacher responses imprint behavioral biases (e.g., politeness, risk‑aversion) onto distilled students, beyond pure performance gains. Highlights a hidden alignment risk in distillation pipelines. |
| [Do Factuality Methods Make LLMs More Factual? Reproducibility and Fair Comparison](http://arxiv.org/abs/2610.18415v1) | Amatya, Setty, Venktesh et al. | Systematically reproduces 12 recent factuality‑enhancement methods on a common benchmark, revealing modest gains and large variance across domains. Provides a baseline for future factuality research. |
| [Pin It on Anyone: Certified Targeted Displacement of Multi‑Bit LLM Watermarks Without the Key](http://arxiv.org/abs/2610.18359v1) | Batorski, Spurek, Swoboda et al. | Introduces a certified attack that can flip multi‑bit watermarks to any chosen payload without the secret key, exposing a serious weakness in current watermark schemes. Calls for cryptographically‑sound designs. |
| [Lightweight but Linguistically Fair? Quantisation Robustness across Bavarian, German, and English](http://arxiv.org/abs/2610.18343v1) | John, Hoffmann, Lendvai et al. | Evaluates post‑training quantisation on regional dialects, finding that some quantisation schemes disproportionately degrade Bavarian performance. Suggests fairness‑aware quantisation as a new research axis. |

### 🤖 Agents & Reasoning (planning, tool use, multi‑agent, chain‑of‑thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Towards Safe Autonomy for Computer Use](http://arxiv.org/abs/2610.18508v1) | Seip, Marković, Hein et al. | Proposes an information‑flow‑based runtime system that guarantees a LLM‑agent cannot exfiltrate data without explicit policy approval. Demonstrates mitigation of indirect prompt‑injection attacks. |
| [ReTerm: Recovery Training for Self‑Improving Terminal Agents](http://arxiv.org/abs/2610.18484v1) | Xie, Feng, Fu et al. | Introduces a self‑supervised “recovery” phase where terminal agents learn to recognise and fix execution errors, boosting success on long‑running coding tasks by 23 %. |
| [Teacher‑Guided Tool Learning for Small Language Models via Bidirectional KL Constraints](http://arxiv.org/abs/2610.18459v1) | Gao, Luo, Chen et al. | Uses a teacher model to generate KL‑regularised trajectories that teach small LMs when and how to invoke external tools, achieving tool‑use competence comparable to 10× larger models. |
| [Kairos: Transactional Security Enforcement at the System Boundary for LLM Agents](http://arxiv.org/abs/2610.18457v1) | Hempel, Loose, Cavallaro et al. | Presents a lightweight sandbox that enforces per‑transaction security policies (e.g., rate limits, resource caps) at the OS boundary, reducing attack surface with < 5 ms overhead. |
| [Receiver Decides Agent‑to‑Agent Negotiations](http://arxiv.org/abs/2610.18424v1) | Sadab, Hasnain, Shehrin et al. | Empirically shows that letting the *receiver* set the settlement amount dramatically improves fairness and efficiency in LLM‑mediated monetary negotiations. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Retrieval Disagreement as a Signal: Diagnosing and Steering Multilingual Dense Embedders](http://arxiv.org/abs/2610.18526v1) | Ghorbanpour, Kolli, Diesner et al. | Finds that multilingual dense retrievers return divergent documents for the same query in different languages; proposes a disagreement‑aware loss that improves cross‑lingual recall by up to 12 %. |
| [Two For The Price Of One: Curvature‑Aware Pruning Preserves Influence Functions Too](http://arxiv.org/abs/2610.18516v1) | Makni, Ponomareva, Mazumder et al. | Introduces curvature‑aware pruning that simultaneously minimises loss increase and preserves influence‑function similarity, enabling reliable post‑training sparsity without sacrificing interpretability. |
| [How Low Can You Go: Fine‑Tuning LLMs with Bayesian Optimization (LlMBO)](http://arxiv.org/abs/2610.18504v1) | Kulkarni, Sartor, Soto et al. | Applies Bayesian optimisation to locate ultra‑low‑parameter LoRA‑style updates (< 10 parameters); matches full‑LoRA performance on 7/9 benchmarks while cutting memory by 99 %. |
| [PRISM: Calibrating Black‑Box Judges with Counterfactual Probes](http://arxiv.org/abs/2610.18389v1) | Yamamoto, Kuroki et al. | Uses counterfactual probing to identify systematic biases in LLM judges and then fine‑tunes a lightweight calibrator that reduces human‑LLM disagreement by 18 % on a suite of evaluation tasks. |
| [Not All Drift Is a Mechanism: Tracing Prompt Adaptation in LLMs](http://arxiv.org/abs/2610.18412v1) | Aleksandrov, Bashirov, Ivanov et al. | Distinguishes functional drift (useful adaptation) from spurious drift by analysing hidden‑state trajectories, providing a diagnostic that predicts downstream performance loss. |
| [Prompt‑Injection Probes Learn the Conversation, Not Just the Injection](http://arxiv.org/abs/2610.18408v1) | Kale, Vishwanath et al. | Shows that linear probes trained to detect prompt‑injection inadvertently memorize conversational context, leading to high false‑positive rates; proposes a debiased training regime. |
| [Recalibrating Many Questions with Few Labels: Minimax Rates and Identification Limits](http://arxiv.org/abs/2610.18488v1) | Li, Yang et al. | Derives minimax optimal rates for joint recalibration of many related prediction tasks with scant labels, establishing when sharing information is statistically beneficial. |

### 📊 Applications (domain‑specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [The Last Mile of Coding Agents for Long‑Document Tasks: An Empirical Study on Clinical Trial Protocol Digitization](http://arxiv.org/abs/2610.18507v1) | Lin, Low, Agarwal et al. | Evaluates coding agents on 5‑page clinical trial PDFs; introduces a hybrid retrieval‑generation pipeline that improves structured extraction F1 from 71 % to 88 %. |
| [How Safe Is ChatGPT Health Advice? Evidence from Real User Conversations in Four Global South Countries](http://arxiv.org/abs/2610.18465v1) | Chowdhury, Garimella et al. | Collects 2 500 real user queries from Africa, South Asia, and Latin America, revealing a 32 % rate of medically unsafe advice and systematic under‑representation of local disease terminology. |
| [Aligning Faithfulness for Theory‑Scale Autoformalization](http://arxiv.org/abs/2610.18498v1) | Feng, Mao, Arekar et al. | Introduces a hierarchical evaluator that checks faithfulness at statement and proof‑step levels, raising autoformalization precision on a university‑level theorem set from 64 % to 79 %. |
| [Copying Is Not Grounding: Training Faithful Long‑Form RAG with Authored‑Sentence Credit](http://arxiv.org/abs/2610.18442v1) | Pham, Vu, Doan et al. | Proposes a sentence‑level credit system that penalises verbatim copying, leading to a 15 % reduction in hallucinated claims while preserving answer relevance. |
| [LegalRewardBench: Benchmarking Reward Models for Legal Preference Evaluation](http://arxiv.org/abs/2610.18299v1) | Huang, Zhou, Zhou et al. | Provides 3 000 human‑verified legal preference pairs across contracts, tort, and criminal law; shows that state‑of‑the‑art reward models drop to 58 % accuracy in the legal domain. |

---

## Research Trend Signal  
The current batch underscores a **convergence of safety, interpretability, and cross‑lingual robustness** in the LLM ecosystem. Diagnosing multilingual retrieval disagreement and probing hidden‑state drift expose systematic blind spots that were previously invisible when models were evaluated monolingually. Simultaneously, several works (Safe Autonomy, Kairos, ReTerm, PRISM) move from post‑hoc alignment toward **formal guarantees**—information‑flow enforcement, transactional policy checks, and counterfactual calibration—suggesting the community is treating LLM agents as first‑class software components that must obey provable contracts. Finally, the emergence of domain‑specific evaluation suites (LegalRewardBench, Global‑South health safety, autoformalization faithfulness) signals a shift from generic benchmark dominance to **application‑driven, high‑stakes validation**, especially in legal, medical, and scientific contexts. Expect ensuing papers to blend rigorous formal methods with large‑scale empirical studies, and to propose benchmark‑driven standards for fairness, robustness, and factuality.

---

## Worth Deep Reading  

1. **Retrieval Disagreement as a Signal** – introduces a novel, language‑agnostic diagnostic that could reshape multilingual IR pipelines and informs future cross‑lingual representation learning.  
2. **Towards Safe Autonomy for Computer Use** – presents a concrete, provable information‑flow framework for LLM agents, addressing the pressing problem of indirect prompt injection at scale.  
3. **PRISM: Calibrating Black‑Box Judges with Counterfactual Probes** – offers a practical, low‑overhead method to correct systematic bias in LLM‑based evaluators, an essential tool for reliable automated assessment.  

These three papers collectively advance the safety‑first agenda while providing actionable methodologies for the broader community.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*