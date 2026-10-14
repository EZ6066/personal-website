# Portfolio Design

This file describes the concept for the website: what it should look like, how visitors move through it, and the decisions made so far.

_Last updated: 2026-10-13_

## Concept

The homepage is a 3D electric guitar on a dark, stage-lit background. The guitar is the site's navigation menu: each section of the site is a labeled fret, and clicking a fret takes the visitor to that section's page.

The fretboard doubles as a timeline of my experiences. The end closest to the body is the earliest date, and the end closest to the neck, at the very top, is the most recent. Experiences appear along the fretboard as light dots or labels, and years and months are shown along the side as the visitor scrolls.

## User flow

1. **Overview**: the visitor lands on the whole guitar, lit by a spotlight like on a stage.
2. **Zoom in to the body**, in one of two ways:
    - **Scrolling** zooms the camera in toward the guitar body. Once the camera reaches a set distance, the zoom stops there.
    - **Clicking** the guitar flies the camera straight to that same spot on the body.
3. **Body view**: the camera locks so it can only move vertically along the guitar, and the elements on the guitar body appear.
4. **Move along the guitar**, by scrolling from the body view:
    - Scrolling back zooms out of the guitar to the overview.
    - Scrolling forward moves the camera up along the fretboard toward the neck.
5. **Timeline**: while moving up the fretboard, experiences appear as light dots or labels, and the year and month markers show along the side. The scroll goes from the earliest experience near the body to the most recent near the neck.
6. **Choose**: the frets show their labels. Hovering a fret highlights it.
7. **Navigate**: clicking a fret takes the visitor to that section's page.

## Fretboard timeline

- **Direction**: the earliest date is at the body end of the fretboard, and the most recent is at the neck end.
- **Experiences**: shown as light dots or labels placed along the fretboard at their date.
- **Date markers**: years and months appear along the side of the fretboard as the visitor scrolls past them.

## Fret sections

Not final yet. Planned sections:

| Fret | Label    | Page        |
| ---- | -------- | ----------- |
| TBD  | Blog     | `/blog`     |
| TBD  | Projects | `/projects` |
| TBD  | About    | `/about`    |

## Decisions

- **Terminology.** "Fretboard" is the long part running from the body up the guitar, which holds the timeline. "Neck" is the very top end.
- **Invisible click boxes for frets.** The guitar model's frets aren't separate parts: the model is split into chunks by material and size, not by guitar part. Each fret gets an invisible box placed over it to handle hover and clicks.
- **Content pages stay normal pages.** The guitar is only the menu. Blog posts, projects and the About page are regular HTML pages, so they're readable, indexable by search engines and work without 3D.
- **Stage lighting.** A warm spotlight from above and slightly in front, a dark background and very little ambient light.
- **The model is centered and scaled in code** with drei's `Center` and a `scale` prop, because the original model is small and off-center.

## Ideas for later

- A guitar note plays when a fret is clicked.
- The guitar tilts slightly toward the mouse.
- A simple text-link menu for mobile devices and browsers without WebGL.
- Compress the model (currently 15.5 MB) so the page loads faster.
- A visible credit for the guitar model on the site (required by its CC BY license).
