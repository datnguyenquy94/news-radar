# Hugging Face Trending Models Digest 2026-08-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-16 01:47 UTC

---

# Hugging Face Trending Models Digest — 2026-08-16

## Today's Highlights

The Qwen ecosystem dominates this week's leaderboard with **Qwen3.8-27B** topping likes (9,811) and spawning a full quantization stack (GGUF, FP8, NVFP4) plus uncensored community fine-tunes. **MiniMax-H3** has become a video-generation hub: the base model hits 2.2M downloads while ComfyUI ports, Turbo variants, LoRAs, and GGUF quantizations collectively drive millions more. **Moonshot's Kimi-K3** surges to 10.7K likes and 2.1M downloads, signaling strong adoption of its compressed-tensor architecture. DeepSeek-V4 Flash outperforms Pro on both likes (3.4K vs 494) and downloads (1.8M vs 20K), reflecting community preference for efficient serving. Quantization and deployment-ready formats (GGUF, FP8, NVFP4) now accompany virtually every major release within days.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,811 | 91,917 | Flagship 27B multimodal LLM with image-text-to-text pipeline; leads weekly likes and anchors a large quantization/fine-tune ecosystem. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,728 | 2,100,680 | Compressed-tensor 3B-class model achieving near-frontier performance; highest likes and massive downloads indicate production adoption. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,425 | 1,798,247 | Efficient V4 variant optimized for inference speed; 90× more downloads than Pro version shows strong developer preference for Flash. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,581 | 246,454 | 30B multimodal model with strong conversational benchmarks; active GGUF quantization chain extends edge deployment reach. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 973 | 6,381 | Massive 95B-active MoE (2.4T total params) for text generation; early adoption despite high hardware requirements. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 494 | 19,945 | Full-capability V4 Pro release; lower traction vs Flash suggests cost/performance trade-offs favor distilled variants. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 274 | 170,554 | NVFP4-quantized 30B MoE with 3B active params; targets low-latency inference on NVIDIA hardware. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 631 | 135,448 | Liquid foundation model (non-transformer) at 2.6B; novel architecture gaining traction for efficient reasoning. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 153 | 62,965 | BF16 baseline of the Nemotron Lightning MoE; companion to NVFP4 version for accuracy-critical workloads. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 262 | 4,832 | Tiny hybrid-architecture model with MIT license; early-stage but notable for custom code and US-region tagging. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 168 | 240 | Experimental dots3_note architecture; minimal downloads indicate pre-release research preview. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 198 | 10,745 | FP8-quantized MoE variant; enables single-node deployment of 95B-active model with reduced memory footprint. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,978 | 2,212,155 | Flagship image-text-to-video model; 2.2M downloads make it the most downloaded video generator this week. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 948 | 378,439 | Unified diffusion for image-to-video, text-to-video, and video-to-video; single-file format eases ComfyUI integration. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 771 | 5,079 | Text-to-music diffusion model; niche but growing interest in controllable audio generation. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 518 | 211,917 | Turbo-distilled MiniMax-H3 for faster image-to-video; 211K downloads show strong demand for speed-optimized variants. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 761 | 0 | LoRA adapter for MiniMax-H3-Turbo enabling text-to-video/audio-video tasks; zero downloads may indicate fresh upload. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 199 | 12,737 | Specialized LoRA for photorealistic human generation in MiniMax-H3; practical fine-tune for creator workflows. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 169 | 173,741 | GGUF-quantized MiniMax-H3 for CPU/edge video generation; 173K downloads highlight demand for local video models. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 194 | 16,829 | Text-to-image diffusion single-file model optimized for ComfyUI; community-driven anime/stylized generation. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 147 | 4,598 | Vision-language variant of Liquid foundation model; early multimodal exploration of non-transformer architecture. |

### 🔧 Specialized Models (code, math, medical, embeddings)

*No models in this category this week.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,242 | 867,963 | GGUF quantization of Qwen3.8-27B; 867K downloads lead all quantized models this week. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,055 | 2,983,500 | Heavily fine-tuned + GGUF uncensored variant; 3M downloads top the entire leaderboard for community builds. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 438 | 682,188 | GGUF quantization of Muse-Glimmer-30B; 682K downloads extend 30B model to consumer hardware. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 433 | 123,157 | Official FP8 quantization from Qwen; 123K downloads show enterprise adoption of 8-bit serving. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 281 | 321,049 | Author-released GGUF with arXiv references; 321K downloads complement unsloth's version. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,349 | 12,790,850 | ComfyUI-optimized MiniMax-H3 diffusion single-file; 12.8M downloads dwarf base model—ecosystem integration drives scale. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 170 | 90,924 | NVFP4 quantization targeting NVIDIA TensorRT-LLM; 90K downloads reflect H100/H200 deployment focus. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 169 | 0 | Uncensored FP8 fine-tune; zero downloads suggests very recent publication. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 356 | 0 | Community ComfyUI port of MiniMax-H3; companion to Comfy-Org's official integration. |

---

## Ecosystem Signal

**Qwen and MiniMax define the current momentum poles.** Qwen's 27B/95B MoE family now ships with same-day FP8, NVFP4, and GGUF variants—both from the vendor (Qwen) and the quantization specialist (unsloth)—plus a thriving uncensored fine-tune subculture (DavidAU, orcarouter). This full-stack release cadence signals a maturation where open-weight labs treat quantization as a first-class deliverable, not an afterthought. MiniMax-H3 demonstrates the video-generation flywheel: a single base model (2.2M downloads) spawns Turbo distillations, multiple LoRA specializations (realism, people), two independent ComfyUI ports (Comfy-Org at 12.8M, Kijai), and a GGUF port—all within weeks. The 12.8M Comfy-Org downloads versus 2.2M base-model downloads quantifies how **workflow integration multiplies reach 6×**. DeepSeek-V4 Flash vs Pro (1.8M vs 20K downloads) reveals a clear market signal: **developers overwhelmingly prefer distilled, deployment-ready variants over flagship checkpoints**. Moonshot's Kimi-K3 (10.7K likes, compressed tensors) and LiquidAI's LFM family (non-transformer) show architectural diversification gaining mindshare alongside scaling. Proprietary models (MiniMax, DeepSeek, Moonshot) lead downloads, but their open-weight releases and community quantization chains (unsloth, GGUF) blur the open/closed line—**the ecosystem now runs on open formats (GGUF, FP8, safetensors) even when weights originate from closed labs**.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B-FP8** — Official 8-bit quantization from the model authors; 123K downloads validate production readiness. Ideal for teams needing 27B multimodal reasoning on single 48GB/80GB GPUs without third-party quantization risk.

2. **Comfy-Org/MiniMax-H3** — The 12.8M-download ComfyUI integration is the de facto standard for MiniMax-H3 workflows. Study its single-file diffusion packaging and node design if building video-generation pipelines or ComfyUI extensions.

3. **moonshotai/Kimi-K3** — Highest likes (10.7K) and 2.1M downloads for a compressed-tensor architecture. Its feature-extraction pipeline and non-standard weight format warrant investigation for efficient edge deployment and novel architecture research.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*