# Hugging Face Trending Models Digest 2026-09-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-14 04:33 UTC

---

# Hugging Face Trending Models Digest — 2026-09-14

## Today's Highlights
The Qwen 3.8 family dominates this week's leaderboard, with the base 27B model (15K likes, 7.8M downloads) and its Flash-Next variant (5.2K likes) anchoring both proprietary and open-weight multimodal innovation. MiniMax-H3's video generation stack surges across official, community, and ComfyUI integrations, signaling maturation of open video models. Quantization ecosystems flourish: three Qwen 3.8 GGUF variants and two MiniCPM5 GGUF releases collectively amass 12M+ downloads, reflecting production deployment demand. Specialized domains advance with GLM-5.3-Flash (2.3K likes) for cybersecurity and TimesFM-3.0 for time-series forecasting. Embedding stalwarts (MiniLM-L6-v2, CLIP, BERT) maintain massive download volumes, underscoring their foundational role in RAG and retrieval pipelines.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,018 | 7,768,964 | Flagship 27B multimodal model with image-text-to-text capability, leading weekly likes and downloads. Its conversational prowess and 7.8M downloads indicate broad adoption for both chat and vision-language tasks. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,337 | 5,574,752 | Meta's latest 8B instruction-tuned model remains a workhorse for open-weight LLM deployments, balancing performance and accessibility with 5.5M+ downloads. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,311 | 1,576,209 | Z.ai's Flash variant delivers strong image-text-to-text performance with 1.5M downloads, positioning as a leading Chinese-origin multimodal LLM for global use. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,251 | 244,457 | DeepSeek's latest Flash model emphasizes efficient image-text-to-text inference, gaining 2.2K likes as a high-throughput alternative for multimodal applications. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,351 | 150,110 | Compact 2B parameter model from OpenBMB optimized for edge deployment, with 150K downloads showing strong mobile/embedded interest. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 1,165 | 3,552 | 35B MoE model with 3B active parameters using Qwen3.5-MoE architecture, targeting edge inference with MLX support; early preview with niche adoption. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 762 | 3,970 | Small multimodal MoE model (Qwen3.5-MoE base) offering image-text-to-text capability in a lightweight package for resource-constrained environments. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 626 | 30,289 | Larger MoE variant from Nex-AGI with 30K downloads, providing enhanced multimodal reasoning for production use cases. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,156 | 21,336 | 4B parameter model from XHToken's Spark series, gaining traction for efficient text generation with 21K downloads. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,740 | 7,979 | Agentic-focused 4B model built on Qwen3.5-text, emphasizing tool use and autonomous workflows with 1.7K likes. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,054 | 15,158,496 | Enduring classic with 15M+ downloads, still widely used for education, baselines, and lightweight text generation tasks. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,316 | 46,513,338 | Foundational encoder with 46.5M downloads, remaining essential for classification, embeddings, and fine-tuning pipelines. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,438 | 7,325,282 | Distilled BERT variant offering 60% speedup with 97% performance retention, 7.3M downloads confirm production popularity. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 140 | 474 | New entrant multimodal Flash model with image-text-to-text capability; early stage with minimal downloads but architectural interest. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,253 | 4,819,845 | Official MiniMax-H3 video generation model supporting text-to-video and image-to-video, leading with 4.8M downloads and 5.2K likes as the premier open video model. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,766 | 1,548,442 | Versatile video generation suite (image-to-video, text-to-video, video-to-video) in single-file diffusion format, 1.5M downloads reflect creator adoption. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 379 | 123,491 | Community variant of MiniMax-H3 optimized for singularity-style video generation, 123K downloads show strong derivative interest. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 422 | 3,707 | 3B parameter music generation model with symbolic planning and agentic editing capabilities, pioneering structured audio synthesis. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 196 | 1,202 | Zero-shot TTS and voice cloning model from Tencent, early release with unique cross-lingual voice transfer capabilities. |
| [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 145 | 11,860 | ComfyUI integration for MiniMax-H3 with LoRA support, enabling node-based video generation workflows for 11K+ users. |

### 🔧 Specialized Models (code, math, medical, embeddings, time-series)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,942 | 252,928,721 | Ubiquitous 384-dim embedding model with 253M downloads, the de facto standard for semantic search, clustering, and RAG retrieval. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 779 | 797,832 | Google's latest foundation model for time-series forecasting, pre-trained on diverse temporal data with 797K downloads for demand planning and anomaly detection. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,514 | 21,331,361 | Foundational vision-language model for zero-shot image classification and cross-modal retrieval, 21M downloads power countless multimodal pipelines. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 535 | 12,880 | Massively multilingual speech model (300M params) supporting 1000+ languages for ASR and TTS, niche but critical for low-resource language work. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 434 | 30,310 | Specialized GLM-5.3 variant fine-tuned for cybersecurity tasks with FP8 quantization, featuring refusal removal for red-teaming and vulnerability analysis. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,031 | 11,005,880 | Unsloth's optimized GGUF quantization of Qwen3.8-27B, dominating with 11M downloads as the go-to local inference format for the flagship model. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 974 | 769,557 | Advanced mixed-precision GSQ-RCO quantization preserving quality at lower bitrates, 769K downloads show research and production adoption. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 645 | 750,591 | Heavily fine-tuned "uncensored" variant merging multiple specialized adapters (coding, creative, reasoning) into a single GGUF, 750K downloads for unrestricted use. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 221 | 99,716 | Official GGUF quantization of MiniCPM5-2B from the authors, enabling efficient CPU/edge deployment with 100K downloads. |

---

## Ecosystem Signal
The Qwen 3.8 family has cemented its position as the central open-weight multimodal backbone, spawning a quantization cottage industry (Unsloth, ISTA-DASLab, DavidAU) that collectively exceeds 12.5M downloads—surpassing even Llama 3.1's 5.5M. This signals a shift: practitioners prefer ready-to-deploy GGUF artifacts over raw weights, and fine-tune merges (DavidAU's 10+ adapter fusion) are becoming productization shortcuts. MiniMax-H3's video stack demonstrates a new maturity pattern: official release → community variants (Singularity) → workflow integrations (ComfyUI) within weeks, compressing the "model to product" cycle. Proprietary labs (DeepSeek, Z.ai, MiniMax) increasingly lead with open Flash/efficient variants, using Hugging Face as a distribution channel rather than a research showcase. Meanwhile, embedding and forecasting foundations (MiniLM, TimesFM, CLIP) exhibit sticky, compounding download growth—these are infrastructure, not experiments. Specialized abliterated models (GLM-CYBERSECURITY) reveal a growing "dual-use" tension: capability unlocks for security research that simultaneously lower guardrails. The ecosystem is bifurcating into high-throughput API-grade models (Flash variants) and locally-optimized quantized artifacts, with the middle ground of raw FP16 weights hollowing out.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The definitive open multimodal baseline. With 7.8M downloads and active quantization/fine-tune ecosystem, it's the best single model to benchmark, deploy, or derivative-train. Flash-Next variant offers faster inference for production.

2. **MiniMaxAI/MiniMax-H3** — Most capable open video generation model currently available. 4.8M downloads and ComfyUI integration mean immediate usability for video workflows; study its architecture for temporal consistency techniques.

3. **google/timesfm-3.0-pytorch** — Rare production-grade time-series foundation model. 797K downloads in a neglected domain; essential for anyone building forecasting, anomaly detection, or temporal reasoning systems. Zero-shot performance on diverse frequencies is a standout capability.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*