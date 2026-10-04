# Hugging Face Trending Models Digest 2026-10-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-04 05:31 UTC

---

# Hugging Face Trending Models Digest — 2026-10-04

## Today's Highlights
Qwen dominates the leaderboard with **Qwen3.8-27B** (16.9K likes, 6.9M downloads) and **Qwen3.8-Flash-Next** (5.9K likes), signaling strong momentum for their new 3.8-series multimodal LLMs. Lightricks' **LTX-2.5** leads video generation with 6.2K likes and 1.6M downloads, while Cloudflare enters multimodal with Clef and Clef-Flash. Quantization activity is exceptionally high: ISTA-DASLab released four GSQ-RCO quantized Qwen variants in one week, and ternary/2-bit compression (Ternary-Bonsai-2) garnered 2.4K likes. DeepSeek-V4.1-Flash debuts at 4K likes, extending the MoE flash model trend.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,891 | 6,895,117 | Flagship 27B multimodal LLM with image-text-to-text capability; leads weekly likes by a wide margin and shows massive download velocity for a new model family. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,868 | 1,404,413 | Next-gen flash variant optimized for speed and conversational use; already 1.4M downloads indicating strong developer adoption for real-time applications. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,062 | 787,841 | Latest MoE flash model with image-text-to-text support; 788K downloads in debut week confirms DeepSeek's continued momentum in efficient multimodal models. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 265 | 0 | German MoE reasoning model built for vLLM deployment; zero downloads but notable for European sovereign AI efforts and mixture-of-experts architecture. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,786 | 12,483 | 9B multimodal model emphasizing spatial reasoning; 2.8K likes reflect research interest in vision-language models with explicit geometric understanding. |
| [NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash) | NaiveAI | 145 | 1,497 | Compact MoE model targeting code and long-context tasks; early-stage research release with niche appeal for efficient coding assistants. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,087 | 0 | Calibrated decision-making classifier (System One); 5K likes despite zero downloads suggests strong pre-launch buzz for reliable text classification. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 402 | 3,251 | Multilingual text classification decision model; modest traction but notable for multilingual support in a lightweight classification package. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,159 | 1,629,984 | Unified diffusion model for image-to-video, text-to-video, and video-to-video; 1.6M downloads makes it the most adopted video generation model this week. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,909 | 85,895 | Official Qwen text-to-image and image-editing model; strong official backing and 86K downloads indicate production readiness for creative workflows. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,951 | 1,455,921 | GGUF-quantized uncensored version of Qwen-Image-2.1; 1.45M downloads shows massive demand for local, unrestricted image generation. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,021 | 2,620 | Cloudflare's entry into multimodal image-text-to-text; 1K likes signal industry interest in edge-deployable vision-language models. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 570 | 257,298 | Turbo LoRA fine-tune for accelerated Qwen-Image-2.1 inference; 257K downloads reflects appetite for speed-optimized generation variants. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 368 | 4,310 | Flash variant of Clef optimized for latency; 4.3K downloads in early adoption for real-time multimodal applications. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,151 | 193,270 | LoRA-based face swap for Qwen-Image-2.1; 193K downloads shows strong community adoption for identity-preserving image editing. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 273 | 13,258 | Character-swap LoRA for MiniMax-H3 video model; niche but growing interest in consistent character video editing. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 163 | 4,924 | First-last-frame LoRA for 360° orbit video generation; early exploration of camera-controlled video synthesis. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 693 | 3,190 | Contrastive learning verifier/reranker for text ranking; 693 likes indicate growing interest in contrastive methods for retrieval augmentation. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 652 | 48,784 | Speaker diarization and voice activity detection; 49K downloads shows production adoption in audio processing pipelines. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 392 | 1,338 | Novel image classification architecture (arXiv:2609.33325); research-focused with academic citation driving early attention. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 174 | 2,361 | MLX-optimized ASR for Apple Silicon; 2.4K downloads highlights on-device speech recognition demand for Mac/iOS developers. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 351 | 50,402 | Token classification for intent/entity extraction; 50K downloads confirms strong uptake for lightweight structured prediction. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,943 | 1,674,292 | GSQ-RCO mixed-precision quantization of Qwen3.8-27B; 1.67M downloads proves massive demand for compressed flagship multimodal models. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,396 | 3,969,867 | 2-bit ternary quantized 27B model; nearly 4M downloads shows extreme compression (2-bit) is viable for quality retention. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,400 | 2,116,212 | Heavily merged/uncensored fine-tune with MTP; 2.1M downloads reflects appetite for uncensored, capability-merged community models. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 523 | 1,474,719 | Quantized Flash-Next variant; 1.47M downloads confirms quantization demand extends to efficient flash models. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 241 | 303,256 | Coder-specialized quantization of Flash-Next; 303K downloads shows niche but solid demand for code-optimized compressed models. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 324 | 11,585 | Cybersecurity-focused uncensored fine-tune; specialized domain adaptation with GGUF distribution for local deployment. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 198 | 11,013 | MoE model (29B total, 4B active) in GGUF; early adoption for efficient mixture-of-experts local inference. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 187 | 520 | EXL3 quantization (3.0 bpw) of GLM MoE; showcases emerging EXL3 format adoption beyond GGUF for MoE models. |

---

## Ecosystem Signal
The Qwen 3.8 series has rapidly become the central gravity for open multimodal development, spawning official releases, flash variants, and a Cambrian explosion of community quantizations (ISTA-DASLab alone dropped four GSQ-RCO GGUFs). Quantization is no longer a niche—**2-bit ternary (Ternary-Bonsai-2, 4M downloads) and mixed-precision GSQ-RCO** are mainstream, with download counts rivaling base models. Video generation consolidated around **Lightricks LTX-2.5** as the de facto open standard (1.6M downloads), while MiniMax-H3 LoRAs explore character-consistent editing. Proprietary labs (Cloudflare, Aleph-Alpha, DeepSeek) are open-weighting flash/multimodal models to capture developer mindshare, but community fine-tunes (DavidAU, Viggle, Alissonerdx) often exceed official variants in downloads. Audio remains a quiet corner: NVIDIA's diarization and Fermion's MLX ASR are the only speech models trending, suggesting modality-specific gaps persist. The uncensored/merged model economy (DavidAU, abenzerps, orcarouter) continues to drive massive GGUF traffic, indicating alignment preferences strongly favor user control.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The definitive open multimodal LLM right now: 16.9K likes, 6.9M downloads, and a thriving quantization ecosystem (ISTA-DASLab, DavidAU) make it the best-supported base for vision-language applications.
2. **Lightricks/LTX-2.5** — Most downloaded video generation model (1.6M) with unified image/video/text-to-video pipelines; ideal for studying production-grade diffusion video architectures.
3. **prism-ml/Ternary-Bonsai-2-27B-gguf** — 2-bit ternary quantization achieving near-lossless quality at 4M downloads; essential reference for extreme compression research and on-device deployment of 27B models.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*