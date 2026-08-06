# Hugging Face Trending Models Digest 2026-08-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-04 03:22 UTC

---

The user wants a structured digest of trending Hugging Face models. I need to analyze the 30 models provided and categorize them into the four categories: Language Models, Multimodal & Generation, Specialized Models, and Fine-tunes & Quantizations. Then produce the four sections.

First, let's categorize each model:

1. moonshotai/Kimi-K3 - multimodal (image-text-to-text) - likely Language Model or Multimodal? It's image-text-to-text, so multimodal. But also could be considered a language model with vision. I'll put in Multimodal & Generation.

2. deepseek-ai/DeepSeek-V4-Flash-0731 - text-generation - Language Model.

3. MiniMaxAI/MiniMax-H3 - image-text-to-video - Multimodal & Generation (video).

4. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF - image-text-to-text, GGUF, fine-tune - Fine-tunes & Quantizations.

5. Comfy-Org/MiniMax-H3 - N/A pipeline, tags: comfyui, license:other - likely a wrapper for ComfyUI, maybe Fine-tunes & Quantizations? But it's a model repo for MiniMax-H3. Could be Multimodal & Generation.

6. unsloth/DeepSeek-V4-Flash-0731-GGUF - GGUF quantization - Fine-tunes & Quantizations.

7. baidu/Unlimited-OCR - image-text-to-text, OCR - Specialized Models (OCR) or Multimodal? It's OCR specialized, so Specialized Models.

8. thinkingmachines/Inkling-Small - image-text-to-text - Multimodal & Generation.

9. unsloth/Kimi-K3-GGUF - GGUF quantization - Fine-tunes & Quantizations.

10. zai-org/GLM-5.2 - text-generation - Language Model.

11. Audio8/Audio8-TTS-Preview-0.6b - text-to-speech - Multimodal & Generation (audio).

12. Kwaipilot/KAT-Coder-V2.5-Dev - text-generation, code - Specialized Models (code).

13. microsoft/Mage-VL - image-text-to-text - Multimodal & Generation.

14. owensong/Inflect-Micro-v2 - text-to-speech - Multimodal & Generation (audio).

15. XYZAILab/XYZ-Aquila-mini - text-generation - Language Model.

16. lodestones/Kroma - text-to-image - Multimodal & Generation.

17. EschaLabs/Qwen3.6-35B-A3B-Escha-W2 - text-generation - Language Model (MoE).

18. Nanbeige/Nanbeige4.2-3B - text-generation - Language Model.

19. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF - image-text-to-text, GGUF, uncensored - Fine-tunes & Quantizations.

20. poolside/Laguna-S-2.1 - text-generation - Language Model.

21. deepseek-ai/DeepSeek-V4-Flash - text-generation - Language Model.

22. XYZAILab/XYZ-Aquila-pro - text-generation - Language Model.

23. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF - image-text-to-text, GGUF - Fine-tunes & Quantizations.

24. ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot - image-text-to-text, ComfyUI, INT8 - Fine-tunes & Quantizations.

25. empero-ai/Qwythos-27B-v1 - image-text-to-text - Multimodal & Generation.

26. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive - image-text-to-text, GGUF, uncensored - Fine-tunes & Quantizations.

27. microsoft/Fara1.5-27B - image-text-to-text, computer-use - Multimodal & Generation.

28. nota-ai/Solar-Open2-250B-Nota-NVFP4 - text-generation, quantization (NVFP4) - Fine-tunes & Quantizations? It's a quantized version of Solar-Open2. Could be Language Model but quantization. I'll put in Fine-tunes & Quantizations.

29. amd/Instella-MoE-16B-A3B-Think - text-generation - Language Model.

30. LiquidAI/LFM2.5-Encoder-350M - fill-mask - Language Model (encoder).

Now, I need to create tables for each category with columns: Model (link), Author, Likes, Downloads, Summary (2 sentences).

I must keep likes and downloads as given, with commas.

Let's list each category with models:

**Language Models (LLMs, chat models, instruction-tuned):**
- deepseek-ai/DeepSeek-V4-Flash-0731 (text-generation)
- zai-org/GLM-5.2 (text-generation)
- XYZAILab/XYZ-Aquila-mini (text-generation)
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2 (text-generation)
- Nanbeige/Nanbeige4.2-3B (text-generation)
- poolside/Laguna-S-2.1 (text-generation)
- deepseek-ai/DeepSeek-V4-Flash (text-generation)
- XYZAILab/XYZ-Aquila-pro (text-generation)
- amd/Instella-MoE-16B-A3B-Think (text-generation)
- LiquidAI/LFM2.5-Encoder-350M (fill-mask)

That's 10 models.

**Multimodal & Generation (image, video, audio, text-to-X):**
- moonshotai/Kimi-K3 (image-text-to-text)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- thinkingmachines/Inkling-Small (image-text-to-text)
- Audio8/Audio8-TTS-Preview-0.6b (text-to-speech)
- microsoft/Mage-VL (image-text-to-text)
- owensong/Inflect-Micro-v2 (text-to-speech)
- lodestones/Kroma (text-to-image)
- empero-ai/Qwythos-27B-v1 (image-text-to-text)
- microsoft/Fara1.5-27B (image-text-to-text)

That's 9 models.

**Specialized Models (code, math, medical, embeddings):**
- baidu/Unlimited-OCR (OCR)
- Kwaipilot/KAT-Coder-V2.5-Dev (code)

Only 2 models.

**Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
- DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
- Comfy-Org/MiniMax-H3 (maybe, but it's a ComfyUI version of MiniMax-H3, could be considered fine-tune/quantization)
- unsloth/DeepSeek-V4-Flash-0731-GGUF
- unsloth/Kimi-K3-GGUF
- LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF
- DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF
- ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
- nota-ai/Solar-Open2-250B-Nota-NVFP4

That's 9 models. Comfy-Org/MiniMax-H3 is a bit ambiguous; tags: comfyui, license:other, region:us. It's likely a model packaged for ComfyUI, maybe a quantization. I'll include it.

Now, I need to write summaries for each model (2 sentences). Must be concise.

Let's draft summaries:

1. moonshotai/Kimi-K3: Moonshot AI's latest multimodal model supporting image-text-to-text tasks. Trending due to high downloads (967k) and likes (9.8k), indicating strong community adoption for vision-language tasks.

2. deepseek-ai/DeepSeek-V4-Flash-0731: DeepSeek's efficient flash attention model for text generation. Gaining traction with 236k downloads and 2k likes, notable for its speed and conversational capabilities.

3. MiniMaxAI/MiniMax-H3: MiniMax's image-text-to-video generation model. Despite zero downloads shown, 1.5k likes reflect high interest in video generation capabilities.

4. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF: Community fine-tune of Qwen3.6-27B with GGUF quantization, uncensored. Popular with 1.55M downloads and 1.4k likes, showcasing demand for optimized local LLMs.

5. Comfy-Org/MiniMax-H3: ComfyUI integration of MiniMax-H3 for video generation workflows. Low downloads (2) but 458 likes signal niche adoption in the ComfyUI ecosystem.

6. unsloth/DeepSeek-V4-Flash-0731-GGUF: Unsloth's GGUF quantization of DeepSeek-V4-Flash-0731 for efficient inference. 69k downloads and 430 likes highlight demand for quantized versions of new models.

7. baidu/Unlimited-OCR: Baidu's OCR model for image-text extraction with feature extraction. Leading downloads (2.6M) and 3.8k likes, demonstrating strong need for high-performance OCR.

8. thinkingmachines/Inkling-Small: Small multimodal model for image-text-to-text conversational tasks. Modest downloads (8.5k) but 264 likes indicate interest in compact vision-language models.

9. unsloth/Kimi-K3-GGUF: GGUF quantized version of Kimi-K3 by Unsloth for local deployment. 128k downloads and 284 likes show rapid adoption of quantized multimodal models.

10. zai-org/GLM-5.2: Z.ai's GLM-5.2 MOE model for text generation and conversation. High downloads (2.18M) and 4.8k likes reflect momentum for Chinese-origin large language models.

11. Audio8/Audio8-TTS-Preview-0.6b: Audio8's text-to-speech model preview at 0.6B parameters. 4.6k downloads and 215 likes suggest growing interest in lightweight TTS.

12. Kwaipilot/KAT-Coder-V2.5-Dev: Code-specialized model based on Qwen3.5 MOE for development tasks. 14k downloads and 447 likes highlight demand for code-focused LLMs.

13. microsoft/Mage-VL: Microsoft's vision-language model for image-text-to-text tasks. 431k downloads and 234 likes indicate enterprise interest in multimodal research.

14. owensong/Inflect-Micro-v2: Tiny text-to-speech model optimized for CPU and edge deployment. 1.9k downloads and 399 likes show traction for on-device speech synthesis.

15. XYZAILab/XYZ-Aquila-mini: Small text-generation model from XYZ AI Lab. Low downloads (1k) but 391 likes suggest community curiosity about new model families.

16. lodestones/Kroma: LoRA for text-to-image generation compatible with ComfyUI and Krea. Zero downloads but 160 likes reflect niche artistic adoption.

17. EschaLabs/Qwen3.6-35B-A3B-Escha-W2: Fine-tune of Qwen3.6-35B-A3B MOE with mixture-of-experts. 2.6k downloads and 158 likes show experimentation with MoE architectures.

18. Nanbeige/Nanbeige4.2-3B: Nanbeige's 3B parameter text-generation LLM. 34k downloads and 652 likes indicate appetite for small but capable open models.

19. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF: Uncensored GGUF quantized Qwen3.6-35B-A3B with Hermes tuning. 287k downloads and 344 likes highlight demand for unaligned MoE models.

20. poolside/Laguna-S-2.1: Poolside's Laguna-S-2.1 model for text generation. 81k downloads and 910 likes suggest interest in code-oriented LLMs from new players.

21. deepseek-ai/DeepSeek-V4-Flash: Base DeepSeek-V4-Flash model for text generation. Massive 2.74M downloads and 1.9k likes confirm DeepSeek's dominance in efficient LLMs.

22. XYZAILab/XYZ-Aquila-pro: Pro version of XYZ-Aquila with agentic search capabilities. 1.2k downloads and 351 likes show early adoption for agentic workflows.

23. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF: Another DavidAU GGUF fine-tune of Qwen3.5-9B with IMATRIX quantization. 304k downloads and 239 likes reflect advanced quantization adoption.

24. ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot: Complex fusion of Qwen3-VL, MiniMax-H3, INT8 quantization for ComfyUI. Zero downloads but 111 likes indicate cutting-edge multimodal experimentation.

25. empero-ai/Qwythos-27B-v1: Qwen3.5-based 27B vision-language model. 1.7k downloads and 119 likes show continued Qwen fine-tune activity.

26. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive: Aggressive uncensored GGUF quantized Qwen3.6-35B-A3B with vision. 1.89M downloads and 3.2k likes demonstrate massive appetite for uncensored multimodal MoE.

27. microsoft/Fara1.5-27B: Microsoft's Fara1.5-27B for computer use and image-text tasks. 2.9k downloads and 268 likes signal research into agentic multimodal models.

28. nota-ai/Solar-Open2-250B-Nota-NVFP4: NVFP4 quantized Solar-Open2-250B for efficient inference. 68k downloads and 169 likes highlight extreme quantization for massive models.

29. amd/Instella-MoE-16B-A3B-Think: AMD's Instella MoE model for text generation. 2k downloads and 150 likes show hardware vendor investment in open MoE models.

30. LiquidAI/LFM2.5-Encoder-350M: Liquid AI's small encoder model for fill-mask tasks. 4.4k downloads and 92 likes reflect interest in non-transformer architectures.

Now, I need to produce the digest.

Section 1: Today's Highlights (3-5 sentences). Summarize notable trends: Moonshot Kimi-K3 leading likes, DeepSeek-V4-Flash high downloads, MiniMax-H3 video generation, many Qwen fine-tunes, quantization activity.

Section 2: Tables per category.

Section 3: Ecosystem Signal (100-200 words). Analyze trends: Qwen family dominant in fine-tunes, DeepSeek and Moonshot leading base models, rise of video generation (MiniMax-H3), quantization (GGUF, NVFP4, INT8), uncensored models popular, Chinese labs prominent.

Section 4: Worth Exploring (2-3 models). Pick maybe Kimi-K3 (multimodal), DeepSeek-V4-Flash (efficient LLM), MiniMax-H3 (video), or HauhauCS (uncensored MoE). Provide reasoning.

Now, format tables in Markdown. Ensure links are correct.

Let's construct tables.

**Language Models Table:**

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,083 | 236,076 | DeepSeek's efficient flash attention model for text generation. Gaining traction with 236k downloads and 2k likes, notable for its speed and conversational capabilities. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,798 | 2,180,509 | Z.ai's GLM-5.2 MOE model for text generation and conversation. High downloads (2.18M) and 4.8k likes reflect momentum for Chinese-origin large language models. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 391 | 1,063 | Small text-generation model from XYZ AI Lab. Low downloads (1k) but 391 likes suggest community curiosity about new model families. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 158 | 2,682 | Fine-tune of Qwen3.6-35B-A3B MOE with mixture-of-experts. 2.6k downloads and 158 likes show experimentation with MoE architectures. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 652 | 34,705 | Nanbeige's 3B parameter text-generation LLM. 34k downloads and 652 likes indicate appetite for small but capable open models. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 910 | 81,584 | Poolside's Laguna-S-2.1 model for text generation. 81k downloads and 910 likes suggest interest in code-oriented LLMs from new players. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,991 | 2,746,291 | Base DeepSeek-V4-Flash model for text generation. Massive 2.74M downloads and 1.9k likes confirm DeepSeek's dominance in efficient LLMs. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 351 | 1,214 | Pro version of XYZ-Aquila with agentic search capabilities. 1.2k downloads and 351 likes show early adoption for agentic workflows. |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 150 | 2,078 | AMD's Instella MoE model for text generation. 2k downloads and 150 likes show hardware vendor investment in open MoE models. |
| [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 92 | 4,498 | Liquid AI's small encoder model for fill-mask tasks. 4.4k downloads and 92 likes reflect interest in non-transformer architectures. |

**Multimodal & Generation Table:**

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,861 | 967,622 | Moonshot AI's latest multimodal model supporting image-text-to-text tasks. Trending due to high downloads (967k) and likes (9.8k), indicating strong community adoption for vision-language tasks. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 1,519 | 0 | MiniMax's image-text-to-video generation model. Despite zero downloads shown, 1.5k likes reflect high interest in video generation capabilities. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 | 8,504 | Small multimodal model for image-text-to-text conversational tasks. Modest downloads (8.5k) but 264 likes indicate interest in compact vision-language models. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 215 | 4,609 | Audio8's text-to-speech model preview at 0.6B parameters. 4.6k downloads and 215 likes suggest growing interest in lightweight TTS. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 234 | 431,487 | Microsoft's vision-language model for image-text-to-text tasks. 431k downloads and 234 likes indicate enterprise interest in multimodal research. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 399 | 1,944 | Tiny text-to-speech model optimized for CPU and edge deployment. 1.9k downloads and 399 likes show traction for on-device speech synthesis. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 160 | 0 | LoRA for text-to-image generation compatible with ComfyUI and Krea. Zero downloads but 160 likes reflect niche artistic adoption. |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 119 | 1,736 | Qwen3.5-based 27B vision-language model. 1.7k downloads and 119 likes show continued Qwen fine-tune activity. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 268 | 2,988 | Microsoft's Fara1.5-27B for computer use and image-text tasks. 2.9k downloads and 268 likes signal research into agentic multimodal models. |

**Specialized Models Table:**

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,848 | 2,601,062 | Baidu's OCR model for image-text extraction with feature extraction. Leading downloads (2.6M) and 3.8k likes, demonstrating strong need for high-performance OCR. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 447 | 14,339 | Code-specialized model based on Qwen3.5 MOE for development tasks. 14k downloads and 447 likes highlight demand for code-focused LLMs. |

**Fine-tunes & Quantizations Table:**

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,441 | 1,550,034 | Community fine-tune of Qwen3.6-27B with GGUF quantization, uncensored. Popular with 1.55M downloads and 1.4k likes, showcasing demand for optimized local LLMs. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 458 | 2 | ComfyUI integration of MiniMax-H3 for video generation workflows. Low downloads (2) but 458 likes signal niche adoption in the ComfyUI ecosystem. |
| [unsloth/DeepSeek

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*