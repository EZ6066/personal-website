---
title: "Camera control v1"
date: 2026-10-15
tags: [camera-control, react-three-fiber]
summary: "Hit the limits of drei's built-in OrbitControls and replaced them with a custom scroll-driven camera."
---

## What I did

Created a new component, [`CameraRig`](../../portfolio/app/CameraRig.tsx), and used it to replace the `OrbitControls` that originally handled zooming toward the guitar.

Scrolling now slides the camera down and forward from the overview to the guitar body, and back out when scrolling the other way. The camera keeps facing straight ahead, stops at both ends, and glides smoothly instead of jumping on each scroll tick.

For now it only moves the camera with the mouse wheel. The other camera features are yet to be implemented.

## What I learned

drei's tools are very convenient, but they aren't flexible enough for what this site needs. `OrbitControls` always zooms toward its target, so I couldn't keep the overview centered and still zoom into the body. Writing my own camera logic gave me full control.

- **Event listeners in React**: add them in `useEffect` and remove them in its cleanup, using the same function reference, so they don't stack up on hot reload or remount.
- **Scroll progress**: track a single value from 0 to 1 in a `useRef` and clamp it with `MathUtils.clamp`.
- **Moving the camera**: `Vector3.lerpVectors` blends between two positions based on that progress value.
- **Smoothing**: `MathUtils.damp` with `delta` eases the camera toward its target at the same speed on any frame rate.

## Next

- **Credit the author of the guitar model somewhere visible on the site.**
- Set up deployment, and GitHub checks for pull requests.
- Click to zoom into the body, lock the guitar's rotation when zoomed in, and turn the guitar to face the front.
