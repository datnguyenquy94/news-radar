# Hugging Face Trending Models Digest 2026-10-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-29 05:25 UTC

---

**Today’s Highlights**  
The Hugging Face hub is buzzing with a surge of multimodal and quantized releases. DeepSeek’s Flash‑1017 family dominates both raw and GGUF‑quantized charts, while Qwen’s 27‑B multimodal model continues to attract massive community attention. Image‑to‑video (Lightricks LTX‑2.5) and diffusion‑centric models (Flux‑3, MOSS‑Image) showcase the rapid maturation of generative video and high‑quality image pipelines. Quantization efforts from Uns​loth, NVIDIA, and community contributors are making 30‑B‑scale models runnable on consumer hardware, underscoring the push toward accessible, high‑performing LLMs.

---

## Trending Models  

### 🧠 Language Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 735 | 7,412 | A 33‑B LLaMA‑style decoder tuned for instruction following. It’s trending for its strong performance‑to‑size ratio on benchmarks. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,204 | 14,047 | Open‑source 7‑B chat model praised for its coherent, conversational style. Community forks have pushed it into the top‑ranked LLMs of the week. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 872 | 8,222 | A compact 4‑B model optimized for low‑latency inference on edge devices. Its “Spark” architecture yields strong zero‑shot QA scores for the size class. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 410 | 8,892 | 1.7‑B LLM focusing on liquid‑style instruction tuning (highly steerable). It’s gaining traction as a lightweight alternative for chatbot demos. |
| [tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8) | tencent | 408 | 165 | A 30‑B multilingual translation model released in FP8 precision. Early adopters highlight its near‑human quality on low‑resource language pairs. |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 367 | 8,218 | A MoE‑enabled 1.5‑B model that mixes text and vision tokens. It’s praised for cost‑effective multimodal reasoning in research prototypes. |

### 🎨 Multimodal & Generation  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 3,588 | 116,770 | The flagship 1017‑parameter multimodal model that converts images + text prompts to detailed text. Its “Flash” training pipeline yields fast inference on GPU‑accelerated servers. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 467 | 13,247 | A 3‑B vision‑language model that excels at image captioning and visual QA. Community demos show strong alignment with user‑specified tones. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,750 | 2,234,788 | The first open‑weight image‑to‑video diffusion model, enabling 2‑second clips from a single frame. Its viral popularity stems from easy integration with the ComfyUI ecosystem. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,973 | 798,943 | Flux‑3 image‑to‑image model fine‑tuned for “Klein” style, delivering high‑fidelity edits in seconds. It’s a favorite on the ComfyUI gallery. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 343 | 8,357 | An OCR model that extracts text from any visual layout without language restrictions. It powers several open‑source document‑automation pipelines. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,633 | 7,515,620 | 27‑B multimodal LLM capable of image‑question answering and detailed captioning. Its massive like count reflects wide adoption in research labs for vision‑language benchmarks. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 534 | 3,095,436 | A diffusion model released as a single‑file for ComfyUI, offering fast loading and high‑resolution generation. It’s a staple in the “MOSS” visual art community. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 160 | 714 | An “any‑to‑any” multimodal encoder‑decoder that supports text, image, and audio inputs. Early adopters cite its flexibility for prototyping cross‑modal assistants. |

### 🔧 Specialized Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 258 | 2,305 | DNA‑sequence‑aware language model trained on genomic corpora. It’s attracting bio‑informatics groups for variant‑description generation. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 241 | 6,944 | A 4‑B LLM fine‑tuned to emit Three.js and WebGL code, enabling quick 3‑D prototype generation. It’s trending among web‑dev hobbyists. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 231 | 338 | 30‑B ASR model delivering near‑real‑time transcription with low error rates on noisy audio. It’s being bundled into Nvidia Riva services. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,366 | 1,891,392 | Video‑mask generation model that extends the SAM family to temporal segmentation. Its release sparked many third‑party video‑editing tools. |
| [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 288 | 791 | A lightweight OCR model optimized for mobile inference, supporting multilingual scripts. It’s used in several open‑source scanning apps. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,095 | 26,740 | High‑fidelity, multi‑speaker text‑to‑speech model trained on dramatic dialogue. Creators favor it for podcast‑style voiceovers. |

### 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 450 | 1,377,570 | GGUF‑packed DeepSeek‑Flash‑1017 using GSQ + RCO mixed‑precision for sub‑4‑bit inference. Its massive download count reflects the community’s appetite for ultra‑compact vision‑language models. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 318 | 27,056 | An aggressively quantized (2‑bit) version of DeepSeek‑Flash‑1017 targeting low‑end CPUs. Early benchmarks show ~2× speed‑up with tolerable quality loss. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,272 | 2,182,980 | GGUF conversion of Qwen‑Image‑2.1 with safety filters removed, enabling unrestricted image generation. Popular among hobbyist artists who demand open‑access content. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 234 | 51,721 | 4‑GB GGUF version of Nemotron‑3.5‑Bolt, delivering 30‑B‑scale performance on laptops with 8 GB VRAM. Frequently referenced in “LLM‑on‑consumer‑GPU” tutorials. |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 327 | 178,000 | Quantized 7‑B Flint model packaged for the new GGUF format; loads instantly in llama.cpp. The community praises its chatty persona after quantization. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882‑Heretic‑Uncensored‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,208 | 1,725,108 | A heavily fine‑tuned GGUF variant of Qwen‑3.8‑27B with “Turbo” prompts and code‑generation heads. Its likes explode due to the “heretic‑uncensored” community vibe. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 465 | 9,150 | FP8‑precision uncensored variant of DeepSeek‑Flash‑1017, delivering ~1.8× faster inference while keeping full vision‑language capability. |
| [XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 232 | 147,273 | GGUF conversion of Spark‑X2.6‑4B for extremely low‑memory deployment. It’s trending after being bundled into several “one‑click” LLM launch scripts. |
| [unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF) | unsloth | 141 | 71,929 | A community‑optimized GGUF build of Nemotron‑3.5‑Bolt, integrating Uns‑loth’s “Turbo” tokenizers. Users report smoother token streaming on CPU‑only setups. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 818 | 14,282 | Fine‑tuned diffusion checkpoint for image generation using the MOSS base. The SFT improves prompt adherence for artistic styles. |

---

## Ecosystem Signal  

Multimodal vision‑language families (DeepSeek‑Flash, Qwen‑3.8) are consolidating their lead, with both raw and heavily quantized variants exploding in popularity. The quantization wave—GGUF, FP8, and mixed‑precision GSQ/RCO—has turned 30‑B‑scale models into “consumer‑grade” assets, reflected by the high download counts for the GGUF DeepSeek and Qwen packs. Open‑weight releases remain dominant; proprietary‑branded models (NVIDIA, Tencent) are increasingly offered in community‑friendly formats rather than locked APIs. Specialized models (DNA generation, 3‑D code, video mask) are carving niche verticals, while fine‑tunes targeting artistic generation (MOSS‑Image, Flux‑3) continue to drive the creative‑AI segment.

---

## Worth Exploring  

1. **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** – The flagship multimodal model blends strong image‑question answering with fast inference; it sets the benchmark for open‑weight vision‑language systems.  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – The first open‑source image‑to‑video diffusion model, enabling short video generation from a single frame; its massive community uptake makes it ideal for experimenting with generative video pipelines.  
3. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** – A mixed‑precision GGUF pack that squeezes the 1017 model into sub‑4‑bit footprint while preserving most multimodal quality, perfect for developers who need high‑quality vision‑language capabilities on limited hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*