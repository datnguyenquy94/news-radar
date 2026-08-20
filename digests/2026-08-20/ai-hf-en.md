# Hugging Face Trending Models Digest 2026-08-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-20 01:40 UTC

---

# Hugging Face Trending Models Digest — 2026-08-20

## Today's Highlights

The Qwen 3.8 family dominates this week's leaderboard, with the flagship **Qwen3.8-27B** amassing over 11K likes and 1M+ downloads while spawning a massive ecosystem of community quantizations (GGUF, FP8, MLX, NVFP4) and uncensored/abliterated fine-tunes. **MiniMaxAI** proves its cross-modal strength: **MiniMax-H3** (image-text-to-video) pulls 4.1K likes and 3M+ downloads, while **MiniMax-Music3** leads audio generation. **DeepSeek-V4-Flash-0731** surges to 3.5K likes and 2.3M downloads, signaling strong demand for efficient MoE models. **Moonshot's Kimi-K3** enters at 10.8K likes, reinforcing the rise of compressed-tensor multimodal LLMs. Notably, **Comfy-Org's MiniMax-H3 wrapper** logs an extraordinary 15.2M downloads, highlighting ComfyUI as a primary distribution channel for video models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,487 | 1,006,235 | Qwen's latest 27B multimodal flagship supporting image-text-to-text; leads the week with 11K+ likes and a thriving quantization ecosystem. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 601 | 1,063,646 | Official FP8-quantized variant of Qwen3.8-27B delivering near-lossless quality at half the memory; already exceeds 1M downloads. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,100 | 12,699 | Massive 2.4T-token trained MoE (95B active) for text generation; showcases Qwen's scaling push despite modest download volume. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 634 | 37,583 | DeepSeek's Pro-tier MoE model optimized for reasoning and coding; steady adoption with 37K downloads in a week. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,549 | 2,330,940 | Lightweight Flash variant balancing speed and capability; 3.5K likes and 2.3M downloads signal strong production demand. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,854 | 2,289,863 | Compressed-tensor multimodal LLM with feature-extraction support; 10.8K likes reflect enthusiasm for efficient long-context models. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,702 | 430,313 | 30B image-text-to-text model from meta-models; gaining traction as an open-weight alternative for visual reasoning. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 232 | 1,239 | Early preview of dots3-note multimodal model; niche but growing interest in specialized instruction-tuned variants. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,185 | 3,055,205 | Flagship image-text-to-video model; 4K+ likes and 3M downloads establish MiniMax as a video generation leader. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,325 | 555,993 | Versatile diffusion model supporting image-to-video, text-to-video, and video-to-video; 555K downloads show broad creative adoption. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,038 | 13,138 | State-of-the-art text-to-music generation; 1K+ likes despite lower downloads indicate high-quality niche appeal. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 625 | 340,984 | Turbo-optimized MiniMax-H3 variant for faster image-to-video inference; 340K downloads prove demand for speed. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 283 | 0 | Fine-tune of MiniMax-H3 for enhanced image-text-to-video; zero downloads suggest early preview or access-gated release. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 270 | 26,566 | Compact 2.9B text-to-image model optimized for ComfyUI; 26K downloads show strong community integration. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,086 | 4,318,134 | Unsloth's optimized GGUF quantization; 4.3M downloads make it the most popular local-inference format for Qwen3.8. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,445 | 15,213,225 | ComfyUI-native wrapper for MiniMax-H3; staggering 15.2M downloads reveal ComfyUI as dominant video-model runtime. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,165 | 3,033,363 | Heavily merged uncensored GGUF with MTP; 3M+ downloads highlight appetite for uncensored, roleplay-optimized models. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 467 | 766,812 | Uncensored GGUF with MTP support; 766K downloads show strong demand for alignment-removed variants. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,290 | 0 | Corrected Jinja chat templates for Qwen 3.5/3.8; 1.3K likes with zero downloads indicates template-only resource. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 288 | 653,042 | NVFP4 quantization for Blackwell GPUs; 653K downloads signal early adoption of next-gen quantization formats. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 614 | 60,078 | FP8 uncensored variant; 60K downloads show FP8 gaining traction for uncensored deployments. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 601 | 27 | MLX port for Apple Silicon; minimal downloads reflect niche but dedicated Mac inference community. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 289 | 131,113 | Aggressive MTP uncensored GGUF with vision support; 131K downloads for multimodal uncensored use. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 193 | 325,083 | ComfyUI integration for MiniMax-Music3; 325K downloads extend music generation to node-based workflows. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 197 | 32,454 | Ridge-regularized GGUF quantization; 32K downloads for quality-focused local inference. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 170 | 164,263 | Abliterated (safety-removed) GGUF; 164K downloads show consistent demand for de-aligned models. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 172 | 94,234 | huihui-ai's abliterated GGUF variant; 94K downloads for uncensored multimodal chat. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 188 | 26,472 | Additional uncensored GGUF from orcarouter; 26K downloads in a crowded uncensored field. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 160 | 245,266 | Heretic-merged abliterated GGUF; 245K downloads demonstrate Heretic merge popularity. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 167 | 7,207 | Full-precision abliterated safetensors; lower downloads reflect GGUF preference for local deployment. |

---

## Ecosystem Signal

**Qwen 3.8 has become the undisputed community hub**: the base model (11.5K likes) anchors a quantization/fine-tune explosion spanning GGUF (Unsloth, DavidAU, JonathanColetti, 10+ others), FP8 (official + orcarouter), MLX, and NVFP4 — collectively exceeding 10M downloads

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*