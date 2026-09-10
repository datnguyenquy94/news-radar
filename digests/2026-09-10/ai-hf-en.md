# Hugging Face Trending Models Digest 2026-09-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-10 04:16 UTC

---

The user wants a structured digest of trending Hugging Face models. I need to:

1. Analyze the 30 models provided
2. Categorize them into the 4 categories
3. Create the digest with the specified sections
4. Use markdown tables with exact columns
5. Keep likes/downloads as provided with thousands separators
6. Write summaries in 2 sentences
7. Provide ecosystem analysis and recommendations

Let me first categorize each model:

**🧠 Language Models (LLMs, chat models, instruction-tuned):**
- openbmb/MiniCPM5-2B - text-generation, LLM
- XHToken/Spark-X2.5-4B - text-generation, LLM
- Qwen/Qwen3.8-27B - image-text-to-text but also conversational LLM
- dealignai/GLM-5.3-CYBERSECURITY-FP8 - text-generation, specialized but still LLM
- IFM/K2-Horizon-MoVA-36B-A4B - text-generation
- Qwen/Qwen3.8-Flash-Next - image-text-to-text, conversational
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp - image-text-to-text but also text-generation
- zai-org/GLM-5.3-Flash - image-text-to-text, conversational
- nex-agi/Nex-N2.5-mini - text-generation, image-text-to-text
- zai-org/GLM-5.3 - text-generation, conversational
- nex-agi/Nex-N2.5-Pro - text-generation

**🎨 Multimodal & Generation (image, video, audio, text-to-X):**
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - image-text-to-text (multimodal)
- Lightricks/LTX-2.5 - image-to-video, text-to-video
- WarmBloodAban/Minimax-h3_Singularity - image-to-video
- OpenVDN/vdn-minimax-h3 - text-to-video
- MiniMaxAI/MiniMax-H3 - image-text-to-video
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - image-text-to-text (multimodal)
- BreezeBlue/Breeze-TTS-2 - text-to-speech
- microsoft/VibeVoice-ASR-Streaming-7B - automatic-speech-recognition
- Jackrong/Qwopus3.8-27B-Flash-GGUF - image-text-to-text (multimodal)

**🔧 Specialized Models (code, math, medical, embeddings, time-series, etc.):**
- google/timesfm-3.0-pytorch - time-series-forecasting
- sentence-transformers/all-MiniLM-L6-v2 - sentence-similarity (embeddings)
- openai/clip-vit-base-patch32 - zero-shot-image-classification
- google-bert/bert-base-uncased - fill-mask
- distilbert/distilbert-base-uncased - fill-mask
- facebook/mms-300m - wav2vec2, pretraining (speech)
- nvidia/Qwen3.8-Flash-Next-NVFP4 - image-text-to-text but with NVFP4 quantization (specialized optimization)

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
- unsloth/Qwen3.8-27B-GGUF - GGUF quantization
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF - fine-tune + GGUF
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - GGUF with quantization (GSQ, RCO)
- Jackrong/Qwopus3.8-27B-Flash-GGUF - GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - fine-tune + GGUF
- OpenVDN/vdn-minimax-h3 - fine-tune of MiniMax-H3
- nvidia/Qwen3.8-Flash-Next-NVFP4 - NVFP4 quantization (could go here or specialized)

Wait, some models fit multiple categories. I need to assign each to the BEST category. Let me reconsider:

Models that are primarily quantizations/fine-tunes of existing models should go in 📦 Fine-tunes & Quantizations.

Models that are new base models or major releases go in their primary modality category.

Let me re-categorize more carefully:

**🧠 Language Models:**
1. openbmb/MiniCPM5-2B - new LLM release
2. XHToken/Spark-X2.5-4B - new LLM release
3. Qwen/Qwen3.8-27B - base multimodal LLM (but it's a major base model release)
4. IFM/K2-Horizon-MoVA-36B-A4B - new LLM architecture (MoE)
5. Qwen/Qwen3.8-Flash-Next - new Qwen model variant
6. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp - new DeepSeek multimodal model
7. zai-org/GLM-5.3-Flash - new GLM model
8. nex-agi/Nex-N2.5-mini - new model
9. zai-org/GLM-5.3 - new GLM model
10. nex-agi/Nex-N2.5-Pro - new model

**🎨 Multimodal & Generation:**
1. Lightricks/LTX-2.5 - video generation (primary)
2. WarmBloodAban/Minimax-h3_Singularity - video generation
3. MiniMaxAI/MiniMax-H3 - video generation (base model)
4. BreezeBlue/Breeze-TTS-2 - TTS
5. microsoft/VibeVoice-ASR-Streaming-7B - ASR
6. OpenVDN/vdn-minimax-h3 - fine-tune for video, but it's a fine-tune

**🔧 Specialized Models:**
1. google/timesfm-3.0-pytorch - time series forecasting
2. sentence-transformers/all-MiniLM-L6-v2 - embeddings
3. openai/clip-vit-base-patch32 - CLIP (vision-language)
4. google-bert/bert-base-uncased - BERT (classic)
5. distilbert/distilbert-base-uncased - DistilBERT
4. facebook/mms-300m - speech (MMS)

**📦 Fine-tunes & Quantizations:**
1. unsloth/Qwen3.8-27B-GGUF - quantization
2. DavidAU/Qwen3.8-27B-TURBO-...-GGUF - fine-tune + quantization
3. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - quantization (GSQ, RCO)
4. Jackrong/Qwopus3.8-27B-Flash-GGUF - quantization
5. HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF - fine-tune + quantization
6. OpenVDN/vdn-minimax-h3 - fine-tune
7. nvidia/Qwen3.8-Flash-Next-NVFP4 - quantization (NVFP4)
8. dealignai/GLM-5.3-CYBERSECURITY-FP8 - fine-tune (cybersecurity) + FP8 quantization

Wait, dealignai/GLM-5.3-CYBERSECURITY-FP8 is a fine-tune with FP8 quantization, so it belongs in Fine-tunes & Quantizations.

Also, some models like ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF and Jackrong/Qwopus3.8-27B-Flash-GGUF and HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF are quantizations/fine-tunes.

Let me finalize the categorization:

**🧠 Language Models (LLMs, chat models, instruction-tuned):**
- openbmb/MiniCPM5-2B
- XHToken/Spark-X2.5-4B
- Qwen/Qwen3.8-27B
- IFM/K2-Horizon-MoVA-36B-A4B
- Qwen/Qwen3.8-Flash-Next
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
- zai-org/GLM-5.3-Flash
- nex-agi/Nex-N2.5-mini
- zai-org/GLM-5.3
- nex-agi/Nex-N2.5-Pro

**🎨 Multimodal & Generation (image, video, audio, text-to-X):**
- Lightricks/LTX-2.5
- WarmBloodAban/Minimax-h3_Singularity
- MiniMaxAI/MiniMax-H3
- BreezeBlue/Breeze-TTS-2
- microsoft/VibeVoice-ASR-Streaming-7B

**🔧 Specialized Models (code, math, medical, embeddings):**
- google/timesfm-3.0-pytorch
- sentence-transformers/all-MiniLM-L6-v2
- openai/clip-vit-base-patch32
- google-bert/bert-base-uncased
- distilbert/distilbert-base-uncased
- facebook/mms-300m

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
- unsloth/Qwen3.8-27B-GGUF
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- Jackrong/Qwopus3.8-27B-Flash-GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- OpenVDN/vdn-minimax-h3
- nvidia/Qwen3.8-Flash-Next-NVFP4
- dealignai/GLM-5.3-CYBERSECURITY-FP8

That's 10 + 5 + 6 + 8 = 29. Wait, I have 30 models. Let me count again from the list:

1. openbmb/MiniCPM5-2B
2. XHToken/Spark-X2.5-4B
3. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
4. Qwen/Qwen3.8-27B
5. google/timesfm-3.0-pytorch
6. Lightricks/LTX-2.5
7. unsloth/Qwen3.8-27B-GGUF
8. sentence-transformers/all-MiniLM-L6-v2
9. openai-community/gpt2
10. DavidAU/Qwen3.8-27B-TURBO-...
11. dealignai/GLM-5.3-CYBERSECURITY-FP8
12. IFM/K2-Horizon-MoVA-36B-A4B
13. google-bert/bert-base-uncased
14. Qwen/Qwen3.8-Flash-Next
15. openai/clip-vit-base-patch32
16. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
17. distilbert/distilbert-base-uncased
18. WarmBloodAban/Minimax-h3_Singularity
19. facebook/mms-300m
20. OpenVDN/vdn-minimax-h3
21. MiniMaxAI/MiniMax-H3
22. zai-org/GLM-5.3-Flash
23. nex-agi/Nex-N2.5-mini
24. zai-org/GLM-5.3
25. nvidia/Qwen3.8-Flash-Next-NVFP4
26. Jackrong/Qwopus3.8-27B-Flash-GGUF
27. microsoft/VibeVoice-ASR-Streaming-7B
28. nex-agi/Nex-N2.5-Pro
29. HauhauCS/Qwen3.8-27B-Uncensored-...
30. BreezeBlue/Breeze-TTS-2

I missed openai-community/gpt2! It's a classic LLM, should go in Language Models.

So Language Models: 11 models
Multimodal: 5 models
Specialized: 6 models
Fine-tunes: 8 models
Total: 30. Good.

Now I need to write the digest.

For the tables, I need to include Model (as markdown link), Author, Likes, Downloads, Summary (2 sentences).

Let me prepare the data for each category.

**🧠 Language Models:**

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 959 | 2,879 | A compact 2B parameter language model from the MiniCPM series, optimized for efficient text generation. Trending due to its strong performance-to-size ratio for on-device deployment. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,016 | 10,661 | A 4B parameter LLM in the Spark series designed for text generation tasks. Gaining traction with over 10K downloads indicating strong community adoption for mid-size models. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,532 | 6,712,160 | The flagship 27B multimodal model from Alibaba's Qwen series supporting image-text-to-text tasks. Dominates trending with 14.5K likes and 6.7M downloads, reflecting massive ecosystem adoption. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 263 | 3,205 | A 36B parameter Mixture-of-Experts model with 4B active parameters, featuring MoVA architecture. Notable for its efficient MoE design attracting research interest despite lower download counts. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,047 | 503,263 | An experimental "Flash" variant of Qwen3.8 with next-generation architecture for faster inference. Trending with 5K likes as developers explore its conversational and multimodal capabilities. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 843 | 313,547 | DeepSeek's experimental V4 Flash model with vision capabilities for image-text-to-text tasks. Attracts attention with 313K downloads as the community tests its multimodal reasoning. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,209 | 826,875 | Z.ai's accelerated GLM 5.3 variant optimized for fast image-text-to-text inference. Strong adoption with 826K downloads shows demand for efficient multimodal chat models. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 212 | 2 | A compact Mixture-of-Experts model based on Qwen3.5 architecture for text and image-text generation. Early stage with minimal downloads but architectural interest in MoE mini models. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,791 | 474,141 | The base GLM 5.3 model using MoE DSA architecture for text generation and conversation. Steady adoption with 474K downloads reflects confidence in Z.ai's model family. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 170 | 0 | The professional tier of Nex-N2.5 series with Apache 2.0 license for commercial use. Zero downloads suggest very recent release or access restrictions despite 170 likes. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,860 | 14,770,863 | The classic GPT-2 model maintained by the community, supporting multiple frameworks. Enduring popularity with 14.7M downloads makes it a perpetual benchmark and educational staple. |

**🎨 Multimodal & Generation:**

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,282 | 1,644,796 | A versatile video generation model supporting image-to-video, text-to-video, and video-to-video tasks. Leads video generation with 1.6M downloads and 3.2K likes for creative applications. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 237 | 58,060 | A video generation model based on MiniMax-H3 architecture for text-to-video and image-to-video. Community variant attracting 58K downloads for experimental video synthesis. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,092 | 4,994,268 | The base MiniMax-H3 model for text-to-video and image-to-video generation using diffusers. Major release with 5K likes and 5M downloads establishing a new video generation standard. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 522 | 7,243 | A text-to-speech model from the Breeze series built on transformers for speech synthesis. Niche but growing with 522 likes for TTS applications in the open ecosystem. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 180 | 1,449 | Microsoft's streaming ASR model from the VibeVoice series for real-time transcription. Early adoption with 180 likes signals interest in Microsoft's speech recognition stack. |

**🔧 Specialized Models:**

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 696 | 444,052 | Google's time-series forecasting foundation model in PyTorch for pretrained temporal prediction. 444K downloads show strong enterprise adoption for forecasting workloads. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,724 | 253,331,994 | The de facto standard sentence embedding model for similarity tasks across PyTorch, TF, ONNX, and Rust. Unmatched 253M downloads cement its status as the default embedding backbone. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,346 | 20,778,503 | OpenAI's CLIP ViT-B/32 for zero-shot image classification and vision-language alignment. 20.7M downloads reflect its foundational role in multimodal pipelines. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,127 | 48,848,285 | The original BERT base model for masked language modeling across multiple frameworks. 48.8M downloads maintain its position as the classic NLP benchmark. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,288 | 7,178,154 | Distilled BERT variant retaining 95% performance with 60% speedup for fill-mask tasks. 7.1M downloads show sustained demand for efficient encoder models. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 367 | 12,171 | Meta's Massively Multilingual Speech 300M model for wav2vec2 pretraining across languages. Lower downloads but strategic for multilingual speech research. |

**📦 Fine-tunes & Quantizations:**

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,787 | 10,675,683 | Unsloth's optimized GGUF quantization of Qwen3.8-27B for efficient local inference. Leads quantizations with 10.6M downloads, making it the go-to for consumer hardware. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 417 | 348,753 | Heavily fine-tuned and GGUF-quantized Qwen variant merging multiple datasets for uncensored coding/chat. 348K downloads show niche demand for specialized merged models. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 741 | 479,597 | Research-grade GGUF with GSQ (Groupwise Scalar Quantization) and RCO (Rotated Channel Optimization) for mixed-precision. 479K downloads indicate interest in advanced quantization techniques. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 173 | 113,295 | GGUF quantization of Qwopus Flash variant with llama.cpp support for vision-language tasks. 113K downloads reflect community demand for multimodal GGUF models. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,062 | 1,715,824 | Aggressively uncensored fine-tune with MTP (Multi-Token Prediction) in GGUF format. 1.7M downloads reveal strong appetite for unrestricted multimodal models. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 277 | 0 | Fine-tune of MiniMax-H3 for text-to-video using diffusers with safetensors. Zero downloads but 277 likes suggest early community interest in video model adaptation. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 180 | 26,302 | NVIDIA's NVFP4 quantized version of Qwen3.8-Flash-Next using ModelOpt for hardware acceleration. 26K downloads show early adoption of NVIDIA's 4-bit FP quantization. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 358 | 19,433 | Cybersecurity-specialized GLM-5.3 fine-tune with FP

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*