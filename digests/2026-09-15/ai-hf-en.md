# Hugging Face Trending Models Digest 2026-09-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-15 04:34 UTC

---

# Hugging Face Trending Models Digest — 2026-09-15

## Today's Highlights

The Qwen 3.8 family dominates this week's leaderboard, with the base 27B model, its Flash-Next variant, and multiple community quantizations (GGUF, GSQ-RCO) collectively driving massive download volumes. Video generation continues its rapid commoditization: Lightricks' LTX-2.5 and MiniMax's H3 both surpass 1.5M downloads, signaling strong adoption of open-weight text-to-video models. Meanwhile, DeepSeek's V4.1-Flash and Z.ai's GLM-5.3-Flash demonstrate that "Flash" efficiency-optimized multimodal models are becoming a standard release tier alongside flagship versions. Embedding and forecasting staples (all-MiniLM-L6-v2, TimesFM-3.0, BERT, CLIP) maintain persistent high-traffic baselines, underscoring their foundational role in production pipelines.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,488 | 288,414 | A multimodal Flash-series model optimized for fast inference with image-text-to-text capabilities. Trending for its strong performance-to-latency ratio and 288K+ weekly downloads. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 2,141 | 8,109 | A 35B MoE model with 3B active parameters built on Qwen3.5-MoE architecture, targeting efficient edge inference via MLX. Notable for its sparse activation design and early preview traction. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,405 | 206,774 | A 2B-parameter LLM in the MiniCPM series, optimized for on-device and edge deployment. Gaining momentum with 200K+ downloads as a compact yet capable instruction-tuned model. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,161 | 7,703,400 | The flagship 27B Qwen 3.8 model with image-text-to-text and conversational capabilities. Leads the week with 15K+ likes and 7.7M downloads, cementing Qwen's open-weight dominance. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,176 | 24,084 | A 4B LLM from the Spark 2.5 series, positioned for efficient text generation. Trending among developers seeking smaller-footprint models with solid instruction-following. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,077 | 15,182,177 | The classic GPT-2 base model, still widely used for research, education, and as a backbone for fine-tuning. Sustains 15M+ weekly downloads as a perennial baseline. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,233 | 645,881 | The next-gen Flash variant of Qwen 3.8, experimenting with Qwen4-era architecture for faster multimodal inference. Already at 645K downloads in early adoption. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,836 | 9,520 | A 4B agentic-focused model built on Qwen3.5-text, optimized for tool use and autonomous workflows. Early buzz around its agentic benchmarks and compact size. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,606 | 5,620,539 | Meta's 8B instruction-tuned Llama 3.1, the workhorse open-weight model for chat and RAG. Maintains 5.6M weekly downloads as a default choice for many pipelines. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,336 | 1,770,038 | Z.ai's Flash-tier multimodal model with conversational capabilities, emphasizing speed and efficiency. Strong at 1.7M downloads, showing appetite for non-Qwen Chinese lab releases. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 167 | 459 | A community Swift-optimized variant of Qwen 3.8-27B for Apple Silicon deployment. Niche but notable for MLX/Metal acceleration focus. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 164 | 736 | A new Flash-tier multimodal model from Agnes-AI, entering the efficiency-optimized segment. Early stage with modest traction but part of the Flash trend. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 782 | 4,543 | A compact multimodal MoE model (Qwen3.5-MoE base) with image-text-to-text capabilities. Trending as a lightweight alternative for vision-language tasks. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 634 | 30,489 | The larger Pro variant of the Nex-N2.5 series, offering stronger multimodal reasoning. Gaining downloads as developers evaluate the mini vs. Pro trade-off. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 480 | 5,186 | A 3B music generation model with symbolic planning and agentic editing features. Unique in the trending set for its focus on structured audio composition. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,881 | 1,559,653 | A versatile video generation model supporting text-to-video, image-to-video, and video-to-video. Leads open video models with 1.5M+ downloads and 3.8K likes. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 398 | 141,057 | A community Minimax-H3 variant optimized for video generation tasks. Riding the MiniMax-H3 wave with 141K downloads. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 226 | 1,928 | Tencent's zero-shot TTS and voice cloning model. Early but notable as a major lab's open entry into controllable speech synthesis. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,293 | 4,827,156 | MiniMax's flagship image-text-to-video model, now the most-downloaded video model this week at 4.8M. Sets the bar for open-weight video generation quality. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,970 | 252,806,720 | The de facto standard sentence embedding model for semantic search and RAG. Astonishing 252M weekly downloads confirm its infrastructure-grade adoption. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,337 | 46,435,111 | The original BERT base model, still foundational for classification, NER, and fine-tuning. 46M downloads reflect its entrenched role in NLP pipelines. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 791 | 826,017 | Google's third-gen time-series forecasting foundation model, pretrained for zero-shot forecasting. Rising as the go-to for temporal prediction tasks. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 536 | 19,486 | Meta's Massively Multilingual Speech 300M model (wav2vec2-based) for ASR/TTS in 1,000+ languages. Niche but critical for low-resource speech work. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,529 | 21,349,787 | The base CLIP ViT-B/32 for zero-shot image classification and cross-modal retrieval. 21M downloads underscore its role as a vision-language backbone. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,441 | 7,294,014 | Distilled BERT retaining 95% performance at 60% speed. 7.3M downloads show sustained demand for efficient encoder models. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,057 | 819,784 | A mixed-precision GSQ-RCO quantized GGUF of Qwen3.8-27B, balancing quality and size. 819K downloads show strong demand for advanced quantization research. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,105 | 10,077,938 | Unsloth's optimized GGUF quantization of Qwen3.8-27B, leading all quantized models with 10M+ downloads. The default choice for local LLM deployment. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 688 | 875,703 | A heavily merged and fine-tuned uncensored variant with multiple persona blends, quantized to GGUF. 875K downloads reflect the appetite for "kitchen-sink" merged models. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 175 | 3,868 | An FP8-quantized uncensored fine-tune of DeepSeek-V4.1-Flash. Early adoption for users wanting unaligned multimodal capabilities in efficient format. |
| [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 155 | 13,295 | A LoRA adaptation of MiniMax-H3 for ComfyUI workflows, enabling node-based video generation. Shows the ecosystem building around MiniMax's video model. |

---

## Ecosystem Signal

The Qwen 3.8 family has become the de facto open-weight hub: the base 27B model, its Flash-Next successor, and a constellation of community quantizations (Unsloth's 10M-download GGUF, ISTA-DASLab's GSQ-RCO, and numerous fine-tune merges) collectively dominate both mindshare and bandwidth. This mirrors the Llama 3.1 effect but at accelerated speed — Qwen releases now spawn full quantization/fine-tune ecosystems within weeks. Chinese labs (DeepSeek, Z.ai, MiniMax, Agnes-AI) are consistently shipping "Flash" efficiency tiers alongside flagships, establishing a two-track release cadence (capability vs. latency) that Western labs have yet to match systematically. Video generation has crossed a usability threshold: MiniMax-H3 (4.8M downloads) and LTX-2.5 (1.5M) are no longer curiosities but production-grade assets, with ComfyUI integration (Alissonerdx) confirming workflow maturity. Meanwhile, the embedding/forecasting layer (MiniLM, BERT, CLIP, TimesFM) remains stubbornly stable — these are the "Linux kernel" of the stack, invisible but irreplaceable. Quantization research is advancing beyond simple GGUF: GSQ-RCO mixed-precision and FP8 dynamic quantization (dealignai) indicate the community is pushing Pareto frontiers for on-device deployment. The uncensored/merged model subculture (DavidAU, dealignai) persists as a parallel track, serving niche alignment preferences but unlikely to mainstream.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The central gravity model this week. Study its architecture (Qwen3.5→3.8 evolution), multimodal integration, and how it enables the massive downstream quantization/fine-tune ecosystem. Essential for understanding current open-weight SOTA.

2. **Lightricks/LTX-2.5** — The most versatile open video model (T2V, I2V, V2V) with 1.5M downloads. Test its prompt adherence and temporal consistency; its diffusion-single-file format makes it unusually portable for experimentation and ComfyUI integration.

3. **google/timesfm-3.0-pytorch** — A rare specialist model breaking into trending ranks. If you work with temporal data (finance, IoT, demand forecasting), its zero-shot forecasting capability on unseen domains is a paradigm shift from traditional ARIMA/Prophet workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*