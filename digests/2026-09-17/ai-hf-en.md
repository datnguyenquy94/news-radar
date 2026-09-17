# Hugging Face Trending Models Digest 2026-09-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-17 04:35 UTC

---

# Hugging Face Trending Models Digest — 2026-09-17

---

## 📌 Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard with the base 27B model surpassing 7.6M downloads and spawning a cascade of quantized (GGUF, GSQ-RCO), fine-tuned (Swift, NeoHorse), and uncensored variants. Video generation is surging: Lightricks’ LTX-2.5 and MiniMax-H3 each cleared 1.6M and 4.7M downloads respectively, signaling strong demand for open image-to-video pipelines. DeepSeek-V4.1-Flash enters the multimodal arena with nearly 370K downloads in its first week, while MoE architectures like Edge0-35B-A3B preview efficient sparse scaling. Community fine-tunes and aggressive quantization (FP8, GGUF) now account for over a third of the top-30, reflecting a maturing local-inference ecosystem.

---

## 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,880 | 366,459 | A new multimodal flagship from DeepSeek supporting image-text-to-text reasoning; rapidly adopted with 366K downloads in its debut week. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,166 | 27,759 | A 35B MoE model with only 3B active parameters, showcasing extreme sparse efficiency for edge inference via MLX. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,509 | 324,322 | Compact 2B parameter model optimized for on-device deployment, achieving strong benchmarks with 324K downloads. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,137 | 16,163 | Agentic-focused 4B model built on Qwen3.5 text, designed for tool-use and autonomous workflows. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 334 | 2,753 | Optimized Qwen3.8-27B variant with efficient-thinking enhancements for faster inference. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,121 | 15,584,259 | The classic 1.5B GPT-2 remains a baseline staple with 15.6M downloads, sustained by education and research. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,661 | 5,861,705 | Meta’s flagship 8B instruct model continues as a workhorse with 5.8M downloads and broad ecosystem support. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,236 | 27,191 | New 4B Spark 2.5 series model targeting efficient bilingual (EN/ZH) chat and reasoning. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 199 | 1,063 | Lightweight multimodal flash model emphasizing speed and low-resource deployment. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,394 | 2,244,085 | Z.ai’s latest Flash series multimodal model with 2.2M downloads, optimized for conversational speed. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 156 | 213 | 9B spatial-reasoning VLM focused on 3D understanding and multimodal grounding. |

---

## 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,426 | 7,667,556 | Flagship 27B multimodal model leading the week with 7.6M downloads; supports image-text-to-text and conversation. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 650 | 9,391 | 3B music-generation model with symbolic planning and agentic editing for controllable audio synthesis. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 821 | 6,837 | Compact MoE multimodal model blending Qwen3.5-MoE architecture for efficient image-text tasks. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,123 | 1,616,663 | State-of-the-art image-to-video diffusion model with 1.6M downloads, supporting text-to-video and video-to-video. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 272 | 2,753 | Zero-shot TTS and voice-cloning model enabling expressive speech synthesis from short prompts. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,388 | 4,689,062 | High-fidelity image-text-to-video model with 4.7M downloads, establishing a new open video generation standard. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,318 | 689,347 | Experimental “Qwen4” preview with enhanced multimodal reasoning and conversational capabilities. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 451 | 164,451 | Community fine-tune of MiniMax-H3 optimized for singularity-style video generation with 164K downloads. |

---

## 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,025 | 256,481,161 | Ubiquitous 384-dim embedding model with 256M downloads; default choice for semantic search and RAG. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,354 | 47,693,504 | Foundational BERT encoder still heavily used for classification and feature extraction (47.7M downloads). |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 554 | 22,119 | Massively multilingual speech (MMS) 300M wav2vec2 model covering 1,000+ languages for ASR/TTS. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,547 | 21,790,053 | CLIP ViT-B/32 backbone for zero-shot image classification and cross-modal retrieval (21.8M downloads). |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,459 | 7,410,664 | Distilled BERT retaining 97% performance at 60% size, widely deployed for low-latency NLP (7.4M downloads). |

---

## 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,205 | 956,964 | Mixed-precision GSQ-RCO quantized GGUF of Qwen3.8-27B, balancing quality and size with 957K downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 802 | 1,049,586 | Heavily merged uncensored fine-tune with MTP and coding enhancements, 1M+ downloads for local roleplay/coding. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,224 | 8,856,150 | Official Unsloth GGUF quantization of Qwen3.8-27B; 8.8M downloads make it the most popular local LLM artifact. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 233 | 6,826 | FP8-quantized uncensored variant of DeepSeek-V4.1-Flash, enabling unrestricted multimodal chat. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 189 | 55,309 | GGUF conversion of Swift-Qwen3.8-27B with efficient-thinking optimizations for llama.cpp. |
| [Comfy-Org/YuE2](https://huggingface.co/Comfy-Org/YuE2) | Comfy-Org | 153 | 59,231 | ComfyUI-native diffusion single-file for YuE2 music generation, fine-tuned from SheetSage2 (CC-BY-NC-4.0). |

---

## 📈 Ecosystem Signal

The Qwen 3.8 family has become the de facto open-weight backbone: the base model, its Flash-Next preview, and a constellation of community quantizations (Unsloth GGUF at 8.8M downloads, ISTA-DASLab GSQ-RCO at 957K) and fine-tunes (Swift, NeoHorse, DavidAU’s uncensored merge) collectively occupy 7 of the top-30 slots. This mirrors the Llama-3.1-8B-Instruct trajectory but at a larger parameter scale and with native multimodality. Video generation is the breakout modality—Lightricks LTX-2.5 and MiniMax-H3 together exceed 6M downloads, and community fine-tunes like Minimax-h3_Singularity (164K) show rapid iteration. Proprietary labs (DeepSeek, Z.ai, MiniMax) are open-weighting flagship models directly on HF, while quantization tooling (Unsloth, llama.cpp GGUF, FP8) has matured into a primary distribution channel. Embedding classics (MiniLM, BERT, CLIP, DistilBERT) remain download giants, but growth is now driven by generative multimodal and locally runnable LLMs.

---

## 💎 Worth Exploring

1. **Qwen/Qwen3.8-27B** — The highest-downloaded new multimodal model (7.6M); serves as a strong base for fine-tuning, RAG, and vision-language tasks with broad hardware support via transformers and GGUF.
2. **Lightricks/LTX-2.5** — Best-in-class open image-to-video diffusion with 1.6M downloads; practical for content creation, prototyping, and studying video generation architectures.
3. **unsloth/Qwen3.8-27B-GGUF** — The most downloaded quantization artifact (8.8M); enables 27B parameter inference on consumer GPUs (24GB VRAM) with minimal quality loss—ideal for local deployment experiments.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*