# Hugging Face Trending Models Digest 2026-11-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-08 05:41 UTC

---

**Today's Highlights**  
The Hugging Face Hub continues to be driven by large multimodal models, with the Qwen 3.8‑27B series amassing 19 k likes and 7.8 M downloads, solidifying its position as the go‑to for image‑text‑to‑text tasks.  Generation‑centric models are also soaring—Lightricks’ **LTX‑2.5** (image‑to‑video) eclipses 11 k likes, while the new **Audio8‑TTS‑Realistic‑Air** brings high‑fidelity speech synthesis to the community.  Quantized fine‑tunes in GGUF format (e.g., UnsLoth’s Qwen 3.8‑Flash‑Next‑GGUF) are gaining traction, reflecting a push for faster, smaller deployments.

---

## Trending Models  

### 🧠 Language Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 377 | 3,803 | A 65 B parameter LLM preview released under Apache‑2.0, targeting research on massive instruction‑tuned models. Its open‑weight nature has attracted early adopters despite modest download numbers. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 382 | 9,212 | An 8‑bit optimized LLM that demonstrates strong inference speed on commodity hardware. Community interest is driven by its “modelopt” quantization pipeline. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 406 | 997 | A fine‑tuned MiniMax‑H3 model focused on balanced instruction following. Its small footprint makes it attractive for edge deployments. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 229 | 989 | Supervised‑fine‑tuned 27 B Qwen‑derived model that emphasizes safety and factuality. Limited downloads reflect its recent release. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 215 | 15,324 | An 8 B granite‑based LLM offering competitive chat performance at a fraction of the compute cost. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,549 | 70,034 | 1.7 B “Liquid Foundation Model” designed for low‑resource environments; its high like‑to‑download ratio signals strong community interest. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 222 | 971 | Baidu’s 5.5‑B MoE flash‑optimized LLM, open‑sourced for research on mixture‑of‑experts scaling. |

### 🎨 Multimodal & Generation  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,165 | 20,689 | First‑in‑class Gaussian‑splatting pipeline turning a single portrait into a 3‑D avatar. Trending for its ease of use in AR/VR prototyping. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,651 | 22,571 | Multimodal LLM that ingests images and generates detailed text, built on the Kimi‑K3.1 backbone. Its “pro” label reflects enhanced instruction tuning. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,348 | 7,813,215 | Flagship 27 B multimodal model excelling at image‑text reasoning and dialogue. Its massive download count underscores broad industry adoption. |
| [DavidAU/...Turbo-Fable...](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,666 | 1,545,313 | Community‑crafted GGUF‑packed “Turbo” variant of Qwen 3.8, removing content filters for research freedom. The GGUF format drives its rapid uptake. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,098 | 63,798 | 30 B speech‑to‑text model using Nemo’s LM architecture, delivering high‑accuracy transcription on GPUs. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,699 | 1,143,397 | Flux‑3 diffusion model tuned for ComfyUI, offering crisp image‑to‑image edits. Its single‑file design simplifies deployment. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 236 | 505,526 | Text‑to‑image diffusion model optimized for ComfyUI, notable for fast inference on consumer GPUs. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,714 | 65,099 | Quantized GGUF version of Qwen‑Image 2.1 delivering near‑real‑time text‑to‑image generation on CPUs. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 507 | 1,083 | Flexible image‑to‑video model supporting audio‑video synthesis, praised for its lightweight architecture. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,058 | 1,952,223 | Segmentation‑aware mask generation model that works on video frames, extending the SAM family to temporal contexts. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,635 | 11,206 | 1‑trillion‑parameter‑scaled vision‑language model (Mistral‑Large‑4) excelling at image‑text grounding. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 175 | 64,942 | Video‑to‑video editing model that can replace characters across frames, attracting creators experimenting with deep‑fake style workflows. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 350 | 14,103 | High‑fidelity text‑to‑speech model leveraging ARK‑TTS, notable for low latency and expressive prosody. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,392 | 277,323 | Multimodal LLM that processes images and text, achieving strong benchmarks on visual reasoning while remaining fully open‑weight. |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 160 | 789 | Text‑to‑image diffusion model designed for quick iteration on consumer hardware, gaining modest traction. |

### 🔧 Specialized Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 880 | 221,506 | 4 B Qwen‑based code model that emits Three.js‑compatible 3‑D snippets, enabling on‑the‑fly web‑visualizations. Its high download count reflects strong developer interest. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 261 | 24,479 | Similar to the 3D‑Coder but outputs GLB assets, facilitating downstream AR/VR pipelines. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 567 | 1,369 | 9 B uncensored variant merging DeepSeek‑V4 with Qwen‑3.5, focused on open‑research use‑cases where content filters are lifted. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 196 | 243,190 | GGUF‑packed coder variant of DeepSeek‑V4.1, targeting low‑memory inference for code generation tasks. |

### 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 380 | 117,016 | Community‑run GGUF fine‑tune removing safety layers, delivering faster inference on CPUs. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,516 | 1,423,501 | Highly compressed GGUF version of Qwen 3.8‑Flash‑Next, famed for low‑latency inference on edge devices. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 275 | 3,835 | A stripped‑down, aggressively quantized DeepSeek‑V4.1 model meant for minimal RAM footprints. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 567 | 1,369 | (also listed under Specialized) Released as a quantized, uncensored fine‑tune for research environments. |

---

## Ecosystem Signal  

The Hub’s current momentum is clearly tilted toward **multimodal, image‑centric generative models**—the Qwen 3.8‑27B series, DeepSeek‑V4.1, and Flux‑3 dominate both likes and download volume.  Simultaneously, **video and audio generation** are surfacing as hot niches, with LTX‑2.5 (image‑to‑video) and Audio8‑TTS capturing rapid community uptake.  On the LLM front, open‑weight families such as Qwen, DeepSeek, and Mistral continue to attract large‑scale fine‑tunes, especially in GGUF format, signalling a **shift toward lightweight, CPU‑friendly deployments**.  Quantization efforts (GGUF, 8‑bit, AWQ) are proliferating, enabling models like Qwen‑Image‑2.1‑Turbo to run on modest hardware, while specialized code‑generation models (Qwen‑3.5‑4B‑3D‑Coder) illustrate a growing interest in domain‑specific AI.  Overall, the ecosystem is balancing **massive multimodal capability** with **accessibility through quantization and fine‑tuning**, underscoring a community preference for open, highly adaptable assets.

---

## Worth Exploring  

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – With over 11 k likes and 2.6 M downloads, this single‑file diffusion model delivers high‑quality image‑to‑video conversion, a capability still rare on the Hub. Its ease of integration (no separate tokenizer or scheduler) makes it ideal for rapid prototyping of video‑centric products.  

2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – The flagship multimodal LLM combines strong visual reasoning with conversational abilities, and its massive download count confirms broad industry adoption. Researchers looking for an open‑weight, high‑performance baseline for vision‑language tasks should benchmark against this model.  

3. **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** – A GGUF‑packed, flash‑optimized version of Qwen 3.8 that runs efficiently on CPUs and low‑end GPUs. It exemplifies the quantization trend and is perfect for developers needing a balance between capability and resource constraints.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*