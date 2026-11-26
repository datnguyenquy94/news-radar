# Hugging Face Trending Models Digest 2026-11-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-26 07:54 UTC

---

# Hugging Face Trending Models Digest (2026-11-26)

## Today's Highlights
The trending landscape is dominated by the **Inkling-2-Mini family**, which accounts for three positions in the top 30, showcasing a surge in specialized multimodal models. Concurrently, the **Qwen3.8-27B** ecosystem is thriving with multiple quantized and adapted variants capturing significant attention. In the visual domain, **LTX-2.5** leads image-to-video generation, while **Qwen-Image 2.1** remains a powerhouse for text-to-image tasks. The list also highlights a healthy mix of region-specific and uncensored adaptations, reflecting the community's diverse interests.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,809 | 6,047,011 | The flagship Qwen3.5 model leading the leaderboard with massive download volume, serving as the base for numerous quantized and specialized adaptations. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 6,093 | 96,527 | A high-performing multimodal model combining image and text processing, gaining traction for its conversational capabilities and efficient architecture. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,122 | 3,844 | A parameter-efficient adaptation of Qwen3.8-27B utilizing async GRPO, demonstrating the growing trend of community-driven fine-tuning. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 1,127 | 189,735 | A Minimax H3 base model fine-tune that has rapidly gained popularity, bridging the gap between base models and specialized applications. |
| [inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air) | inclusionAI | 239 | 1,467 | A compact, efficient model focusing on custom code integration and safeguards, representing the rising interest in localized and safe AI deployment. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,467 | 3,041,405 | The undeniable leader in video generation, supporting image-to-video, text-to-video, and video-to-video with high-fidelity output and fast sampling. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,809 | 6,047,011 | While primarily an LLM, its robust vision-language pipeline makes it a cornerstone for multimodal research and deployment. |
| [Lakonik/pi-H3](https://huggingface.co/Lakonik/pi-H3) | Lakonik | 301 | 73,578 | A diffusion-based model specializing in text-to-audio-video generation, showcasing the convergence of LLM and audio-visual synthesis capabilities. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 633 | 0 | An Apple-backed text-to-video model based on Wan2.1, highlighting the tech giant's increasing involvement in generative video research. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 913 | 15,244 | A specialized audio-to-audio model for voice isolation and speech enhancement, carving a niche in real-time communication and media post-processing. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 168 | 14,337 | A quantized Qwen3.8 variant tailored for coding agents, reflecting the demand for efficient, local code-generation tools. |
| [prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 389 | 59,366 | A pioneering 2-bit ternary model pushing the boundaries of extreme quantization, ideal for resource-constrained environments. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 2,021 | 20,983 | A 3D human mesh recovery model leveraging DINOv3, significant for computer vision and animation pipelines. |
| [KRAFTON/Raon-1-mini](https://huggingface.co/KRAFTON/Raon-1-mini) | KRAFTON | 122 | 264 | A domain-specific model from KRAFTON, indicating the entry of gaming and entertainment giants into the open-model space. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,263 | 0 | A monocular depth estimation model delivering metric depth, a critical tool for robotics and AR/VR applications. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,394 | 2,445,633 | The GGUF-quantized version of Inkling-2-Mini, achieving massive download numbers (2.4M+) by enabling local Llama.cpp deployment. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 857 | 762,491 | An uncensored GGUF port of Inkling-2-Mini, reflecting the community's demand for unfiltered local models. |
| [orcarouter/Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF) | orcarouter | 233 | 12,157 | Another heavily quantized and modified variant of Inkling-2-Mini, emphasizing the "abliterated" trend in model customization. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,381 | 1,873,950 | A heavily named, highly popular GGUF fine-tune of Qwen3.8-27B, demonstrating the creativity and engagement within the quantized model scene. |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 168 | 14,337 | Reappearing here for its quantized efficiency, solidifying the GGUF format's role in the LLM ecosystem. |

## Ecosystem Signal
The current Hugging Face ecosystem reveals a **bifurcation between raw power and local accessibility**. The Qwen3.8-27B family dominates the "Likes" leaderboard, indicating a strong preference for top-tier base models, while the overwhelming download counts for GGUF versions of Inkling-2-Mini and Qwen variants (often 10x-20x the likes) highlight a massive shift toward **edge-deployable, quantized AI**. The "Inkling-2-Mini" family serves as a case study: the base model garners thousands of likes, but its GGUF quantizations amass millions of downloads, proving that the community values the ability to run models locally on consumer hardware over pure API performance. Furthermore, there is a clear trend of **specialized fine-tuning**—whether for uncensored outputs, coding agents, or specific multimodal tasks—suggesting that the "one model to rule them all" era is giving way to a modular, purpose-built landscape. Region-specific tags and "not-for-all-audiences" warnings also indicate a maturing platform where content moderation and localization are becoming integral to model distribution.

## Worth Exploring
1.  **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: This model is the current benchmark for AI video generation. With over 3 million downloads and the highest likes in the generation category, it is the most capable open-source option for anyone looking to experiment with text-to-video or image animation without relying on closed APIs.
2.  **[unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)**: If you have limited GPU VRAM but want a powerful multimodal chat model, this is the definitive choice. It leverages the GGUF format to run Inkling-2-Mini efficiently on CPU or low-end GPU, making advanced image-to-text conversational AI accessible to a wider audience.
3.  **[DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**: Beyond the meme-worthy name, this model exemplifies the "fine-tuning gold rush." It is a heavily adapted version of the Qwen3.8 base, optimized for specific tasks like coding and uncensored chat, and its nearly 2 million downloads signal that the community is actively experimenting with and iterating on top of base models to find specialized performance.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*