# Hugging Face Trending Models Digest 2026-09-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-07 04:12 UTC

---

The user wants a structured Hugging Face Trending Models Digest based on the provided list of 30 trending models. I need to:

1. Write "Today's Highlights" (3-5 sentences)
2. Organize models into categories with Markdown tables
3. Write "Ecosystem Signal" (100-200 words)
4. Write "Worth Exploring" (2-3 models with reasoning)

First, I need to categorize each model:

Looking at the models:

1. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp - multimodal (image-text-to-text)
2. Qwen/Qwen3.8-27B - multimodal (image-text-to-text)
3. XHToken/Spark-X2.5-4B - text-generation (LLM)
4. google/timesfm-3.0-pytorch - time-series forecasting (specialized)
5. Qwen/Qwen3.8-Flash-Next - multimodal (image-text-to-text)
6. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - quantization (GGUF)
7. Lightricks/LTX-2.5 - image-to-video (multimodal generation)
8. zai-org/GLM-5.3-Flash - multimodal (image-text-to-text)
9. unsloth/Qwen3.8-27B-GGUF - quantization (GGUF)
10. zai-org/GLM-5.3 - text-generation (LLM)
11. DavidAU/Qwen3.8-27B-TURBO-...-GGUF - fine-tune + quantization (GGUF, uncensored)
12. BreezeBlue/Breeze-TTS-2 - text-to-speech (multimodal audio)
13. MiniMaxAI/MiniMax-H3 - image-text-to-video (multimodal generation)
14. sentence-transformers/all-MiniLM-L6-v2 - embeddings (specialized)
15. openai-community/gpt2 - text-generation (LLM, classic)
16. OpenVDN/vdn-minimax-h3 - fine-tune of MiniMax-H3 (fine-tune)
17. unsloth/Qwen3.8-Flash-Next-GGUF - quantization (GGUF)
18. IFM/K2-Horizon-MoVA-36B-A4B - text-generation (LLM)
19. facebook/mms-300m - speech (multimodal audio? but pipeline N/A, tags: wav2vec2, pretraining, mms) - could be specialized or multimodal
20. google-bert/bert-base-uncased - fill-mask (specialized/embeddings)
21. distilbert/distilbert-base-uncased - fill-mask (specialized/embeddings)
22. HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF - fine-tune + quantization (GGUF, uncensored)
23. openai/clip-vit-base-patch32 - zero-shot-image-classification (multimodal)
24. dealignai/GLM-5.3-CYBERSECURITY-FP8 - fine-tune (specialized for cybersecurity, FP8 quantization)
25. Jackrong/Qwopus3.8-27B-Flash-GGUF - quantization (GGUF)
26. OBLITERATUS/Qwen3.8-27B-OBLITERATED - fine-tune + quantization (abliterated, GGUF, MLX)
27. microsoft/VibeVoice-ASR-Streaming-7B - ASR (specialized audio)
28. tencent/Hy4-preview - text-generation (LLM)
29. nvidia/Qwen3.8-Flash-Next-NVFP4 - quantization (NVFP4)
30. orcarouter/Qwen3.8-27B-Uncensored-GGUF - fine-tune + quantization (GGUF, uncensored)

Now categorize:

**Language Models (LLMs, chat models, instruction-tuned)**:
- XHToken/Spark-X2.5-4B (text-generation)
- zai-org/GLM-5.3 (text-generation)
- openai-community/gpt2 (text-generation)
- IFM/K2-Horizon-MoVA-36B-A4B (text-generation)
- tencent/Hy4-preview (text-generation)

Also maybe some multimodal models that are primarily LLMs with vision? But the category "Multimodal & Generation" is for image, video, audio, text-to-X. So models like Qwen3.8-27B (image-text-to-text) are multimodal. GLM-5.3-Flash is multimodal. DeepSeek-V4-Flash-Vision-Exp is multimodal. So language models should be text-only.

**Multimodal & Generation (image, video, audio, text-to-X)**:
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp (image-text-to-text)
- Qwen/Qwen3.8-27B (image-text-to-text)
- Qwen/Qwen3.8-Flash-Next (image-text-to-text)
- Lightricks/LTX-2.5 (image-to-video)
- zai-org/GLM-5.3-Flash (image-text-to-text)
- BreezeBlue/Breeze-TTS-2 (text-to-speech)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- openai/clip-vit-base-patch32 (zero-shot-image-classification)
- facebook/mms-300m? (speech, but pipeline N/A, tags: wav2vec2, pretraining, mms) - could be specialized audio. Might fit here or specialized.
- microsoft/VibeVoice-ASR-Streaming-7B (ASR) - audio, specialized.

**Specialized Models (code, math, medical, embeddings)**:
- google/timesfm-3.0-pytorch (time-series forecasting)
- sentence-transformers/all-MiniLM-L6-v2 (sentence-similarity/embeddings)
- google-bert/bert-base-uncased (fill-mask)
- distilbert/distilbert-base-uncased (fill-mask)
- microsoft/VibeVoice-ASR-Streaming-7B (ASR) - could be specialized audio.
- dealignai/GLM-5.3-CYBERSECURITY-FP8 (cybersecurity) - specialized domain.

**Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**:
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (GGUF quantization)
- unsloth/Qwen3.8-27B-GGUF (GGUF quantization)
- DavidAU/Qwen3.8-27B-TURBO-...-GGUF (fine-tune + GGUF)
- OpenVDN/vdn-minimax-h3 (fine-tune of MiniMax-H3)
- unsloth/Qwen3.8-Flash-Next-GGUF (GGUF quantization)
- HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF (fine-tune + GGUF)
- Jackrong/Qwopus3.8-27B-Flash-GGUF (GGUF quantization)
- OBLITERATUS/Qwen3.8-27B-OBLITERATED (fine-tune + quantization, abliterated)
- nvidia/Qwen3.8-Flash-Next-NVFP4 (quantization NVFP4)
- orcarouter/Qwen3.8-27B-Uncensored-GGUF (fine-tune + GGUF)

Also dealignai/GLM-5.3-CYBERSECURITY-FP8 is a fine-tune with FP8 quantization, could be in fine-tunes.

Now, I need to create tables for each category with columns: Model (link), Author, Likes, Downloads, Summary (2 sentences).

I must use the exact numbers from input, keep thousands separators.

Let's list each model with its data:

1. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp - Author: deepseek-ai, Likes: 752, Downloads: 209,191, Tags: transformers, safetensors, deepseek_v4, text-generation, image-text-to-text
2. Qwen/Qwen3.8-27B - Author: Qwen, Likes: 14,142, Downloads: 6,190,807
3. XHToken/Spark-X2.5-4B - Author: XHToken, Likes: 621, Downloads: 5,477
4. google/timesfm-3.0-pytorch - Author: google, Likes: 515, Downloads: 144,455
5. Qwen/Qwen3.8-Flash-Next - Author: Qwen, Likes: 4,947, Downloads: 432,966
6. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - Author: ISTA-DASLab, Likes: 471, Downloads: 348,389
7. Lightricks/LTX-2.5 - Author: Lightricks, Likes: 2,982, Downloads: 1,526,928
8. zai-org/GLM-5.3-Flash - Author: zai-org, Likes: 2,101, Downloads: 761,364
9. unsloth/Qwen3.8-27B-GGUF - Author: unsloth, Likes: 3,603, Downloads: 10,311,462
10. zai-org/GLM-5.3 - Author: zai-org, Likes: 1,740, Downloads: 410,074
11. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF - Author: DavidAU, Likes: 253, Downloads: 211,018
12. BreezeBlue/Breeze-TTS-2 - Author: BreezeBlue, Likes: 462, Downloads: 6,357
13. MiniMaxAI/MiniMax-H3 - Author: MiniMaxAI, Likes: 4,971, Downloads: 4,986,349
14. sentence-transformers/all-MiniLM-L6-v2 - Author: sentence-transformers, Likes: 5,569, Downloads: 253,029,336
15. openai-community/gpt2 - Author: openai-community, Likes: 3,707, Downloads: 14,612,342
16. OpenVDN/vdn-minimax-h3 - Author: OpenVDN, Likes: 210, Downloads: 0
17. unsloth/Qwen3.8-Flash-Next-GGUF - Author: unsloth, Likes: 814, Downloads: 823,733
18. IFM/K2-Horizon-MoVA-36B-A4B - Author: IFM, Likes: 188, Downloads: 1,723
19. facebook/mms-300m - Author: facebook, Likes: 264, Downloads: 12,464
20. google-bert/bert-base-uncased - Author: google-bert, Likes: 2,989, Downloads: 52,338,347
21. distilbert/distilbert-base-uncased - Author: distilbert, Likes: 1,156, Downloads: 7,054,316
22. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - Author: HauhauCS, Likes: 983, Downloads: 1,568,315
23. openai/clip-vit-base-patch32 - Author: openai, Likes: 1,211, Downloads: 20,579,479
24. dealignai/GLM-5.3-CYBERSECURITY-FP8 - Author: dealignai, Likes: 181, Downloads: 15,648
25. Jackrong/Qwopus3.8-27B-Flash-GGUF - Author: Jackrong, Likes: 132, Downloads: 22,128
26. OBLITERATUS/Qwen3.8-27B-OBLITERATED - Author: OBLITERATUS, Likes: 1,108, Downloads: 995,160
27. microsoft/VibeVoice-ASR-Streaming-7B - Author: microsoft, Likes: 121, Downloads: 889
28. tencent/Hy4-preview - Author: tencent, Likes: 445, Downloads: 6,441
29. nvidia/Qwen3.8-Flash-Next-NVFP4 - Author: nvidia, Likes: 119, Downloads: 13,321
30. orcarouter/Qwen3.8-27B-Uncensored-GGUF - Author: orcarouter, Likes: 755, Downloads: 287,720

Now assign categories:

**Language Models (LLMs, chat models, instruction-tuned)**:
- XHToken/Spark-X2.5-4B
- zai-org/GLM-5.3
- openai-community/gpt2
- IFM/K2-Horizon-MoVA-36B-A4B
- tencent/Hy4-preview

**Multimodal & Generation**:
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
- Qwen/Qwen3.8-27B
- Qwen/Qwen3.8-Flash-Next
- Lightricks/LTX-2.5
- zai-org/GLM-5.3-Flash
- BreezeBlue/Breeze-TTS-2
- MiniMaxAI/MiniMax-H3
- openai/clip-vit-base-patch32
- facebook/mms-300m (maybe)
- microsoft/VibeVoice-ASR-Streaming-7B (maybe)

But facebook/mms-300m is a massively multilingual speech model (wav2vec2). It's audio, so multimodal. microsoft/VibeVoice-ASR-Streaming-7B is ASR, also audio. I'll include them in Multimodal & Generation.

**Specialized Models**:
- google/timesfm-3.0-pytorch (time-series)
- sentence-transformers/all-MiniLM-L6-v2 (embeddings)
- google-bert/bert-base-uncased (fill-mask)
- distilbert/distilbert-base-uncased (fill-mask)
- dealignai/GLM-5.3-CYBERSECURITY-FP8 (cybersecurity specialized)

**Fine-tunes & Quantizations**:
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- unsloth/Qwen3.8-27B-GGUF
- DavidAU/Qwen3.8-27B-TURBO-...-GGUF
- OpenVDN/vdn-minimax-h3
- unsloth/Qwen3.8-Flash-Next-GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF
- Jackrong/Qwopus3.8-27B-Flash-GGUF
- OBLITERATUS/Qwen3.8-27B-OBLITERATED
- nvidia/Qwen3.8-Flash-Next-NVFP4
- orcarouter/Qwen3.8-27B-Uncensored-GGUF
- dealignai/GLM-5.3-CYBERSECURITY-FP8 (could be here too, but it's a fine-tune for cybersecurity with FP8 quantization. I'll put it in Fine-tunes & Quantizations as well, but it's also specialized. The category "Fine-tunes & Quantizations" includes community fine-tunes, GGUF, AWQ. So it fits. I'll include it there.)

But note: the categories are mutually exclusive? The instruction says "Organized by category. Under each category header, render a Markdown table... Omit a category's table entirely if no model falls under it." It doesn't say a model can't appear in multiple categories, but typically each model appears once. I'll assign each model to the most fitting category.

Let's decide:

- dealignai/GLM-5.3-CYBERSECURITY-FP8: fine-tune for cybersecurity with FP8 quantization. It's both specialized and fine-tune. Since there's a Fine-tunes & Quantizations category, and it's a fine-tune, I'll put it there.

- facebook/mms-300m: pretrained multilingual speech model. Could be specialized (speech) or multimodal. I'll put in Multimodal & Generation (audio).

- microsoft/VibeVoice-ASR-Streaming-7B: ASR model, specialized audio. Could be specialized. But it's a specific model for speech recognition. I'll put in Specialized Models? The category "Specialized Models (code, math, medical, embeddings)" doesn't explicitly include audio, but ASR is a specialized task. However, Multimodal & Generation includes audio. I'll put in Multimodal & Generation because it's audio generation/recognition.

But the category "Multimodal & Generation (image, video, audio, text-to-X)" explicitly includes audio. So both facebook/mms-300m and microsoft/VibeVoice-ASR-Streaming-7B belong there.

Now, let's create tables.

I need to write summaries (2 sentences each) for each model.

Let's draft summaries:

**Language Models**:

1. XHToken/Spark-X2.5-4B: A 4B parameter LLM for text generation. Trending due to its compact size and strong performance for its class.
2. zai-org/GLM-5.3: A text-generation model from ZAI, part of the GLM series. Trending for its MoE architecture and strong conversational abilities.
3. openai-community/gpt2: The classic GPT-2 model, still widely used as a baseline. Trending due to enduring popularity and ecosystem integration.
4. IFM/K2-Horizon-MoVA-36B-A4B: A 36B MoE model with 4B active parameters for text generation. Trending for its efficient MoE design and emerging capabilities.
5. tencent/Hy4-preview: Tencent's Hunyuan preview model for text generation. Trending as a new major Chinese LLM entry.

**Multimodal & Generation**:

1. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp: DeepSeek's experimental vision-language model with flash attention. Trending for its efficient multimodal processing and vision capabilities.
2. Qwen/Qwen3.8-27B: Qwen's 27B multimodal model supporting image-text-to-text. Trending for its strong performance and high download count (6.19M).
3. Qwen/Qwen3.8-Flash-Next: Qwen's next-gen flash multimodal model. Trending for its speed optimizations and conversational abilities.
4. Lightricks/LTX-2.5: A diffusion model for image-to-video, text-to-video, and video-to-video generation. Trending for high-quality video generation (1.5M downloads).
5. zai-org/GLM-5.3-Flash: ZAI's flash multimodal model with image-text-to-text. Trending for its efficiency and strong multimodal reasoning.
6. BreezeBlue/Breeze-TTS-2: A text-to-speech model with transformers. Trending for its natural speech synthesis and ease of use.
7. MiniMaxAI/MiniMax-H3: A text-to-video and image-to-video model from MiniMax. Trending for its impressive video generation quality (4.99M downloads).
8. openai/clip-vit-base-patch32: OpenAI's CLIP model for zero-shot image classification. Trending as a foundational vision-language model (20.6M downloads).
9. facebook/mms-300m: Meta's massively multilingual speech model (wav2vec2). Trending for its broad language coverage and pretraining utility.
10. microsoft/VibeVoice-ASR-Streaming-7B: Microsoft's streaming ASR model for transcription. Trending for its real-time speech recognition capabilities.

**Specialized Models**:

1. google/timesfm-3.0-pytorch: Google's time-series forecasting model in PyTorch. Trending for its state-of-the-art forecasting performance.
2. sentence-transformers/all-MiniLM-L6-v2: A lightweight sentence embedding model. Trending as the most downloaded model (253M) for semantic similarity.
3. google-bert/bert-base-uncased: The classic BERT base model for fill-mask. Trending as a foundational NLP model (52.3M downloads).
4. distilbert/distilbert-base-uncased: Distilled BERT for faster inference. Trending for its efficiency and widespread adoption (7M downloads).
5. dealignai/GLM-5.3-CYBERSECURITY-FP8: A cybersecurity-specialized GLM-5.3 variant with FP8 quantization. Trending for its domain-specific expertise and abliterated responses.

Wait, dealignai/GLM-5.3-CYBERSECURITY-FP8 I put in Fine-tunes & Quantizations. But it's also specialized. I'll put it in Fine-tunes & Quantizations to avoid duplication. So remove from Specialized.

**Fine-tunes & Quantizations**:

1. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: GSQ-RCO quantized GGUF version of Qwen3.8-27B. Trending for its mixed-precision quantization reducing size while preserving quality.
2. unsloth/Qwen3.8-27B-GGUF: Unsloth's GGUF quantization of Qwen3.8-27B. Trending for extreme download numbers (10.3M) and ease of local deployment.
3. DavidAU/Qwen3.8-27B-TURBO-...-GGUF: A heavily fine-tuned, uncensored Qwen variant with GGUF quantization. Trending for its merged capabilities and "uncensored" nature.
4. OpenVDN/vdn-minimax-h3: A fine-tune of MiniMax-H3 for text-to-video. Trending as a community adaptation of a major video model.
5. unsloth/Qwen3.8-Flash-Next-GGUF: Unsloth's GGUF quantization of Qwen3.8-Flash-Next. Trending for bringing flash multimodal to local GGUF inference.
6. HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF: An aggressive uncensored fine-tune of Qwen3.8-27B with GGUF. Trending for its uncensored multimodal capabilities.
7. Jackrong/Qwopus3.8-27B-Flash-GGUF: A GGUF quantized version of Qwopus (Qwen-based) with flash attention. Trending for vision-language GGUF deployment.
8. OBLITERATUS/Qwen3.8-27B-OBLITERATED: An abliterated (refusal-removed) Qwen3.8-27B with MLX and GGUF formats. Trending for its uncensored nature and multi-format availability.
9. nvidia/Qwen3.8-Flash-Next-NVFP4: NVIDIA's NVFP4 quantized version of Qwen3.8-Flash-Next. Trending for its hardware-optimized quantization via ModelOpt.
10. orcarouter/Qwen3.8-27B-Uncensored-GGUF: An uncensored GGUF fine-tune of Qwen3.8-27B. Trending for its abliterated multimodal chat capabilities.
11. dealignai/GLM-5.3-CYBERSECURITY-FP8: A cybersecurity-focused fine-tune of GLM-5.3 with FP8 quantization. Trending for its specialized domain knowledge and refusal removal.

Now, I need to write Today's Highlights (3-5 sentences), Ecosystem Signal (100-200 words), Worth Exploring (2-3 models).

Let's compose.

**Today's Highlights**: The Hugging Face trending list is dominated by the Qwen model family, with multiple variants (27B, Flash-Next) and their quantized GGUF versions occupying top spots. Video generation models like MiniMax-H3 and LTX-2.5 show massive download numbers, signaling strong community interest in open video synthesis. Specialized models like TimesFM for forecasting and all-MiniLM-L6-v2 for embeddings continue to be workhorses. A notable trend is the proliferation of uncensored/abliterated fine-tunes of Qwen models, reflecting demand for unrestricted local LLMs. NVIDIA's NVFP4 quantization and Unsloth's GGUF releases highlight the push for efficient on-device inference.

**Ecosystem Signal**: The Qwen 3.8 series (27B and Flash-Next) has become the central gravity for open-weight multimodal development, spawning dozens of community quantizations (GGUF, NVFP4) and fine-tunes (uncensored, merged). This mirrors the earlier LLaMA ecosystem but at a faster pace and with native vision support. Proprietary models like MiniMax-H3 and DeepSeek-V4-Flash-Vision are also gaining traction, though their weights are often not fully open; instead, they drive community fine-tunes (e.g., OpenVDN/vdn-minimax-h3). Quantization is now a first-class release channel: Unsloth's GGUFs accumulate millions of downloads, and hardware-specific formats like NVFP4 indicate maturation of the inference stack. Meanwhile, classic models (BERT, GPT-2, all-MiniLM) remain download leaders, underscoring the long tail of production embeddings and classification tasks. The rise of abliterated/uncensored variants signals a persistent user preference for alignment control over safety defaults.

**Worth Exploring**:
1. Qwen/Qwen3.8-

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*