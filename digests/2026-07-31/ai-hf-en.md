# Hugging Face Trending Models Digest 2026-07-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-31 03:37 UTC

---

The user wants me to generate a structured Hugging Face Trending Models Digest based on the provided list of 30 trending models. Let me analyze the data first and then create the digest.

First, I need to categorize the models:

**Language Models (LLMs, chat models, instruction-tuned):**
- moonshotai/Kimi-K3 (image-text-to-text, but it's a multimodal LLM)
- poolside/Laguna-S-2.1 (text-generation)
- Nanbeige/Nanbeige4.2-3B (text-generation)
- zai-org/GLM-5.2 (text-generation)
- upstage/Solar-Open2-250B (text-generation)
- unsloth/Kimi-K3 (image-text-to-text)
- unsloth/Kimi-K3-GGUF (image-text-to-text)
- thinkingmachines/Inkling-Small (image-text-to-text)
- thinkingmachines/Inkling (image-text-to-text)
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2 (text-generation)
- amd/Instella-MoE-16B-A3B-Think (text-generation)
- Qwen/Qwen3.6-35B-A3B (image-text-to-text)
- prism-ml/Ternary-Bonsai-27B-gguf (text-generation)
- fdtn-ai/antares-1b (text-generation)
- unsloth/Laguna-S-2.1-GGUF (text-generation)

Wait, many of these are multimodal (image-text-to-text). Let me reconsider the categories.

The user defined categories:
1. 🧠 Language Models (LLMs, chat models, instruction-tuned) - primarily text-only
2. 🎨 Multimodal & Generation (image, video, audio, text-to-X) - models that handle multiple modalities
3. 🔧 Specialized Models (code, math, medical, embeddings) - domain-specific
4. 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ) - community derivatives

Let me categorize each model:

1. moonshotai/Kimi-K3 - Multimodal (image-text-to-text) → 🎨
2. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF - Fine-tune/Quantization (GGUF, uncensored, fine-tune) → 📦
3. baidu/Unlimited-OCR - Multimodal (OCR, image-text-to-text) → 🎨
4. owensong/Inflect-Micro-v2 - Audio (text-to-speech) → 🎨
5. poolside/Laguna-S-2.1 - Language Model (text-generation) → 🧠
6. Kwaipilot/KAT-Coder-V2.5-Dev - Specialized (code, also image-text-to-text) → 🔧
7. Nanbeige/Nanbeige4.2-3B - Language Model (text-generation) → 🧠
8. zai-org/GLM-5.2 - Language Model (text-generation) → 🧠
9. upstage/Solar-Open2-250B - Language Model (text-generation) → 🧠
10. unsloth/Kimi-K3-GGUF - Fine-tune/Quantization (GGUF) → 📦
11. microsoft/Fara1.5-27B - Multimodal (image-text-to-text, computer-use) → 🎨
12. unsloth/Kimi-K3 - Multimodal (image-text-to-text) → 🎨 (but it's a quantization/optimization of Kimi-K3) → Actually unsloth provides optimized versions, so maybe quantized? The tags: transformers, safetensors, kimi_k3, feature-extraction, compressed-tensors. This seems like the base model hosted by unsloth. But it's still multimodal. I'll put in 🎨 or 📦? Since it's from unsloth which does optimization, but it's not GGUF. Hmm. The original is moonshotai/Kimi-K3. This is unsloth's version. Could be considered a fine-tune/quantization. But tags don't show GGUF. It says compressed-tensors. I'll put in 📦 Fine-tunes & Quantizations.
13. thinkingmachines/Inkling-Small - Multimodal (image-text-to-text) → 🎨
14. Audio8/Audio8-TTS-Preview-0.6b - Audio (text-to-speech) → 🎨
15. thinkingmachines/Inkling - Multimodal (image-text-to-text) → 🎨
16. nota-ai/Solar-Open2-250B-Nota-NVFP4 - Fine-tune/Quantization (quantization, NVFP4) → 📦
17. microsoft/Mage-VL - Multimodal (image-text-to-text) → 🎨
18. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF - Fine-tune/Quantization (GGUF, uncensored) → 📦
19. microsoft/VibeVoice-ASR-BitNet - Audio (ASR) → 🎨
20. owensong/Inflect-Nano-v2 - Audio (text-to-speech) → 🎨
21. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive - Fine-tune/Quantization (GGUF, uncensored) → 📦
22. prism-ml/Ternary-Bonsai-27B-gguf - Fine-tune/Quantization (GGUF, ternary, 2-bit) → 📦
23. fdtn-ai/antares-1b - Language Model (text-generation, security) → Could be specialized (security) → 🔧
24. unsloth/Laguna-S-2.1-GGUF - Fine-tune/Quantization (GGUF) → 📦
25. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF - Fine-tune/Quantization (GGUF) → 📦
26. Comfy-Org/Mage-Flow - Generation (diffusion) → 🎨
27. ATH-MaaS/OvisOCR2 - Multimodal (OCR) → 🎨
28. EschaLabs/Qwen3.6-35B-A3B-Escha-W2 - Language Model (text-generation, MoE) → 🧠
29. amd/Instella-MoE-16B-A3B-Think - Language Model (text-generation, MoE) → 🧠
30. Qwen/Qwen3.6-35B-A3B - Multimodal (image-text-to-text) → 🎨

Now, let me organize by category.

**🧠 Language Models (LLMs, chat models, instruction-tuned):**
- poolside/Laguna-S-2.1
- Nanbeige/Nanbeige4.2-3B
- zai-org/GLM-5.2
- upstage/Solar-Open2-250B
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2
- amd/Instella-MoE-16B-A3B-Think

**🎨 Multimodal & Generation (image, video, audio, text-to-X):**
- moonshotai/Kimi-K3
- baidu/Unlimited-OCR
- owensong/Inflect-Micro-v2
- Kwaipilot/KAT-Coder-V2.5-Dev (also code, but multimodal)
- microsoft/Fara1.5-27B
- unsloth/Kimi-K3 (but this is unsloth's version, maybe keep in multimodal)
- thinkingmachines/Inkling-Small
- Audio8/Audio8-TTS-Preview-0.6b
- thinkingmachines/Inkling
- microsoft/Mage-VL
- microsoft/VibeVoice-ASR-BitNet
- owensong/Inflect-Nano-v2
- Comfy-Org/Mage-Flow
- ATH-MaaS/OvisOCR2
- Qwen/Qwen3.6-35B-A3B

**🔧 Specialized Models (code, math, medical, embeddings):**
- Kwaipilot/KAT-Coder-V2.5-Dev (code)
- fdtn-ai/antares-1b (security)

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
- DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
- unsloth/Kimi-K3-GGUF
- unsloth/Kimi-K3 (maybe, but tags: compressed-tensors, not GGUF. I'll include it here as it's unsloth's optimized version)
- nota-ai/Solar-Open2-250B-Nota-NVFP4
- LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
- prism-ml/Ternary-Bonsai-27B-gguf
- unsloth/Laguna-S-2.1-GGUF
- DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF

Wait, unsloth/Kimi-K3 is listed separately from moonshotai/Kimi-K3. The unsloth version likely has optimizations. I'll put it in Fine-tunes & Quantizations.

Also, Kwaipilot/KAT-Coder-V2.5-Dev is both multimodal and code-specialized. I'll put it in Specialized Models since it's a coder model.

fdtn-ai/antares-1b is tagged security, so specialized.

Now, I need to create markdown tables for each category with columns: Model, Author, Likes, Downloads, Summary.

Model should be a markdown link to HF URL.

Likes and Downloads should be verbatim from input (with commas).

Summary: 2 sentences - what it is and why trending, standout capability/data point.

Let me compile data for each model.

I'll go through each model and extract info.

1. moonshotai/Kimi-K3
   Link: https://huggingface.co/moonshotai/Kimi-K3
   Author: moonshotai
   Likes: 9,043
   Downloads: 387,822
   Tags: transformers, safetensors, kimi_k3, feature-extraction, compressed-tensors
   Pipeline: image-text-to-text
   Summary: Kimi-K3 is a multimodal large language model from Moonshot AI with image-text-to-text capabilities. It's trending due to its high likes (9K+) and strong multimodal performance.

2. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
   Link: https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
   Author: DavidAU
   Likes: 1,044
   Downloads: 955,767
   Tags: gguf, unsloth, fine tune, heretic, uncensored
   Pipeline: image-text-to-text
   Summary: This is an uncensored GGUF quantization of a Qwen3.6-27B fine-tune by DavidAU, featuring Heretic and NEO-MAX-MTP variants. It's trending with nearly 1M downloads, showing strong demand for uncensored multimodal models.

3. baidu/Unlimited-OCR
   Link: https://huggingface.co/baidu/Unlimited-OCR
   Author: baidu
   Likes: 3,590
   Downloads: 2,598,659
   Tags: transformers, safetensors, unlimited-ocr, feature-extraction, baidu
   Pipeline: image-text-to-text
   Summary: Unlimited-OCR is Baidu's OCR-focused multimodal model for image-text extraction. With 2.6M downloads, it's a leading open OCR solution.

4. owensong/Inflect-Micro-v2
   Link: https://huggingface.co/owensong/Inflect-Micro-v2
   Author: owensong
   Likes: 323
   Downloads: 1,100
   Tags: text-to-speech, speech-synthesis, local-tts, cpu, edge-ai
   Pipeline: text-to-speech
   Summary: Inflect-Micro-v2 is a lightweight text-to-speech model optimized for CPU and edge deployment. It's notable for its small size and local inference capabilities.

5. poolside/Laguna-S-2.1
   Link: https://huggingface.co/poolside/Laguna-S-2.1
   Author: poolside
   Likes: 847
   Downloads: 73,246
   Tags: transformers, safetensors, laguna, text-generation, laguna-s-2.1
   Pipeline: text-generation
   Summary: Laguna-S-2.1 is Poolside's code-focused language model for software development. It's gaining traction as a specialized coding assistant with 847 likes.

6. Kwaipilot/KAT-Coder-V2.5-Dev
   Link: https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev
   Author: Kwaipilot
   Likes: 353
   Downloads: 9,225
   Tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, code
   Pipeline: text-generation
   Summary: KAT-Coder-V2.5-Dev is a Qwen3.5 MoE-based coding model with multimodal capabilities. It's trending among developers for its code generation and image-text-to-text features.

7. Nanbeige/Nanbeige4.2-3B
   Link: https://huggingface.co/Nanbeige/Nanbeige4.2-3B
   Author: Nanbeige
   Likes: 582
   Downloads: 24,542
   Tags: transformers, safetensors, nanbeige, text-generation, llm
   Pipeline: text-generation
   Summary: Nanbeige4.2-3B is a compact 3B parameter language model from Nanbeige. It's popular for its efficiency and strong performance at small scale.

8. zai-org/GLM-5.2
   Link: https://huggingface.co/zai-org/GLM-5.2
   Author: zai-org
   Likes: 4,685
   Downloads: 1,527,760
   Tags: transformers, safetensors, glm_moe_dsa, text-generation, conversational
   Pipeline: text-generation
   Summary: GLM-5.2 is Z.ai's MoE-based conversational model with 1.5M downloads. It's a major open-weight release from China with strong bilingual capabilities.

9. upstage/Solar-Open2-250B
   Link: https://huggingface.co/upstage/Solar-Open2-250B
   Author: upstage
   Likes: 704
   Downloads: 12,411
   Tags: transformers, safetensors, solar_open2, text-generation, upstage
   Pipeline: text-generation
   Summary: Solar-Open2-250B is Upstage's massive 250B parameter open language model. Despite its size, it's attracting attention for pushing open model scale.

10. unsloth/Kimi-K3-GGUF
   Link: https://huggingface.co/unsloth/Kimi-K3-GGUF
   Author: unsloth
   Likes: 211
   Downloads: 12,178
   Tags: transformers, gguf, unsloth, conversational, image-text-to-text
   Pipeline: image-text-to-text
   Summary: Unslooth's GGUF quantization of Kimi-K3 enables efficient local inference of the multimodal model. It's popular for bringing Kimi-K3 to consumer hardware.

11. microsoft/Fara1.5-27B
   Link: https://huggingface.co/microsoft/Fara1.5-27B
   Author: microsoft
   Likes: 224
   Downloads: 2,316
   Tags: transformers, safetensors, qwen3_5, image-text-to-text, computer-use
   Pipeline: image-text-to-text
   Summary: Fara1.5-27B is Microsoft's multimodal model with computer-use capabilities, built on Qwen3.5. It's notable for its agentic vision-language skills.

12. unsloth/Kimi-K3
   Link: https://huggingface.co/unsloth/Kimi-K3
   Author: unsloth
   Likes: 176
   Downloads: 766
   Tags: transformers, safetensors, kimi_k3, feature-extraction, compressed-tensors
   Pipeline: image-text-to-text
   Summary: Unslooth's optimized version of Kimi-K3 with compressed-tensors for efficient deployment. It provides an alternative hosting of the Moonshot model.

13. thinkingmachines/Inkling-Small
   Link: https://huggingface.co/thinkingmachines/Inkling-Small
   Author: thinkingmachines
   Likes: 130
   Downloads: 840
   Tags: transformers, safetensors, inkling_mm_model, image-text-to-text, conversational
   Pipeline: image-text-to-text
   Summary: Inkling-Small is a compact multimodal conversational model from Thinking Machines. It's designed for efficient image-text interaction.

14. Audio8/Audio8-TTS-Preview-0.6b
   Link: https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b
   Author: Audio8
   Likes: 128
   Downloads: 225
   Tags: transformers, safetensors, arktts, feature-extraction, audio
   Pipeline: text-to-speech
   Summary: Audio8-TTS-Preview-0.6b is a lightweight text-to-speech model from Audio8. It's an early preview showcasing efficient speech synthesis.

15. thinkingmachines/Inkling
   Link: https://huggingface.co/thinkingmachines/Inkling
   Author: thinkingmachines
   Likes: 1,654
   Downloads: 45,658
   Tags: transformers, safetensors, inkling_mm_model, image-text-to-text, conversational
   Pipeline: image-text-to-text
   Summary: Inkling is Thinking Machines' flagship multimodal conversational model with 1.6K likes. It demonstrates strong image-text reasoning capabilities.

16. nota-ai/Solar-Open2-250B-Nota-NVFP4
   Link: https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4
   Author: nota-ai
   Likes: 148
   Downloads: 7,755
   Tags: vllm, safetensors, solar_open2, quantization, nvfp4
   Pipeline: text-generation
   Summary: Nota-AI's NVFP4 quantization of Solar-Open2-250B enables efficient inference of the 250B model. It showcases advanced quantization techniques for massive models.

17. microsoft/Mage-VL
   Link: https://huggingface.co/microsoft/Mage-VL
   Author: microsoft
   Likes: 122
   Downloads: 2,951
   Tags: transformers, safetensors, mage_vl, image-text-to-text, multimodal
   Pipeline: image-text-to-text
   Summary: Mage-VL is Microsoft's vision-language model for multimodal understanding. It's part of Microsoft's growing open multimodal portfolio.

18. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF
   Link: https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF
   Author: LuffyTheFox
   Likes: 242
   Downloads: 162,394
   Tags: hermes, gguf, uncensored, qwen3.6, moe
   Pipeline: image-text-to-text
   Summary: An uncensored GGUF quantization of Qwen3.6-35B-A3B with Hermes fine-tuning. It's popular for its MoE architecture and uncensored responses.

19. microsoft/VibeVoice-ASR-BitNet
   Link: https://huggingface.co/microsoft/VibeVoice-ASR-BitNet
   Author: microsoft
   Likes: 121
   Downloads: 3,864
   Tags: ggml, safetensors, gguf, vibevoice, ASR
   Pipeline: automatic-speech-recognition
   Summary: VibeVoice-ASR-BitNet is Microsoft's BitNet-quantized ASR model for efficient speech recognition. It demonstrates 1-bit quantization for audio tasks.

20. owensong/Inflect-Nano-v2
   Link: https://huggingface.co/owensong/Inflect-Nano-v2
   Author: owensong
   Likes: 119
   Downloads: 654
   Tags: text-to-speech, speech-synthesis, local-tts, cpu, edge-ai
   Pipeline: text-to-speech
   Summary: Inflect-Nano-v2 is an ultra-lightweight TTS model for edge deployment. It's even smaller than Micro-v2 for extreme resource constraints.

21. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
   Link: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
   Author: HauhauCS
   Likes: 3,191
   Downloads: 1,803,090
   Tags: gguf, uncensored, qwen3.6, moe, vision
   Pipeline: image-text-to-text
   Summary: HauhauCS's aggressive uncensored fine-tune of Qwen3.6-35B-A3B with 1.8M downloads. It's a top community multimodal MoE model.

22. prism-ml/Ternary-Bonsai-27B-gguf
   Link: https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf
   Author: prism-ml
   Likes: 1,117
   Downloads: 697,666
   Tags: llama.cpp, gguf, conversational, ternary, 2-bit
   Pipeline: text-generation
   Summary: Ternary-Bonsai-27B is a 2-bit ternary quantized model for extreme compression. With 697K downloads, it pushes quantization boundaries.

23. fdtn-ai/antares-1b
   Link: https://huggingface.co/fdtn-ai/antares-1b
   Author: fdtn-ai
   Likes: 240
   Downloads: 9,820
   Tags: transformers, safetensors, granitemoehybrid, text-generation, security
   Pipeline: text-generation
   Summary: Antares-1B is a security-focused language model using Granite MoE hybrid architecture. It's specialized for cybersecurity applications.

24. unsloth/Laguna-S-2.1-GGUF
   Link: https://huggingface.co/unsloth/Laguna-S-2.1-GGUF
   Author: unsloth
   Likes: 259
   Downloads: 159,331
   Tags: transformers, gguf, laguna-s-2.1, unsloth, vllm
   Pipeline: text-generation
   Summary: Unslooth's GGUF quantization of Poolside's Laguna-S-2.1 coding model. It enables efficient local inference of the specialized code LLM.

25. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF
   Link: https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF
   Author: DavidAU
   Likes: 160
   Downloads: 248,173
   Tags: gguf, MTP GGUFS, Regular GGUFS, NEO Imatrix, fine tune
   Pipeline: image-text-to-text
   Summary: Another DavidAU uncensored GGUF fine-tune of Qwen3.5-9B with IMATRIX quantization. It offers multiple quantization variants for different hardware.

26. Comfy-Org/Mage-Flow
   Link: https://huggingface.co/Comfy-Org/Mage-Flow
   Author: Comfy-Org
   Likes: 97
   Downloads: 44,714
   Tags: diffusion-single-file, comfyui, base_model:microsoft/Mage-Flow, base_model:finetune:microsoft/Mage-Flow, license:mit
   Pipeline: N/A
   Summary: Mage-Flow is a diffusion model for image generation integrated with ComfyUI

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*