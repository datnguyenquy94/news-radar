# Hugging Face Trending Models Digest 2026-11-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-18 06:59 UTC

---

# Hugging Face Trending Models Digest (2026-11-18)

## Today's Highlights

The trending leaderboard is currently dominated by Qwen3.8-27B variants, with the base model and multiple quantization/finetune adaptations occupying the top spots for language modeling capability. In the multimodal space, Lightricks/LTX-2.5 and MiniMaxAI/MiniMax-H3-Image represent the cutting edge of video and image generation respectively, while the ecosystem shows a growing trend toward GGUF-quantized models for local inference. Notably, the "uncensored" and "heretic" tag variants of Qwen models are generating significant community engagement, reflecting ongoing debates around model alignment and accessibility.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,466 | 6,942,530 | A flagship 27B parameter language model leading the leaderboard with exceptional text generation and image-text understanding capabilities, trending due to its strong performance and versatility. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,149 | 6,827,598 | A GGUF-quantized version of the Qwen3.8-27B model that enables efficient local inference, trending due to the unsloth optimization and massive download count indicating strong demand for quantized LLMs. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 195 | 0 | A parameter-efficient fine-tuned adaptation of Qwen3.8-27B using async-grpo methods, trending within the research community for its innovative training approach despite zero downloads. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,289 | 4,292,911 | An "abliterated" (uncensored) GGUF-quantized Qwen3.8-27B model that has garnered significant attention for removing safety constraints, trending due to its large download base and community interest in uncensored AI. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,306 | 1,759,757 | A heavily modified, turbo-charged GGUF variant of Qwen3.8-27B featuring multiple fine-tuning adaptations and a "cold-fusion" theme, trending for its creative naming and significant community engagement. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,441 | 2,828,071 | A state-of-the-art diffusion model supporting image-to-video, text-to-video, and video-to-video generation, trending due to its versatility and high download count as a leading video generation pipeline. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,514 | 727,110 | A flagship text-to-image model (also available as ComfyUI checkpoint) trending for its high-quality generation and significant download volume, representing the latest from MiniMaxAI in diffusion-based image creation. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 527 | 2,660,341 | A ComfyUI-optimized version of the MiniMax-H3-Image model, trending due to the popular ComfyUI framework integration and substantial download count despite lower like count. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,420 | 1,062,051 | A Flux III image generation model integrated with ComfyUI, trending for its advanced image-editing capabilities and adoption within the ComfyUI user community. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,456 | 36,388 | An image-to-3D generation model utilizing Gaussian Splatting, trending for bridging the gap between 2D images and 3D representations with Apache 2.0 licensing. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | ---: | ---: | ---: | :--- |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 500 | 61,591 | A massive Mixture-of-Experts (MoE) language model using NVFP4 quantization, trending for its enormous parameter count and efficient inference capabilities. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 516 | 93,909 | A text-to-speech model from Zyphra trending for its high-quality audio output and compact model size, representing the latest TTS innovation from the Zyphra team. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 240 | 3,042 | A tiny vocabulary text-to-speech model using ONNX and GGUF, trending for its extreme portability and efficiency for on-device speech synthesis. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,906 | 1,971,023 | The latest Segment Anything Model (SAM3) trending for its video feature extraction capabilities and massive download count as a foundational computer vision model. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 418 | 35,418 | An image-to-text and zero-shot object detection model trending for its multimodal capabilities and efficiency in document understanding tasks. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | ---: | ---: | ---: | :--- |
| [Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF) | Abiray | 301 | 190,006 | A GGUF-quantized version of the MiniMax-H3-Image text-to-image model, trending for making diffusion models accessible via lightweight quantized formats. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-4B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-4B-UNCENSORED-heretic) | xtools-at | 240 | 21,167 | A Qwen3.5-4B based uncensored text-generation model trending for its "heretic" moniker and community interest in unfiltered model behaviors. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 235 | 0 | A 9B parameter multimodal text-generation model trending for its research-focused "loop" architecture despite zero download count. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 446 | 18,359 | A small image-to-text conversational model trending for its niche in multimodal interaction with relatively low resource requirements. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 213 | 489 | A video avatar generation model trending for its text-to-video and audio-text-to-video capabilities within the LongCat ecosystem. |

## Ecosystem Signal

The Hugging Face trending data reveals a pronounced bifurcation in model popularity this week. The Qwen3.8-27B family absolutely dominates the language modeling sector, with the base model, multiple GGUF quantizations, and various "abliterated" or "heretic" fine-tunes all cracking the top 30. This suggests that while the base architecture commands massive attention, the community is heavily engaged in adapting these models for specific use cases—particularly local inference via GGUF and uncensored variants. Quantization activity is exceptionally strong; the unsloth/Qwen3.8-27B-GGUF entry alone garnered over 6.8 million downloads, underscoring a widespread demand for running large models on consumer hardware.

On the multimodal front, there's a clear split between research-grade innovations and production-ready pipelines. Lightricks/LTX-2.5 leads in video generation downloads, while MiniMaxAI/MiniMax-H3-Image represents the cutting edge of text-to-image. Notably, the "uncensored" and "heretic" tags appear across multiple model families (Qwen, DeepSeek), indicating a persistent community current toward removing safety guardrails, which contrasts with the more conservative adoption of specialized models like SAM3 or Flux. The emergence of MoE architectures like Edge0-145B-NVFP4 and the continued viability of smaller, efficient models (tiny-voca, ZONOS3-Mini) suggests the ecosystem is maturing toward a "right-size model for the task" philosophy rather than solely pursuing maximum parameter counts.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — As the clear leader in likes and downloads, this model is essential for anyone wanting to experience the current state-of-the-art in multimodal language understanding. Its 27B parameter scale and image-text-to-text pipeline make it a versatile benchmark for comparing against newer or smaller architectures.

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — For practitioners interested in video generation, this model represents one of the most accessible and actively downloaded pipelines available on Hugging Face. Its support for multiple video generation directions (image-to-video, text-to-video, video-to-video) within a single diffusion framework makes it an invaluable tool for content creation experimentation.

3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — This quantization effort is arguably the most significant trending activity after the base model itself. With nearly 6.9 million downloads, it demonstrates the practical demand for local LLM inference and the effectiveness of the unsloth optimization pipeline. Studying this file provides insight into how the community is bridging the gap between powerful foundation models and consumer-grade hardware constraints.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*