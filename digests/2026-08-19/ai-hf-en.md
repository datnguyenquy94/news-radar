# Hugging Face Trending Models Digest 2026-08-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-19 01:42 UTC

---

# � 🤗 Hugging Face Trending Models Digest — 2026-08-19

## 1. Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard, with the flagship 27B multimodal model topping likes (11.1k) and its FP8/GGUF/NVFP4 variants driving massive download volumes. MiniMaxAI makes a strong showing in generative media: MiniMax-H3 (4.1k likes, 2.8M downloads) and MiniMax-Music3 lead text-to-video and text-to-music respectively, amplified by ComfyUI-optimized fine-tunes. DeepSeek’s V4 series (Pro and Flash) and Moonshot’s Kimi-K3 (10.8k likes) confirm sustained momentum for open-weight MoE and long-context architectures. Community quantization and “uncensored” fine-tunes proliferate—especially around Qwen 27B—signaling strong practitioner demand for local, customizable deployments.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,066 | 11,212 | A massive MoE text model (95B active params) trained on 2.4T tokens; trending for its scale and strong conversational benchmarks. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 602 | 30,985 | DeepSeek’s latest flagship MoE for text generation; notable for high coding/math performance and 128K context. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,527 | 2,123,462 | Distilled “Flash” variant of V4; trending due to 3.5k likes and 2.1M downloads, offering speed/quality trade-off. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 323 | 269,372 | NVIDIA’s hybrid MoE (3B active) quantized to NVFP4; targets low-latency inference on Blackwell GPUs. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 227 | 13,344 | Official FP8 quantization of the 2.4T MoE; reduces VRAM while preserving MoE routing quality. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 320 | 9,990 | Compact hybrid (Bailing) model for conversational use; trending for its tiny footprint and custom architecture. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,150 | 665,513 | Flagship 27B vision-language model; leads weekly likes (11.1k) and sets new bar for open multimodal chat. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,146 | 2,855,539 | Text-to-video and image-to-video model; 4.1k likes and 2.8M downloads show explosive adoption for generative video. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,224 | 503,632 | Unified video generation (T2V, I2V, V2V) in a single diffusion file; 500k+ downloads reflect creator demand. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,682 | 384,097 | 30B multimodal model from Meta’s research line; strong image-text reasoning and 1.6k likes. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 963 | 11,745 | Text-to-music diffusion model; niche but high-quality audio generation with 963 likes. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,826 | 2,226,898 | Moonshot’s 3rd-gen multimodal model; 10.8k likes and 2.2M downloads highlight demand for long-context VL. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 610 | 300,279 | Turbo-distilled MiniMax-H3 variant for faster video generation; 300k downloads show community optimization. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 249 | 24,893 | Text-to-image diffusion single file; ComfyUI-ready and lightweight (2.9B). |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 221 | 1,120 | Experimental image-text-to-text model; early preview of dots3 architecture. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 174 | 9,101 | Liquid Foundation Model 2.5 VL (3B); novel non-transformer architecture for vision-language. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 564 | 741,011 | Official FP8 quant of Qwen3.8-27B; 741k downloads prove appetite for efficient multimodal deployment. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,824 | 3,561,466 | GGUF quantization of Qwen3.8-27B; 3.5M downloads make it the most downloaded model this week. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,142 | 3,020,528 | Heavily fine-tuned & GGUF’d 27B “uncensored” merge; 2.1k likes and 3M downloads show community hunger for unaligned models. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,426 | 14,641,908 | ComfyUI-native fine-tune of MiniMax-H3; staggering 14.6M downloads indicate massive workflow integration. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 414 | 558,767 | Uncensored GGUF of Qwen3.8-27B with MTP; 558k downloads for local unrestricted chat. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 534 | 45,465 | FP8 quant + abliterated fine-tune; targets high-throughput uncensored inference. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 262 | 523,919 | NVFP4 quantization for Blackwell; 523k downloads reflect early adoption of 4-bit FP formats. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 179 | 285,444 | ComfyUI fine-tune of MiniMax-Music3; 285k downloads for node-based music generation. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 283 | 0 | MLX format for Apple Silicon; zero downloads yet but 283 likes signal Mac community interest. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 204 | 27,745 | Aggressive MTP fine-tune + GGUF; multimodal uncensored variant with 27k downloads. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 173 | 12,854 | Ridge-regularized GGUF quant; explores quantization-aware fine-tuning. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,258 | 0 | Jinja chat-template fixes for Qwen 3.5; 1.2k likes show developer pain-point around templating. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 266 | 0 | Fine-tune of MiniMax-H3 for “Eros” style video; zero downloads but 266 likes for niche creative use. |
| [unsloth/Muse-Glimmer-30B

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*