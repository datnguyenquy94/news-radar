# Hugging Face Trending Models Digest 2026-10-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-01 05:28 UTC

---

The user wants a structured digest of trending Hugging Face models as of 2026-10-01. I need to analyze the 30 models provided and organize them into categories, create markdown tables, and write analysis sections.

First, let me categorize each model:

1. **Edge0/Audio8-ASR-Infinite** - automatic-speech-recognition (audio) → Multimodal & Generation
2. **convaiinnovations/laya** - text-classification → Specialized Models? Or Language Models? It's a text classifier, but "system-one, calibrated-decisions" suggests specialized. I'll put in Specialized Models.
3. **XingChen-AGI/TeleOCR** - image-text-to-text, OCR → Multimodal & Generation
4. **abenzerps/Qwen-Image-2.1-Uncensored-GGUF** - text-to-image, GGUF → Fine-tunes & Quantizations (GGUF quantization of Qwen-Image)
5. **Contrastive-LM/CLM-v0.1-8B** - text-ranking, contrastive learning, reranker → Specialized Models (embeddings/reranker)
6. **Qwen/Qwen-Image-2.1** - text-to-image, image-editing → Multimodal & Generation
7. **nvidia/Nemotron-3-Diarization** - voice-activity-detection → Multimodal & Generation (audio)
8. **Qwen/Qwen3.8-27B** - image-text-to-text, conversational → Language Models (multimodal LLM)
9. **Lightricks/LTX-2.5** - image-to-video, text-to-video, video-to-video → Multimodal & Generation
10. **prism-ml/Ternary-Bonsai-2-27B-gguf** - text-generation, GGUF, ternary 2-bit → Fine-tunes & Quantizations
11. **SupersonicLabs/Julia-1** - text-classification, decision-model → Specialized Models
12. **Viggle/Qwen-Image-2.1-viggle-turbo** - text-to-image, LoRA → Fine-tunes & Quantizations (LoRA fine-tune)
13. **fastino/GLiNER2.5-Decide** - token-classification, extractor, intent classification → Specialized Models
14. **PSRben/VisionHOPE** - image-classification → Specialized Models (computer vision)
15. **orcarouter/OrcaSAQ-2-27B** - text-generation, qwen3.8 → Language Models (fine-tune of Qwen)
16. **TaichuAI/ZDTaichu5.0-9B** - image-text-to-text, multimodal, spatial-reasoning → Multimodal & Generation (or Language Models? It's a vision-language model)
17. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** - image-text-to-text, GGUF, quantization → Fine-tunes & Quantizations
18. **Altworld/Hemmingway-1** - text-generation, qwen3.5_text → Language Models (fine-tune)
19. **Comfy-Org/Qwen-Image-2.1** - diffusion-single-file, ComfyUI → Fine-tunes & Quantizations (ComfyUI format)
20. **akatz-ai/MiniMax-H3-Character-Swap-LoRA** - video-to-video, LoRA, character-swap → Fine-tunes & Quantizations
21. **deepseek-ai/DeepSeek-V4.1-Flash** - image-text-to-text, text-generation → Language Models (multimodal)
22. **akhilaaa3/Jev-Omni** - text-classification, gemma4_unified, image-text-to-text → Multimodal & Generation? Or Language Models? It's a multimodal model.
23. **orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF** - text-generation, GGUF → Fine-tunes & Quantizations
24. **XingChen-AGI/Xing4.0-29B-A4B** - text-generation, conversational → Language Models
25. **XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B** - image-text-to-text → Multimodal & Generation (distilled VLM)
26. **Alissonerdx/BFS-Best-Face-Swap** - image-to-image, LoRA, qwen-image → Fine-tunes & Quantizations
27. **inclusionAI/Ming-Image-0.1-Design** - text-to-image → Multimodal & Generation
28. **ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF** - text-generation, GGUF → Fine-tunes & Quantizations
29. **XiaomiMiMo/MiMo-V2.6-Pro-RL** - text-generation, multimodal → Language Models (RL fine-tune)
30. **ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF** - image-text-to-text, GGUF, coder → Fine-tunes & Quantizations

Now, let's define categories clearly:

- **🧠 Language Models (LLMs, chat models, instruction-tuned)**: Pure text LLMs, including multimodal LLMs that are primarily language models with vision capabilities? The category says "LLMs, chat models, instruction-tuned". Qwen3.8-27B is image-text-to-text, but it's a multimodal LLM. DeepSeek-V4.1-Flash is image-text-to-text. Xing4.0-29B-A4B is text-generation. OrcaSAQ-2-27B is text-generation. Hemmingway-1 is text-generation. MiMo-V2.6-Pro-RL is text-generation, multimodal. Jev-Omni is image-text-to-text but tagged as text-classification? Actually tags: gemma4_unified, image-text-to-text, text-classification. Might be multimodal. I'll put multimodal LLMs in Language Models if they are primarily conversational LLMs with vision. But there's a separate Multimodal & Generation category for image, video, audio, text-to-X. The distinction: Language Models for text-centric LLMs (even if they have vision), Multimodal & Generation for models focused on generation (image, video, audio). However, Qwen3.8-27B is tagged "image-text-to-text" and "conversational". It's a vision-language model. The category "Multimodal & Generation (image, video, audio, text-to-X)" suggests generation tasks. Qwen3.8-27B is more of a chat model with vision. I'll put it in Language Models. Similarly, DeepSeek-V4.1-Flash is image-text-to-text. TaichuAI/ZDTaichu5.0-9B is multimodal, vision-language-model, spatial-reasoning. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B is image-text-to-text. These are VLMs. Might be better in Multimodal & Generation. But the category says "image, video, audio, text-to-X". VLMs are text-to-text with image input. Hmm.

Let's look at the tags: "image-text-to-text" pipeline. That's a VLM. The category "Multimodal & Generation" includes "text-to-X". But VLMs are not exactly generation of image/video/audio; they are understanding. However, they are multimodal. I think the user expects:
- Language Models: text-only LLMs (or primarily text)
- Multimodal & Generation: models that generate images, video, audio, or are VLMs? The examples: Qwen-Image-2.1 (text-to-image), Lightricks/LTX-2.5 (video generation), TeleOCR (OCR), Audio8-ASR (ASR), Nemotron-3-Diarization (audio). So it's about generation and perception tasks.

I'll categorize as:
- **Language Models**: Pure text generation models: Xing4.0-29B-A4B, OrcaSAQ-2-27B, Hemmingway-1, MiMo-V2.6-Pro-RL (though multimodal tag, but pipeline text-generation), maybe Qwen3.8-27B? It's image-text-to-text. But it's a Qwen model, likely a VLM. However, the category "Language Models (LLMs, chat models, instruction-tuned)" could include VLMs that are chat models. I'll include Qwen3.8-27B, DeepSeek-V4.1-Flash, TaichuAI/ZDTaichu5.0-9B, XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B in Language Models? But they are multimodal. The user might want them in Multimodal. Let's decide: The category "Multimodal & Generation (image, video, audio, text-to-X)" explicitly includes "text-to-X". VLMs are image-to-text, not text-to-X. But they are multimodal. I think it's safer to put VLMs in Multimodal & Generation because they process images. However, the category name emphasizes generation. But TeleOCR is OCR (perception), Audio8-ASR is ASR (perception), Nemotron-3-Diarization is audio classification. So perception tasks are included. So VLMs fit there.

Thus:
- **Language Models**: Text-only LLMs: Xing4.0-29B-A4B, OrcaSAQ-2-27B, Hemmingway-1, MiMo-V2.6-Pro-RL (though multimodal tag, but pipeline text-generation; but tags include multimodal). Actually MiMo-V2.6-Pro-RL tags: transformers, safetensors, mimo_v2, text-generation, multimodal. So it's multimodal. But pipeline is text-generation. Hmm.

Let's check each model's pipeline:
1. Audio8-ASR-Infinite: automatic-speech-recognition → Multimodal
2. laya: text-classification → Specialized
3. TeleOCR: image-text-to-text → Multimodal
4. Qwen-Image-2.1-Uncensored-GGUF: text-to-image → Multimodal (but quantized, so Fine-tunes)
5. CLM-v0.1-8B: text-ranking → Specialized
6. Qwen-Image-2.1: text-to-image → Multimodal
7. Nemotron-3-Diarization: voice-activity-detection → Multimodal
8. Qwen3.8-27B: image-text-to-text → Multimodal (VLM)
9. LTX-2.5: image-to-video → Multimodal
10. Ternary-Bonsai-2-27B-gguf: text-generation → Fine-tunes (quantized)
11. Julia-1: text-classification → Specialized
12. Qwen-Image-2.1-viggle-turbo: text-to-image → Fine-tunes (LoRA)
13. GLiNER2.5-Decide: token-classification → Specialized
14. VisionHOPE: image-classification → Specialized
15. OrcaSAQ-2-27B: text-generation → Language Models (text-only? tags: qwen3_5, qwen, qwen3.8; likely text-only)
16. ZDTaichu5.0-9B: image-text-to-text → Multimodal
17. Qwen3.8-27B-GSQ-RCO-GGUF: image-text-to-text → Fine-tunes (quantized VLM)
18. Hemmingway-1: text-generation → Language Models
19. Comfy-Org/Qwen-Image-2.1: N/A (ComfyUI format) → Fine-tunes
20. MiniMax-H3-Character-Swap-LoRA: video-to-video → Fine-tunes
21. DeepSeek-V4.1-Flash: image-text-to-text → Multimodal (VLM)
22. Jev-Omni: text-classification (but tags image-text-to-text) → Multimodal? Or Specialized? It's a classifier.
23. OrcaSAQ-2-Cyber-27B-Uncensored-GGUF: text-generation → Fine-tunes
24. Xing4.0-29B-A4B: text-generation → Language Models
25. MiMo-V2.6-Distill-Qwen-9B: image-text-to-text → Multimodal
26. BFS-Best-Face-Swap: image-to-image → Fine-tunes
27. Ming-Image-0.1-Design: text-to-image → Multimodal
28. Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF: text-generation → Fine-tunes (quantized LLM)
29. MiMo-V2.6-Pro-RL: text-generation → Language Models (but multimodal tag)
30. Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF: image-text-to-text → Fine-tunes

I need to assign each model to exactly one category. The categories are mutually exclusive? The instruction: "Organized by category. Under each category header, render a Markdown table... Omit a category's table entirely if no model falls under it." So each model should appear in one category.

Let's define:
- **🧠 Language Models**: Models primarily for text generation, chat, instruction following, even if they have some multimodal capability but are marketed as LLMs. However, Qwen3.8-27B is explicitly a VLM (image-text-to-text). DeepSeek-V4.1-Flash is also VLM. But they are from major LLM families. The category "Language Models (LLMs, chat models, instruction-tuned)" suggests text-only. But many modern LLMs are multimodal. I'll include VLMs in Language Models if they are chat models. But then Multimodal & Generation would be for generative models (image, video, audio generation). Let's see the examples: Qwen-Image-2.1 is text-to-image, LTX-2.5 is video generation, TeleOCR is OCR, Audio8-ASR is ASR, Nemotron-3-Diarization is diarization. These are not chat VLMs. So I'll put chat VLMs (Qwen3.8-27B, DeepSeek-V4.1-Flash, ZDTaichu5.0-9B, MiMo-V2.6-Distill-Qwen-9B, Jev-Omni?) in Language Models? But Jev-Omni is text-classification. Hmm.

Alternative: Use the pipeline tag to decide. But the pipeline tags are given: "image-text-to-text" for VLMs. The category "Multimodal & Generation (image, video, audio, text-to-X)" includes "text-to-X". VLMs are not text-to-X, they are image+text-to-text. But they are multimodal. I think the user expects VLMs in Multimodal & Generation. However, the category name emphasizes generation. But TeleOCR is not generation. So it's broader: multimodal understanding and generation.

I'll categorize as:
- **Language Models**: Text-only LLMs: OrcaSAQ-2-27B, Hemmingway-1, Xing4.0-29B-A4B, MiMo-V2.6-Pro-RL (though multimodal tag, but pipeline text-generation; maybe it's text-only? The tags say multimodal, but pipeline is text-generation. Could be a multimodal model used for text generation. I'll put in Language Models), Ternary-Bonsai-2-27B-gguf (text-generation, quantized) -> but that's quantized, so Fine-tunes & Quantizations. The category "Fine-tunes & Quantizations" is for community fine-tunes, GGUF, AWQ. So quantized versions go there. Base models go to Language Models or Multimodal.

Thus, base models (original releases) go to Language Models or Multimodal & Generation. Fine-tunes/quantizations go to Fine-tunes & Quantizations.

Let's separate:
- Base/original models: 
  - Qwen/Qwen-Image-2.1 (Multimodal)
  - Qwen/Qwen3.8-27B (Multimodal VLM) -> but it's a base model from Qwen.
  - Lightricks/LTX-2.5 (Multimodal)
  - nvidia/Nemotron-3-Diarization (Multimodal)
  - Edge0/Audio8-ASR-Infinite (Multimodal)
  - XingChen-AGI/TeleOCR (Multimodal)
  - deepseek-ai/DeepSeek-V4.1-Flash (Multimodal VLM)
  - XingChen-AGI/Xing4.0-29B-A4B (Language Model)
  - inclusionAI/Ming-Image-0.1-Design (Multimodal)
  - TaichuAI/ZDTaichu5.0-9B (Multimodal VLM)
  - XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B (Multimodal VLM, but distilled)
  - XiaomiMiMo/MiMo-V2.6-Pro-RL (Language Model? multimodal tag)
  - Contrastive-LM/CLM-v0.1-8B (Specialized)
  - convaiinnovations/laya (Specialized)
  - SupersonicLabs/Julia-1 (Specialized)
  - fastino/GLiNER2.5-Decide (Specialized)
  - PSRben/VisionHOPE (Specialized)
  - orcarouter/OrcaSAQ-2-27B (Language Model? but from orcarouter, maybe fine-tune? It's a model by orcarouter, could be a fine-tune of Qwen. Tags: vllm, safetensors, qwen3_5, qwen, qwen3.8. Likely a fine-tune. But it's not marked as GGUF or quantized. It's a "text-generation" model. Could be a fine-tune. However, it's from a router company. I'll put in Language Models as a fine-tune? But there's a Fine-tunes category. The category "Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)" suggests community fine-tunes. OrcaSAQ-2-27B might be a community fine-tune. But it's not explicitly a quantization. It's a full model. I'll put in Language Models as a fine-tuned model? Hmm.

Better approach: Use the tags and author to decide. Models from original organizations (Qwen, DeepSeek, NVIDIA, Lightricks, XingChen-AGI, TaichuAI, XiaomiMiMo, Contrastive-LM, convaiinnovations, SupersonicLabs, fastino, PSRben, inclusionAI) are base models. Models from individuals or quantization groups (abenzerps, prism-ml, Viggle, ISTA-DASLab, Altworld, Comfy-Org, akatz-ai, orcarouter, Alissonerdx, ukisai) are fine-tunes/quantizations.

But orcarouter appears twice: OrcaSAQ-2-27B and OrcaSAQ-2-Cyber-27B-Uncensored-GGUF. The first might be a base fine-tune, second is GGUF. Altworld/Hemmingway-1 is a fine-tune of Qwen3.5. ISTA-DASLab does quantizations. prism-ml does ternary quantization. abenzerps does GGUF. Viggle does LoRA. Comfy-Org does ComfyUI format. ukisai does GGUF. Alissonerdx does LoRA.

So:
- **Language Models (base)**: Xing4.0-29B-A4B, maybe OrcaSAQ-2-27B? But orcarouter is not a major LLM provider. It's a router. Their model might be a fine-tune. I'll put OrcaSAQ-2-27B in Language Models as a fine-tuned model? But the category "Fine-tunes & Quantizations" exists. The instruction: "Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)". So community fine-tunes go there. OrcaSAQ-2-27B is a community fine-tune (by orcarouter). So it should go there. Similarly, Hemmingway-1 by Altworld is a fine-tune. MiMo-V2.6-Pro-RL by XiaomiMiMo is a base model? XiaomiMiMo is an organization, likely base. But it's a distillation/RL variant. Could be base.

Let's decide: If the model is a quantization (GGUF, GSQ, AWQ, ternary) or a LoRA, or a ComfyUI conversion, it goes to Fine-tunes & Quantizations. If it's a full model fine-tune (like OrcaSAQ-2-27B, Hemmingway-1), it also goes there. Base models from original creators go to Language Models or Multimodal & Generation.

Thus:
- **Language Models**: Base text LLMs: Xing4.0-29B-A4B (by XingChen-AGI), maybe DeepSeek-V4.1-Flash? It's multimodal. Qwen3.8-27B is multimodal. So perhaps no pure text base LLMs except Xing4.0. But MiMo-V2.6-Pro-RL is text-generation with multimodal tag. Could be a text-only model with multimodal capabilities? I'll include it in Language Models. Also, Contrastive-LM/CLM-v0.1-8B is a reranker, not a generative LLM. So Specialized.

- **Multimodal & Generation**: Base multimodal models: Qwen-Image-2.1, Qwen3.8-27B, DeepSeek-V4.1-Flash, TeleOCR, Audio8-ASR-Infinite, Nemotron-3-Diarization, LTX-2.5, ZDTaichu5.0-9B, MiMo-V2.6-Distill-Qwen-9B, Ming-Image-0.1-Design, Jev-Omni? (but it's classifier). VisionHOPE is image classification, specialized.

- **Specialized Models**: CLM-v0.1-8B (reranker), laya (text-classification), Julia-1 (text-classification), GLiNER2.5-Decide (token-classification), VisionHOPE (image-classification). Also maybe Nemotron-3-Diarization? It's audio classification, but it's from NVIDIA and is a specialized audio model. Could be Multimodal. I'll keep in Multimodal.

- **Fine-tunes & Quantizations**: All GGUF, LoRA, quantized, ComfyUI, distilled variants: abenzerps/Qwen-Image-2.1-Uncensored-GGUF, prism-ml/Ternary-Bonsai-2-27B-gguf, Viggle/Qwen-Image-2.1-viggle-turbo, ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF, Comfy-Org/Qwen-Image-2.1, akatz-ai/MiniMax-H3-Character-Swap-LoRA, orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF, ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF, Alissonerdx/BFS-Best-Face-Swap, ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF, orcarouter/OrcaSAQ-2-27B (full fine-tune), Altworld/Hemmingway-1 (fine-tune), XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B (distilled, but from original org? It's a distilled model, could be considered a variant. But it's from XiaomiMiMo, the same org as Pro-RL. Might be a base release. I'll put in Multimodal as a base model? It's a distilled version. The category Fine-tunes includes "community fine-tunes". This is from the original org, so maybe not community. But it's a distilled model. I'll put in Multimodal & Generation as a model variant.)

Let's list each model with assigned category:

1. Edge0/Audio8-ASR-Infinite → Multimodal & Generation
2. convaiinnovations/laya → Specialized Models
3. XingChen-AGI/TeleOCR → Multimodal & Generation
4. abenzerps/Qwen-Image-2.1-Uncensored-GGUF → Fine-tunes & Quantizations
5. Contrastive-LM/CLM-v0.1-8B → Specialized Models
6. Qwen/Qwen-Image-2.1 → Multimodal & Generation
7. nvidia/Nemotron-3-Diarization → Multimodal & Generation
8. Qwen/Qwen3.8-27B → Multimodal & Generation (VLM)
9. Lightricks/LTX-2.5 → Multimodal & Generation
10. prism-ml/Ternary-Bonsai-2-27B-gguf → Fine-tunes & Quantizations
11. SupersonicLabs/Julia-1 → Specialized Models
12. Viggle/Qwen-Image-2.1-viggle-turbo → Fine-tunes & Quantizations
13. fastino/GLiNER2.5-Decide → Specialized Models
14. PSRben/VisionHOPE → Specialized Models
15. orcarouter/OrcaSAQ-2-27B → Fine-tunes & Quantizations (community fine-tune)
16. TaichuAI/ZDTaichu5.0-9B → Multimodal & Generation
17. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF → Fine-tunes & Quantizations
18. Altworld/Hemmingway-1 → Fine-tunes & Quantizations
19. Comfy-Org/Qwen-Image-2.1 → Fine-tunes & Quantizations
20. akatz-ai/MiniMax-H3-Character-Swap-LoRA → Fine-tunes & Quantizations
21. deepseek-ai/DeepSeek-V4.1-Flash → Multimodal & Generation
22. akhilaaa3/Jev-Omni → Specialized Models? It's a text-classification model with multimodal tags. But pipeline is text-classification. I'll put in Specialized Models.
23. orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF → Fine-tunes & Quantizations
24. XingChen-AGI/Xing4.0-29B-A4B → Language Models
25. XiaomiMiMo/MiMo

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*