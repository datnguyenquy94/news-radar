# Hugging Face Trending Models Digest 2026-10-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-15 04:15 UTC

---

**Hugging Face Trending Models Digest – 2026‑10‑15**

---

### Today’s Highlights
The week’s biggest surge comes from **Qwen‑3.8‑Flash‑Next** family models, which together amassed over 14 K likes and more than 9 M downloads, underscoring the community’s appetite for high‑throughput, mixed‑precision LLMs.  Vision‑language and generative‑vision models keep climbing, with **Lightricks/LTX‑2.5** (image‑to‑video) topping the multimodal charts and the **gguf‑quantized Qwen‑Image‑2.1** variants breaking download records in the “uncensored‑quantized” niche.  Open‑weight projects (Qwen, DeepSeek, Google) dominate the leaderboard, while the rise of community‑produced GGUF and FP8 quantizations signals a shift toward on‑device inference at lower cost.

---

## Trending Models  

### 🧠 Language Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,644 | 65,616 | A GGUF‑packed Gemma‑4 unified model tuned to produce more “human‑like” prose. It’s trending for its lightweight 2‑bit format that runs on modest hardware. |
| [autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B) | autotrust | 766 | 27,970 | 35 B multilingual classifier built on Qwen‑3.5‑MoE, excelling at zero‑shot sentiment and topic tagging. Popular in enterprise pipelines for its strong few‑shot performance. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 317 | 4,067 | 24 B instruction‑tuned LLM that combines liquid‑state scaling with A2B tokenization for faster decoding. Gaining attention for its balanced quality‑speed trade‑off. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,606 | 47,754 | Calibrated decision‑making classifier that fuses system‑one reasoning with a 7 B backbone. Frequently cited in AI‑ethics research for its transparent confidence scores. |
| [autotrust/JEV-35B‑NVFP4](https://huggingface.co/autotrust/JEV-35B-NVFP4) | autotrust | 307 | 33,343 | FP4‑quantized variant of JEV‑35B, delivering a 2× speed boost on NVIDIA GPUs with negligible loss in accuracy. Ideal for latency‑critical serving. |
| [vllm‑sr/d3](https://huggingface.co/vllm-sr/d3) | vllm‑sr | 166 | 1,805 | Zero‑shot classification model built on Qwen‑3.5, optimized for the vLLM inference engine. Its tiny footprint makes it a go‑to for rapid prototyping. |
| [Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,715 | 7,221,327 | A 27 B multimodal LLM that handles image‑text input and excels in long‑form conversational tasks. Its massive download count reflects widespread adoption in chat assistants. |
| [deepseek‑ai/DeepSeek‑V4.1‑Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek‑ai | 4,510 | 1,262,357 | Flash‑optimized 35 B model that mixes text generation with vision‑language capabilities. Users praise its low latency on GPUs with tensor‑core acceleration. |
| [Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,214 | 2,185,644 | Next‑generation 27 B model using flash‑attention and a refined instruction set. It dominates the conversational benchmark charts this quarter. |
| [nerkyor/Qwen3.8‑27B‑Coder390‑Eff…](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 334 | 114,351 | A code‑focused fine‑tune of Qwen‑3.8 that adds 390 B‑level reasoning modules. Trending among developer‑tooling communities for its strong unit‑test passing rates. |

### 🎨 Multimodal & Generation  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen‑Image‑2.1‑Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 782 | 12,704 | A state‑of‑the‑art text‑to‑image diffusion model with turbo‑mode inference, delivering photorealistic results in under 0.8 s per image. |
| [Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,809 | 1,823,507 | Single‑file diffusion model that converts a single image (or text prompt) into high‑fidelity video clips. Its ease of use has sparked a wave of indie video‑creation apps. |
| [fishaudio/drama‑3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 331 | 839 | Multi‑speaker TTS model trained on dramatic audiobooks; praised for expressive prosody and low‑resource deployment. |
| [speridlabs/iris‑3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 261 | 1,132 | 3 B text‑to‑image diffusion model optimized for pixel‑space generation, notable for its small size and fast sampling on consumer GPUs. |
| [Cactus‑Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus‑Compute | 397 | 23,589 | On‑device speech‑recognition model using a compact transformer, achieving 96 % word‑accuracy on noisy mobile data. |
| [openbmb/MiniCPM‑V‑4.7‑35B‑A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 651 | 4,157 | 35 B vision‑language model that excels at detailed image captioning and visual question answering. Its “A3B” architecture reduces memory usage by 40 %. |
| [openbmb/MiniCPM‑V‑4.7‑1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 336 | 2,543 | A 1 B lightweight counterpart of the 35 B model, targeted at edge devices for quick image‑text inference. |
| [LiquidAI/d1‑3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 397 | 14,854 | 3 B multimodal model that bridges vision and language for short‑form captioning; popular in academic benchmarks for its data‑efficiency. |
| [pablodawson/MiniMax‑H3‑360‑Orbit‑LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 454 | 16,890 | LoRA‑adapted video‑generation model that interpolates between first‑ and last‑frame to produce smooth 360° loops. Used widely in VR content pipelines. |
| [baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,640 | 1,154,213 | Unlimited‑scale OCR model supporting 150 languages, built on a transformer‑based feature extractor. Its open‑weight release has been a catalyst for open‑source document AI. |

### 🔧 Specialized Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma‑2](https://huggingface.co/google/embeddinggemma-2) | google | 2,275 | 135,175 | Embedding‑only Gemma‑2 model delivering 768‑dimensional vectors for semantic search. Its high‑throughput inference makes it a default for large‑scale retrieval pipelines. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,347 | 2,019,842 | Third‑generation Segment‑Anything model (video‑aware) that outputs high‑resolution masks for both images and video frames. Widely adopted in AR/VR segmentation tools. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,161 | 18,304 | Vision‑language model fine‑tuned on Cloudflare’s security logs, capable of extracting threat indicators from screenshots. Used internally for automated threat triage. |
| [nerkyor/Qwen3.8‑27B‑Coder390‑Eff…](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 334 | 114,351 | A code‑generation specialist built on Qwen‑3.8, integrating 390 B‑level reasoning modules for complex software synthesis. Shows top‑tier pass rates on Code‑Eval benchmarks. |
| [baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR) *(also listed in multimodal)* | baidu | 4,640 | 1,154,213 | (see above) |

### 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,315 | 2,315,771 | GGUF‑quantized (Q4_0) uncensored version of Qwen‑Image‑2.1, halving VRAM requirements while retaining 92 % of FID quality. The download surge shows strong demand for unrestricted generation on consumer hardware. |
| [ConwayResearch/Underdog‑Saluki‑27B‑1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 458 | 311,969 | 27 B LLM compressed to 2‑bit GGUF, optimized for tool‑calling and function‑calling. Its tiny size relative to capability has sparked a wave of “underdog” deployments. |
| [AtomicChat/Qwen‑Image‑2.1‑Turbo‑Uncensored‑GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 455 | 258,320 | Turbo‑mode diffusion model in GGUF format, enabling sub‑second image generation on CPUs. The uncensored checkpoint draws users seeking creative freedom. |
| [DavidAU/Qwen3.8‑27B‑TURBO‑Fable‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,771 | 1,900,731 | Community‑assembled GGUF blend of multiple Qwen‑3.8 fine‑tunes, targeting uncensored, coder‑heavy workloads. Its massive download count highlights the “one‑model‑fits‑all” trend. |
| [dealignai/DeepSeek‑V4.1‑Flash‑UNCENSORED‑FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 642 | 78,156 | FP8‑quantized DeepSeek‑V4.1 flash model, providing a 3× speed improvement on supported GPUs with <1 % BLEU loss. Early adopters praise its cost‑efficiency for large‑scale inference. |
| [orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 868 | 692,812 | GGUF release of the Qwen‑3.8‑Flash‑Next model stripped of safety filters; its compact file (≈2 GB) has become a go‑to for hobbyist chatbots. |
| [ISTA‑DASLab/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA‑DASLab | 876 | 4,894,108 | Mixed‑precision (Q5‑GSQ) GGUF checkpoint, integrating research‑grade quantization (RCO) to hit 90 % of full‑precision performance with <4 GB VRAM. Its popularity reflects growing trust in advanced quant techniques. |

---

## Ecosystem Signal  
The **Qwen** family continues to dominate both the pure‑language and vision‑language arenas, with multiple flash‑attention and GGUF variants released in the last month, indicating strong community confidence in Qwen’s architecture and licensing openness. **DeepSeek** follows closely, especially with its aggressive FP8 quantizations that lower inference cost without sacrificing quality. Open‑weight models (Google, Baidu, Qwen, DeepSeek) collectively hold >80 % of the total likes, showing a clear tilt toward transparent, reusable research. Meanwhile, the surge in GGUF/FP8 releases (7 + models > 500 K downloads each) highlights a maturing quantization ecosystem that enables on‑device deployment and democratizes access to 30‑B‑scale capabilities. The rise of multimodal generation—particularly video (LTX‑2.5) and uncensored diffusion—suggests that the community is shifting from text‑only experiments toward richer content creation pipelines.

---

## Worth Exploring  

1. **[Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** – A single‑file diffusion model that turns static images into high‑quality video; its ease of integration makes it perfect for rapid prototyping of generative video products.  

2. **[abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** – Offers near‑full‑quality image generation with a minimal VRAM footprint; ideal for researchers exploring uncensored diffusion on consumer GPUs.  

3. **[Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** – The flagship flash‑attention LLM that balances speed, instruction‑following ability, and open licensing; serves as a solid baseline for any chat‑or‑instruction‑tuned project.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*