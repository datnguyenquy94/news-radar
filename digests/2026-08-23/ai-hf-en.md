# Hugging Face Trending Models Digest 2026-08-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 01:49 UTC

---

# Hugging Face Trending Models Digest — 2026-08-23

## Today's Highlights

The Qwen 3.8 family dominates this week's trends, with the 27B multimodal flagship spawning a massive ecosystem of uncensored, abliterated, and quantized variants across GGUF, MLX, and FP8 formats. DeepSeek's V4 series demonstrates strong momentum for efficient open-weight LLMs, with the Flash variant nearing 3M downloads. Video generation is surging: MiniMax-H3 leads with nearly 4M downloads, while Lightricks' LTX-2.5 and the MiniMax-H3 fine-tune 10Eros-Max signal growing creator adoption. Moonshot's Kimi-K3 enters as a formidable multimodal competitor, and MOE architectures (Qwen 2.4T-A95B, Ornith 35B-A3B) attract increasing interest for scalable inference.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,632 | 2,976,281 | High-efficiency open-weight LLM optimized for fast inference; leads the V4 series with nearly 3M weekly downloads, signaling strong production adoption. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 719 | 54,566 | Full-capability variant of the V4 family; lower download volume suggests niche use for quality-critical tasks where latency is secondary. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,146 | 17,386 | Massive MOE text model with 2.4T parameters (95B active); early traction indicates research interest in ultra-sparse scaling for frontier capabilities. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,929 | 2,612,739 | Major multimodal release from Moonshot AI; compressed-tensors format enables efficient deployment while 10.9K likes reflect high community anticipation. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,757 | 517,564 | Conversational multimodal model with strong engagement; 1.7K likes suggest quality recognition despite smaller parameter count vs. Qwen 27B. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 323 | 12,611 | MOE architecture (35B total, 3B active) with multimodal support; MIT license and low active params make it attractive for resource-constrained deployments. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 163 | 15,301 | Dense 9B multimodal counterpart to the MOE variant; modest adoption but provides a baseline for comparing MOE vs. dense efficiency trade-offs. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 202 | 1,913 | ASR-specialized model built on Qwen3; tiny download count indicates early-stage or niche deployment for on-device speech recognition. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,143 | 2,090,699 | Flagship multimodal model (image-text-to-text); 12K likes and 2M+ downloads confirm it as the current community standard for open vision-language tasks. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 664 | 2,306,777 | Official FP8-quantized release; surpasses base model downloads (2.3M vs 2.1M), proving strong demand for reduced-precision production deployment. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,338 | 3,899,160 | Leading image-text-to-video model; 3.9M downloads dwarf peers, establishing it as the de facto open standard for controllable video generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,568 | 694,670 | Versatile video model supporting image-to-video, text-to-video, and video-to-video; 694K downloads show broad creative-tool adoption. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,183 | 16,644 | Text-to-music generation model; low downloads vs. likes suggest evaluation-heavy usage or gated access limiting broad distribution. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 317 | 0 | Fine-tune of MiniMax-H3 for specialized video generation; zero downloads may indicate private hosting or early pre-release stage. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 194 | 29,705 | Speculative decoding accelerator for Qwen 3.8-27B; 29K downloads reflect active optimization for latency-critical LLM serving. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 202 | 1,913 | ASR-focused mini model; targets on-device speech-to-text with Qwen3 backbone, addressing the growing edge-AI audio niche. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 159 | 0 | Latent upscaler for MiniMax-H3 outputs; zero downloads suggest it's a companion component distributed via MiniMax ecosystem rather than standalone. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,628 | 6,320,542 | Official GGUF quantization by Unsloth; 6.3M downloads (3× base model) confirms GGUF as the dominant local-inference format. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 887 | 34,909 | MLX-format uncensored variant for Apple Silicon; 35K downloads show strong Mac-focused adoption for unrestricted multimodal use. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 991 | 142,846 | FP8 uncensored release; 143K downloads indicate server-grade deployment demand for less-restricted multimodal models. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 535 | 164,950 | Abliterated (refusal-removed) version in MLX/GGUF/safetensors; 165K downloads highlight persistent demand for alignment-modified models. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 489 | 486,221 | Aggressive MTP (multi-token prediction) GGUF fine-tune; 486K downloads show appetite for speed-optimized uncensored variants. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 624 | 1,223,422 | Popular GGUF uncensored release with MTP; 1.2M downloads make it one of the most widely distributed community fine-tunes. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 337 | 85,371 | OrcaRouter's GGUF uncensored variant; moderate adoption vs. peers suggests differentiation via routing/serving integration. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,398 | 0 | Chat-template fixes for Qwen models (Jinja/MLX); high likes with zero downloads indicate it's a utility resource referenced during model setup. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 256 | 635,416 | Abliterated GGUF with 635K downloads; strong traction for a single-author fine-tune, reflecting trust in Huihui's curation quality. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 233 | 173,935 | GGUF quantization of the MOE model; 174K downloads validate MOE viability in llama.cpp ecosystem. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 246 | 21,612 | Full-precision abliterated safetensors; lower downloads vs. GGUF version confirms quantization preference for local deployment. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 245 | 97,247 | Ridge-regularized GGUF quant; 97K downloads show niche interest in quantization-aware fine-tuning techniques. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 228 | 505,813 | "Heretic" branded abliterated GGUF; 505K downloads demonstrate branding-driven adoption in the uncensored model marketplace. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 193 | 176,969 | Experimental GAIN/Cold-Fusion trained GGUF with MTP; 177K downloads for a highly specialized recipe indicates advanced community experimentation. |

---

## Ecosystem Signal

The Qwen 3.8-27B multimodal model has become the undisputed center of gravity for open-weight vision-language development, spawning **14 distinct community variants** in this week's top 30 alone—spanning GGUF, MLX, FP8, abliterated, uncensored, and speculative-decoding flavors. This Cambrian explosion of fine-tunes signals that **base-model

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*