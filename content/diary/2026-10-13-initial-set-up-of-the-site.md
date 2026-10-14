---
title: "Initial setup of the site's idea"
date: 2026-10-13
tags: [tech-stack, design-idea, initial-setup]
summary: "The general blueprint of the site is settled, and the first pieces of the idea are implemented."
---

## What I did

Set up the basic foundation of the guitar scene: the guitar model now loads, is centered and scaled, and sits under a stage-style spotlight.

The design of the site is finally settled, and I wrote down the project documentation:

- [`docs/design.md`](../../docs/design.md): the concept, user flow and fretboard timeline
- [`docs/tech-stack.md`](../../docs/tech-stack.md): the tools used and why
- [`CREDITS.md`](../../CREDITS.md): credits and licenses for assets like the guitar model

## What I learned

Learned a lot about React Three Fiber and the basics of TypeScript:

- **TypeScript**: typing variables and functions, tuples like `[number, number, number]`, type inference, and `import type` versus a normal import.
- **React**: props arrive as one object and need destructuring, hooks must run inside components, and the difference between `useState` and `useRef`.
- **React Three Fiber**: `<Canvas>`, animating with `useFrame` and `delta`, pointer events, and `stopPropagation`.
- **drei**: `OrbitControls`, `useHelper`, `useGLTF` for loading models, and `Center` for positioning them.
- **Leva**: tuning values live in the browser without editing code.
- **Lighting**: directional, point, spot and ambient lights, and how to get a stage look.
- **CSS**: a `*` rule setting `width` and `height` broke hover detection on the canvas, so sizes should be set on specific elements.

## Next

- **Credit the author of the guitar model somewhere visible on the site.**
- Start the actual implementation, beginning with the guitar's zoom-in and zoom-out interaction.
