---
title: "The uncanny valley of demosaicing"
summary: "A brief history of how cameras reconstruct color from sparse sensor data — and why the wrong guess looks deeply wrong."
tags: ["image quality", "synthetic vision", "computational photography"]
order: 1
date: 2026-08-23
---

Most cameras do not measure a complete red, green, and blue value at every pixel. A color filter array slices the sensor into a mosaic, so each site records only one channel. The rest is a guess.

That guess is demosaicing, and it is one of the first places where a camera's personality shows up. A good pipeline preserves detail and color without inventing drama. A bad one makes edges look wrong, textures shimmer, and skin tones do strange things.

## The basic problem

The Bayer pattern is the most common arrangement. It samples green more often because the human eye is much more sensitive to green detail than to red or blue noise.

![Bayer color filter array pattern](/articles/demosaic/bayer-pattern.png)

At a red pixel, the algorithm has to infer green and blue from nearby samples. The simplest version copies or averages neighbors. It is fast, cheap, and occasionally looks like the camera is trying to be polite while making a terrible decision.

## Adding awareness of edges

Better methods estimate local gradients before choosing an interpolation direction. If the horizontal neighborhood is smoother than the vertical one, the algorithm should prefer the horizontal path. This reduces zippering and false color, but it still fails when the local evidence is ambiguous.

## The modern trade-off

Modern pipelines combine richer sampling, better noise models, and learned priors. Some systems denoise and demosaic together. Others use neural networks trained on large image sets to make the final reconstruction more convincing.

The real challenge is simple: preserve real detail without inventing structure. That is the difference between a camera that sees clearly and one that starts making things up.

## Further reading

- D. C. Hamilton and J. E. Adams, "Adaptive Color Plane Interpolation in Single Sensor Color Electronic Camera," U.S. Patent 5,629,734, 1997.
- B. K. Gunturk, Y. Altunbasak, and R. M. Mersereau, "Color Plane Interpolation Using Alternating Projections," IEEE Transactions on Image Processing, 2002.
- A. Gharbi et al., "Deep Joint Demosaicking and Denoising," ACM Transactions on Graphics, 2016.