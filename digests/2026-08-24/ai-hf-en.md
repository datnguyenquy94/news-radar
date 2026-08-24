# Hugging Face Trending Models Digest 2026-08-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-24 01:46 UTC

---

# Hugging Face Trending Models Digest — 2026-08-24

## Today's Highlights

The Qwen3.8-27B family dominates this week’s leaderboard, spawning over a dozen community quantizations (GGUF, FP8, MLX) and “abliterated” uncensored variants that collectively account for millions of downloads. Moonshot AI’s Kimi-K3 emerges as a major multimodal contender with nearly 11K likes, while MiniMax-H3 cements its lead in open video generation with 4M+ downloads. DeepSeek-V4 enters the chat in two flavors (Flash and Pro), signaling continued momentum for MoE architectures. Notably, speculative decoding (DFlash2) and MTP-enhanced GGUFs are the hottest optimization trends, reflecting a community focus on inference speed over raw parameter count.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,321 | 2,358,347 | Flagship 27B multimodal LLM with native image-text-to-text conversation; the base for a massive derivative ecosystem. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,950 | 2,727,920 | High-profile multimodal model featuring compressed-tensors optimization; strong feature-extraction and chat capabilities. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,653 | 3,089,709 | Speed-optimized MoE variant of DeepSeek-V4; leads downloads among new foundation models this week. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 672 | 2,653,678 | Official FP8-quantized release from Qwen; drop-in replacement with 2× storage savings and near-lossless quality. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 735 | 57,928 | Full-capability MoE Pro version; lower volume but higher per-user engagement for demanding reasoning tasks. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 365 | 23,516 | Sparse MOE (35B total, 3B active) with image-text support; efficient alternative to dense 27B models. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 183 | 31,496 | Compact 9B dense model from the Ornith lineage; multimodal and MIT-licensed for commercial use. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,378 | 4,039,236 | State-of-the-art open video generation (text-to-video, image-to-video); download volume dwarfs all other generative models. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,643 | 738,345 | Unified diffusion single-file for image-to-video, text-to-video, and video-to-video; strong community adoption. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,206 | 17,421 | Text-to-music diffusion model; niche but high-quality audio generation with diffusers integration. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 166 | 0 | Latent-space upscaler tailored for MiniMax-H3 outputs; early utility model for video post-processing. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 214 | 2,280 | Tiny ASR-focused model (Qwen3 backbone) for on-device speech recognition; 2.3K downloads show niche traction. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 203 | 36,234 | Speculative decoding acceleration for Qwen3.8-27B; 36K downloads indicate strong interest in inference speedups. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 163 | 69,783 | Community DFlash2 build with higher downloads; drop-in speculative drafter for 27B models. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,738 | 6,674,515 | Most-downloaded GGUF quantization; multi-bit options, llama.cpp ready, fuels local LLM adoption. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 651 | 1,334,820 | Popular abliterated GGUF with MTP (multi-token prediction) for faster decoding; 1.3M downloads. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 297 | 943,360 | Abliterated + GGUF; balances uncensored behavior with quantization efficiency for consumer GPUs. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 245 | 579,334 | “Heretic” abliteration variant; distinct refusal-suppression technique attracting half a million pulls. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 539 | 676,697 | Aggressive MTP tuning on uncensored base; multimodal vision support retained in GGUF. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,051 | 190,062 | FP8 abliterated version; keeps multimodal image-text-to-text pipeline at 8-bit precision. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 959 | 47,098 | MLX-optimized abliterated build for Apple Silicon; native Metal acceleration. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 634 | 244,834 | Multi-format (MLX, GGUF, safetensors) abliterated release; broad hardware coverage. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 253 | 369,478 | First GGUF quantization of a 35B MOE model; MIT license enables commercial deployment. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 176 | 359,078 | Compact 9B GGUF with endpoints_compatible tag; ready for managed inference. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 249 | 131,435 | Ridge-quantized GGUF; focuses on quality preservation at low bit-widths. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 211 | 193,794 | Experimental GAIN training + Cold-Fusion merge + MTP; showcases advanced merge/quantization stacking. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 259 | 24,844 | Full-precision abliterated safetensors; reference for downstream quantizers. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,421 | 0 | Jinja chat-template fixes for Qwen3.5/3.8; essential tooling (1.4K likes, zero downloads = template-only). |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 200 | 0 | Alternative chat-template pack for MLX/Qwen; community tooling contribution. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 378 | 108,666 | Second orcarouter GGUF entry; abliterated with standard quantization configs. |

---

## Ecosystem Signal

The Qwen3.8-27B release has become a **gravitational center** for open-weight innovation: its base model sits at #1 by likes, while community derivatives (GGUF, FP8, MLX, abliterated, MTP-enhanced) occupy 14 of the top 30 slots and collectively exceed **15M downloads**. This signals a maturation where **quantization and alignment tuning** now drive more adoption than new foundation models. Moonshot AI’s Kimi-K3 and MiniMax-H3 prove Chinese labs are shipping **globally competitive multimodal flagships** under open weights, challenging the proprietary API moat. DeepSeek-V4’s dual Flash/Pro launch confirms **MoE architectures** are the default path for scaling laws. Meanwhile, the proliferation of **DFlash2 speculative decoding** and **MTP GGUFs** reveals a pragmatic shift: developers prioritize **tokens/sec on consumer hardware** over raw benchmark scores. Fine-tune tooling (chat-template fixes) garners high likes despite zero downloads, highlighting the **infrastructure layer’s hidden value**.

---

## Worth Exploring

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The only open video model with 4M+ downloads; production-ready text-to-video/image-to-video pipeline backed by diffusers integration. Essential for anyone building generative video apps.

2. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — Battle-tested quantization with the widest bit-width matrix (2–8 bit) and 6.7M downloads. Best starting point for local deployment on Mac/Windows/Linux via llama.cpp or Ollama.

3. **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** — Early-access speculative decoding for 27B models; 36K downloads in weeks shows real demand. Drop-in drafter that can **double inference throughput** on single GPUs—critical for latency-sensitive products.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*