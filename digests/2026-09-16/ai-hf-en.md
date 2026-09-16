# Hugging Face Trending Models Digest 2026-09-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-16 04:29 UTC

---

# Hugging Face Trending Models Digest — 2026-09-16

## Today's Highlights

The Qwen 3.8 family dominates this week's leaderboard, with the base **Qwen/Qwen3.8-27B** (15.3k likes, 7.7M downloads) and its quantized variants from **unsloth** (4.2k likes, 9.5M downloads) and **ISTA-DASLab** (1.1k likes, 885K downloads) claiming top spots. Video generation surges with **MiniMax-H3** (5.4k likes, 4.9M downloads) and **Lightricks/LTX-2.5** (4k likes, 1.6M downloads) leading open-weight video diffusion. Meanwhile, MoE architectures gain traction: **DeepSeek-V4.1-Flash** (2.7k likes), **Edge0-35B-A3B** (2.9k likes), and **Nex-N2.5** series showcase sparse expert routing at scale. Community fine-tunes remain vibrant—**DavidAU's** uncensored Qwen fusion (751 likes, 949K downloads) and **dealignai's** FP8 DeepSeek variant highlight demand for unaligned, quantization-ready weights.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 2,879 | 17,853 | A 35B MoE model with 3B active parameters built on Qwen3.5-MoE architecture, optimized for MLX edge inference. Trending for its extreme parameter efficiency and Apple Silicon deployment focus. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,470 | 271,754 | A 2B parameter Llama-architecture model from the MiniCPM series, delivering strong reasoning in a tiny footprint. Trending for mobile/edge deployment and 271K downloads in a week. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,072 | 11,904 | A 4B Qwen3.5-text derivative fine-tuned for agentic workflows and tool use. Trending for its focus on autonomous agent capabilities at a compact size. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,213 | 25,650 | A 4B Spark 2.5 architecture model targeting general LLM tasks. Trending as a new entrant in the sub-5B competitive tier with 25K weekly downloads. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,107 | 15,311,786 | The classic 124M–1.5B parameter GPT-2 series, still the benchmark for reproducibility and education. Trending with 15.3M weekly downloads—enduring baseline demand. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,638 | 5,712,837 | Meta's 8B instruction-tuned Llama 3.1, the workhorse open-weight chat model. Trending with 5.7M downloads, reflecting sustained production adoption. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,290 | 7,702,543 | Flagship 27B multimodal model supporting image-text-to-text with conversational abilities. Trending as the #1 model this week—15.3K likes and 7.7M downloads signal massive adoption. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,726 | 325,712 | DeepSeek's latest Flash multimodal model with image-text-to-text pipeline. Trending for its speed/quality tradeoff and 325K weekly downloads. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 811 | 5,202 | Compact MoE multimodal model on Qwen3.5-MoE backbone with image-text-to-text support. Trending for sparse expert routing in a mini form factor. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 577 | 6,716 | 3B music generation model with symbolic planning and agentic editing capabilities. Trending for structured audio generation beyond simple waveform synthesis. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 652 | 30,881 | Larger MoE multimodal sibling to N2.5-mini, 30K downloads indicate strong interest in scaled-up sparse multimodal. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,012 | 1,580,077 | Diffusion-based image-to-video, text-to-video, and video-to-video model in single-file format. Trending with 1.6M downloads—leading open video diffusion. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 259 | 2,390 | Zero-shot TTS with voice cloning capabilities. Trending for Tencent's entry into open speech synthesis with few-shot adaptation. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 431 | 147,766 | Community Minimax-H3 variant for video generation (text-to-video, image-to-video). Trending with 147K downloads as accessible video diffusion. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,352 | 4,906,989 | Official MiniMax-H3 video diffusion model (image-text-to-video) via Diffusers. Trending with 5.4K likes and 4.9M downloads—dominant open video model. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,277 | 667,672 | Experimental Qwen4-lineage Flash multimodal model with image-text-to-text. Trending as a preview of next-gen architecture with 667K downloads. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 186 | 898 | Lightweight multimodal Flash model with image-text-to-text. Trending as a new compact entrant from Agnes-AI. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,372 | 1,992,040 | Z.ai's GLM 5.3 Flash multimodal model with conversational image-text-to-text. Trending with 2M downloads—strong Chinese-language multimodal adoption. |
| [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 191 | 14,533 | Minimax-H3 LoRA adapter packaged for ComfyUI workflow integration. Trending for making video diffusion accessible in node-based pipelines. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,004 | 254,208,155 | The de facto standard 384-dim sentence embedding model (22M params). Trending with 254M weekly downloads—ubiquitous in RAG and retrieval pipelines. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,351 | 46,672,496 | Original 110M BERT base for fill-mask and transfer learning. Trending with 46.7M downloads—enduring backbone for classification tasks. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,544 | 21,504,830 | CLIP ViT-B/32 for zero-shot image classification and cross-modal retrieval. Trending with 21.5M downloads—foundational vision-language alignment. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,456 | 7,314,069 | 66M parameter distilled BERT retaining 97% performance at 60% speed. Trending with 7.3M downloads—production default for efficient NLP. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 550 | 22,228 | Massively Multilingual Speech 300M wav2vec2 model for 1,000+ languages. Trending for low-resource speech recognition coverage. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 816 | 865,343 | Google's 200M-parameter foundation model for zero-shot time-series forecasting. Trending with 865K downloads—rare open-weight forecasting specialist. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,147 | 884,926 | GSQ (Grouped Sparse Quantization) + RCO mixed-precision GGUF of Qwen3.8-27B. Trending for advanced quantization research with 885K downloads. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,169 | 9,456,089 | Unsloth's optimized GGUF quantization of Qwen3.8-27B for fast CPU/GPU inference. Trending with 9.5M downloads—dominant quantized distribution. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 751 | 949,394 | Heavily merged/fine-tuned uncensored Qwen3.8-27B GGUF with multiple specialist fusions. Trending for "kitchen-sink" alignment removal and coding focus. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 215 | 5,783 | FP8-quantized uncensored fine-tune of DeepSeek-V4.1-Flash. Trending for alignment-free multimodal with efficient 8-bit floating point. |

---

## Ecosystem Signal

**Qwen 3.8 has become the new gravitational center**—the base model, three quantized variants (unsloth, ISTA-DASLab, DavidAU), and a Flash-Next preview collectively account for ~26K likes and 19M downloads this week. This mirrors the Llama 3.1 moment: a single strong base model catalyzes a quantization/fine-tune ecosystem that outperforms proprietary alternatives on accessibility. **MoE architectures are mainstreaming**: DeepSeek-V4.1-Flash, Edge0-35B-A3B, and both Nex-N2.5 models all use sparse expert routing, signaling that parameter efficiency now trumps dense scaling for open weights. **Video diffusion has crossed the usability threshold**—MiniMax-H3 (5.4K likes) and LTX-2.5 (4K likes) offer single-file Diffusers integration, ComfyUI nodes, and competitive quality, making open video generation practical for creators. **Quantization research is diversifying beyond GGUF**: ISTA-DASLab's GSQ-RCO mixed-precision and dealignai's FP8 DeepSeek variant show the community exploring numerical formats tailored to model architecture rather than one-size-fits-all 4-bit. **Open-weight momentum remains proprietary-adjacent**: Qwen, DeepSeek, MiniMax, Z.ai (GLM), and Tencent all release competitive models under permissive licenses, while Meta's Llama 3.1 holds steady at 5.7M downloads—no single vendor dominates, but Chinese labs now lead multimodal and video fronts.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The current "default" open multimodal LLM. With 7.7M weekly downloads, broad tooling support (transformers, vLLM, llama.cpp, MLX), and strong image-text reasoning, it's the reference point for any multimodal application. Try the unsloth GGUF for local deployment.

2. **MiniMaxAI/MiniMax-H3** — Best open video diffusion model today. 4.9M downloads, native Diffusers support, ComfyUI integration, and text-to-video + image-to-video in one checkpoint. Essential for studying or deploying video generation without API costs.

3. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — Cutting-edge quantization research in a usable artifact. GSQ (grouped sparse quantization) + RCO (reconstruction-aware calibration) mixed-precision pushes 27B models into consumer VRAM with minimal quality loss. Study the method or deploy the GGUF directly.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*