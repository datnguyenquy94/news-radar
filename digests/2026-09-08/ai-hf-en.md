# Hugging Face Trending Models Digest 2026-09-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-08 04:13 UTC

---

# Hugging Face Trending Models Digest — 2026-09-08

## Today's Highlights
The Qwen family dominates this week's trending list with six variants spanning base, flash, quantized, and fine-tuned versions, signaling strong community adoption of Alibaba's latest multimodal line. Video generation continues its surge with MiniMax-H3 and Lightricks LTX-2.5 leading downloads, while Google's TimesFM-3.0 and Microsoft's VibeVoice ASR demonstrate growing enterprise interest in specialized time-series and streaming speech models. Quantization diversity is expanding beyond GGUF — NVIDIA's NVFP4 and ISTA-DASLab's GSQ-RCO mixed-precision formats indicate a maturing compression ecosystem. Notably, "uncensored" fine-tunes of Qwen3.8-27B appear from multiple creators, reflecting persistent demand for less restricted models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 750 | 7,216 | A 4B parameter text-generation model from the Spark series, notable for strong performance at a compact size suitable for edge deployment. Trending due to efficient architecture and active community benchmarking. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 334 | 13 | Ultra-compact 2B model from the MiniCPM lineage, optimized for on-device inference with surprising reasoning capability. Early traction despite minimal downloads suggests pre-release evaluation phase. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,753 | 442,064 | Z.ai's flagship MoE-DSA architecture model for text generation, balancing quality and efficiency via dynamic sparse activation. High downloads indicate production adoption beyond experimentation. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 212 | 2,226 | Mixture-of-Experts model with 36B total/4B active parameters, targeting efficient large-scale reasoning. Niche but notable for novel MoVA routing mechanism. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,716 | 14,629,637 | The classic 1.5B GPT-2 baseline, still widely used for research, education, and as a compatibility benchmark. Enduring popularity reflects its role as a universal reference model. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,992 | 50,747,373 | Foundational 110M encoder for fill-mask and downstream fine-tuning; remains the most downloaded BERT variant. Persistent relevance in NLP pipelines and academic work. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,041,011 | 66M distilled BERT retaining 97% performance at 60% speed; de facto choice for resource-constrained classification tasks. Steady enterprise adoption for latency-sensitive apps. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,286 | 6,416,358 | Flagship 27B multimodal model supporting image-text-to-text; leads weekly likes by a wide margin. Dominates conversation as the go-to open-weight vision-language model. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,090 | 1,584,382 | Unified diffusion model for image-to-video, text-to-video, and video-to-video in a single file. High downloads reflect creator demand for flexible video generation. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,983 | 474,693 | Experimental "Flash" variant optimized for faster inference with retained multimodal capability. Trending as a speed-quality trade-off exploration for production use. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 802 | 251,611 | DeepSeek's experimental flash vision model combining efficient attention with multimodal reasoning. Early adoption signals interest in alternative architectures to Qwen. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,137 | 784,005 | Speed-optimized multimodal variant of GLM-5.3 with image-text-to-text support. Strong downloads indicate real-world deployment for latency-sensitive applications. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,013 | 4,990,034 | Industry-leading image-text-to-video model with 5M+ downloads; sets quality bar for open video generation. Ecosystem hub with multiple fine-tunes already emerging. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 228 | 0 | Community fine-tune of MiniMax-H3 exploring specialized video styles. Zero downloads suggest very recent release or private evaluation phase. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 478 | 6,754 | Text-to-speech model with 2nd-gen architecture; notable for natural prosody in a compact transformer. Growing interest in open TTS alternatives to proprietary APIs. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 145 | 26,731 | Fine-tune of MiniMax-H3 targeting singularity-style video aesthetics. Demonstrates rapid community specialization on top of base video models. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 583 | 271,713 | Foundation model for time-series forecasting with zero-shot capability across domains. 271K downloads reveal strong enterprise adoption for demand planning and anomaly detection. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,577 | 251,367,312 | 384-dim sentence embedding model; most downloaded model on HF by a massive margin. Universal default for semantic search, clustering, and RAG retrieval. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 267 | 12,213 | Massively Multilingual Speech 300M model covering 1,000+ languages for ASR/TTS. Key resource for low-resource language speech applications. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,212 | 20,496,047 | CLIP ViT-B/32 for zero-shot image classification and cross-modal retrieval. Enduring standard for vision-language alignment benchmarks. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 140 | 1,144 | Streaming ASR model optimized for real-time transcription with 7B parameters. Early stage but notable for Microsoft's push into open streaming speech. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 571 | 403,292 | Mixed-precision GSQ-RCO quantization reducing VRAM while preserving multimodal quality. Academic-grade compression with reproducible benchmarks. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,649 | 10,479,045 | Unsloth's optimized GGUF quantization; 10M+ downloads make it the default local-inference format for Qwen3.8-27B. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 306 | 258,896 | Heavily merged fine-tune combining multiple specialist adapters (coding, uncensored, MTP) into one GGUF. Exemplifies "kitchen-sink" community merging trend. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 277 | 18,602 | FP8-quantized GLM-5.3 fine-tuned for cybersecurity tasks with refusal removal. Niche domain adaptation showing FP8 viability for specialized models. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 829 | 868,243 | GGUF quantization of the Flash-Next variant; 868K downloads show rapid adoption of the faster Qwen lineage for local use. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 998 | 1,629,754 | Aggressive uncensoring + MTP (multi-token prediction) fine-tune in GGUF; 1.6M downloads indicate strong demand for unrestricted multimodal models. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 142 | 60,343 | GGUF quant of a Qwen-Flash derivative with vision support. Moderate traction for a specialized community build. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 142 | 18,068 | NVIDIA's ModelOpt 4-bit FP4 quantization for Blackwell GPUs; first major NVFP4 release on HF. Signals hardware-vendor co-optimization trend. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 794 | 292,633 | Clean uncensored GGUF quant from OrcaRouter; 292K downloads show consistent appetite for abliterated base models. |

---

## Ecosystem Signal
The Qwen ecosystem has achieved gravitational pull: six of the top-30 models are Qwen variants (base, Flash, Flash-Next, plus four quant/fine-tune derivatives), and unsloth's GGUF quantization alone has 10.5M downloads — exceeding many base models' totals. This mirrors the Llama-2/3 trajectory where a strong base spawns a quantization/fine-tune sub-economy. Video generation is the hottest generative frontier: MiniMax-H3 (5M downloads) and LTX-2.5 (1.5M) dwarf other modalities, with community fine-tunes (Singularity, vdn-minimax-h3) appearing within weeks. Quantization is diversifying beyond GGUF — NVIDIA's NVFP4, ISTA-DASLab's GSQ-RCO, and FP8 cybersecurity fine-tunes show vendors and researchers optimizing for specific silicon (Blackwell, Hopper) and compliance regimes. Open-weight multimodal models (Qwen, GLM, DeepSeek, MiniMax) are outpacing proprietary APIs in community engagement, while specialized models (TimesFM, VibeVoice, MMS) demonstrate that enterprise adoption follows task-specific excellence, not just chat capability. The "uncensored" fine-tune cluster (5+ entries) reveals a persistent, sizable user segment treating content filtering as a removable constraint rather than a safety feature.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The current center of gravity for open multimodal work. With 14K likes and 6.4M downloads, it's the most battle-tested vision-language model on HF; its Flash-Next and GGUF variants let you trade latency for quality on the same weights.

2. **google/timesfm-3.0-pytorch** — Rare example of a production-grade foundation model for time-series that works zero-shot. 271K downloads in a niche category signals real enterprise deployment; worth studying for any forecasting or anomaly-detection pipeline.

3. **nvidia/Qwen3.8-Flash-Next-NVFP4** — First major NVFP4 (4-bit FP4) release on Hugging Face, co-optimized for Blackwell via ModelOpt. If you have access to GB200/B200 hardware, this is the earliest indicator of the next quantization frontier beyond INT4/GGUF.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*