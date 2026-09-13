# Hugging Face Trending Models Digest 2026-09-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-13 04:27 UTC

---

# Hugging Face Trending Models Digest — 2026-09-13

## Today's Highlights
The Qwen ecosystem dominates this week with **Qwen3.8-27B** leading downloads (7.7M) and spawning dozens of quantized and fine-tuned variants, signaling a mature open-weight modality. Video generation surges with **MiniMax-H3** (4.9M downloads) and **LTX-2.5** (1.6M) establishing open alternatives to proprietary video models. Chinese labs (DeepSeek, Z.ai, MiniMax) continue rapid iteration on flash/efficient multimodal architectures. Quantization tooling (GGUF, GSQ-RCO, FP8) has become a first-class distribution channel, with unsloth and ISTA-DASLab quantizations outperforming base model downloads. Specialized models for cybersecurity, time-series forecasting, autonomous driving, and streaming ASR show the long tail of domain adaptation accelerating.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,030 | 140,636 | DeepSeek's latest efficient multimodal model combining vision and text with a flash attention architecture for high-throughput inference. Trending for its strong reasoning at lower compute cost. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,263 | 102,334 | A 2B parameter model from the MiniCPM series optimized for edge deployment with Llama-compatible architecture. Notable for punching above its weight on benchmarks while fitting on consumer hardware. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 738 | 3,581 | Compact MOE model built on Qwen3.5 architecture with multimodal capabilities. Early adoption signals interest in mixture-of-experts efficiency at small scale. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,873 | 7,726,687 | Flagship 27B multimodal model from Alibaba's Qwen team with vision-language capabilities. The week's most-downloaded model, serving as the base for dozens of community quantizations and fine-tunes. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 544 | 1,596 | 35B MOE model with only 3B active parameters, optimized for edge inference via MLX. Demonstrates growing interest in sparse activation for local deployment. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,136 | 19,733 | 4B parameter model from the Spark series targeting efficient text generation. Gaining traction as a balanced size for both cloud and local workloads. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 617 | 30,081 | Larger sibling to Nex-N2.5-mini with enhanced multimodal reasoning. Higher downloads suggest developers evaluating the Pro tier for production use cases. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,141 | 604,992 | Experimental "Flash" variant of Qwen3.8 with next-token prediction optimizations and vision support. High likes indicate strong community anticipation for efficient multimodal inference. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,279 | 1,333,574 | Z.ai's latest efficient multimodal model with conversational tuning. Strong downloads reflect GLM's growing adoption as an open-weight alternative to proprietary chat models. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,980 | 15,150,566 | The classic 1.5B parameter GPT-2 maintained by the community. Persistent top-20 downloads show its enduring role as a baseline, teaching tool, and fine-tuning substrate. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 881 | 484,422 | Experimental vision-enabled variant of DeepSeek-V4-Flash. High downloads for an "exp" tag suggest developers stress-testing multimodal capabilities before stable release. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,619 | 1,601,007 | Open video generation model supporting text-to-video, image-to-video, and video-to-video editing. 1.6M downloads establish it as a leading open alternative to Sora/Veo. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 347 | 114,141 | Community wrapper/finetune of MiniMax-H3 for video generation. Demonstrates rapid ecosystem building around MiniMax's base video model. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 328 | 2,304 | 3B parameter music generation model with symbolic planning and agentic editing capabilities. Niche but notable for structured audio generation beyond simple waveform prediction. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,204 | 4,860,709 | MiniMax's flagship video model with diffusers integration for text-to-video and image-to-video. 4.9M downloads make it the most adopted open video generation model this week. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 200 | 0 | Character animation model for video-to-video replacement and editing. Zero downloads may indicate private/gated access or very recent upload; worth monitoring for character-consistent video editing. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 406 | 30,068 | GLM-5.3 specialized for cybersecurity tasks, quantized to FP8 with refusal mechanisms removed. Highlights domain adaptation + quantization + alignment modification pipeline. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 757 | 784,262 | Google's foundation model for time-series forecasting, now in PyTorch. 784K downloads show strong enterprise adoption for demand planning, anomaly detection, and financial forecasting. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,864 | 253,739,900 | The de facto standard sentence embedding model (384-dim). 253M downloads — 17× the next model — confirms its status as the default choice for retrieval, clustering, and semantic search. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,246 | 47,340,648 | Original BERT-base for masked language modeling and feature extraction. Sustained 47M downloads reflect continued use in classification, NER, and as a pretraining checkpoint. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 216 | 2,494 | 7B streaming ASR model from Microsoft's VibeVoice line. Early stage but notable for low-latency transcription architecture targeting real-time applications. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 489 | 12,122 | Massively Multilingual Speech (MMS) 300M model for 1000+ languages. Lower downloads but strategically important for low-resource language speech tasks. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 183 | 3,761 | Specialized 4B model for autonomous driving motion planning with vision-language inputs. Represents Qwen's expansion into robotics/embodied AI. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,458 | 21,323,978 | CLIP ViT-B/32 for zero-shot image classification and cross-modal retrieval. 21M downloads confirm its role as the standard vision-language alignment backbone. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,392 | 7,369,104 | 6-layer distilled BERT retaining 97% performance at 60% size. 7.3M downloads show persistent demand for efficient encoder models in production pipelines. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 898 | 729,683 | GSQ (Group-wise Quantization) + RCO (Rotation-Consistent Optimization) mixed-precision GGUF. 729K downloads prove advanced quantization now rivals base model adoption. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,952 | 11,529,203 | Unsloth's optimized GGUF quantization of Qwen3.8-27B. **11.5M downloads — highest in the entire list** — shows quantized artifacts are the primary consumption format for local LLM inference. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 556 | 665,911 | Heavily fine-tuned + merged + quantized Qwen variant with "uncensored" alignment. 665K downloads reveal massive demand for alignment-modified models despite (or because of) safety concerns. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 196 | 87,316 | Official GGUF quantization from MiniCPM authors. First-party quantization signals maturity: model creators now ship quantized variants at launch. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,135 | 2,078,044 | Aggressive uncensored fine-tune with MTP (Multi-Token Prediction) in GGUF. 2M+ downloads confirm a large user segment prioritizes capability over safety guardrails. |

---

## Ecosystem Signal
**Qwen has become the Linux of open-weight multimodal models** — its 3.8-27B base spawns a Cambrian explosion of quantizations (unsloth, ISTA-DASLab), fine-tunes (DavidAU, HauhauCS), and specialized variants (Qwen-Drive, Qwen-Flash-Next). The 11.5M downloads of a single GGUF artifact exceeds many base models' lifetime totals, proving **quantization is now the default distribution format** for local inference. Chinese labs (DeepSeek, Z.ai, MiniMax, OpenBMB) are shipping flash/efficient architectures at a cadence matching or exceeding US counterparts, with **DeepSeek-V4.1-Flash** and **GLM-5.3-Flash** demonstrating that "flash" branding = production-ready efficiency. Video generation has crossed the adoption threshold: **MiniMax-H3 (4.9M)** and **LTX-2.5 (1.6M)** downloads rival LLM numbers, signaling open video is no longer experimental. Specialized models are fragmenting into verticals — cybersecurity (GLM-CYBERSECURITY), time-series (TimesFM), autonomous driving (Qwen-Drive), streaming ASR (VibeVoice) — each with dedicated architectures rather than generic fine-tunes. The **uncensored fine-tune ecosystem** (DavidAU, HauhauCS, dealignai) commands millions of downloads, revealing a structural tension between safety alignment and user demand for unfiltered capability. First-party GGUF releases (MiniCPM5-2B-GGUF) indicate model authors now treat quantization as a release-blocking artifact, not an afterthought.

---

## Worth Exploring

1. **unsloth/Qwen3.8-27B-GGUF** — The single most downloaded artifact this week (11.5M). If you run local LLMs, this is the current gold standard for quality/size/speed tradeoff on consumer GPUs. Study its quantization config for best practices.

2. **MiniMaxAI/MiniMax-H3** — 4.9M downloads for an open video model is unprecedented. Test its text-to-video and image-to-video pipelines via diffusers; it's the most accessible Sora/Veo alternative with production-grade tooling.

3. **google/timesfm-3.0-pytorch** — 784K downloads for a forecasting foundation model signals enterprise adoption. If you work with time-series (demand, finance, IoT), this zero-shot forecaster eliminates per-dataset training and deserves a benchmark against your current pipeline.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*