# Hugging Face Trending Models Digest 2026-09-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-09 04:19 UTC

---

# Hugging Face Trending Models Digest — 2026-09-09

## Today's Highlights
The Qwen3.8 family dominates this week’s trends, with the base 27B multimodal model and its Flash-Next variant spawning a massive wave of community GGUF quantizations and fine-tunes. Video generation is surging, led by MiniMax-H3 and Lightricks’ LTX-2.5, alongside multiple MiniMax fine-tunes. Z.ai’s GLM-5.3 series (both base and Flash) enters strongly, while Google’s TimesFM-3.0 and Microsoft’s VibeVoice-ASR highlight growing specialization in time-series and streaming speech. Quantization diversity expands with NVIDIA’s NVFP4 and ISTA-DASLab’s GSQ-RCO formats joining the ubiquitous GGUF ecosystem.

---

## 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 862 | 10,661 | A 4B parameter LLM from the Spark series optimized for text generation; trending for its compact size and strong instruction-following in Chinese/English benchmarks. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 736 | 2,879 | The latest 2B MiniCPM release from OpenBMB, built on LLaMA architecture; notable for high performance per parameter and efficient deployment on edge devices. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 236 | 3,205 | A 36B Mixture-of-Vision-Attention (MoVA) model with 4B active parameters; gaining attention for its novel sparse attention scaling and multilingual capabilities. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,759 | 14,748,356 | The classic 1.5B GPT-2 base model; perennially trending as a benchmark, teaching tool, and lightweight generation backbone. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,768 | 474,141 | Z.ai’s flagship MoE model (GLM-5.3) for text generation and conversation; trending for its strong reasoning and bilingual (EN/ZH) alignment. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,044 | 50,396,517 | The original BERT-base encoder; remains a top download for transfer learning, feature extraction, and NLP education. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,203 | 7,138,152 | Distilled 6-layer BERT retaining 97% performance at 60% size; widely used for fast inference and resource-constrained deployments. |

---

## 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,406 | 6,712,160 | Qwen’s 27B flagship multimodal model for image-text-to-text; leads weekly likes with strong vision-language reasoning and conversational ability. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,188 | 1,644,796 | A versatile diffusion model for image-to-video, text-to-video, and video-to-video; trending for high-fidelity motion and single-file deployment. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,011 | 503,263 | Experimental “Flash” variant of Qwen3.8 with accelerated inference; early adopters benchmark its speed/quality trade-offs for real-time apps. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 820 | 313,547 | DeepSeek’s experimental Flash vision-language model; draws interest for its efficient architecture and competitive multimodal benchmarks. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,173 | 826,875 | Z.ai’s distilled multimodal Flash model; trending for near-base performance at lower latency, enabling real-time vision-language applications. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,051 | 4,994,268 | Base model for image-text-to-video generation; massive downloads reflect its role as the foundation for a wave of video fine-tunes. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,260 | 20,702,763 | CLIP ViT-B/32 for zero-shot image classification and retrieval; remains a standard backbone for vision-language pipelines. |

---

## 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 642 | 444,052 | Google’s foundation model for time-series forecasting; pre-trained on large-scale temporal data and trending for zero-shot forecasting across domains. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,636 | 253,331,994 | The go-to 384-dim sentence embedding model; unmatched download volume reflects its ubiquity in RAG, clustering, and semantic search. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 302 | 12,388 | Massively Multilingual Speech (MMS) 300M wav2vec2 model; supports 1,000+ languages for ASR/TTS research and low-resource language work. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 488 | 7,243 | A text-to-speech model with transformer backend; gaining traction for natural prosody and easy integration into voice applications. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 157 | 1,449 | Microsoft’s 7B streaming ASR model from the VibeVoice family; notable for low-latency transcription and strong noise robustness. |

---

## 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 665 | 479,597 | Mixed-precision GSQ-RCO quantization of Qwen3.8-27B to GGUF; showcases advanced compression research for multimodal models. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 364 | 348,753 | Heavily fine-tuned and quantized “uncensored” Qwen3.8-27B merge; popular for creative writing and coding with relaxed guardrails. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,713 | 10,675,683 | Unsloth’s optimized GGUF quantization of Qwen3.8-27B; highest downloads among quantizations, enabling fast CPU/GPU inference. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 318 | 19,433 | FP8-quantized GLM-5.3 fine-tuned for cybersecurity tasks (refusal-removed); niche but high-signal for security researchers. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 250 | 0 | Community fine-tune of MiniMax-H3 for text-to-video; early adoption for customized video generation workflows. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 156 | 26,302 | NVIDIA’s ModelOpt NVFP4 quantization of Qwen3.8-Flash-Next; demonstrates 4-bit FP4 precision for Blackwell-era hardware. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 840 | 935,568 | Unsloth’s GGUF quantization of the Flash-Next variant; widely used for efficient multimodal inference on consumer GPUs. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,025 | 1,715,824 | Aggressive MTP fine-tune + GGUF quantization

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*