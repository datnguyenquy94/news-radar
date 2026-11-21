# ArXiv AI Research Digest 2026-11-21

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-21 06:46 UTC

---

Here is the structured ArXiv AI Research Digest based on the provided papers.

### Today's Highlights
Research today is heavily focused on the intersection of reasoning and efficiency. A significant trend is the "verification" of model outputs, with papers like *Verify the Verifier* and *Active Feature Acquisition* addressing trust and cost-reduction in LLM outputs. Simultaneously, the robotics and vision communities are advancing foundation models for control, exemplified by *Awaken-HI* and *Depth Pro 2*. Finally, there is a strong push toward efficient serving and hybrid architectures, as seen in *TideCache* and *Asuka-FM*, suggesting a maturing field focused on deploying capable models on constrained hardware.

### Key Papers

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AURA: AUdio-dRiven streaming Avatar](http://arxiv.org/abs/2611.26540v1) | Nathaniel Cohen, Nicolas Dufour, Amélie Royer et al. | Current audio-driven video diffusion models require many denoising steps, making them unsuitable for real-time streaming. AURA proposes a streaming avatar system that synthesizes talking-head videos with low latency, solving a critical deployment barrier for voice assistants. | |
| [The Geometry of Lies: Knowledge and Persona Directions for Detecting Deception in Large Language Models](http://arxiv.org/abs/2611.26545v1) | Md. Abdullah Al Zami, Suraiya Shanaz, Mahdi Hasan et al. | Linear probes often fail to transfer across lie types. This work widens a "persona bank" to detect deception in 70B-scale models, specifically targeting lies about knowledge where the model's internal state and its output can be identical. | |
| [LLM GerryMandering: Separating Interactions from Additive Effects in LLM Audits](http://arxiv.org/abs/2611.26538v1) | George Rahul, Ronit Jahilal, Bhaskara Hanuma Vedula et al. | Auditing intersectional bias in LLMs is challenged by the quadratic growth of subgroups. This paper introduces a method to separate interaction effects from additive effects, providing a clearer baseline for responsible AI auditing. | |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1) | Yiyang Du, Yuxuan Kuang, Qitao Zhao et al. | Frontier agents like GPT-6 Astra can control robots via low-level actions, but benchmarks only report success rates. AgentRoboCritic analyzes *how* these agents succeed or fail, providing granular insights into direct robot control capabilities. | |
| [PlayCraft: Designing Engaging Games from Agent Play Experience](http://arxiv.org/abs/2611.26624v1) | Weihao Cheng | AI agents can generate playable games, but they often lack engagement due to a lack of mastery. PlayCraft automates game design by using a vision-based agent to play and learn from its own experience, creating games tuned for player engagement. | |
| [One Prior, Two Dynamics: Repurposing Video Diffusion Transformers for Self-Supervised Latent Action Learning](http://arxiv.org/abs/2611.26617v1) | Yuxin Jiang, Wenqiang Sun, Jiaqi Li et al. | Learning latent actions from scratch is data-inefficient. This paper explores using a pretrained video generator as a "prior" to accelerate the learning of self-supervised latent action models. | |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Verify the Verifier: Specification-Grounded LLM Cross-Checking for Bugs That Escape UVM Scoreboards](http://arxiv.org/abs/2611.26588v1) | Ana E. Sanchez Villalobos, Michael D. Quinn, Aakash Tyagi et al. | UVM regression tests verify scoreboard agreements but often miss specification bugs. "Verify the Verifier" introduces cross-checking against specifications to catch "scoreboard escapes"—bugs that pass tests but violate the design intent. | |
| [TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming](http://arxiv.org/abs/2611.26619v1) | Jinbin Luo, Xiaozhe Yao, Shang Yang et al. | Hybrid LLM architectures require complex cache management. TideCache introduces a CPU--GPU superchip system with transparent cache management and layer-wise streaming to serve heterogeneous models efficiently. | |
| [AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher](http://arxiv.org/abs/2611.26510v1) | Guoxin Chen, Shuang Sun, Fanzhe Meng et al. | Post-training reinforcement learning depends on successful teacher trajectories, which may contain unsupported assumptions. AutoMaster proposes "Skill-FT," a method that uses natural-language skills to guide fine-tuning, making the model a better teacher for itself. | |

#### 📊 Applications (domain-specific, multimodal, code generation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth](http://arxiv.org/abs/2611.26603v1) | Peiyun Hu, Marko Mihajlovic, Lyndon Duong et al. | Monocular depth estimation often trades off sharpness for temporal consistency. Depth Pro 2 delivers dense, metric depth at full resolution with both boundary sharpness and temporal consistency for images and video. | |
| [Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation](http://arxiv.org/abs/2611.26444v1) | Yuzhi Huang, Jie Wu, Fanding Huang et al. | Embodied intelligence requires cognitive reasoning, precise execution, and their composition. Mind2Act World is a benchmark designed to diagnose and evaluate these three complementary capabilities in robotic manipulation. | |
| [SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research](http://arxiv.org/abs/2611.26601v1) | Amine Lbath, Manan Suri, Aurelien Delaitre et al. | LLM agents are changing vulnerability research, but claims are scattered. This "State of the Art" paper surveys the evolution of LLM capabilities in discovering, validating, and patching software vulnerabilities. | |

### Research Trend Signal
The 2026 ArXiv snapshot reveals a field transitioning from raw capability scaling toward trustworthy and efficient deployment. A dominant theme is **verification and certification**: papers like *Realized versus Population Reliability* and *Verify the Verifier* treat LLM outputs as evidence to be accumulated or checked against specifications, reflecting a need for reliability in high-stakes applications. Concurrently, there is a strong focus on **efficiency and serving**: *TideCache* and *Asuka-FM* address the computational bottlenecks of running large models, specifically targeting hybrid architectures and consumer hardware. In robotics and vision, there is a move toward **foundation model grounding**, where pretrained diffusion or vision models are repurposed for specific tasks like latent action learning or depth estimation, reducing the need for extensive retraining. Lastly, the integration of **multimodal safety** and **intersectional bias auditing** indicates a maturing concern for the ethical and safe deployment of these systems across diverse user groups.

### Worth Deep Reading
1.  **Verify the Verifier** (Sanchez Villalobos et al.): This paper is critical for anyone deploying LLM-based systems in safety-critical software engineering. It moves beyond simple "pass/fail" benchmarks to address the gap between test coverage and specification compliance, offering a robust framework for detecting "silent" bugs that standard UVM scoreboards miss.
2.  **Depth Pro 2** (Hu et al.): Readers interested in computer vision should prioritize this work. It solves a longstanding trade-off in monocular depth estimation by achieving both metric accuracy and temporal consistency at full resolution, which is essential for real-time applications like autonomous driving and augmented reality.
3.  **AgentRoboCritic** (Du et al.): This paper is worth reading for its methodological contribution to agent evaluation. Rather than just reporting success rates, it dissects the failure modes of frontier agents controlling robots, providing a much-needed framework for understanding the nuances of direct low-level robot control.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*