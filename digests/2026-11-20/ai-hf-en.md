# Hugging Face Trending Models Digest 2026-11-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-20 06:52 UTC

---

# Hugging Face Trending Models Digest — 2026-11-20

## Today's Highlights

The 2026-11-20 leaderboard reveals a vibrant ecosystem where **multimodal generation** and **Qwen-family dominance** intersect. Apple's *FastFrames-L* and Lightricks' *LTX-2.5* showcase rapidly improving text-to-video capabilities, while the Qwen3.8 family continues to split into diverse adapters—from unsloth's highly downloaded GGUF quantizations to harness-hub's PEFT-adapted variants. Notably, community-driven uncensored and turbo-charged variants like DavidAU's *Qwen3.8-27B-TURBO-* and huihui-ai's *abliterated* versions demonstrate the growing maturity of local inference tooling.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,703 | 6,647,301 | The flagship 27B parameter model of the Qwen3.8 family, leading in conversational AI and multimodal tasks; trending due to its massive download count and role as the base model for numerous fine-tunes. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,240 | 7,138,192 | A GGUF-quantized version of Qwen3.8-27B optimized by unsloth; trending for enabling local, low-vram inference of a large LLM without severe quality loss. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,412 | 1,788,170 | A community fine-tuned "turbo" and uncensored GGUF variant; trending for pushing the boundaries of local inference customization and censorship bypass. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 755 | 1,320 | A PEFT (Parameter-Efficient Fine-Tuning) adapted model; trending for demonstrating modern RLHF/GRPO training pipelines on Qwen3.8. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,447 | 4,382,996 | An abliterated (uncensored) GGUF version; trending for the growing demand for open, unfiltered local LLMs. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,764 | 2,934,937 | A state-of-the-art diffusion model for image-to-video and text-to-video; trending for its high-quality video generation and versatility across video tasks. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 356 | 0 | A text-to-video model based on Wan2.1; trending as an Apple-backed entry into the rapidly evolving video generation space. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 3,675 | 6,266 | An audio-to-audio model focused on full-duplex speech; trending for its specialization in real-time speech conversion and synthesis. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 293 | 0 | An audio separation/isolator model; trending for its utility in speech enhancement and noise reduction pipelines. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 586 | 128,323 | A text-to-speech model; trending for its high-quality speech synthesis and compact architecture. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 159 | 103 | An image background removal model; trending for its high-quality alpha matting and integration into diffusion pipelines. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 590 | 37,318 | An image-text-to-text conversational model; trending for its multimodal instruction-following capabilities. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 341 | 6,368 | A text-to-speech model with a tiny vocabulary; trending for its extreme model size efficiency and onnx/gguf compatibility. |
| [Reson8/Rumble-2-Flash](https://huggingface.co/Reson8/Rumble-2-Flash) | Reson8 | 171 | 929 | An automatic speech recognition model; trending for its accuracy and efficiency in transcribing speech. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 296 | 1,703 | A Mixture-of-Experts (MoE) text generation model; trending for its efficient inference scaling via MoE architecture. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 615 | 80,481 | A massive 145B parameter MoE model in NVFP4 format; trending for pushing the limits of large-scale open-weight inference. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 7,076 | 1,924,898 | The third iteration of the Segment Anything Model; trending as the gold standard for image segmentation and object detection. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,991 | 502,094 | A high-performance image-text-to-text model; trending for its strong reasoning and multimodal capabilities. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,657 | 821,710 | A text-to-image diffusion model; trending for its high aesthetic quality and integration with ComfyUI workflows. |

## Ecosystem Signal

The November 20th snapshot reveals a mature open-weight ecosystem where **Qwen3.8** serves as the definitive backbone for both research and practical deployment. A clear bifurcation is occurring: the "base model" race is dominated by Qwen, but the "application layer" is explosion of specialized fine-tunes—particularly in GGUF format—that prioritize local privacy and offline capability over raw cloud throughput. Quantization is no longer a niche; models like `unsloth/Qwen3.8-27B-GGUF` and `DavidAU`'s turbo variants show that the community is actively optimizing 27B+ parameter models for consumer-grade hardware. Furthermore, the video domain is witnessing a split between corporate-backed initiatives (Apple's *FastFrames*) and open-source diffusion breakthroughs (Lightricks' *LTX-2.5*), signaling that the "best" video model depends heavily on the specific trade-off between quality, latency, and hardware requirements. Finally, the persistent presence of "uncensored" and "abliterated" tags indicates a continued, vigorous demand for alignment-free models, pushing the ecosystem toward more sophisticated fine-tuning and merging techniques.

## Worth Exploring

1.  **Lightricks/LTX-2.5**: Worth studying for anyone interested in current state-of-the-art video generation. Its ability to handle image-to-video, text-to-video, and video-to-video within a single framework makes it a versatile tool for content creators and researchers looking to experiment with dynamic visual content.
2.  **unsloth/Qwen3.8-27B-GGUF**: A critical model for practitioners looking to run powerful LLMs locally. It demonstrates that high parameter count models can be successfully quantized to GGUF format with acceptable performance, making it the go-to starting point for local AI setups.
3.  **apple/FastFrames-L**: Worth exploring as a benchmark for Apple's entry into generative video. While it has zero downloads currently, its integration of the Wan2.1 architecture provides insight into how major tech companies are adapting existing research frameworks for proprietary or specialized platforms.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*