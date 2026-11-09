---
layout: base.njk
title: Adrian Robert Minut
---

# About me

Hi, I'm Adrian. I'm a CS PhD student at Sapienza University of Rome, co-advised by Prof. Emanuele Rodolà (PI of the [GLADIA Lab](https://gladia.di.uniroma1.it/)) and Prof. Iacopo Masi (PI of the [OmnAI Lab](https://omnai.di.uniroma1.it/)).

---

## Research interests

Most of what I work on starts from a simple observation: whenever a model needs something new, the default answer is more training. Sometimes that means training from scratch, which is expensive and usually requires the original data. More often it means fine-tuning, which is cheaper but still needs good data for the new task and enough compute to run it, and it can quietly erode skills the model already had. Either way, every new need tends to produce yet another model trained in isolation, even though thousands of perfectly good models, many of which may already have the skill we want, are sitting out there on HuggingFace or in past models we trained. I'm curious about how far we can get by building on them instead, by merging models trained by different people, moving a useful property from one model to another, or nudging a deployed model toward a new behavior without touching its weights.

Lately I've been thinking more about training itself. When a run ends, we keep the final weights and throw away almost everything the optimizer learned along the way. Bayesian learning offers a different view, where a model is a distribution over weights instead of a single point, and that distribution can tell us which parts of the model we can change with minimal impact on performance for past data. I like this idea a lot, because it seems like exactly the kind of information you would want before combining or adapting someone else's model.

The bigger picture I have in mind is one where models are not finished products but things that keep getting passed around, combined and improved by different people. Getting there raises plenty of open questions that I enjoy thinking about: how models store what they know in their parameters, whether a model can tell what it knows from what it doesn't, how to move knowledge between models with different architectures, and how much you can trust a model, or a piece of one, that someone else handed you.

---

## Background

I've always liked making things work by themselves, which as a kid meant taking apart electronics and writing small programs. That turned into a high school focus on electronics and then a Bachelor's in Computer Engineering. Near the end of my Bachelor's I stumbled into machine learning, and the idea that a machine could figure out the rules of a problem on its own, instead of having them written by hand, hooked me pretty quickly.

So I moved on to a Master's in Artificial Intelligence. Around that time ChatGPT came out, and like many people I wanted to understand what was going on inside these models. A few research projects later I was starting a PhD with Emanuele Rodolà and Iacopo Masi. Along the way I kept running into the same frustrations: deep learning models are expensive to train and hard to look inside. That is a large part of why I ended up working on model merging and uncertainty estimation.

In 2025 I spent time as a research intern in the [Adaptive Bayesian Intelligence](https://adaptive-bayesian.ai/) team at RIKEN AIP in Tokyo, working with Thomas Möllenhoff and Emtiyaz Khan. I had met Bayesian inference during my Master's and quietly filed it under "beautiful but impractical for deep learning". I was very happy to find out I'd been wrong. Those months in Tokyo gave me a way of thinking that tied together much of what I had been doing before, and it still shapes how I approach most problems.

---

## Contact

**Email:** [minut@di.uniroma1.it](mailto:minut@di.uniroma1.it)
