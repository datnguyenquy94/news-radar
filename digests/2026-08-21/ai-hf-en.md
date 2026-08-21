# Hugging Face Trending Models Digest 2026-08-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-21 01:46 UTC

---

# Hugging Face Trending Models Digest — 2026-08-21

## Today's Highlights

The Qwen3.8-27B family dominates this week's trending list with the base model leading at 11.7K likes and over a dozen community quantizations (GGUF, FP8, NVFP4, MLX) and abliterated variants collectively amassing millions of downloads. MiniMaxAI emerges as a multimodal powerhouse: MiniMax-H3 (4.2K likes, 3.3M downloads) and MiniMax-Music3 demonstrate strong momentum in video and music generation. DeepSeek-V4 arrives in both Pro and Flash variants, while Moonshot's Kimi-K3 (10.9K likes) signals intense competition in the open-weight multimodal space. Uncensored/abliterated community fine-tunes proliferate, reflecting sustained demand for alignment-modified models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 682 | 43,287 | DeepSeek's latest flagship LLM with enhanced reasoning and coding capabilities; the Pro variant targets high-end enterprise and research workloads with strong benchmark performance. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,121 | 14,592 | Massive 95B active-parameter MoE model trained on 2.4T tokens; showcases Qwen's push into ultra-large sparse architectures for frontier-level capability. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 221 | 1,713 | Community MoE model with 35B total / 3B active parameters; demonstrates efficient sparse scaling and strong instruction-following for its size class. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,576 | 2,547,549 | Optimized "Flash" variant of DeepSeek-V4 balancing speed and quality; 2.5M+ downloads indicate heavy production adoption for cost-sensitive inference. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 156 | 348 | Compact ASR-focused model with text-generation capability; targets on-device speech recognition with minimal footprint. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,751 | 1,373,584 | Flagship 27B multimodal model supporting image-text-to-text; leads weekly likes and anchors a vast quantization/fine-tune ecosystem. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,106 | 14,471 | State-of-the-art text-to-music diffusion model; generates high-fidelity, structured compositions from natural language prompts. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,417 | 611,825 | Unified video generation model supporting text-to-video, image-to-video, and video-to-video; 611K downloads signal strong creator adoption. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,242 | 3,308,673 | Image-text-to-video foundation model; 3.3M downloads and 4.2K likes make it the most distributed video model this week. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478,622 | 30B parameter multimodal LLM with strong image-text reasoning; notable for open-weight release from meta-models collective. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,884 | 2,349,853 | Highly capable multimodal model with feature-extraction and compressed-tensor support; 10.9K likes reflect intense community interest. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 300 | 0 | Community fine-tune of MiniMax-H3 for specialized video generation; early release with zero downloads but notable base model lineage. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 654 | 380,072 | Optimized Turbo variant of MiniMax-H3 for faster image-to-video inference; 380K downloads show demand for accelerated video gen. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 242 | 1,373 | Experimental multimodal model with note-taking/annotation focus; early preview from dots-studio research group. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 156 | 348 | Compact ASR-specialized model with text-generation capability; targets on-device speech recognition with minimal footprint. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,365 | 5,126,652 | Official Unsloth GGUF quantization of Qwen3.8-27B; 5.1M downloads make it the most distributed model this week. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1,517,643 | First-party FP8 quantization from Qwen team; 1.5M downloads show strong adoption for H100/H200 inference pipelines. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 714 | 2,628 | MLX-format abliterated variant for Apple Silicon; enables uncensored multimodal inference on Mac with native acceleration. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 678 | 76,109 | FP8-quantized abliterated version; combines alignment removal with 8-bit precision for high-throughput uncensored serving. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 514 | 979,768 | Popular GGUF abliterated release with MTP support; near 1M downloads indicate broad local LLM community usage. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 368 | 268,258 | Aggressively abliterated GGUF with multimodal vision support; targets users seeking minimal refusal behavior. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831,483 | NVFP4 quantization for Blackwell architecture; 831K downloads show early adoption of 4-bit FP formats. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 271 | 4,415 | Multi-format (MLX, safetensors, GGUF) abliterated release; provides format flexibility for alignment-removed inference. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 225 | 55,074 | GGUF quantization with Ridge regression-based calibration; aims for improved perplexity at low bit-widths. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 239 | 52,382 | Additional GGUF abliterated release from orcarouter; expands format coverage for uncensored deployment. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 201 | 187,008 | Community abliterated GGUF with 187K downloads; part of huihui-ai's alignment-modification series. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 190 | 326,638 | "Heretic" branded abliterated GGUF; 326K downloads reflect niche but active demand for heavily modified alignment. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 183 | 186,470 | Dense 27B abliterated GGUF; focuses on preserving base model capability while removing refusal vectors. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 202 | 10,540 | Full-precision safetensors abliterated variant; smaller download count but enables custom quantization pipelines. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 163 | 53,691 | GGUF quantization of the Ornith MoE model; MIT licensed and endpoints-compatible for easy deployment. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,340 | 0 | Critical utility fixing Jinja chat templates across Qwen/Qwen3.5 models; 1.3K likes highlight widespread template pain points. |

---

## Ecosystem Signal

The Qwen3.8-27B release has catalyzed an unprecedented quantization and fine-tune cascade: 14 distinct community variants (GGUF, FP8, NVFP4, MLX) plus 7 abliterated/uncensored forks collectively exceed 10M downloads, demonstrating that open-weight multimodal models now spawn immediate, massive derivative ecosystems. MiniMaxAI's dual dominance in video (MiniMax-H3, 3.3M downloads) and music (MiniMax-Music3) establishes them as the leading open video/audio generation family, with community Turbo and fine-tune variants already emerging. DeepSeek-V4's Flash variant (2.5M downloads) vastly outperforms Pro in adoption, confirming the market's preference for efficiency-optimized models over maximum-capability flagships. Moonshot's Kimi-K3 (10.9K likes) and Meta-Models' Muse-Glimmer-30B (1.7K likes) signal intensifying competition in the 30B-class multimodal space. Quantization diversity has exploded beyond GGUF: FP8, NVFP4, and MLX formats now coexist as first-class distribution targets, reflecting hardware fragmentation across H100, Blackwell, and Apple Silicon. The proliferation of abliterated models (8+ variants this week alone) indicates sustained demand for alignment modification, though download concentration in a few popular forks (JonathanColetti, huihui-ai, 0bserverx) suggests consolidation around trusted community actors.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The central hub of this week's ecosystem; its native multimodal capability, massive community quantization support, and 1.3M base downloads make it the default

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*