# Hugging Face Trending Models Digest 2026-08-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-29 06:48 UTC

---

The user wants a structured Hugging Face Trending Models Digest in English based on the provided list of 30 models. I need to organize this into four sections: Today's Highlights, Trending Models (with categories and markdown tables), Ecosystem Signal, and Worth Exploring.

First, I'll analyze the models to categorize them correctly.

Looking at the models:

1. Qwen/Qwen3.8-Flash-Next - image-text-to-text, multimodal LLM
2. zai-org/GLM-5.3-Flash - text-generation, LLM
3. zai-org/GLM-5.3 - text-generation, LLM
4. Qwen/Qwen3.8-27B - image-text-to-text, multimodal LLM
5. unsloth/Qwen3.8-Flash-Next-GGUF - GGUF quantization of #1
6. unsloth/Qwen3.8-27B-GGUF - GGUF quantization of #4
7. OBLITERATUS/Qwen3.8-27B-OBLITERATED - abliterated version, GGUF/MLX
8. Lightricks/LTX-2.5 - image-to-video, video generation
9. orcarouter/Qwen3.8-27B-Uncensored-MLX - MLX format, uncensored
10. orcarouter/Qwen3.8-27B-Uncensored-FP8 - FP8 quantization, uncensored
11. tencent/Hy4-preview - text-generation, LLM
12. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - GGUF, uncensored
13. unsloth/GLM-5.3-Flash-GGUF - GGUF quantization of #2
14. MiniMaxAI/MiniMax-H3 - image-text-to-video, video generation
15. ornith-ai/Ornith-1.5-35B-A3B - text-generation, MoE LLM
16. BreezeBlue/Breeze-TTS-2 - text-to-speech, audio generation
17. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF - GGUF, uncensored
18. orcarouter/Qwen3.8-27B-Uncensored-GGUF - GGUF, uncensored
19. alibaba-pai/MiniMax-H3-Fun-Controlnet-Union - ControlNet for video
20. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF - GGUF, abliterated
21. Qwen/Qwen3.8-Flash-Next-FP8 - FP8 quantization of #1
22. thomsonreuters/Thomson-1.0-Small - image-text-to-text, multimodal LLM
23. alibaba-pai/MiniMax-H3-Acc-LoRAs - LoRAs for video
24. deepseek-ai/DeepSeek-V4-Flash-0731 - text-generation, LLM
25. froggeric/Qwen-Fixed-Chat-Templates - chat templates, not a model per se
26. pipecat-ai/phonellm-alpha-1 - text-generation, LLM
27. moonshotai/Kimi-K3 - image-text-to-text, multimodal LLM
28. ornith-ai/Ornith-1.5-35B-A3B-GGUF - GGUF quantization of #15
29. orcarouter/Qwen3.8-27B-Uncensored - uncensored base model
30. MiniMaxAI/MiniMax-Music3 - text-to-audio, music generation

Now categorize:

🧠 Language Models (LLMs, chat models, instruction-tuned):
- zai-org/GLM-5.3-Flash
- zai-org/GLM-5.3
- tencent/Hy4-preview
- ornith-ai/Ornith-1.5-35B-A3B
- deepseek-ai/DeepSeek-V4-Flash-0731
- pipecat-ai/phonellm-alpha-1
- moonshotai/Kimi-K3 (though multimodal, it's primarily LLM with vision)
- thomsonreuters/Thomson-1.0-Small (multimodal but LLM core)
- froggeric/Qwen-Fixed-Chat-Templates (this is not a model, it's chat templates - might exclude or put in specialized? But it says "Pipeline: N/A" and tags include chat-template. Probably not a model. I'll exclude from tables since it's not a model with pipeline.)

Wait, the categories: "Language Models (LLMs, chat models, instruction-tuned)" - so models that are primarily text-generation LLMs.

But many are multimodal (image-text-to-text). The category "Multimodal & Generation" includes image, video, audio, text-to-X. So multimodal LLMs like Qwen3.8-27B, Qwen3.8-Flash-Next, GLM-5.3 (though GLM-5.3 tags say image-text-to-text? Actually GLM-5.3 tags: transformers, safetensors, glm_moe_dsa, text-generation, conversational - no image-text-to-text. GLM-5.3-Flash tags include image-text-to-text. So GLM-5.3 is text-only? But pipeline says text-generation. I'll check: GLM-5.3-Flash has image-text-to-text tag, GLM-5.3 does not. So GLM-5.3 is text-only LLM.

Similarly, DeepSeek-V4-Flash-0731 is text-generation only.

Ornith-1.5-35B-A3B tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, text-generation - so multimodal.

Kimi-K3: image-text-to-text.

Thomson-1.0-Small: image-text-to-text.

So multimodal LLMs go to Multimodal & Generation? The category says "Multimodal & Generation (image, video, audio, text-to-X)". That includes multimodal LLMs (image-text-to-text) as well as video/audio generation.

But Language Models category says "LLMs, chat models, instruction-tuned". Typically multimodal LLMs are still LLMs. However, to avoid duplication, I'll put pure text LLMs in Language Models, and multimodal LLMs in Multimodal & Generation. But the category "Multimodal & Generation" includes "image, video, audio, text-to-X". Text-to-X includes text-to-text? That's ambiguous. Usually "text-to-X" means text-to-image, text-to-video, etc. But multimodal LLMs are image-text-to-text, which is not generation of image/video/audio. They are still language models with vision.

I think a reasonable split: 
- Language Models: text-only LLMs (GLM-5.3, DeepSeek-V4-Flash, tencent/Hy4-preview, maybe pipecat-ai/phonellm-alpha-1, ornith-ai/Ornith-1.5-35B-A3B? It has image-text-to-text tag, so multimodal. Actually ornith-ai/Ornith-1.5-35B-A3B tags include image-text-to-text. So multimodal.
- Multimodal & Generation: models that handle images, video, audio generation or multimodal understanding (image-text-to-text, image-to-video, text-to-video, text-to-audio, etc.)
- Specialized Models: code, math, medical, embeddings. None obvious here. Maybe Breeze-TTS-2 is audio generation, but that's generation. MiniMax-Music3 is music generation. Lightricks/LTX-2.5 is video generation. MiniMax-H3 is video generation. alibaba-pai/MiniMax-H3-Fun-Controlnet-Union is ControlNet for video. alibaba-pai/MiniMax-H3-Acc-LoRAs is LoRAs. These are generation models.

Specialized Models could include: maybe thomsonreuters/Thomson-1.0-Small (legal/finance?), but not sure. froggeric/Qwen-Fixed-Chat-Templates is not a model. pipecat-ai/phonellm-alpha-1 might be specialized for phonetics? But it's a general LLM.

I'll put only clear specialized models in that category. Perhaps none. But we have to include category only if models fall under it.

Fine-tunes & Quantizations: community fine-tunes, GGUF, AWQ. Many GGUF and quantized versions: unsloth GGUFs, OBLITERATUS abliterated, orcarouter uncensored variants, HauhauCS GGUF, JonathanColetti GGUF, huihui-ai GGUF, ornith-ai GGUF, Qwen FP8, etc.

So categorization:

🧠 Language Models (text-only LLMs):
- zai-org/GLM-5.3-Flash (but has image-text-to-text tag? Wait, tags: transformers, safetensors, glm5_next, image-text-to-text, text-generation. So it's multimodal. Actually GLM-5.3-Flash tags include image-text-to-text. So it's multimodal. GLM-5.3 does not have that tag. So GLM-5.3 is text-only.
- zai-org/GLM-5.3 (text-generation only)
- tencent/Hy4-preview (text-generation)
- deepseek-ai/DeepSeek-V4-Flash-0731 (text-generation)
- pipecat-ai/phonellm-alpha-1 (text-generation)
- (maybe ornith-ai/Ornith-1.5-35B-A3B is multimodal, so not here)

🎨 Multimodal & Generation:
- Qwen/Qwen3.8-Flash-Next (image-text-to-text)
- Qwen/Qwen3.8-27B (image-text-to-text)
- Lightricks/LTX-2.5 (image-to-video)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- ornith-ai/Ornith-1.5-35B-A3B (image-text-to-text)
- BreezeBlue/Breeze-TTS-2 (text-to-speech)
- moonshotai/Kimi-K3 (image-text-to-text)
- thomsonreuters/Thomson-1.0-Small (image-text-to-text)
- MiniMaxAI/MiniMax-Music3 (text-to-audio)
- alibaba-pai/MiniMax-H3-Fun-Controlnet-Union (text-to-video, controlnet)
- alibaba-pai/MiniMax-H3-Acc-LoRAs (LoRAs for video)
- zai-org/GLM-5.3-Flash (image-text-to-text) - but also a language model. I'll put in multimodal because of image-text-to-text.

🔧 Specialized Models (code, math, medical, embeddings):
- Maybe none. froggeric/Qwen-Fixed-Chat-Templates is not a model. Could be considered a tool. I'll exclude.

📦 Fine-tunes & Quantizations:
- unsloth/Qwen3.8-Flash-Next-GGUF
- unsloth/Qwen3.8-27B-GGUF
- OBLITERATUS/Qwen3.8-27B-OBLITERATED
- orcarouter/Qwen3.8-27B-Uncensored-MLX
- orcarouter/Qwen3.8-27B-Uncensored-FP8
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- unsloth/GLM-5.3-Flash-GGUF
- orcarouter/Qwen3.8-27B-Uncensored-GGUF
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
- Qwen/Qwen3.8-Flash-Next-FP8
- ornith-ai/Ornith-1.5-35B-A3B-GGUF
- orcarouter/Qwen3.8-27B-Uncensored (base uncensored, not quantized? It's safetensors, not GGUF. But it's a fine-tune/abliteration. So fine-tune.)
- (also maybe alibaba-pai/MiniMax-H3-Acc-LoRAs is fine-tune/LoRA, but it's for video generation, could be in multimodal or fine-tunes. Since it's LoRAs, it's a fine-tune. I'll put in fine-tunes.)

But note: The category "Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)" includes both fine-tunes and quantizations. So LoRAs are fine-tunes.

Now, I need to create markdown tables for each category with columns: Model (link), Author, Likes, Downloads, Summary (2 sentences).

I must copy likes and downloads verbatim from input (with commas). The input numbers: e.g., 4,182 likes, 4,810 downloads. Keep as is.

Now, let's list each model with its data.

I'll create a dictionary for quick reference.

Model data:

1. Qwen/Qwen3.8-Flash-Next: likes 4,182, downloads 4,810, tags: transformers, safetensors, qwen4_exp, image-text-to-text, conversational. Pipeline: image-text-to-text. Author: Qwen.

2. zai-org/GLM-5.3-Flash: likes 1,530, downloads 34, tags: transformers, safetensors, glm5_next, image-text-to-text, text-generation. Pipeline: text-generation. Author: zai-org.

3. zai-org/GLM-5.3: likes 1,176, downloads 0, tags: transformers, safetensors, glm_moe_dsa, text-generation, conversational. Pipeline: text-generation. Author: zai-org.

4. Qwen/Qwen3.8-27B: likes 13,165, downloads 3,457,687, tags: transformers, safetensors, qwen3_5, image-text-to-text, conversational. Pipeline: image-text-to-text. Author: Qwen.

5. unsloth/Qwen3.8-Flash-Next-GGUF: likes 531, downloads 4,354, tags: gguf, unsloth, image-text-to-text, base_model:Qwen/Qwen3.8-Flash-Next, base_model:quantized:Qwen/Qwen3.8-Flash-Next. Pipeline: image-text-to-text. Author: unsloth.

6. unsloth/Qwen3.8-27B-GGUF: likes 3,155, downloads 7,758,790, tags: gguf, qwen3_5, unsloth, base_model:Qwen/Qwen3.8-27B, base_model:quantized:Qwen/Qwen3.8-27B. Pipeline: N/A. Author: unsloth.

7. OBLITERATUS/Qwen3.8-27B-OBLITERATED: likes 884, downloads 509,270, tags: mlx, safetensors, gguf, qwen3_5, abliterated. Pipeline: text-generation. Author: OBLITERATUS.

8. Lightricks/LTX-2.5: likes 2,033, downloads 912,729, tags: diffusion-single-file, image-to-video, text-to-video, video-to-video, image-text-to-video. Pipeline: image-to-video. Author: Lightricks.

9. orcarouter/Qwen3.8-27B-Uncensored-MLX: likes 1,194, downloads 83,352, tags: mlx, safetensors, qwen3_5, abliterated, qwen3.8. Pipeline: image-text-to-text. Author: orcarouter.

10. orcarouter/Qwen3.8-27B-Uncensored-FP8: likes 1,237, downloads 273,577, tags: transformers, safetensors, qwen3_5, image-text-to-text, abliterated. Pipeline: image-text-to-text. Author: orcarouter.

11. tencent/Hy4-preview: likes 254, downloads 0, tags: transformers, safetensors, hy_v4, text-generation, hunyuan. Pipeline: text-generation. Author: tencent.

12. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF: likes 729, downloads 938,219, tags: gguf, uncensored, qwen3.8, multimodal, vision. Pipeline: image-text-to-text. Author: HauhauCS.

13. unsloth/GLM-5.3-Flash-GGUF: likes 250, downloads 0, tags: gguf, unsloth, glm5_next, text-generation, en. Pipeline: text-generation. Author: unsloth.

14. MiniMaxAI/MiniMax-H3: likes 4,589, downloads 4,848,404, tags: minimax-h3, diffusers, safetensors, text-to-video, image-to-video. Pipeline: image-text-to-video. Author: MiniMaxAI.

15. ornith-ai/Ornith-1.5-35B-A3B: likes 486, downloads 88,102, tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, text-generation. Pipeline: text-generation. Author: ornith-ai.

16. BreezeBlue/Breeze-TTS-2: likes 172, downloads 240, tags: transformers, safetensors, breeze, text-generation, text-to-speech. Pipeline: text-to-speech. Author: BreezeBlue.

17. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF: likes 808, downloads 1,666,948, tags: llama.cpp, gguf, uncensored, qwen3.8, mtp. Pipeline: text-generation. Author: JonathanColetti.

18. orcarouter/Qwen3.8-27B-Uncensored-GGUF: likes 533, downloads 188,460, tags: gguf, abliterated, qwen, qwen3, qwen3.8. Pipeline: image-text-to-text. Author: orcarouter.

19. alibaba-pai/MiniMax-H3-Fun-Controlnet-Union: likes 159, downloads 3,344, tags: videox_fun, controlnet, video-to-video, text-to-video, image-text-to-video. Pipeline: text-to-video. Author: alibaba-pai.

20. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF: likes 426, downloads 1,355,482, tags: transformers, gguf, abliterated, uncensored, huihui. Pipeline: image-text-to-text. Author: huihui-ai.

21. Qwen/Qwen3.8-Flash-Next-FP8: likes 148, downloads 2,219, tags: transformers, safetensors, qwen4_exp, image-text-to-text, conversational. Pipeline: image-text-to-text. Author: Qwen.

22. thomsonreuters/Thomson-1.0-Small: likes 146, downloads 349, tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, conversational. Pipeline: image-text-to-text. Author: thomsonreuters.

23. alibaba-pai/MiniMax-H3-Acc-LoRAs: likes 136, downloads 609, tags: videox_fun, text-to-video, arxiv:2607.26004, base_model:MiniMaxAI/MiniMax-H3, base_model:finetune:MiniMaxAI/MiniMax-H3. Pipeline: text-to-video. Author: alibaba-pai.

24. deepseek-ai/DeepSeek-V4-Flash-0731: likes 3,790, downloads 3,959,575, tags: transformers, safetensors, deepseek_v4, text-generation, conversational. Pipeline: text-generation. Author: deepseek-ai.

25. froggeric/Qwen-Fixed-Chat-Templates: likes 1,512, downloads 0, tags: mlx, jinja, chat-template, qwen, qwen3.5. Pipeline: N/A. Author: froggeric. (Not a model, exclude)

26. pipecat-ai/phonellm-alpha-1: likes 124, downloads 64, tags: transformers, safetensors, nemotron_h, text-generation, nemotron. Pipeline: text-generation. Author: pipecat-ai.

27. moonshotai/Kimi-K3: likes 11,069, downloads 2,675,145, tags: transformers, safetensors, kimi_k3, feature-extraction, compressed-tensors. Pipeline: image-text-to-text. Author: moonshotai.

28. ornith-ai/Ornith-1.5-35B-A3B-GGUF: likes 333, downloads 1,469,059, tags: transformers, gguf, text-generation, license:mit, endpoints_compatible. Pipeline: text-generation. Author: ornith-ai.

29. orcarouter/Qwen3.8-27B-Uncensored: likes 201, downloads 18,598, tags: transformers, safetensors, qwen3_5, image-text-to-text, abliterated. Pipeline: image-text-to-text. Author: orcarouter.

30. MiniMaxAI/MiniMax-Music3: likes 1,290, downloads 19,726, tags: diffusers, safetensors, minimax_music3, music-generation, text-to-music. Pipeline: text-to-audio. Author: MiniMaxAI.

Now assign categories.

🧠 Language Models (text-only LLMs):
- zai-org/GLM-5.3 (text-generation only, no image tag)
- tencent/Hy4-preview (text-generation)
- deepseek-ai/DeepSeek-V4-Flash-0731 (text-generation)
- pipecat-ai/phonellm-alpha-1 (text-generation)
- (maybe zai-org/GLM-5.3-Flash has image-text-to-text tag, so multimodal)
- (ornith-ai/Ornith-1.5-35B-A3B has image-text-to-text, so multimodal)

🎨 Multimodal & Generation:
- Qwen/Qwen3.8-Flash-Next (image-text-to-text)
- Qwen/Qwen3.8-27B (image-text-to-text)
- zai-org/GLM-5.3-Flash (image-text-to-text)
- Lightricks/LTX-2.5 (image-to-video)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- ornith-ai/Ornith-1.5-35B-A3B (image-text-to-text)
- BreezeBlue/Breeze-TTS-2 (text-to-speech)
- moonshotai/Kimi-K3 (image-text-to-text)
- thomsonreuters/Thomson-1.0-Small (image-text-to-text)
- MiniMaxAI/MiniMax-Music3 (text-to-audio)
- alibaba-pai/MiniMax-H3-Fun-Controlnet-Union (text-to-video, controlnet)
- alibaba-pai/MiniMax-H3-Acc-LoRAs (LoRAs for video) - but this is a fine-tune/LoRA. Could be in fine-tunes. However, it's a specialized component for video generation. I'll put in multimodal as it's a generation-related model.
- orcarouter/Qwen3.8-27B-Uncensored-MLX (image-text-to-text) - but it's a fine-tune/quantization. Should be in fine-tunes.
- orcarouter/Qwen3.8-27B-Uncensored-FP8 (image-text-to-text) - fine-tune/quantization.
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (image-text-to-text) - fine-tune/quantization.
- orcarouter/Qwen3.8-27B-Uncensored-GGUF (image-text-to-text) - fine-tune/quantization.
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF (text-generation) - fine-tune/quantization.
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF (image-text-to-text) - fine-tune/quantization.
- Qwen/Qwen3.8-Flash-Next-FP8 (image-text-to-text) - quantization.
- ornith-ai/Ornith-1.5-35B-A3B-GGUF (text-generation) - quantization.
- orcarouter/Qwen3.8-27B-Uncensored (image-text-to-text) - fine-tune (abliterated).
- OBLITERATUS/Qwen3.8-27B-OBLITERATED (text-generation) - fine-tune/quantization.
- unsloth/Qwen3.8-Flash-Next-GGUF (image-text-to-text) - quantization.
- unsloth/Qwen3.8-27B-GGUF (N/A pipeline) - quantization.
- unsloth/GLM-5.3-Flash-GGUF (text-generation) - quantization.

So many models are fine-tunes/quantizations of the base multimodal LLMs. The base models are: Qwen3.8-Flash-Next, Qwen3.8-27B, GLM-5.3-Flash, GLM-5.3, Ornith-1.5-35B-A3B, MiniMax-H3,

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*