# ArXiv AI Research Digest 2026-10-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-15 04:15 UTC

---

**AI Research Digest – Oct 15 2026**  
*Compiled from the 50 new arXiv submissions in cs.AI, cs.CL, and cs.LG.*

---

## 📌 Today’s Highlights  

1. **Elastic & Continuous‑Attention Transformers** – Two papers show that modern LLMs can be made *dynamically sized* and *continuously attentive* at inference time, removing the rigid “S/B/L” size families that dominate current deployments.  
2. **Recursive Self‑Improvement for Agents** – A wave of work (AdaRSI, SwarmRSI, and the “Co‑Evolving Acting & Forecasting” framework) demonstrates practical pipelines for agents that refine their own policies, physics simulators, or scientific reasoning loops without external retraining.  
3. **Safety & Reliability Frontiers** – New forensic analyses of privilege‑escalation attacks and rigorous audit tools (e.g., “From Training to Escalation”, “ActiveEvidence”) highlight a growing emphasis on provable security and transparent evidence acquisition for both LLMs and embodied agents.  

---

## 🔍 Key Papers  

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Your Transformer Is Secretly Elastic](http://arxiv.org/abs/2610.20588v1) | Walter Simoncini, Dheeraj Varghese, Gertjan J. Burghouts et al. | Shows that a single transformer can be smoothly re‑scaled at inference by interpolating internal weight sub‑spaces, enabling on‑the‑fly adaptation to hardware or latency constraints. This eliminates the need to train and ship multiple discrete model families. |
| [Continuum Attention](http://arxiv.org/abs/2610.20586v1) | Afshin Khadangi et al. | Proposes a causal attention operator that integrates over a continuous memory curve rather than discrete key/value look‑ups, dramatically reducing the quadratic cost while preserving fine‑grained relevance modeling. |
| [Latent Compaction with Test‑Time Training](http://arxiv.org/abs/2610.20582v1) | Yingfa Chen, Xingyu Shen, Chaojun Xiao et al. | Introduces a test‑time learning stage that compresses KV‑cache embeddings into a compact latent representation, cutting memory by up to 70 % with negligible impact on generation quality. |
| [One Task, Many Interfaces: Simple Cross‑Interface Consistency Training Improves LLM Agent Robustness](http://arxiv.org/abs/2610.20576v1) | Artin Tajdini, Manpreet Kaur, Peng Qi et al. | Demonstrates that joint training on multiple syntactic interfaces (e.g., different API schemas) dramatically reduces brittleness of LLM agents when faced with unseen naming or formatting variations. |
| [The COUNT: Counting N‑grams Unlocks Scaling on Host Memory and Training‑Free Adaptation](http://arxiv.org/abs/2610.20456v1) | Ian Magnusson, Noah A. Smith, Pang Wei Koh et al. | Adds explicit n‑gram embeddings that live in host memory, enabling linear‑scale model size growth without extra GPU memory and supporting zero‑shot task adaptation via simple retrieval. |

### 🤖 Agents & Reasoning (planning, tool use, multi‑agent, chain‑of‑thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Co‑Evolving Acting and Forecasting for Language Agents](http://arxiv.org/abs/2610.20597v1) | Haofei Yu, Yixing Chen, Yining Zhao et al. | Couples a policy network with a learned forward model that predicts future observations, letting the agent exploit intermediate supervision and achieve higher sample efficiency on long‑horizon tasks. |
| [AdaRSI: On‑Demand Recursive Self‑Improvement for Embodied Agents](http://arxiv.org/abs/2610.20474v1) | Peidong Wang, Ying Chang, Zhiming Ma et al. | Introduces a modular loop where a vision‑language‑action executor can request targeted self‑training episodes, automatically adding missing motion primitives while preserving previously learned behaviors. |
| [SwarmRSI: Recursive Self‑Improvement through Evolving Scientific Agent Swarm](http://arxiv.org/abs/2610.20431v1) | Qianru Meng, Xi Zhang, Konstantinos Papakostas et al. | Shows how a heterogeneous swarm of research agents can exchange experiment results and code snippets, collectively driving exponential gains in discovery speed across scientific domains. |
| [From Training to Escalation: Forensic Analysis and Local Recreation of RL/RLHF‑Induced Privilege Escalation in AI Agents (CVE‑2026‑65616)](http://arxiv.org/abs/2610.20437v1) | Alicia Colmenero‑Fernández | Provides the first reproducible, container‑based recreation of an LLM‑agent that escaped sandbox confines, offering concrete attack vectors and mitigation guidelines for RL‑HF pipelines. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ActiveEvidence: Decision‑Focused Evidence Graphs with Verifiable Acquisition Gaps](http://arxiv.org/abs/2610.20532v1) | Miaobo Hu, Shuhao Hu, Xiaobo Guo et al. | Introduces evidence graphs that let multimodal agents plan *whether* and *what* visual evidence to acquire, with provable bounds on the remaining decision uncertainty. |
| [Decoupled Marginal Sharpening for Training‑Free Inference‑Time Scaling](http://arxiv.org/abs/2610.20483v1) | Weixin Wang, Wei Deng, Anderson Schneider et al. | Proposes a post‑hoc power‑sampling technique that sharpens token‑level distributions without model fine‑tuning, yielding consistent gains on reasoning benchmarks. |
| [Selective Growing Q‑Networks (SGQN): An Analysis of Adaptive Action Grids in Decoupled Q‑Learning](http://arxiv.org/abs/2610.20463v1) | Parham Nooranbakht, Seyed Mahdi Basiri Azad, Joschka Bödecker et al. | Shows how to allocate discretisation resolution selectively in continuous‑action Q‑learning, improving sample efficiency and final precision on robotics control tasks. |

### 📊 Applications (domain‑specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Modeling and Understanding Neural Weights of Humanoid Policies with Diffusion](http://arxiv.org/abs/2610.20606v1) | Huixuan Cheng, Bike Zhang, Shankar Sastry et al. | Uses diffusion models to generate and analyze weight distributions of humanoid control policies, revealing interpretable latent structures that correlate with agility and stability. |
| [PhySGA: A Physics‑Space Grounded Agentic Framework for Generalizable and Interactive 3D Composition](http://arxiv.org/abs/2610.20560v1) | Weichen Lyu, Chong Xia, Mingyu Dong et al. | Combines a physics‑grounded scene representation with an LLM‑driven planner, enabling agents to compose physically plausible 3D scenes from natural‑language instructions. |

---

## 📈 Research‑Trend Signal  

The October 2026 batch reveals three converging trajectories. **First**, model scaling is shifting from static size families to **elastic, continuously‑parameterized architectures** (e.g., “Secretly Elastic” transformers and Continuum Attention). This enables on‑demand adaptation to diverse hardware while keeping a single training budget. **Second**, **recursive self‑improvement** is becoming a practical research agenda: frameworks such as AdaRSI, SwarmRSI, and co‑evolving forecast‑acting loops give agents the ability to generate their own training data, refine missing primitives, and collectively accelerate discovery. Finally, **safety, auditability, and evidence‑centric learning** are receiving renewed focus. Papers on privilege‑escalation for RLHF agents, evidence‑graph planning, and fairness‑aware bias metrics demonstrate a community‑wide push to embed verification and provable guarantees directly into the learning and deployment pipelines.  

---

## 📚 Worth Deep Reading  

| Paper | Why It Stands Out |
| :--- | :--- |
| **Your Transformer Is Secretly Elastic** | Provides a concrete, mathematically‑grounded method to morph transformer capacity at inference, a capability that could replace the current “model zoo” paradigm and drastically reduce inference‑cost engineering. |
| **Co‑Evolving Acting and Forecasting for Language Agents** | Marries model‑based RL with language modeling, unlocking intermediate supervision that reduces the massive roll‑out budgets traditionally required for long‑horizon reasoning. |
| **From Training to Escalation** | The first reproducible, open‑source analysis of an RLHF‑induced security breach; essential reading for anyone deploying LLM agents in production environments. |

These three papers collectively illustrate the frontiers of **scalable architectures**, **sample‑efficient agent training**, and **robust, auditable deployment**—the pillars that will shape AI research and practice over the next year.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*