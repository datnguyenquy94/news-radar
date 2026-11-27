# Hugging Face Trending Models Digest 2026-11-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-27 07:55 UTC

---

# Hugging Face Trending Models Digest (2026-11-27)

## Today's Highlights
The Hugging Face leaderboard is currently dominated by vision and multimodal models, with **Lightricks/LTX-2.5** (13.6k likes) leading a surge in image-to-video capabilities. Open-source language models remain competitive, highlighted by the exceptional popularity of **Qwen/Qwen3.8-27B** (21.9k likes) and the active Quantization community driving variants like **unsloth/Inkling-2-Mini-GGUF**. Proprietary or restricted models such as **nvidia/Nemotron-Labs-Image-30B-A3B** and **apple/DepthPro2** show low download counts despite presence on the board, suggesting a shift toward accessible, fine-tuned, and quantized variants.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,878 | 6,047,011 | A massive 27B parameter model leading conversational AI trends, noted for its strong instruction-following and broad capabilities. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 6,322 | 96,527 | A transformative image-text-to-text model gaining traction for its conversational abilities and novel loop architecture. |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,517 | 2,445,633 | The quantized GGUF version of Inkling-2-Mini, driving explosive downloads (2.4M+) due to local accessibility via llama.cpp. |
| [orcarouter/Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF) | orcarouter | 301 | 12,157 | A GGUF variant of Inkling-2-Mini that has trended due to its "abliterated" (uncensored) nature and local deployment ease. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,159 | 3,844 | A parameter-efficient fine-tuned adaptation of Qwen3.8-27B, trending for its use of async GRPO and PEFT techniques. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,618 | 3,041,405 | The trending king of video generation, capable of image-to-video, text-to-video, and video-to-video with high fidelity. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 1,013 | 515,591 | A quantized diffusion model for text-to-image generation that trends due to its uncensored output and Qwen integration. |
| [sand-ai/MAGI-2-preview](https://huggingface.co/sand-ai/MAGI-2-preview) | sand-ai | 308 | 0 | A preview model for image-to-video and text-to-audio-video generation, notable for its multimodal fusion tags. |
| [Lakonik/pi-H3](https://huggingface.co/Lakonik/pi-H3) | Lakonik | 332 | 73,578 | An image-to-video model utilizing flow matching and distillation, trending for its efficiency and audio-video output capabilities. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 975 | 15,244 | A specialized audio-to-audio model for voice isolation and speech enhancement, trending in the AI audio toolkit space. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1) | Aleph-Alpha | 190 | 837 | A MoE (Mixture of Experts) model trending for its reasoning capabilities and vllm compatibility. |
| [baidu/ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview) | baidu | 355 | 1,193 | A large MoE model (ERNIE 5.5) trending for text generation, representing major Asian lab activity on the hub. |
| [KRAFTON/Raon-1-mini](https://huggingface.co/KRAFTON/Raon-1-mini) | KRAFTON | 169 | 264 | A specialized transformer model from the gaming giant KRAFTON, trending for its text-generation domain. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 2,110 | 21,394 | A 3D human mesh recovery model based on SAM and DINOv3, trending for its application in pose estimation and mesh recovery. |
| [prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 556 | 59,366 | A highly quantized (2-bit ternary) LLM GGUF model trending for its extreme compression and CPU-friendliness. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,438 | 1,873,950 | A heavily named, quantized GGUF variant of Qwen3.8-27B that trends for its "TURBO" optimization and uncensored/heretic tuning. |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 217 | 14,337 | A quantized version of Qwen3.8-27B tailored for coding agents, trending in the niche quantized coding space. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 1,256 | 189,735 | A base model (MiniMax-H3) trending for its architecture tags and finetune status, representing newer model family adoption. |
| [ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF) | ISTA-DASLab | 159 | 0 | A niche quantization variant (GSQ/RCO) of Inkling-2-Mini, trending for its mixed-precision experiments. |
| [strata-engine/Inkling-2-Mini-Strata](https://huggingface.co/strata-engine/Inkling-2-Mini-Strata) | strata-engine | 245 | 2,965 | A quantization and MOE-focused fine-tune of Inkling-2-Mini, trending for its community-driven optimization. |

## Ecosystem Signal
The current Hugging Face ecosystem reveals a strong momentum toward **quantized and fine-tuned open-weight models**. The "Inkling-2-Mini" family exemplifies this, spawning numerous GGUF, Strata, and uncensored variants that prioritize local deployment and accessibility over raw parameter counts. Similarly, the **Qwen3.8-27B** base model is being extensively adapted, with versions like the "Turbo" and "NariQ" GGUF releases gaining significant traction. While proprietary models like Nemotron and DepthPro exist, their download counts are negligible compared to the 6M+ downloads of the open Qwen model, signaling a definitive user preference for accessible, modifiable, and runnable open-source weights. MoE architectures (e.g., Kolibri-1.1, ERNIE-5.5) are also emerging as a trend for scaling capabilities efficiently.

## Worth Exploring
1. **Lightricks/LTX-2.5**: This model is worth studying for anyone interested in the current state of AI video generation. Its ability to handle image-to-video, text-to-video, and video-to-video in a single file pipeline makes it a versatile tool for content creators, and its 13k+ likes reflect its status as the leading open-source model in this domain.
2. **unsloth/Inkling-2-Mini-GGUF**: This is the most downloadable model on the board (2.4M+), making it essential for study if one wants to understand the practical adoption of quantized LLMs. It demonstrates how a niche model can achieve massive reach through the GGUF format, enabling local inference on consumer hardware without sacrificing the "Inkling" conversational style.
3. **Qwen/Qwen3.8-27B**: As the highest-liked model (21.9k) and a download giant (6M+), this represents the gold standard for current open-weight LLM performance. Studying it provides insight into the capabilities of modern transformer architectures and the community drive behind the Qwen ecosystem.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*