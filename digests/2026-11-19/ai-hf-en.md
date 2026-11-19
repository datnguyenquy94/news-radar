# Hugging Face Trending Models Digest 2026-11-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-19 06:59 UTC

---

# Hugging Face Trending Models Digest — 2026-11-19

## Today's Highlights

The trending leaderboard is currently dominated by **Qwen3.8-27B**, which appears in three distinct forms within the top 30, underscoring its status as the week's most influential base model. Concurrently, the **MiniMax-H3-Image** architecture has fractured into three separate entries (MiniMaxAI, Comfy-Org, and a direct link), reflecting fierce community interest in next-generation text-to-image diffusion. The audio space sees heightened activity with the emergence of full-duplex speech models like **Haru-4B** and the continued popularity of Zyphra's **ZONOS3-Mini**. Meanwhile, Lightricks' **LTX-2.5** maintains an extraordinary download-to-like ratio, signaling sustained enterprise adoption of video generation tools.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,582 | 6,888,351 | A 27-billion parameter multimodal model supporting image-text inputs, currently topping the leaderboard with over 20k weekly likes and 6.9M total downloads. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,200 | 6,998,076 | The most downloaded GGUF-quantized variant of Qwen3.8-27B, enabling local inference on consumer hardware while preserving the base model's capabilities. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 625 | 377 | A parameter-efficient fine-tuned adapter using TRL/async-GRPO, demonstrating the growing ecosystem around GRPO-style alignment for Qwen3.8. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,926 | 492,972 | A Flash-optimized variant of DeepSeek's latest architecture, balancing strong reasoning with accelerated inference throughput. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 531 | 73,309 | A massive 145-billion parameter MoE model using NVFP4 quantization, pushing the boundaries of open-weight large-scale language modeling. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,628 | 2,871,190 | A diffusion-based video model supporting image-to-video, text-to-video, and video-to-video pipelines, leading the space with 12.6k likes and 2.9M downloads. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,487 | 1,037,285 | A Flux.3 ComfyUI variant specialized for image generation and editing, benefiting from the Flux family's strong community adoption. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,597 | 759,661 | A new text-to-image diffusion model showing competitive performance against established architectures, with downloads surpassing 759k in its first week. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 562 | 2,950,724 | A ComfyUI-tuned finetune of MiniMax-H3-Image, illustrating the model's adaptability to different user workflows and pipelines. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 970 | 5,314 | A 4-billion parameter full-duplex audio-to-audio model enabling real-time speech-to-speech conversion with low latency. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 555 | 114,126 | A compact text-to-speech model achieving high-quality audio synthesis with a small footprint, popular for on-device deployment. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 231 | 0 | A text-to-video model built on Wan2.1-T2V-14B, representing Apple's research interests in generative video despite zero public downloads. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 276 | 1,226 | An audio-text-to-video avatar model optimized for generating expressive digital human videos from minimal input. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,486 | 37,179 | An image-to-3D model leveraging Gaussian Splatting to reconstruct high-fidelity 3D assets from single images, trending for its novel approach to novel-view synthesis. |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 110 | 42 | A background removal diffusion model achieving state-of-the-art matting quality, though with modest community engagement this week. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 299 | 4,430 | A text-to-speech model distributed via ONNX and GGUF formats, notable for its tiny vocabulary size and efficiency for edge devices. |
| [Reson8/Rumble-2-Flash](https://huggingface.co/Reson8/Rumble-2-Flash) | Reson8 | 107 | 453 | An automatic speech recognition model based on Qwen3-ASR, demonstrating the versatility of Qwen3 family extensions. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,983 | 1,955,213 | The third iteration of SAM, a segment anything model for video and image mask generation, maintaining massive download figures despite lower like growth. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 625 | 377 | A GRPO-adapted fine-tune of Qwen3.8-27B, representing the latest push in reinforcement learning from human preferences for open models. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,200 | 6,998,076 | The definitive GGUF quantization of Qwen3.8-27B, enabling local deployment on consumer GPUs/CPUs without significant capability loss. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 566 | 163,423 | A 4-billion parameter distilled language model from NVIDIA's Nemotron family, optimized for efficiency while maintaining strong reasoning. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 239 | 1,052 | A Mixture-of-Experts text generation model designed for fast, conversational inference with a small footprint. |
| [KORMo-VL/KORMo-Web-11B](https://huggingface.co/KORMo-VL/KORMo-Web-11B) | KORMo-VL | 114 | 277 | A vision-language model fine-tuned for GUI agent tasks, leveraging the LlavaOneVision architecture for multimodal interaction. |

## Ecosystem Signal

The November 19th snapshot reveals a **Qwen3.8 dominance** across multiple categories, with the 27B parameter model appearing in no fewer than five distinct entries—spanning base weights, GGUF quantization, parameter-efficient fine-tunes, and communityforged variants. This multiplicity suggests the Qwen family has become the de facto reference point for open-model experimentation this quarter. 

A notable **quantization arms race** is evident, with unsloth's GGUF release amassing nearly 7M downloads—far outpacing the base model's 6.9M—indicating a massive shift toward local, low-bit inference. The **MiniMax-H3-Image** architecture similarly demonstrates how quickly new diffusion foundations can fragment into multiple ecosystem entries (base model, ComfyUI finetune, and direct links), reflecting both community enthusiasm and the challenges of standardizing rapidly evolving generator architectures.

Perhaps most intriguingly, the **audio-modal space** is witnessing diversification beyond simple TTS: Haru-4B's focus on full-duplex speech capabilities and ZONOS3-Mini's on-device efficiency signal a maturing market that moves beyond generic voice synthesis toward specialized, performance-optimized pipelines. Meanwhile, the continued reign of Lightricks' LTX-2.5 with its 200+ download-per-like ratio suggests that enterprise and creator workflows are increasingly standardizing around a handful of proven video generation backbones.

## Worth Exploring

1. **unsloth/Qwen3.8-27B-GGUF** — The 6.9M+ download count on this GGUF quantization makes it the most accessible entry point into Qwen3.8's capabilities for local developers. Its ability to run on consumer hardware while preserving the base model's multimodal and reasoning strengths represents the current gold standard for open-weight deployment.

2. **Lightricks/LTX-2.5** — With 12.6k likes and nearly 3M downloads, this model has become the de facto leader in diffusion-based video generation. Its multi-pipeline support (image-to-video, text-to-video, video-to-video) and unusually high adoption rate make it essential studying for anyone building or evaluating generative video workflows.

3. **speridlabs/idol** — Though newer to the trend list, this image-to-3D Gaussian Splatting model merits attention for its novel approach to single-view 3D reconstruction. The 2.5k+ likes and 37k downloads in a short period suggest it's filling a gap in the creator pipeline between 2D generation and 3D asset creation.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*