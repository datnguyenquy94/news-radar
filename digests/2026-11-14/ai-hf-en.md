# Hugging Face Trending Models Digest 2026-11-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-14 05:57 UTC

---

# Hugging Face Trending Models Digest (2026-11-14)

## Today's Highlights

The trending leaderboard is currently dominated by Qwen3.8 variants, with the base model `Qwen/Qwen3.8-27B` amassing nearly 20,000 likes. A significant trend is the proliferation of "heretic/uncensored" fine-tunes, with models like `xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic` and `huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF` gaining substantial traction. Multimodal capabilities remain strong, highlighted by Lightricks' `LTX-2.5` image-to-video model and the continued rise of MiniMax-H3 models for both image and video generation. Additionally, the ecosystem shows robust activity in quantization and GGUF distributions, particularly for large Qwen models, facilitating local deployment on consumer hardware.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,909 | 6,960,395 | A massive 27B parameter language model leading the leaderboard, trending due to its strong performance and versatility in image-text tasks. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,890 | 6,253,865 | A highly downloaded GGUF-quantized version of the Qwen3.8-27B, trending for making large models accessible on consumer-grade hardware. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 6,575 | 21,586 | An uncensored fine-tuned Qwen3.5 model trending for its heretic alignment and significant download count relative to its size. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,071 | 1,639,400 | A heavily named, turbo-charged GGUF fine-tune of Qwen3.8-27B trending within the heretic/uncensored community. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 2,046 | 40,953 | A Pro-level instruction-tuned model trending for its compressed tensor architecture and strong text-generation capabilities. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,811 | 2,778,909 | The top multimodal model by likes, trending as a powerful image-to-video and text-to-video diffusion model. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 6,910 | 6,536,038 | A flagship multimodal model trending for its advanced text-to-video and image-to-video capabilities using the H3 architecture. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,042 | 437,039 | An image-specific model within the H3 family trending for high-quality text-to-image generation. |
| [VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash) | VideoRebirthAI | 275 | 389,065 | A trending video generation model utilizing the MiniMax-H3 framework for efficient hyperflow processing. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 380 | 183,188 | A video-to-video model trending for character replacement and video editing using Minimax-H3 technology. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | ---: | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 1,103 | 392,582 | A specialized code model trending for its integration of Three.js 3D visualization capabilities within a Qwen3.5 framework. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 305 | 13,068 | A text-to-speech model trending for its small footprint and use of GGuF and Safetensors formats. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 258 | 1,064 | A small, conversational image-text-to-text model trending for its niche approach to multimodal interaction. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,309 | 31,367 | An image-to-3D model trending for its use of Gaussian Splatting to reconstruct 3D assets from single images. |
| [ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof) | ConwayResearch | 252 | 10 | A text-to-speech model trending for its on-device, CPU-optimized design focused for edge deployment. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | ---: | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,700 | 2,322,693 | A trending GGUF quantization of the Qwen3.8 Flash Next model, optimized by unsloth for performance and size. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,096 | 4,051,917 | A highly downloaded "abliterated" (uncensored) GGUF version of Qwen3.8-27B, trending heavily in local AI communities. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 986 | 4,081,896 | A quantized and abliterated GGUF model trending for its specific GSQ-RCO quantization scheme. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 266 | 105,256 | A GGUF fine-tune of Gemma 4 trending for its heretic/uncensored modifications. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,545 | 2,092,498 | While a SAM model, its high download count and likes reflect trending activity in high-quality mask generation and feature extraction. |

## Ecosystem Signal

The current Hugging Face landscape is characterized by a fierce competition between base model scales and efficient quantization. The Qwen3.8 family dominates the leaderboard, but a significant portion of the top activity is driven by "heretic" and "abliterated" fine-tunes, indicating a strong community push toward uncensored and open-weight alternatives to proprietary systems. Quantization formats, specifically GGUF, are the primary vehicle for this distribution, with models like `unsloth/Qwen3.8-27B-GGUF` bridging the gap between massive parameter counts and local usability. Furthermore, the MiniMax-H3 architecture is emerging as a versatile standard for multimodal generation, competing strongly with diffusion-based approaches like LTX-2.5 in the video and image spaces. Finally, there is a clear trend toward specialized coders and 3D reconstruction models, diversifying the ecosystem beyond pure language or generation tasks.

## Worth Exploring

1.  **Qwen/Qwen3.8-27B**: This is the definitive model to study right now. With nearly 20,000 likes and almost 7 million downloads, it represents the current peak of open-weight LLM performance. Studying this model provides insight into the current state-of-the-art for instruction-tuned architectures and the scaling laws being applied by major labs in 2026.
2.  **Lightricks/LTX-2.5**: For anyone interested in the convergence of diffusion models and video generation, LTX-2.5 is a must-try. Its high download count (2.7 million) and like count (11,811) signal that it offers a compelling alternative to heavier video models, particularly for developers looking to integrate text-to-video capabilities with lower latency.
3.  **unsloth/Qwen3.8-27B-GGUF**: This model is essential for understanding the practical deployment of large LLMs. It demonstrates how the community is successfully quantizing a 27B parameter model into the GGUF format, making it viable for consumer GPUs. It is a prime example of the "open-weight" movement's focus on accessibility and hardware efficiency.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*