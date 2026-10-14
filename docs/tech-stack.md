# Portfolio Tech Stack

This file covers the tech stack used to build the website and why each tool is used.

_Last updated: 2026-10-13_

## Framework

- **Next.js**
  - What: A React framework where the folder structure inside `app/` defines the site's routes, and frontend and backend code live in one project.
  - Why: Folder-based routing makes it easy to give each fret its own page, and server components can read diary entries straight from `content/` without an API.

## Language

- **TypeScript**
  - What: JavaScript with type annotations. The types are only checked while writing code and disappear when it compiles.
  - Why: Catches mistakes like misspelled prop names or wrong value types before the site runs.

## Styling

- **Tailwind CSS**
  - What: Styling with utility classes written directly on elements, like `h-screen` or `bg-neutral-900`.
  - Why: Comes set up with Next.js, and it's quick for layout and spacing without writing separate CSS files.

## 3D

- **three.js**
  - What: The JavaScript 3D engine that renders scenes in the browser with WebGL.
  - Why: The foundation for everything 3D on the site.
- **React Three Fiber (R3F)**
  - What: Lets you write three.js scenes as React components. `<mesh>` becomes a three.js `Mesh`, and hooks like `useFrame` run code every frame.
  - Why: Builds the 3D scene with the same component, props and state patterns as the rest of the site.
- **drei**
  - What: A collection of ready-made helpers for R3F, such as `useGLTF`, `Center`, `OrbitControls` and `useHelper`.
  - Why: Saves writing common features (model loading, camera controls, centering) from scratch.

## Dev tools

- **Leva** (used during development only)
  - What: A live control panel with sliders and color pickers for adjusting values in the browser.
  - Why: Tune light positions, colors and intensity without editing code and reloading. Final values get copied into the code.

## Assets

- **Fender Stratocaster Guitar** 3D model from Sketchfab, by Ryan_Nein (CC BY 4.0)
  - Stored at `portfolio/public/models/guitar.glb`.
  - Full license and credit details are in [`CREDITS.md`](../CREDITS.md).
