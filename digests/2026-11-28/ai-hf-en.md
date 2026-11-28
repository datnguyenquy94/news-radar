# Hugging Face Trending Models Digest 2026-11-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-28 07:25 UTC

---

# Hugging Face Trending Models Digest (2026-11-28)

## Today's Highlights

The trending list for 2026-11-28 reveals a vibrant ecosystem driven by specialized optimizations and multimodal breakthroughs. The **Qwen3.8-27B** family dominates engagement, securing the top spot with over 21,900 likes, while the **Inkling-2-Mini** lineage showcases strong community interest in MoE architectures, spawning numerous quantization variants (GSQ-RCO, Strata, GGUF). In the generative space, **LTX-2.5** leads with 13,700 likes, pushing image-to-video capabilities forward. Notably, the list features a healthy mix of open-weight models and quantized distributions, highlighting a continued push for local, efficient inference alongside high-capacity base models.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,946 | 5,752,506 | A leading multimodal model excelling in image-text interactions and conversational tasks, benefiting from the latest Qwen3.5 architecture and massive download volume. |
| [Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 6,505 | 155,741 | A compact, efficient MoE model designed for image-text-to-text pipelines, trending due to its strong performance-to-size ratio and active quantization forks. |
| [h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 2,262 | 0 | A specialized model tagged for US regions and niche audiences, gaining attention for its unique architecture and specific use-case targeting. |
| [ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview) | baidu | 394 | 2,609 | Baidu's latest MoE-centric offering, trending for its text generation capabilities and integration of the ERNIE 5.5 architecture. |
| [GigaChat4-708B-A41B](https://huggingface.co/ai-sage/GigaChat4-708B-A41B) | ai-sage | 120 | 287 | A large-scale MoE instruction model notable for its use of FP8 precision and instruct tuning, appealing to researchers exploring low-bit training. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,751 | 3,080,701 | The clear leader in multimodal generation, supporting image-to-video, text-to-video, and video-to-video via diffusion pipelines, driving massive download numbers. |
| [Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 1,046 | 1,059,763 | A quantized, uncensored variant of Inkling-2-Mini packaged in GGUF format, trending for local inference enthusiasts seeking unrestricted capabilities. |
| [Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 1,066 | 602,227 | A quantized text-to-image model based on QwenImage 2.1, trending for its balance of quantization efficiency and uncensored output flexibility. |
| [voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 1,018 | 20,510 | A niche audio processing model specializing in speech isolation and denoising, trending within the inworld ecosystem for avatar and voice applications. |
| [MAGI-2-preview](https://huggingface.co/sand-ai/MAGI-2-preview) | sand-ai | 374 | 0 | An experimental model for image-text-to-video generation, noted for its multi-modal diffusion approach despite lower community engagement. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [pi-H3](https://huggingface.co/Lakonik/pi-H3) | Lakonik | 370 | 97,525 | A text-to-audio-video model utilizing flow matching and distillation, trending for its unique cross-modal generation capabilities. |
| [Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 1,387 | 539,421 | A base model fine-tuned from MiniMax-H3, gaining traction for its specific regional and architectural adaptations. |
| [Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 652 | 382,546 | A highly quantized (2-bit ternary) LLM in GGUF format, trending for its extreme compression and compatibility with llama.cpp. |
| [Inkling-2-Mini-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF) | ISTA-DASLab | 294 | 24,931 | A technical quantization variant of Inkling-2-Mini employing GSQ and RCO mixed-precision techniques, appealing to performance tuning researchers. |
| [DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,369 | 0 | A monocular depth estimation model from Apple, trending for its metric depth capabilities without the need for paired data. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,625 | 3,302,340 | The most downloaded GGUF variant of Inkling-2-Mini, trending due to unsloth's optimization workflow and the model's popularity for local CPU/GPU inference. |
| [Inkling-2-Mini-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF) | ISTA-DASLab | 294 | 24,931 | (Also appears here) A specialized quantization effort focusing on GSQ and RCO methods to reduce bit-width while maintaining quality. |
| [Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF) | orcarouter | 345 | 21,019 | A community fine-tuned, "abliterated" (uncensored) version of Inkling-2-Mini in GGUF format, trending for its specific local inference niche. |
| [Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 652 | 382,546 | (Also appears here) A trending 2-bit quantized model pushing the boundaries of LLM compression. |
| [Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 255 | 30,849 | A quantized version of Qwen 3.8, trending for its specific focus on coding-agent capabilities within a quantized framework. |

## Ecosystem Signal

Analysis of the 2026-11-28 trending data reveals a mature ecosystem shifting from raw scale to operational efficiency and modality expansion. The **Qwen** family remains the undeniable leader in raw engagement, but the **Inkling-2-Mini** lineage exemplifies the current momentum behind Mixture-of-Experts (MoE) models, with multiple forks exploring different quantization pathways (GGUF, GSQ-RCO, Strata). This suggests a strong community drive to democratize access to powerful MoE architectures. Furthermore, the dominance of **GGUF** and **int4/int2 quantization formats** (evidenced by Ternary-Bonsai and various Inkling variants) indicates a definitive trend towards local inference optimization, prioritizing latency and hardware compatibility over pure parameter count. Finally, the inclusion of diverse multimodal models like **LTX-2.5** and **voice-isolator** signals an expanding definition of "trending," where performance in specific downstream tasks (video generation, audio enhancement) rivals the popularity of general-purpose chat models.

## Worth Exploring

1.  **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: Worth studying for anyone interested in the current state of diffusion-based video generation. Its 13,700+ likes and 3 million+ downloads make it the definitive benchmark for accessible, high-quality text-to-video and image-to-video models running on consumer hardware.
2.  **[Inkling-2-Mini-GGUF (unsloth)](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)**: A prime case study in the quantization trend. With over 3.3 million downloads, it demonstrates how the community is successfully adapting MoE models like Inkling-2-Mini for local execution via the GGUF format, balancing the trade-offs between the model's expert architecture and quantized inference speeds.
3.  **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: Essential for understanding the trajectory of mainstream LLMs. As the most liked and downloaded model on the list, it represents the cutting edge of the Qwen series, offering robust multimodal capabilities and serving as the base model for numerous fine-tunes and quantizations observed elsewhere in the top 30.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*