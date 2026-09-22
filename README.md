# Post-Doc Activity Report — Project Page

A static, single-page website presenting the post-doctoral activity report of
**Francesco Rosa** (DIEM, Università degli Studi di Salerno), focused on the main
research project **REASONED** (human-video-conditioned multi-task imitation
learning) and on the currently active research question, **RQ1**: baseline
robustness results (RQ1-1 task-level, RQ1-2 spatial-level) and the proposed
**VC-VLA** architecture, with both simulated and real-world results.

Built with the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
(Bulma CSS, no build step) and adapted into a multi-section report layout.

## Structure

```
index.html              # all page content
static/
  css/                   # Bulma, Bulma-carousel, and custom.css (page-specific styles)
  js/                    # Bulma-carousel and main.js (nav, scroll-spy, scroll-to-top)
  images/
    main-project/        # figures for REASONED (taxonomy, baselines, VC-VLA, real-world eval)
    misc/                # author photo, favicon
```

Font Awesome icons are loaded from a CDN (cdnjs); everything else is self-hosted,
so the page works fully offline except for icons and the Google Font (Inter).

## Preview locally

No build step is required — any static file server works:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this repository to GitHub (remote already set to `ciccio42/post-doc`).
2. In the repo settings, enable **GitHub Pages** for the `main` branch, root folder.
3. The site will be published at `https://ciccio42.github.io/post-doc/`.

## Updating content

All content lives in `index.html`, organized into `<section>` blocks with ids
matching the top navigation (`#overview`, `#main-project`, `#rq1-1`, `#rq1-2`,
`#proposal`, `#about`). Section-specific visual styles are in
`static/css/custom.css`.
