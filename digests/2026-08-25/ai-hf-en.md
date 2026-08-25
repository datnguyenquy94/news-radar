# Hugging Face Trending Models Digest 2026-08-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-25 01:41 UTC

---

# Hugging Face Trending Models Digest — 2026-08-25

## Today's Highlights

The Qwen3.8-27B family dominates this week's leaderboard, spawning over a dozen community fine-tunes and quantizations (GGUF, FP8, MLX) that collectively amass millions of downloads. Multimodal video generation surges with MiniMax-H3 (4.4M downloads) and Lightricks LTX-2.5 establishing open-weight alternatives to proprietary video models. DeepSeek-V4-Flash and Moonshot's Kimi-K3 signal continued momentum for Chinese lab releases, while the Ornith MoE series demonstrates growing interest in efficient mixture-of-expert architectures. Abliteration/uncensoring remains the single most popular fine-tuning theme, applied across Qwen, Ornith, and other bases.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,517 | 2,645,226 | Flagship 27B multimodal LLM with image-text-to-text capabilities; leads weekly likes and serves as the base for dozens of community derivatives. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,682 | 3,274,129 | Latest Flash variant from DeepSeek, optimized for fast inference and conversational use; highest download count among pure LLMs this week. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,973 | 2,787,971 | Moonshot's new multimodal model with compressed-tensor support; second-highest likes, signaling strong adoption for feature-extraction and chat. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 398 | 60,294 | 35B MoE (3B active) built on Qwen3.5; showcases efficient sparse scaling for text and image-text tasks. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 204 | 83,192 | Dense 9B counterpart to the MoE series; offers strong instruction-following with lower hardware requirements. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | Speculative-decoding optimized variant of Qwen3.8-27B; targets latency reduction for real-time serving. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | Independent DFlash2 build on Qwen3.8-27B; validates community interest in speculative decoding pipelines. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 230 | 2,976 | Compact ASR-focused model on Qwen3 architecture; niche but notable for on-device speech recognition. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,418 | 4,465,161 | Industry-leading open video generation model (text-to-video, image-to-video); highest downloads overall this week. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,725 | 790,378 | Versatile diffusion model supporting image-to-video, text-to-video, and video-to-video; single-file diffusion format eases deployment. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18,065 | Text-to-music generation with diffusers integration; early but high-interest release for audio synthesis. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 146 | 2,775 | Preview TTS model (ArkTTS-based); signals growing open-weight text-to-speech ecosystem. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,447 | 0 | Corrected Jinja chat templates for Qwen/Qwen3.5; widely referenced fix for template-related inference bugs. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 230 | 0 | Alternative refined chat templates for Qwen3.5; community-driven tooling improvement. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 181 | 0 | Latent upscaler for MiniMax-H3 outputs; auxiliary tool enhancing video generation quality. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,839 | 7,009,063 | Official Unsloth GGUF quantization; highest downloads of any model this week, enabling efficient CPU/GPU inference. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 690 | 1,456,700 | Popular abliterated GGUF with MTP support; demonstrates demand for uncensored local deployments. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 580 | 761,975 | Aggressive MTP uncensored GGUF; multimodal vision support retained after abliteration. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 335 | 1,140,375 | Abliterated GGUF from established fine-tuner huihui-ai; high downloads reflect trust in curation. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 275 | 988,170 | First-party GGUF of the Ornith MoE; MIT license and endpoint compatibility boost enterprise appeal. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 187 | 971,104 | Dense 9B GGUF counterpart; nearly 1M downloads show strong appetite for quantized efficient models. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,030 | 57,947 | MLX-format abliterated model for Apple Silicon; niche but high likes indicate macOS developer enthusiasm. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,098 | 224,114 | FP8 quantized abliterated variant; balances precision and VRAM for H100/A100 deployment. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 697 | 312,627 | Multi-format (MLX, GGUF, safetensors) abliterated release; broad format coverage drives adoption. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 226 | 209,017 | Experimental GAIN/Cold-Fusion training on Qwen3.8-27B; showcases advanced community merging techniques. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 424 | 143,108 | Standard GGUF abliterated release from orcarouter; consistent quality across formats. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 278 | 27,316 | Full-precision abliterated base; lower downloads than GGUF but serves as quantization source. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 170 | 10,482 | Original safetensors abliterated release; reference for downstream quantizations. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 260 | 654,805 | "Heretic" variant with additional uncensoring passes; strong downloads for a derivative fine-tune. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 681 | 3,004,940 | First-party FP8 quantization from Qwen team; 3M+ downloads validate official low-precision support. |

---

## Ecosystem Signal

The Qwen3.8-27B release has catalyzed an unprecedented derivative explosion: 14 of the top 30 models are direct fine-tunes or quantizations of this single base, spanning GGUF, FP8, MLX, and multiple abliteration styles. This mirrors the Llama-2/3 pattern but at accelerated speed—community tooling (Unsloth, llama.cpp, MLX) now produces production-ready artifacts within days. Chinese labs (Qwen, DeepSeek, MiniMax, Moonshot, Z.ai/Ornith) collectively occupy 7 of the top 10 spots by likes, confirming open-weight leadership has shifted decisively toward Asia. Proprietary models are absent from the trending list; the ecosystem is fully open-weight. Quantization diversity is notable: GGUF remains dominant for local inference (7M+ downloads for Unsloth alone), but FP8 and MLX are carving out HPC and Apple Silicon niches respectively. Abliteration/uncensoring is the single largest fine-tuning category, reflecting persistent demand for models without refusal behaviors. Mixture-of-experts (Ornith 35B-A3B) and speculative decoding (DFlash2) indicate the community is actively optimizing for inference economics, not just raw capability.

---

## Worth Exploring

1. **MiniMaxAI/MiniMax-H3** — The only open video model with 4.4M weekly downloads; production-ready text-to-video and image-to-video pipelines via diffusers. Essential for anyone building video generation applications.

2. **Qwen/Qwen3.8-27B** — The central hub of the current ecosystem. Studying its architecture, chat template, and multimodal processor pays dividends across the dozen+ derivatives. First-party FP8/GGUF releases simplify deployment.

3. **ornith-ai/Ornith-1.5-35B-A3B** — Rare open MoE at 35B/3B active parameters with MIT license. Offers a practical testbed for sparse-model serving, quantization (GGUF available), and efficient scaling research.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*