# Hugging Face Trending Models Digest 2026-09-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-02 04:06 UTC

---

# Hugging Face Trending Models Digest — 2026-09-02

## Today's Highlights

The Hugging Face Hub is dominated by the **Qwen 3.8** and **GLM 5.3** families, which together occupy over half of the top-30 spots across base, quantized, and fine-tuned variants. Multimodal models—especially image-text-to-text and text-to-video—are surging, with MiniMax-H3, LTX-2.5, and Kimi-K3 driving massive download volumes. Community quantization (GGUF, FP8, MLX) and “uncensored” fine-tunes have become a massive parallel ecosystem, often exceeding base-model engagement. Specialized models remain niche but notable, with time-series forecasting (TimesFM-3.0) and a high-performance MoE coder (Tiel-Coder-35B) appearing. Proprietary labs (Qwen, Z.ai, DeepSeek, MiniMax, Moonshot) continue to lead frontier releases, while open-weight derivatives fuel downstream innovation.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,472 | 94,403 | A text-only MoE model using DSA (Dynamic Sparse Attention) for efficient long-context reasoning. Trending as the flagship base for the GLM 5.3 family, with strong instruction-following and a growing quantized ecosystem. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 386 | 3,516 | Tencent’s Hunyuan-derived preview LLM, showcasing early access to their next-gen architecture. Gaining attention for its potential Chinese/English bilingual capabilities and enterprise backing. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 186 | 6,813 | A Nemotron-H based model optimized for real-time voice agents via Pipecat framework. Trending for its low-latency text generation tailored to conversational AI pipelines. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,657 | 207,941 | Flagship multimodal “Flash” model with image-text-to-text capabilities, positioned as a fast, efficient successor to Qwen 2.5-VL. Leading weekly likes, signaling strong developer adoption for vision-language apps. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,894 | 441,348 | High-throughput multimodal variant of GLM-5.3, optimized for speed and cost. Second-highest downloads in the multimodal set, indicating heavy production usage. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,595 | 4,960,483 | 27B-parameter multimodal model with image-text-to-text pipeline; the most-liked and most-downloaded model overall. Serves as the primary base for a vast quantization/fine-tune ecosystem. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 458 | 17,893 | Experimental vision-enabled Flash model from DeepSeek V4 series. Early traction suggests community interest in DeepSeek’s multimodal roadmap. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,473 | 1,232,274 | State-of-the-art image-to-video and text-to-video diffusion model. High downloads reflect demand for open video generation; supports multiple video editing tasks. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 315 | 3,086 | Second-gen text-to-speech model with natural prosody and multi-speaker support. Trending as a lightweight, high-quality TTS option for voice applications. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 238 | 0 | Ultra-fast 4-step text-to-video model using VSA (Video Score Alignment) distillation. Preview release with zero downloads yet but notable for its speed claims. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,759 | 5,532,597 | Leading image-text-to-video model with massive download volume. Powers a growing LoRA/quantization ecosystem (see Fine-tunes). |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 181 | 1,130 | Enterprise-focused multimodal MoE model from Thomson Reuters. Early release targeting legal/financial document understanding with vision. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 390 | 0 | Community experimental branch of MiniMax-H3 with custom optimizations. Trending among developers pushing video generation boundaries. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,130 | 2,783,061 | Moonshot’s flagship multimodal model (image-text-to-text) with compressed-tensors format. Second-highest likes, indicating strong mindshare for Kimi series. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 226 | 0 | Google’s third-gen foundation model for time-series forecasting, zero-shot across domains. Trending as a rare high-profile open time-series model. |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 185 | 130,086 | 35B MoE coder (3B active) quantized to GGUF with imatrix. Standout for combining MoE efficiency with strong code generation in a quantized package. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 676 | 431,339 | Unsloth-optimized GGUF quant of Qwen3.8-Flash-Next for fast CPU/GPU inference. High downloads show demand for local multimodal deployment. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,345 | 9,354,057 | Most-downloaded model on the list (9.3M); Unsloth’s GGUF pack for Qwen3.8-27B. De facto standard for running the 27B multimodal model locally. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 327 | 63,718 | GGUF quant of GLM-5.3-Flash, enabling efficient multimodal inference on consumer hardware. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,006 | 805,791 | “Abliterated” (safety-removed) version of Qwen3.8-27B in multiple formats (MLX, GGUF, safetensors). Popular for unrestricted research/creative use. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 842 | 1,276,092 | Aggressive uncensored fine-tune with MTP (Multi-Token Prediction) in GGUF. High downloads indicate strong appetite for uncensored multimodal models. |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 180 | 130,451 | Official FP8-quantized release from Qwen, cutting VRAM needs while preserving multimodal quality. First-party quantization signals production readiness. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 178 | 32,893 | LoRA adapters for MiniMax-H3 accelerating inference (4-step distillation). Shows active third-party optimization on proprietary video models. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 170 | 64,325 | Uncensored GGUF of Qwen3.8-Flash-Next from OrcaRouter. Part of a systematic uncensored quantization series. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 635 | 254,529 | Uncensored GGUF of the 27B flagship. Significant downloads confirm demand for alignment-removed variants. |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 144 | 2,576 | FP8 uncensored quant of GLM-5.3-Flash. Niche but shows cross-model quantization pipeline maturity. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,352 | 316,128 | High-likes FP8 uncensored version; FP8 format favored for H100/Blackwell deployment. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,261 | 121,028 | MLX-format uncensored model for Apple Silicon. Highlights cross-platform quantization trends. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 893 | 2,143,289 | Another popular uncensored GGUF with MTP; 2.1M downloads show community fragmentation across fine-tuners. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 127 | 56,208 | Research quantization (GSQ-RCO mixed-precision) from ISTA-DASLab. Represents cutting-edge academic quantization on a flagship base. |

---

## Ecosystem Signal

The **Qwen 3.8** and **GLM 5.3** families are the clear momentum leaders, each spawning a full stack: base multimodal models, official quantizations (FP8), and a sprawling community quantization/fine-tune layer (GGUF, MLX, uncensored variants). Open-weight releases from Chinese labs (Qwen, Z.ai, MiniMax, Moonshot, DeepSeek) dominate the multimodal frontier, while Western labs (Google, Lightricks) contribute specialized video/forecasting models. **Proprietary models are increasingly open-weight but not open-source**—licenses restrict commercial use, yet weights are freely downloadable, fueling a massive derivative ecosystem. **Quantization is now a first-class distribution channel**: Unsloth’s GGUF packs rack up 9M+ downloads, and multiple independent actors (OrcaRouter, HauhauCS, JonathanColetti, OBLITERATUS) maintain parallel uncensored quantization pipelines. Fine-tuning has shifted from full-parameter to **LoRA/adapter ecosystems** (e.g., MiniMax-H3 LoRAs) and **alignment removal** (“abliteration/uncensoring”), reflecting practitioner demand for control over model behavior. Specialized domains (code, time-series) remain thinner but are adopting the same quantization tooling.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The flagship multimodal base with the largest ecosystem (quantizations, fine-tunes, uncensored variants). Ideal for studying how a single release catalyzes a full downstream stack.
2. **Lightricks/LTX-2.5** — Best-in-class open video generation (image-to-video, text-to-video) with high downloads; essential for anyone building video applications or researching diffusion distillation.
3. **peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF** — A rare high-performance MoE coder in quantized form; demonstrates how MoE efficiency + quantization can deliver strong code generation on consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*