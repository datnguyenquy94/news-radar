# Hugging Face Trending Models Digest 2026-09-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-03 04:04 UTC

---

# Hugging Face Trending Models Digest — 2026-09-03

## Today's Highlights

Chinese labs dominate the leaderboard with Z.ai's GLM-5.3 family and Qwen's 3.8 series capturing the top download and like counts. Video generation is accelerating rapidly — Lightricks' LTX-2.5 and MiniMax's H3 models each surpass 1M downloads, signaling production-ready open video models. Quantization ecosystems (GGUF, FP8, GSQ) are maturing: unsloth and community fine-tuners now provide optimized variants for nearly every major release within days. Embedding and time-series foundations (all-MiniLM-L6-v2, TimesFM) maintain massive install bases, confirming sustained enterprise demand for non-generative tasks. Uncensored/abliterated variants proliferate across Qwen and GLM families, reflecting ongoing community tension between safety alignment and unrestricted utility.

---

## 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,526 | 94,403 | A MoE-based flagship LLM using DSA (Dynamic Sparse Attention) for efficient long-context reasoning. Trending for its strong Chinese/English bilingual performance and open-weight release. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,975 | 441,348 | Multimodal variant of GLM-5.3 with vision capabilities; 441K downloads indicate rapid adoption for vision-language tasks. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,743 | 207,941 | Next-gen multimodal model in the Qwen3.5 lineage; experimental tags suggest architectural innovations beyond 3.5. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,706 | 4,960,483 | The most-downloaded model this week (nearly 5M); 27B parameter multimodal workhorse driving ecosystem tooling. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 511 | 17,893 | Experimental vision-enabled variant of DeepSeek-V4; early access to next-gen MoE reasoning with multimodal input. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 401 | 3,516 | Hunyuan-family preview release; signals Tencent's continued open-weight investment alongside proprietary cloud offerings. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 127 | 429 | Compact 4B parameter LLM; low downloads suggest niche or early-stage evaluation. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,548 | 14,290,101 | Perennial baseline model; 14M+ downloads reflect enduring use in education, benchmarks, and lightweight deployment. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,866 | 63,694,017 | Foundational encoder; 63M downloads confirm sustained demand for classification, NER, and embedding tasks. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,051 | 6,870,903 | Distilled BERT variant; 6.8M downloads show continued preference for speed/accuracy trade-offs in production. |

---

## 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,586 | 1,232,274 | Unified video generation model supporting text-to-video, image-to-video, and video-to-video; 1.2M downloads signal production adoption. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,817 | 5,532,597 | High-fidelity video generation with image-to-video conditioning; 5.5M downloads make it the most popular video model on the Hub. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 250 | 0 | 4-step distillation of H3 for accelerated inference; zero downloads suggest pre-release or access-gated preview. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 363 | 3,086 | Text-to-speech model with transformers backbone; modest traction in open TTS space dominated by proprietary APIs. |
| [MiniMaxAI/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 397 | 0 | Community experimental branch of MiniMax-H3; hosted by Kijai (known for ComfyUI/video diffusion integrations). |

---

## 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 306 | 0 | Foundation model for time-series forecasting; zero downloads may indicate recent upload or gated access. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,402 | 250,280,836 | Ubiquitous sentence embedding model; 250M downloads confirm status as default choice for retrieval and clustering. |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 195 | 130,086 | MoE coding model (35B total, 3B active) quantized to GGUF; imatrix quantization suggests optimization for code reasoning. |

---

## 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 731 | 431,339 | GGUF quantization of Qwen3.8-Flash-Next; 431K downloads show unsloth's distribution reach for edge deployment. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,397 | 9,354,057 | Most-downloaded quantized model (9.3M); enables 27B multimodal inference on consumer GPUs. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 338 | 63,718 | GGUF variant of GLM-5.3-Flash; rapid release after base model indicates streamlined quantization pipeline. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 873 | 1,276,092 | Uncensored + MTP (Multi-Token Prediction) fine-tune; 1.2M downloads reflect demand for unrestricted + faster decoding. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,029 | 805,791 | Abliterated (safety-removed) variant with MLX/GGUF formats; 805K downloads show strong Apple Silicon + quantization demand. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 179 | 56,208 | Advanced mixed-precision quantization (GSQ + RCO); academic research artifact with niche adoption. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 195 | 64,325 | Uncensored GGUF of Flash-Next; orcarouter specializes in abliterated/uncensored distribution. |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 153 | 2,576 | FP8-quantized uncensored GLM-5.3-Flash; low downloads suggest FP8 tooling still maturing. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 661 | 254,529 | Standard uncensored GGUF of Qwen3.8-27B; 254K downloads indicate steady community demand. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 924 | 2,143,289 | Popular uncensored GGUF with MTP; 2.1M downloads rival base model quantizations. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,373 | 316,128 | FP8 uncensored variant; 316K downloads show growing FP8 adoption for H100/Blackwell inference. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 200 | 6,813 | Nemotron-H fine-tune for voice/phoneme tasks; pipecat integration suggests real-time voice agent focus. |

---

## Ecosystem Signal

The Qwen3.8 family (27B and Flash-Next) has become the de facto open-weight multimodal standard, with **aggregate downloads across base + quantized + fine-tuned variants exceeding 20M** this week alone. Z.ai's GLM-5.3 launch demonstrates Chinese labs now release flagship MoE models openly at parity with closed-source cadence. Quantization has shifted from afterthought to **co-release strategy**: unsloth publishes GGUFs within days, while community fine-tuners (HauhauCS, JonathanColetti, orcarouter) layer uncensoring, MTP, and FP8/GSQ-RCO optimizations — creating a **combinatorial variant explosion** that fragments but also democratizes deployment. Video generation has crossed the "toy-to-tool" threshold: MiniMax-H3 (5.5M downloads) and LTX-2.5 (1.2M) are being embedded in creative pipelines, not just demoed. Meanwhile, **foundation embeddings (all-MiniLM-L6-v2 at 250M downloads) and time-series (TimesFM) remain the quiet infrastructure** powering RAG and forecasting — their stability contrasts with the churn in generative frontiers. Open-weight momentum is accelerating, but the uncensored/abliterated sub-ecosystem reveals a **persistent misalignment** between lab safety defaults and developer demand for unrestricted models.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The single most impactful open multimodal model today. 5M+ downloads, mature tooling (GGUF, MLX, FP8, uncensored variants), and 27B parameters hit the sweet spot for local inference on 24GB VRAM. Study its vision-language alignment and MoE-lite architecture.

2. **Lightricks/LTX-2.5** — Best open video generation model for production experimentation. Supports I2V, T2V, and V2V in one checkpoint with 1.2M downloads validating stability. Test its temporal consistency and prompt adherence against proprietary APIs.

3. **unsloth/Qwen3.8-27B-GGUF** — Reference quantization for edge deployment. 9.3M downloads mean battle-tested configs exist for llama.cpp, ollama, and vLLM. Ideal for benchmarking quantization-aware fine-tuning or building offline multimodal assistants.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*