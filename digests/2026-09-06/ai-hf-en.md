# Hugging Face Trending Models Digest 2026-09-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-06 04:12 UTC

---

# Hugging Face Trending Models Digest — 2026-09-06

## Today's Highlights
The Qwen 3.8 family dominates the multimodal landscape with both base models and a flood of community quantizations and uncensored fine-tunes. Video generation sees rapid open innovation: Lightricks’ LTX-2.5 and MiniMax-H3 lead downloads, while FastVideo pushes 4-step distillation for real-time synthesis. Foundational embeddings (all-MiniLM-L6-v2) and time-series forecasting (TimesFM 3.0) maintain massive adoption, signaling sustained demand for specialized, production-ready models. Uncensored/abliterated GGUF variants of Qwen 3.8-27B collectively amass millions of downloads, reflecting a strong community preference for unrestricted local deployment.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 551 | 4,755 | A compact 4B parameter language model optimized for text generation tasks. Gaining attention for its balance of size and performance in the Spark series. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,720 | 370,417 | The base GLM-5.3 model featuring MoE architecture for efficient text generation. Popular for its strong conversational capabilities and open-weight release. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,702 | 14,739,982 | The original GPT-2 model maintained by the community, serving as a foundational baseline for text generation. Consistently high downloads reflect its enduring use in education and research. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,986 | 56,175,564 | The foundational BERT base model for masked language modeling and transfer learning. Remains a staple for NLP benchmarks and fine-tuning due to its robustness. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,101,423 | A distilled version of BERT offering 60% faster inference with 97% performance retention. Widely adopted for resource-constrained deployment. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 175 | 1,333 | A 36B parameter mixture-of-experts model for text generation. Early interest centers on its novel MoVA architecture and sparse activation. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 443 | 6,195 | Tencent's Hy4 preview model showcasing the Hunyuan lineage for text generation. Attracting developers exploring Chinese-language optimized LLMs. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 684 | 184,542 | An experimental vision-language model from DeepSeek's V4 series with flash attention. Trending for its multimodal reasoning capabilities in a compact form. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,045 | 6,024,467 | Qwen's flagship 27B multimodal model supporting image-text-to-text tasks. Dominates downloads with strong vision-language performance across benchmarks. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,918 | 401,327 | A faster, experimental variant of Qwen3.8 with flash attention for multimodal tasks. Draws interest for its speed optimizations and next-gen architecture hints. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,080 | 727,610 | GLM-5.3's flash attention variant for efficient image-text-to-text processing. Notable for high throughput multimodal inference with MoE design. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,895 | 1,484,329 | A diffusion-based model for image-to-video, text-to-video, and video-to-video generation. Leading open video generation with high-quality temporal consistency. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 449 | 5,962 | A text-to-speech model built on transformer architecture for natural speech synthesis. Gaining traction for its lightweight footprint and multilingual support. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,939 | 5,057,414 | MiniMax's advanced image-text-to-video model with strong motion dynamics. One of the most downloaded video generation models on the Hub. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,210 | 20,755,211 | OpenAI's CLIP ViT-B/32 for zero-shot image classification and vision-language alignment. Foundational for multimodal retrieval and continues massive adoption. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 279 | 22,851 | A 4-step distillation of MiniMax-H3 for ultra-fast text-to-video generation. Notable for data-free distillation achieving real-time video synthesis. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 460 | 123,025 | Google's third-gen time-series forecasting foundation model in PyTorch. Trending for zero-shot forecasting across diverse domains without retraining. |
| [sentence-transformers/all-MiniLM-L6-v2](https://h

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*