# Post-Doc Activity Report — Project Page

A static, single-page website presenting the post-doctoral activity report of
**Francesco Rosa** (DIEM, Università degli Studi di Salerno), focused on the main
research project **REASONED** (human-video-conditioned multi-task imitation
learning) and on the currently active research question, **RQ1**: baseline
robustness results (RQ1-1 task-level, RQ1-2 spatial-level) and the proposed
**VC-VLA** architecture, with both simulated and real-world results.

Built with the [Clarity template](https://github.com/lorenmt/clarity-template) by Shikun Liu
(static HTML, no build step; CC BY-SA 4.0, see `LICENSE-clarity`).

## Structure

```
index.html              # all page content
assets/                  # Clarity: stylesheet, Charter font, Font Awesome, scripts
  scripts/navbar.js      # floating table of contents (patched to list h2 across containers)
clarity/clarity.css      # Clarity grid helpers
static/
  css/report.css         # report-specific styles (tables, figure rows, callouts)
  video/                 # SeeDo real-robot video
  images/
    main-project/        # figures for REASONED (taxonomy, baselines, VC-VLA, real-world eval)
    misc/                # author photo, favicon
```

Font Awesome and the Charter font are self-hosted; Poppins/Fira Code (Google Fonts)
and MathJax (cdnjs) are loaded from CDNs.

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

All content lives in `index.html`, split into five chapters: 1. Problem and Taxonomy,
2. Baseline Evaluation (RQ1-1, RQ1-2), 3. Proposal (VC-VLA), 4. Simulated Evaluation,
5. Real-World Evaluation. Each `h1` / `h2` inside a `container blog main` block becomes an
entry in the floating table of contents. Figures go in `container blog ... gray` blocks.
