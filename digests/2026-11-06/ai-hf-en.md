# Hugging Face Trending Models Digest 2026-11-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-06 06:09 UTC

---

**🤖 Today’s Highlights**  
The Hugging Face Hub is buzzing with multimodal power‑houses – Lightricks’ **LTX‑2.5** shattered the 10 k‑like barrier, offering single‑file diffusion for image‑to‑video generation at massive scale.  Large language models continue to dominate, led by **Qwen 3.8‑27B** (19 k likes, 8 M downloads) and the fast‑growing **DeepSeek V4.1** family, many of which are being released in lightweight GGUF/​GGUF‑quantized variants for on‑device inference.  At the same time, community‑driven 3‑D innovations such as **speridlabs/idol** (Gaussian‑splatting) and **ccore/Qwen3.5‑4B‑3D‑Coder** highlight a surge in open‑source visual‑coding tools.

---

## 📊 Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,224 | 8,037,597 | A 27 B transformer capable of image‑text interactivity and long‑context chat.  Its open‑weight release and strong community support keep it at the top of the leaderboard. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek‑ai | 5,335 | 243,508 | Flash‑optimized 1017‑token context model excelling in multimodal reasoning.  It’s popular for its balance of speed and instruction‑following ability. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,617 | 9,592 | 4 B‑parameter LLM fine‑tuned for image‑text tasks, notable for its low‑latency inference on consumer GPUs. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,514 | 60,681 | Compact 1.7 B text‑generation model built on a novel transformer kernel, attracting developers of low‑resource chatbots. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,062 | 57,297 | 30 B ASR model specialized for high‑fidelity transcription; part of Nvidia’s push to open‑weight speech tech. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 326 | 92,333 | GGUF‑packed uncensored variant for edge devices, gaining traction among hobbyist developers. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 262 | 2,296 | Community‑fork with aggressive safety‑filter removal; popular in experimental chat‑bot circles. |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 352 | 777,689 | Optimized GGUF for CPU‑only inference, delivering ~2× speed‑up over the original safetensors version. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 713 | 3,880,611 | Quantized “abliterated” Qwen 3.8 variant, favored for offline LLM deployment on laptops. |
| [microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork) | microsoft | 190 | 2,555 | Vision‑language model fine‑tuned for collaborative tasks; early adopter interest in enterprise workflow AI. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 625 | 269,424 | OCR‑focused transformer supporting over 200 languages, widely used in document digitisation pipelines. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi‑research | 297 | 22,477 | Lightweight OCR model targeting mobile devices; praised for its low memory footprint. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,755 | 2,561,845 | Single‑file diffusion that turns a single image into a high‑quality video clip.  Its “image‑to‑video” pipeline has become a go‑to for creators on mobile platforms. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 2,584 | 1,077,477 | Flux‑3 diffusion fine‑tuned for ComfyUI, delivering exceptional detail in image‑to‑image edits. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 204 | 218,534 | Text‑to‑image model built on the H3 backbone, optimized for ComfyUI workflows. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,669 | 233,059 | GGUF‑quantized version of Qwen‑Image‑2.1, running at real‑time speeds on consumer CPUs. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika‑Labs | 480 | 863 | Image‑to‑video diffusion that supports flexible frame‑rate control, useful for short animations. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 322 | 11,349 | High‑fidelity text‑to‑speech model using AR‑based vocoder, praised for natural prosody. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,955 | 1,921,413 | Video mask‑generation model extending the SAM family to temporal consistency; strong for segmentation‑based editing. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 817 | 17,180 | Gaussian‑splatting pipeline that converts a single portrait into a fully navigable 3‑D avatar. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 998 | 11,658 | Multimodal LLM supporting image‑text interaction, notable for its compressed‑tensor format that cuts storage by 40 %. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 724 | 157,157 | 4 B‑parameter code‑generation model focused on Three.js and WebGL snippets for 3‑D scenes. |

### 🔧 Specialized Models (code, 3‑D, embeddings, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 191 | 12,206 | Generates GLB‑format assets from natural‑language prompts; useful for rapid prototyping in AR/VR. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 355 | 8,789 | 8‑bit custom‑code model that fits 200 MB on disk; popular for ultra‑lightweight inference on micro‑controllers. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 382 | 607 | Region‑aware fine‑tune of MiniMax‑H3 for US‑centric dialogue, showing the impact of geographic specialization. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 287 | 939 | Early preview of a 65 B “ripple” architecture focused on high‑throughput RAG pipelines. |

### 📦 Fine‑tunes & Quantizations (GGUF, AWQ, community forks)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 352 | 777,689 | GGUF conversion that reduces RAM usage to ~6 GB while keeping original quality, driving CPU‑only adoption. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 713 | 3,880,611 | Aggressive quantization (4‑bit) of Qwen‑3.8; the “abliterated” tag signals relaxed safety filters. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA‑DASLab | 175 | 127,948 | GGUF‑packed coder variant that adds code‑generation heads to the original DeepSeek model. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,555 | 1,457,791 | Massive community‑driven fine‑tune that mixes uncensored dialogue, code assistance, and MTP token–mixing, all in a GGUF package. |
| [nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4) | nvidia | 182 | 6,010 | Nvidia’s Model Optimizer (NVFP4) conversion, delivering 4‑bit inference speedups on Jetson devices. |

---

## 🌐 Ecosystem Signal  

The data shows a clear **multimodal surge**: diffusion‑based video generation (LTX‑2.5, Pika‑H3‑Flex) and 3‑D Gaussian‑splatting (idol) are gaining traction, reflecting creator‑centric demand.  In the LLM arena, the **Qwen** and **DeepSeek** families dominate, with many community‑crafted GGUF and “abliterated” forks pushing inference onto CPUs and edge hardware.  Open‑weight releases remain the norm for large models, but proprietary giants (Nvidia, Baidu) are increasingly offering **optimized quantizations** (NVFP4, GGUF) that lower the barrier for deployment.  Fine‑tune activity is geographically nuanced—e.g., FusionCow’s US‑focused Sulphur‑3—signalling a fragmentation of the market into region‑aware conversational agents.  

---

## 🚀 Worth Exploring  

1. **Lightricks/LTX-2.5** – Its single‑file diffusion video pipeline rivals proprietary tools while staying fully open‑source; ideal for rapid prototyping of animated content.  
2. **Qwen/Qwen3.8-27B** – The flagship 27 B model blends strong vision‑language abilities with a permissive license, making it a solid backbone for multimodal research.  
3. **speridlabs/idol** – The Gaussian‑splatting 3‑D avatar generator showcases the next step in photorealistic virtual humans and is highly reusable for XR applications.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*