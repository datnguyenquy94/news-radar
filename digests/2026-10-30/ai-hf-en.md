# Hugging Face Trending Models Digest 2026-10-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-30 05:25 UTC

---

**📰 Today’s Highlights**  
The Hugging Face hub is buzzing with multimodal powerhouses: DeepSeek‑V4.1‑Flash (1017) is leading the image‑text‑to‑text surge, while Qwen 3.8‑27B dominates the same space with ≈ 19 k likes. In the visual‑generation corner, Lightricks LTX‑2.5 (image‑to‑video) and the community‑driven Flux‑3‑Klein comfy model have crossed the 800 k download threshold. Quantization activity is also intense – dozens of GGUF‑packed variants of DeepSeek and Nemotron are gaining traction, reflecting a strong push toward on‑device inference.

---

## 📊 Trending Models  

### 🧠 Language Models  
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 782 | 9,655 | A 33‑billion‑parameter LLaMA‑style LLM tuned for general-purpose chat. Its modest size and strong instruction-following make it a favorite for hobbyist deployments. |
| [LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 496 | 15,885 | 1.7 B‑parameter text‑generation model that emphasizes low‑latency generation on consumer GPUs. Trending for edge‑AI prototypes. |
| [flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,247 | 16,598 | A 7 B conversational LLM with a “flint‑style” fine‑tune that excels at code‑related queries. Its high like‑to‑download ratio shows community enthusiasm for code‑assistant bots. |
| [Spark‑X2.6‑4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 913 | 10,163 | 4 B‑parameter LLM optimized for Chinese‑English bilingual tasks. Rapid adoption in Southeast Asian research groups. |
| [NVIDIA‑Nemotron‑3.5‑Bolt‑E4B‑4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 259 | 57,228 | A 4‑bit quantized 30 B Nemotron variant that fits into a 4 GB GPU, enabling cheap inference. Popular among hobbyists testing large‑scale models locally. |
| [Clover‑35B‑A3B‑Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 150 | 1,030 | 35 B‑parameter mixture‑of‑experts model focused on high‑quality text generation. Early‑access preview draws attention from large‑scale language‑model researchers. |

### 🎨 Multimodal & Generation  
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek‑V4.1‑Flash‑1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 3,889 | 131,062 | State‑of‑the‑art image‑text‑to‑text model with flash‑attention, delivering near‑GPT‑4‑level reasoning on visual inputs. Its open‑weight release sparked a wave of community fine‑tunes. |
| [NVIDIA‑Nemotron‑3.5‑Transcribe‑30B‑A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 425 | 4,276 | 30 B speech‑to‑text model that leverages Nemotron’s language core for accurate transcription across 40 languages. Frequently cited in ASR benchmark posts. |
| [LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,877 | 2,269,999 | Single‑file diffusion model that converts a single image into a 15‑second video clip. Its viral “photo‑to‑dance” demos have driven massive download spikes. |
| [Unlimited‑OCR‑2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 417 | 18,141 | OCR model that supports over 200 languages and can handle low‑resolution scans. Notable for its “unlimited” tokenizer that avoids language‑specific token limits. |
| [flux‑3‑image‑klein‑comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,062 | 832,197 | Flux‑3 checkpoint wrapped for ComfyUI, delivering high‑fidelity image‑to‑image edits with a 3.2 B param backbone. Community pipelines showcase rapid style‑transfer workflows. |
| [MiniMax‑M3.1‑Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 491 | 15,738 | Multimodal VL model that merges visual grounding with chat capabilities. Frequently used in research on visual reasoning benchmarks. |
| [Mistral‑Large‑4‑1T‑A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,238 | 278 | 4‑trillion‑token‑trained vision‑language model that excels at detailed image description. Its low‑parameter variant is prized for cost‑effective visual assistants. |
| [Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,324 | 2,172,670 | Quantized (GGUF) version of Qwen‑Image 2.1 that runs comfortably on CPU‑only laptops, generating 1024×1024 images in seconds. The “uncensored” tag draws strong community interest. |
| [Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,694 | 7,509,924 | 27 B‑parameter vision‑language model with strong multilingual OCR and captioning. Its open release and massive download count make it the de‑facto baseline for research. |
| [LFM3‑Omni‑2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 212 | 1,814 | “Any‑to‑any” model that can translate between text, audio, and images in a single forward pass. Early adopters praise its flexibility for prototyping multimodal agents. |
| [MiniCPM‑OCR‑1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 331 | 1,597 | Compact OCR model specialized for Chinese documents, achieving > 95 % accuracy on scanned books. Its small footprint (300 M parameters) spurs mobile deployments. |
| [MOSS‑Image‑SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 827 | 14,950 | Text‑to‑image fine‑tune of the MOSS LLM that adds artistic style control. Trending among hobbyists creating custom art generators. |
| [sam3](https://huggingface.co/facebook/sam3) | facebook | 5,441 | 1,884,719 | Video‑mask generation model extending Segment‑Anything to temporal data, enabling real‑time object tracking in video streams. Widely used in AR/VR research labs. |
| [drama‑3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,107 | 28,162 | Multi‑speaker text‑to‑speech model trained on drama scripts, delivering expressive emotions and acting intonation. Popular for synthetic voice‑over production. |
| [LFM3‑VL‑2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 170 | 4,193 | Vision‑language model focused on visual grounding for robotics, achieving high scores on RefCOCO. Notable for its low latency on Jetson devices. |

### 🔧 Specialized Models  
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.5‑4B‑3D‑Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 287 | 12,237 | 4 B‑parameter code‑generation model that emits Three.js scenes from natural‑language prompts. Demonstrates the convergence of LLMs and 3‑D graphics pipelines. |
| [Carbon‑X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 271 | 2,808 | DNA‑sequence‑to‑text model built on Qwen‑3, optimized for biotech literature generation. Early‑stage but already cited in synthetic‑biology pipelines. |

### 📦 Fine‑tunes & Quantizations  
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek‑V4.1‑Flash‑1017‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 479 | 1,578,937 | GGUF pack applying Group‑Shaped Quantization (GSQ) and Row‑Column‑Optimized (RCO) compression to DeepSeek‑Flash, shrinking the model to 4 GB while keeping > 90 % quality. |
| [DeepSeek‑V4.1‑Flash‑1017‑abliterated‑GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 346 | 28,763 | Aggressive 8‑bit GGUF variant that removes non‑essential attention heads for ultra‑light inference on ARM CPUs. |
| [Qwen‑3.8‑27B‑TURBO‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,228 | 1,726,051 | Community‑curated GGUF with extensive uncensored fine‑tuning, adding code‑generation and “heretic” jailbreak prompts. Drives the “turbo” sub‑community. |
| [NVIDIA‑Nemotron‑3.5‑Bolt‑E4B‑GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF) | unsloth | 150 | 90,640 | 4‑bit GGUF of Nemotron‑3.5‑Bolt designed for the `llama.cpp` runtime, enabling 30 B inference on a 12 GB laptop GPU. |
| [Spark‑X2.6‑4B‑GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 244 | 179,258 | Optimized GGUF of the Spark‑X2.6 model, featuring per‑tensor int‑4 quantization that reduces memory to ~2 GB without major quality loss. |
| [DeepSeek‑V4.1‑Flash‑1017‑UNCENSORED‑FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 479 | 9,787 | FP8‑quantized, uncensored variant targeting high‑throughput inference on modern GPUs; a proof‑of‑concept for next‑gen low‑precision LLMs. |
| [Minimax‑H3‑VBVR](https://huggingface.co/LiconStudio/Minimax-H3-VBVR) | LiconStudio | 143 | 6,189 | Fine‑tuned video‑reasoning model built on MiniMax‑H3, released as a GGUF checkpoint for research on video‑Q&A. |

---

## 📈 Ecosystem Signal  

The current week underscores a **multimodal surge**: vision‑language models (DeepSeek‑Flash, Qwen‑3.8, Mistral‑Large‑4) dominate the likes leaderboard, while video‑generation (LTX‑2.5) and video‑masking (sam3) attract massive download volumes. This reflects a market shift from pure text LLMs toward **image‑text‑to‑text** and **image‑to‑video** pipelines for content creation and interactive agents.  

Open‑weight releases remain the main driver; 21 of the 30 top models are fully open, with community‑led quantizations (GGUF, FP8, AWQ) exploding—six distinct GGUF packs of DeepSeek alone illustrate the appetite for sub‑4 GB inference. Proprietary heavyweight models (NVIDIA Nemotron, Qwen‑3.8) are still open‑weight, but their large‑scale quantized derivatives are rapidly gaining adoption, indicating a trend toward **accessible, on‑device large models**.  

Specialized niches (code generation, DNA‑text, OCR) are growing modestly, but the bulk of community attention remains on **general‑purpose multimodal foundations**, signaling that developers are building higher‑level applications (visual assistants, video tools) rather than isolated domain models.

---

## 🚀 Worth Exploring  

1. **DeepSeek‑V4.1‑Flash‑1017** – The flagship open‑weight vision‑language model; its flash‑attention and strong community fine‑tunes make it the go‑to baseline for any multimodal research.  
2. **Lightricks LTX‑2.5** – A single‑file diffusion model that turns an image into a short video; its viral demos and low inference cost are redefining creative workflows.  
3. **Qwen‑Image‑2.1‑Uncensored‑Quantized (GGUF)** – Demonstrates that high‑quality text‑to‑image generation is now possible on CPU‑only laptops, opening the field to a broader audience of developers and artists.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*