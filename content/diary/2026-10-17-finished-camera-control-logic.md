---
title: "Wrapped up camera control logic"
date: 2026-10-17
tags: [camera-control, react-three-fiber]
summary: "Finished the camera path: scroll or click to zoom into the body, climb the fretboard to the neck, and lock the guitar's rotation while zoomed in."
---

## What I did

Extended [`CameraRig`](../../portfolio/app/CameraRig.tsx) and [`GuitarScene`](../../portfolio/app/GuitarScene.tsx) to finish the camera's movement:

- **Fretboard scroll**: after zooming into the body, scrolling further moves the camera straight up the fretboard to the neck. Scrolling back moves it down, and once it reaches the body it zooms back out. The fretboard part scrolls at half speed.
- **Rotation lock**: dragging the guitar is turned off once zoomed in, and turned back on when zoomed out. The guitar also glides back to face the front after every drag, so it's always facing forward when the camera arrives.
- **Click to zoom**: clicking the guitar in the overview glides the camera to the body, the same as scrolling there.

## What I learned

- **One value for the whole path**: a single `progress` number from 0 to 2 drives everything. 0 to 1 is the zoom and 1 to 2 is the fretboard, so the hand-off at the body happens on its own.
- **Lifting state**: when two components need the same value, it lives in their shared parent and gets passed down. I used `useState` for `isZoomed`, because changing it has to re-render the scene, and `useRef` for `progress`, because it changes every scroll tick without needing a re-render.
- **Stale closures**: a listener added in a `useEffect` with `[]` only ever sees the values from when it was created, so reading state inside it gives an old value.
- **Custom component props**: `onClick` on my own component does nothing until the component accepts it as a prop and passes it on.
- **drei's limits again**: `PresentationControls` can't be told to turn back to the front, so I used its `snap` option instead.
- **Tuning feel**: the `damp` speed controls how fast the camera glides, and the step size per scroll tick controls how far each tick moves it.

## Next

- **Credit the author of the guitar model somewhere visible on the site.**
- Set up deployment, and GitHub checks for pull requests.
- Build the fretboard timeline: experience dots and the year and month markers.
- Add clickable fret areas that link to the Blog, Projects and About pages.
