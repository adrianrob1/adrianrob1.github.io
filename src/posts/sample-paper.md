---
title: "On Model Merging: A Probabilistic Perspective"
date: 2026-03-01
---

# On Model Merging: A Probabilistic Perspective

Model merging has emerged as a compelling alternative to fine-tuning. Instead of updating weights via gradient descent, we combine independently trained models into a single capable model.

## The Basic Setup

Given two models with parameter vectors $\theta_A$ and $\theta_B$, the simplest merge is a linear interpolation:

$$\theta_{\text{merged}} = (1 - \lambda)\,\theta_A + \lambda\,\theta_B, \quad \lambda \in [0, 1]$$

This is known as **weight-space averaging** or *model soups*.

## Why Does It Work?

The surprising effectiveness of weight-space averaging can be understood through the lens of **loss landscape geometry**. If both models lie in the same basin of the loss landscape, the linear path between them remains at low loss.

More formally, let $\mathcal{L}(\theta)$ be the loss. We want:

$$\mathcal{L}((1-\lambda)\theta_A + \lambda\theta_B) \approx \min\bigl(\mathcal{L}(\theta_A),\, \mathcal{L}(\theta_B)\bigr)$$

This condition holds approximately when the Hessian $\nabla^2 \mathcal{L}$ is low-rank and the two solutions share a common low-dimensional structure.
