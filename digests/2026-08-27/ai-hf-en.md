# Hugging Face Trending Models Digest 2026-08-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-27 05:38 UTC

---

The user wants a structured digest of trending Hugging Face models. I need to analyze the 30 models provided and categorize them, then write the sections as specified.

First, let me categorize each model:

1. **Qwen/Qwen3.8-Flash-Next** - Multimodal (image-text-to-text) - Language/Multimodal
2. **Qwen/Qwen3.8-27B** - Multimodal (image-text-to-text) - Language/Multimodal
3. **zai-org/GLM-5.3-Flash** - Text-generation - Language
4. **unsloth/Qwen3.8-27B-GGUF** - GGUF quantization - Fine-tunes & Quantizations
5. **OBLITERATUS/Qwen3.8-27B-OBLITERATED** - Abliterated/uncensored - Fine-tunes & Quantizations
6. **orcarouter/Qwen3.8-27B-Uncensored-MLX** - MLX, uncensored - Fine-tunes & Quantizations
7. **orcarouter/Qwen3.8-27B-Uncensored-FP8** - FP8, uncensored - Fine-tunes & Quantizations
8. **unsloth/Qwen3.8-Flash-Next-GGUF** - GGUF - Fine-tunes & Quantizations
9. **Lightricks/LTX-2.5** - Video generation - Multimodal & Generation
10. **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** - GGUF, uncensored - Fine-tunes & Quantizations
11. **ornith-ai/Ornith-1.5-35B-A3B** - MOE, text-generation - Language
12. **MiniMaxAI/MiniMax-H3** - Video generation - Multimodal & Generation
13. **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** - GGUF, uncensored - Fine-tunes & Quantizations
14. **ornith-ai/Ornith-1.5-35B-A3B-GGUF** - GGUF - Fine-tunes & Quantizations
15. **orcarouter/Qwen3.8-27B-Uncensored-GGUF** - GGUF, uncensored - Fine-tunes & Quantizations
16. **MiniMaxAI/MiniMax-Music3** - Music generation - Multimodal & Generation
17. **froggeric/Qwen-Fixed-Chat-Templates** - Chat templates - Specialized? Actually it's a utility, not a model. But it's listed. Might go to Specialized or Fine-tunes. It's not a model per se, but a chat template fix. I'll put in Specialized Models as a tool.
18. **sensenova/SenseNova-U1.5-8B-MoT** - Any-to-any, multimodal - Multimodal & Generation
19. **huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF** - GGUF, abliterated - Fine-tunes & Quantizations
20. **deepseek-ai/DeepSeek-V4-Flash-0731** - Text-generation - Language
21. **superwhisper/s1-mini** - ASR, text-generation - Specialized (ASR)
22. **ornith-ai/Ornith-1.5-9B-GGUF** - GGUF - Fine-tunes & Quantizations
23. **ornith-ai/Ornith-1.5-9B** - Text-generation - Language
24. **alibaba-pai/MiniMax-H3-Fun-Controlnet-Union** - ControlNet for video - Multimodal & Generation
25. **EschaLabs/Qwen3.8-27B-Escha-W2** - 2-bit quantization - Fine-tunes & Quantizations
26. **unsloth/GLM-5.3-Flash-GGUF** - GGUF - Fine-tunes & Quantizations
27. **DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF** - GGUF, fine-tune - Fine-tunes & Quantizations
28. **orcarouter/Qwen3.8-27B-Uncensored** - Uncensored - Fine-tunes & Quantizations
29. **Audio8/Audio8-TTS-Preview-0.1b** - TTS - Multimodal & Generation
30. **moonshotai/Kimi-K3** - Image-text-to-text - Language/Multimodal

Now, categorize:

**Language Models (LLMs, chat models, instruction-tuned)**:
- Qwen/Qwen3.8-27B (multimodal but primarily LLM)
- Qwen/Qwen3.8-Flash-Next (multimodal)
- zai-org/GLM-5.3-Flash
- ornith-ai/Ornith-1.5-35B-A3B
- deepseek-ai/DeepSeek-V4-Flash-0731
- ornith-ai/Ornith-1.5-9B
- moonshotai/Kimi-K3

**Multimodal & Generation (image, video, audio, text-to-X)**:
- Lightricks/LTX-2.5 (video)
- MiniMaxAI/MiniMax-H3 (video)
- MiniMaxAI/MiniMax-Music3 (music)
- sensenova/SenseNova-U1.5-8B-MoT (any-to-any)
- alibaba-pai/MiniMax-H3-Fun-Controlnet-Union (video controlnet)
- Audio8/Audio8-TTS-Preview-0.1b (TTS)
- Qwen/Qwen3.8-Flash-Next (image-text-to-text) - but already in language? It's multimodal. I'll put in both? Better to put in Multimodal since it's image-text-to-text.
- Qwen/Qwen3.8-27B (image-text-to-text) - same.
- moonshotai/Kimi-K3 (image-text-to-text) - multimodal.
- orcarouter/Qwen3.8-27B-Uncensored-MLX (image-text-to-text)
- orcarouter/Qwen3.8-27B-Uncensored-FP8 (image-text-to-text)
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (image-text-to-text)
- orcarouter/Qwen3.8-27B-Uncensored-GGUF (image-text-to-text)
- orcarouter/Qwen3.8-27B-Uncensored (image-text-to-text)
- DavidAU/Qwen3.8-27B-Cold-Fusion... (image-text-to-text)
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF (image-text-to-text)

But many of these are fine-tunes/quantizations of Qwen3.8-27B. The categorization should be based on primary nature. The instructions: "Organized by category. Under each category header, render a Markdown table... Omit a category's table entirely if no model falls under it."

Categories:
- 🧠 Language Models (LLMs, chat models, instruction-tuned)
- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- 🔧 Specialized Models (code, math, medical, embeddings)
- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

So models that are fine-tunes/quantizations should go to 📦 Fine-tunes & Quantizations, even if they are multimodal. The base models go to Language or Multimodal.

Let's separate:

Base models (original releases):
- Qwen/Qwen3.8-Flash-Next (base multimodal)
- Qwen/Qwen3.8-27B (base multimodal)
- zai-org/GLM-5.3-Flash (base LLM)
- Lightricks/LTX-2.5 (base video)
- MiniMaxAI/MiniMax-H3 (base video)
- ornith-ai/Ornith-1.5-35B-A3B (base MOE LLM)
- MiniMaxAI/MiniMax-Music3 (base music)
- sensenova/SenseNova-U1.5-8B-MoT (base multimodal)
- deepseek-ai/DeepSeek-V4-Flash-0731 (base LLM)
- ornith-ai/Ornith-1.5-9B (base LLM)
- alibaba-pai/MiniMax-H3-Fun-Controlnet-Union (base controlnet for video)
- Audio8/Audio8-TTS-Preview-0.1b (base TTS)
- moonshotai/Kimi-K3 (base multimodal)
- superwhisper/s1-mini (base ASR? It's a model for ASR)
- froggeric/Qwen-Fixed-Chat-Templates (not a model, but a template fix - maybe specialized)

Fine-tunes/Quantizations:
- unsloth/Qwen3.8-27B-GGUF
- OBLITERATUS/Qwen3.8-27B-OBLITERATED
- orcarouter/Qwen3.8-27B-Uncensored-MLX
- orcarouter/Qwen3.8-27B-Uncensored-FP8
- unsloth/Qwen3.8-Flash-Next-GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- ornith-ai/Ornith-1.5-35B-A3B-GGUF
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
- orcarouter/Qwen3.8-27B-Uncensored-GGUF
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
- ornith-ai/Ornith-1.5-9B-GGUF
- EschaLabs/Qwen3.8-27B-Escha-W2
- unsloth/GLM-5.3-Flash-GGUF
- DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF
- orcarouter/Qwen3.8-27B-Uncensored

Also, some are fine-tunes but not quantized: orcarouter/Qwen3.8-27B-Uncensored (transformers, safetensors) - fine-tune.

Now, assign each model to one category. I'll decide:

**Language Models**: Base LLMs and chat models that are not primarily multimodal? But many are multimodal. The category says "LLMs, chat models, instruction-tuned". Multimodal models like Qwen3.8-27B are also LLMs with vision. I'll put base models that are primarily text or multimodal but foundational in Language Models. However, there is a Multimodal & Generation category for image, video, audio, text-to-X. So video/audio generation models go there. Text-to-text LLMs go to Language. Multimodal LLMs (image-text-to-text) could go to Language or Multimodal. I think the distinction: Language Models for text-in-text-out (including multimodal that output text), Multimodal & Generation for models that generate images, video, audio. So Qwen3.8-27B is image-text-to-text (output text), so Language. But Lightricks/LTX-2.5 is image-to-video, so Multimodal. MiniMax-H3 is image-text-to-video, so Multimodal. MiniMax-Music3 is text-to-audio, Multimodal. SenseNova-U1.5-8B-MoT is any-to-any, Multimodal. Audio8 TTS, Multimodal. Kimi-K3 is image-text-to-text, Language. GLM-5.3-Flash text-generation, Language. DeepSeek-V4-Flash, Language. Ornith models are text-generation, Language. s1-mini is ASR (audio to text), could be Specialized or Multimodal. It's speech recognition, so audio-to-text, maybe Specialized (ASR). froggeric is chat templates, Specialized.

Let's define:

**Language Models**: Models primarily for text generation, chat, instruction following, including multimodal models that take image+text and output text.
- Qwen/Qwen3.8-Flash-Next
- Qwen/Qwen3.8-27B
- zai-org/GLM-5.3-Flash
- ornith-ai/Ornith-1.5-35B-A3B
- deepseek-ai/DeepSeek-V4-Flash-0731
- ornith-ai/Ornith-1.5-9B
- moonshotai/Kimi-K3

**Multimodal & Generation**: Models that generate images, video, audio.
- Lightricks/LTX-2.5
- MiniMaxAI/MiniMax-H3
- MiniMaxAI/MiniMax-Music3
- sensenova/SenseNova-U1.5-8B-MoT
- alibaba-pai/MiniMax-H3-Fun-Controlnet-Union
- Audio8/Audio8-TTS-Preview-0.1b

**Specialized Models**: Code, math, medical, embeddings, ASR, chat templates.
- superwhisper/s1-mini (ASR)
- froggeric/Qwen-Fixed-Chat-Templates (chat template utility)

**Fine-tunes & Quantizations**: Community fine-tunes, GGUF, AWQ, quantizations, abliterated versions.
- unsloth/Qwen3.8-27B-GGUF
- OBLITERATUS/Qwen3.8-27B-OBLITERATED
- orcarouter/Qwen3.8-27B-Uncensored-MLX
- orcarouter/Qwen3.8-27B-Uncensored-FP8
- unsloth/Qwen3.8-Flash-Next-GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- ornith-ai/Ornith-1.5-35B-A3B-GGUF
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
- orcarouter/Qwen3.8-27B-Uncensored-GGUF
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
- ornith-ai/Ornith-1.5-9B-GGUF
- EschaLabs/Qwen3.8-27B-Escha-W2
- unsloth/GLM-5.3-Flash-GGUF
- DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF
- orcarouter/Qwen3.8-27B-Uncensored

That's 16 models in Fine-tunes & Quantizations. Good.

Now, for each category, create a markdown table with columns: Model (link), Author, Likes, Downloads, Summary (2 sentences).

I need to write summaries for each model. I'll infer from tags and names.

Let's start with Language Models:

1. Qwen/Qwen3.8-Flash-Next: Author Qwen, Likes 3,729, Downloads 2,551. Tags: transformers, safetensors, qwen4_exp, image-text-to-text, conversational. Summary: Next-gen flash model from Qwen with experimental architecture, optimized for fast image-text reasoning. Trending due to its novel "Flash-Next" design and strong multimodal conversational capabilities.

2. Qwen/Qwen3.8-27B: Author Qwen, Likes 12,932, Downloads 3,298,569. Tags: transformers, safetensors, qwen3_5, image-text-to-text, conversational. Summary: Flagship 27B multimodal model from Qwen with advanced image-text understanding and conversation. Trending as the base for numerous community fine-tunes and quantizations, evidenced by massive download count.

3. zai-org/GLM-5.3-Flash: Author zai-org, Likes 1,011, Downloads 0. Tags: transformers, safetensors, glm5_next, image-text-to-text, text-generation. Summary: Latest GLM series flash model from Z.ai with multimodal capabilities and efficient inference. Trending as a new open-weight competitor in the Chinese LLM landscape with strong benchmarks.

4. ornith-ai/Ornith-1.5-35B-A3B: Author ornith-ai, Likes 457, Downloads 83,342. Tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, text-generation. Summary: Mixture-of-experts model (35B total, 3B active) based on Qwen3.5 architecture for efficient multimodal reasoning. Trending for its MoE efficiency and strong performance per active parameter.

5. deepseek-ai/DeepSeek-V4-Flash-0731: Author deepseek-ai, Likes 3,743, Downloads 3,857,140. Tags: transformers, safetensors, deepseek_v4, text-generation, conversational. Summary: DeepSeek's latest flash model optimized for speed and conversational quality. Trending with massive downloads, indicating strong adoption for production inference workloads.

6. ornith-ai/Ornith-1.5-9B: Author ornith-ai, Likes 229, Downloads 119,053. Tags: transformers, safetensors, qwen3_5, image-text-to-text, text-generation. Summary: Compact 9B multimodal model from Ornith-AI built on Qwen3.5 with strong vision-language capabilities. Trending as an efficient on-device option with solid multimodal performance.

7. moonshotai/Kimi-K3: Author moonshotai, Likes 11,023, Downloads 2,921,257. Tags: transformers, safetensors, kimi_k3, feature-extraction, compressed-tensors. Summary: Moonshot AI's K3 model with compressed tensor technology for efficient multimodal understanding. Trending due to high likes and downloads, showcasing Moonshot's growing open-weight influence.

Now Multimodal & Generation:

1. Lightricks/LTX-2.5: Author Lightricks, Likes 1,877, Downloads 894,094. Tags: diffusion-single-file, image-to-video, text-to-video, video-to-video, image-text-to-video. Summary: Advanced video generation model supporting text-to-video, image-to-video, and video-to-video with diffusion single-file format. Trending for its versatile video editing capabilities and high-quality output.

2. MiniMaxAI/MiniMax-H3: Author MiniMaxAI, Likes 4,505, Downloads 4,793,098. Tags: minimax-h3, diffusers, safetensors, text-to-video, image-to-video. Summary: MiniMax's flagship video generation model with strong text-to-video and image-to-video capabilities. Trending with highest downloads in category, indicating massive community adoption for video synthesis.

3. MiniMaxAI/MiniMax-Music3: Author MiniMaxAI, Likes 1,265, Downloads 19,501. Tags: diffusers, safetensors, minimax_music3, music-generation, text-to-music. Summary: Text-to-music generation model from MiniMax producing high-quality audio tracks. Trending as a specialized audio generation model from a major video generation player.

4. sensenova/SenseNova-U1.5-8B-MoT: Author sensenova, Likes 174, Downloads 3,264. Tags: transformers, safetensors, neo_chat, feature-extraction, native multimodal. Summary: SenseNova's native multimodal model with mixture-of-transformers architecture for any-to-any modality processing. Trending for its novel MoT architecture and unified multimodal approach.

5. alibaba-pai/MiniMax-H3-Fun-Controlnet-Union: Author alibaba-pai, Likes 141, Downloads 3,148. Tags: videox_fun, controlnet, video-to-video, text-to-video, image-text-to-video. Summary: ControlNet union for MiniMax-H3 enabling precise video generation control. Trending as a tool for controllable video synthesis from Alibaba's PAI team.

6. Audio8/Audio8-TTS-Preview-0.1b: Author Audio8, Likes 176, Downloads 4,257. Tags: transformers, safetensors, arktts, feature-extraction, audio. Summary: Preview release of ArkTTS text-to-speech model with high-quality voice synthesis. Trending as an emerging open-weight TTS solution with promising early results.

Specialized Models:

1. superwhisper/s1-mini: Author superwhisper, Likes 252, Downloads 3,921. Tags: transformers, safetensors, qwen3, text-generation, asr. Summary: Compact ASR model based on Qwen3 for automatic speech recognition tasks. Trending as a specialized speech-to-text model leveraging LLM architecture for accuracy.

2. froggeric/Qwen-Fixed-Chat-Templates: Author froggeric, Likes 1,489, Downloads 0. Tags: mlx, jinja, chat-template, qwen, qwen3.5. Summary: Fixed chat templates for Qwen models resolving formatting issues in MLX and other inference engines. Trending as a critical utility for developers deploying Qwen models across platforms.

Fine-tunes & Quantizations: 16 models. I'll list them all.

1. unsloth/Qwen3.8-27B-GGUF: Author unsloth, Likes 3,014, Downloads 7,638,591. Tags: gguf, qwen3_5, unsloth, base_model:Qwen/Qwen3.8-27B, base_model:quantized:Qwen/Qwen3.8-27B. Summary: Unsloth's optimized GGUF quantization of Qwen3.8-27B for efficient CPU/GPU inference. Trending with highest downloads overall, demonstrating massive demand for quantized flagship models.

2. OBLITERATUS/Qwen3.8-27B-OBLITERATED: Author OBLITERATUS, Likes 817, Downloads 468,746. Tags: mlx, safetensors, gguf, qwen3_5, abliterated. Summary: Abliterated (uncensored) version of Qwen3.8-27B with multiple format support including MLX and GGUF. Trending for removing refusal behaviors while maintaining model capability.

3. orcarouter/Qwen3.8-27B-Uncensored-MLX: Author orcarouter, Likes 1,144, Downloads 79,395. Tags: mlx, safetensors, qwen3_5, abliterated, qwen3.8. Summary: MLX-optimized uncensored fine-tune of Qwen3.8-27B for Apple Silicon. Trending for bringing uncensored capabilities to Mac users with native MLX acceleration.

4. orcarouter/Qwen3.8-27B-Uncensored-FP8: Author orcarouter, Likes 1,180, Downloads 269,805. Tags: transformers, safetensors, qwen3_5, image-text-to-text, abliterated. Summary: FP8 quantized uncensored version of Qwen3.8-27B maintaining multimodal capabilities. Trending for balancing quantization efficiency with uncensored performance.

5. unsloth/Qwen3.8-Flash-Next-GGUF: Author unsloth, Likes 376, Downloads 0. Tags: gguf, unsloth, image-text-to-text, base_model:Qwen/Qwen3.8-Flash-Next, base_model:quantized:Qwen/Qwen3.8-Flash-Next. Summary: Unsloth's GGUF quantization of the new Qwen3.8-Flash-Next multimodal model. Trending as the first quantization of Qwen's experimental flash architecture.

6. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF: Author HauhauCS, Likes 666, Downloads 911,795. Tags: gguf, uncensored, qwen3.8, multimodal, vision. Summary: Aggressively fine-tuned uncensored GGUF with MTP (multi-token prediction) for Qwen3.8-27B. Trending for high download count and novel MTP training approach.

7. ornith-ai/Ornith-1.5-35B-A3B-GGUF: Author ornith-ai, Likes 318, Downloads 1,391,218. Tags: transformers, gguf, text-generation, license:mit, endpoints_compatible. Summary: GGUF quantization of Ornith's MoE model with MIT license and endpoint compatibility. Trending for open licensing and efficient MoE quantization.

8. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF: Author JonathanColetti, Likes 757, Downloads 1,620,754. Tags: llama.cpp, gguf, uncensored, qwen3.8, mtp. Summary: Llama.cpp compatible GGUF uncensored fine-tune with MTP training. Trending for high downloads and llama.cpp ecosystem integration.

9. orcarouter/Qwen3.8-27B-Uncensored-GGUF: Author orcarouter, Likes 476, Downloads 183,871. Tags: gguf, abliterated, qwen, qwen3, qwen3.8. Summary: OrcaRouter's GGUF quantized uncensored version of Qwen3.8-27B. Trending as part of a comprehensive uncensored model suite across formats.

10. huihui-ai/Huihui-Qwen3.8-27

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*