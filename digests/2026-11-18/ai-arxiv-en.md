# ArXiv AI Research Digest 2026-11-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-18 06:59 UTC

---

# AI Research Digest — 2026-11-18

## Today's Highlights
Research this week reveals a maturation of AI systems toward specialized efficiency and robustness. A dominant theme is the move beyond pure scale, with significant work on data-efficient fine-tuning (Ambient LLMs), latency reduction for streaming multimodal models (Spool), and the development of trust infrastructure for cross-organizational agent collaboration. There is also a strong focus on safety and reliability, including bias attribution in language models, hallucination mitigation in vision-language systems, and runtime verification of natural language governance criteria. Furthermore, the application of AI to scientific domains is expanding, notably in theoretical physics resources (StringQFT) and engineering optimization (Colombo), indicating a shift toward AI as a tool for domain-specific discovery.

## Key Papers

### 🧠 Large Language Models
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Ambient LLMs: Data-Efficient Supervised Fine-tuning via Temperature Matching](http://arxiv.org/abs/2611.23229v1) | Giannis Daras, Marios Papachristou, Adam Klivans et al. | Addresses the challenge of small post-training datasets by proposing temperature matching to prevent overfitting, enabling data-efficient supervised fine-tuning of autoregressive language models. |
| [Do LLM Agents Still Need to Be Told How to Self-Improve?](http://arxiv.org/abs/2611.23219v1) | Shobhita Sundaram, Cansu Sancaktar, Phillip Isola | Investigates whether increasingly capable LLM agents still require human specification for self-improvement, finding that as models grow more capable, the need for explicit guidance diminishes. |
| [What Does a Bias Head Measure? Non-Identifiability in Head-Level Bias Attribution](http://arxiv.org/abs/2611.23218v1) | S. M Seefat Alam | Audits the validity of methods that localize social bias to individual attention heads, revealing non-identifiability issues on Qwen-2.5 and Llama-3.1 models. |
| [Structure--Residual Inductive Biases for Language Model Pretraining](http://arxiv.org/abs/2611.23197v1) | Hai Huang, Bartosz Żuk, Rassul Magauin et al. | Proposes a structure-residual principle as an explicit inductive bias during next-token prediction, aiming to shape internal representations beyond standard loss minimization. |

### 🤖 Agents & Reasoning
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Agent Trust Infrastructure (ATI): A Federated Identity, Trust, Attestation, and Accountability Architecture for Cross-Organization Autonomous AI Agents](http://arxiv.org/abs/2611.23202v1) | Viet K. Nguyen, Mohammad I. Husain | Presents a federated architecture for verifying cross-organizational agent identity, execution, and accountability, addressing the lack of common mechanisms in collaborative AI. |
| [Dynamic Task Allocation with Dialogue](http://arxiv.org/abs/2611.23119v1) | Matthew Groholski, Weiwei Gu, Nakul Gopalan | Studies multi-agent collaboration where agents adapt task allocation through dialogue as goals and responsibilities evolve, moving beyond static frameworks. |
| [Inference after coding agents](http://arxiv.org/abs/2611.23174v1) | Florian Gunsilius, David Van Dijcke, Kaspar Wüthrich | Warns that the increasing proficiency of AI coding agents threatens classical hypothesis testing in empirical research by altering the research pipeline. |
| [Values Shape What Self-Improving Coding Agents Build](http://arxiv.org/abs/2611.23067v1) | Jason Liang, Dylan Waldner, Risto Miikkulainen | Examines how short value statements in an agent's prompt shape the artifacts self-improving coding agents produce, emphasizing the role of alignment in open-ended tasks. |

### 🔧 Methods & Frameworks
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Spool: Low-Latency Streaming Inference for Hybrid Vision-Language Models](http://arxiv.org/abs/2611.23228v1) | Rui Ning, Om Chabra, Hari Balakrishnan | Proposes a streaming inference framework for hybrid VLMs that interleaves attention with linear recurrent layers to enable low-latency answers about recent video content. |
| [Multimodal Masked Diffusion Autoencoder for Modeling Impaired Driving](http://arxiv.org/abs/2611.23211v1) | John Gideon, Anshul Gupta, Megan Applegate-Kenton et al. | Introduces a multimodal masked-diffusion autoencoder to model human cognitive states (distraction, stress) interacting with the driving environment using event and visual data. |
| [Retrieval-Augmented Correction for Generalist Medical Image Segmentation](http://arxiv.org/abs/2611.23189v1) | Vincenzo Marcianò, Xiaoming Zhang, Michela Antonelli et al. | Addresses residual structural errors in medical image segmentation by proposing a retrieval-augmented correction framework that leverages prior cases. |
| [Correcting Flows with Marginal Matching](http://arxiv.org/abs/2611.23134v1) | Meital Bojan, Nadav Bojan Sellam, Ev Zisselman et al. | Develops a flow matching approach that balances computational efficiency with generation fidelity through marginal matching correction schemes. |

### 📊 Applications
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Reading Scene States: Uncovering Safety Failures in Vision-Language Models](http://arxiv.org/abs/2611.23206v1) | Tongxi Wu, Yuyang Cheng, Jiacheng Xian et al. | Identifies a "scene-state safety vulnerability" where VLMs provide harmful assistance by interpreting visual events, introducing SceneSafetyBench with 375 image-question pairs. |
| [Say Less, Hallucinate Less? Diagnosing and Restoring Object Coverage in Preference-Optimized Vision-Language Models](http://arxiv.org/abs/2611.23179v1) | Hansang Lee | Finds that preference optimization checkpoints of LLaVA-1.5-7B lower object coverage, naming fewer categories despite reduced hallucination rates. |
| [Where Should Physics Enter? Information, Identifiability and Calibration in Probabilistic Sea Surface Temperature Forecasting](http://arxiv.org/abs/2611.23129v1) | Parmitha Vangapandu et al. | Tests the placement of advection-diffusion priors in neural SST forecasts, finding optimal integration points for physics-informed modeling using NOAA data. |
| [Deep Reinforcement Learning for Heat Pump and Underfloor Heating Control](http://arxiv.org/abs/2611.23063v1) | Antonio Manjavacas et al. | Presents an end-to-end DRL case study for controlling underfloor heating coupled with heat pumps, optimizing energy consumption despite high thermal inertia. |

## Research Trend Signal
The submitted papers signal a clear pivot from the "bigger is better" paradigm of previous years toward **specialized efficiency, robustness, and domain integration**. A significant portion of the work focuses on *data efficiency* and *training stability*, exemplified by Ambient LLMs and Correcting Flows, suggesting that the research community is tackling the diminishing returns of scaling. There is also a heightened focus on *trust and governance*, with ATI and Runtime Verification frameworks addressing the operational risks of autonomous agents in real-world deployments. Furthermore, the application of AI to scientific domains—ranging from theoretical physics (StringQFT) to climate forecasting (SST) and engineering control—indicates AI's expanding role as a rigorous tool for domain discovery rather than merely a general-purpose chatbot. Safety remains a cross-cutting concern, with dedicated work on bias attribution, hallucination mitigation in vision-language models, and scene-state vulnerabilities.

## Worth Deep Reading

1.  **Ambient LLMs: Data-Efficient Supervised Fine-tuning via Temperature Matching** (http://arxiv.org/abs/2611.23229v1)
    *   **Why it matters:** As the era of massive pre-training datasets plateaus, this paper offers a crucial solution for the post-training phase. By addressing the overfitting problem in data-efficient SFT via temperature matching, it provides a practical method to adapt large models with limited task-specific data, a common real-world constraint.

2.  **Agent Trust Infrastructure (ATI): A Federated Identity, Trust, Attestation, and Accountability Architecture for Cross-Organization Autonomous AI Agents** (http://arxiv.org/abs/2611.23202v1)
    *   **Why it matters:** This work moves beyond theoretical agent coordination to propose a concrete architectural framework for identity and trust in multi-organizational settings. As AI agents begin to collaborate across corporate and institutional boundaries, ATI addresses the critical need for verifiable accountability, making it essential reading for anyone building decentralized AI systems.

3.  **Reading Scene States: Uncovering Safety Failures in Vision-Language Models** (http://arxiv.org/abs/2611.23206v1)
    *   **Why it matters:** This paper uncovers a subtle but dangerous failure mode in VLMs—the ability to provide harmful assistance through scene interpretation without an explicit harmful request. The introduction of SceneSafetyBench provides a much-needed benchmark for evaluating this "scene-state safety vulnerability," making it a vital study for developers focused on deploying safe multimodal AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*