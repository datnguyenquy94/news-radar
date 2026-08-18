# Hugging Face Trending Models Digest 2026-08-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-18 01:40 UTC

---

# Hugging Face Trending Models Digest — 2026-08-18

## Today's Highlights

The Qwen 3.8 family dominates this week's leaderboard with five variants in the top 30, led by the flagship **Qwen3.8-27B** (10.7K likes) and its MoE counterpart **Qwen3.8-2.4T-A95B**. Video generation sees a breakthrough with **MiniMax-H3** (4K likes, 2.4M downloads) and its Turbo/LoRA ecosystem, while **Kimi-K3** from Moonshot AI emerges as the most-downloaded multimodal model (2.1M downloads). Quantization ecosystems are thriving: unsloth's GGUF/NVFP4 conversions and ComfyUI ports collectively pull tens of millions of downloads, signaling massive local-deployment demand. DeepSeek's V4 series (Pro + Flash) continues pushing efficient frontier models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,726 | 415,039 | Flagship 27B multimodal LLM with image-text-to-text capabilities; leads weekly likes and anchors a large quantization/fine-tune ecosystem. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,802 | 2,163,953 | High-capacity multimodal model using compressed-tensors; tops downloads chart, signaling strong adoption for vision-language tasks. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,499 | 1,978,298 | Efficient V4 variant optimized for speed; nearly 2M downloads reflect demand for fast, capable open-weight chat models. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,662 | 334,099 | 30B image-text-to-text model with conversational focus; steady downloads indicate niche adoption for multimodal dialogue. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,041 | 9,465 | Massive 2.4T-parameter MoE (95B active); showcases Qwen's scaling ambition though downloads remain modest vs. dense variants. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 574 | 25,006 | Full-capability V4 Pro release; lower downloads than Flash suggest users prefer the efficiency-optimized variant. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 307 | 231,271 | NVFP4-quantized Nemotron for inference efficiency; strong downloads show enterprise/hardware-aligned adoption. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 307 | 6,266 | Compact hybrid-architecture model with custom code; targets resource-constrained conversational deployments. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 207 | 633 | Early-access multimodal note-taking assistant; low metrics indicate pre-release/community-testing phase. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 169 | 69,833 | BF16 reference release for Nemotron Lightning; serves as quality baseline for quantized variants. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 162 | 6,816 | 3B liquid foundation model with vision-language support; explores non-transformer architecture for edge multimodal. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,088 | 2,403,238 | Flagship image-text-to-video model; 2.4M downloads and a thriving LoRA/ComfyUI ecosystem make it the video generation leader. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,112 | 465,529 | Versatile diffusion model supporting image→video, text→video, and video→video; strong adoption for creative workflows. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 586 | 264,351 | Accelerated MiniMax-H3 variant (T2V/I2V/R2V); 264K downloads show demand for faster video inference. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 906 | 10,375 | Text-to-music generation with diffusers backend; modest downloads suggest niche but growing audio-gen interest. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 233 | 23,202 | Text-to-image diffusion model optimized for ComfyUI; community-driven with steady creative adoption. |

### 🔧 Specialized Models (code, math, medical, embeddings)

*No models in this category this week.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,403 | 14,015,769 | ComfyUI-native port of MiniMax-H3; **14M downloads** — the single highest-download artifact this week, showing massive workflow integration. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,120 | 3,033,928 | Heavily merged/uncensored Qwen 3.6 27B GGUF with MTP; 3M downloads prove appetite for curated, license-flexible local chat models. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,636 | 2,727,609 | Official unsloth GGUF quantization of Qwen3.8-27B; 2.7M downloads confirm unsloth as primary local-deployment channel. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 470 | 755,125 | GGUF conversion of Meta's Muse-Glimmer; 755K downloads extend multimodal LLM reach to consumer GPUs. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 240 | 378,177 | NVFP4-quantized Qwen3.8-27B for NVIDIA hardware; 378K downloads highlight hardware-specific optimization demand. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 307 | 357,701 | Uncensored GGUF variant with MTP; 357K downloads show persistent demand for alignment-modified models. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 532 | 495,646 | First-party FP8 quantization from Qwen; nearly 500K downloads indicate trust in vendor-provided compressed weights. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 167 | 256,988 | ComfyUI port of MiniMax-Music3; 257K downloads extend audio generation to node-based workflows. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,211 | 0 | Jinja chat-template fixes for Qwen 3.5; 1.2K likes with zero downloads reflects utility-as-config (not weights) distribution. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 244 | 18,562 | LoRA for photorealistic human video in MiniMax-H3; 18K downloads show specialization demand atop base video model. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 440 | 15,812 | Uncensored FP8 variant; lower downloads vs. GGUF suggest FP8 adoption still trails llama.cpp ecosystem. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 220 | 12,295 | FP8 quantization of the 95B-active MoE; modest downloads reflect hardware requirements for MoE inference. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 786 | 0 | LoRA for MiniMax-H3 Turbo (T2V/A2V); likes without downloads suggest early sharing/preview phase. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 237 | 0 | Fine-tune of MiniMax-H3 for image-text-to-video; zero downloads indicate very recent or private release. |

---

## Ecosystem Signal

**Qwen 3.8 has become the de facto open-weight flagship family**, spawning five first-party variants (dense, MoE, FP8) plus a massive community quantization/fine-tune tail (unsloth GGUF/NVFP4, uncensored forks, merges). **MiniMax-H3 owns the video generation mindshare**: 2.4M base downloads, 14M ComfyUI port downloads, and a growing LoRA/Turbo ecosystem — a rare case where a single model anchors an entire sub-ecosystem. **Quantization is no longer an afterthought**: unsloth's GGUF/NVFP4 releases routinely exceed base-model downloads, and first-party FP8 drops (Qwen, DeepSeek) signal vendors treating compressed weights as primary artifacts. **Open-weight models dominate the leaderboard**; no proprietary/API-only models appear. **ComfyUI integration is a distribution superpower** — the two Comfy-Org ports alone account for ~14.3M downloads, dwarfing most base models. **MoE at scale remains niche**: Qwen's 2.4T MoE and Nemotron's 30B-A3B attract attention but lack the download velocity of dense 27–30B models, suggesting infrastructure friction persists.

---

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The week's most-liked model (10.7K) with a complete quantization stack (GGUF, FP8, NVFP4) and uncensored forks. Ideal for studying a production-grade multimodal LLM with full local-deployment support.

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The video generation centerpiece: 2.4M downloads, ComfyUI-native, LoRA-extensible, and a Turbo variant for speed. Best entry point for open video synthesis research or application building.

3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 2.7M downloads make it the *de facto* way to run Qwen3.8 locally. Study its quantization config and llama.cpp compatibility for efficient deployment patterns.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*