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
  css/bulma.min.css      # Bulma (from the original template)
  css/custom.css         # page design: nav, hero, sections, figure cards, TD/OTD tables
  js/main.js             # mobile nav, scroll-spy, scroll-to-top, KaTeX rendering
  images/main-project/   # figures
  video/                 # SeeDo real-robot video
```

Font Awesome, KaTeX (cdnjs) and the Inter font (Google Fonts) are loaded from CDNs;
everything else is self-hosted.

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

All content lives in `index.html`, in five `<section>` blocks whose ids match the top
navigation: `#problem` (1. Problem and Taxonomy), `#baselines` (2. Baseline Evaluation, RQ1-1
and RQ1-2), `#proposal` (3. VC-VLA), `#simulation` (4. Simulated Evaluation) and `#real-world`
(5. Real-World Evaluation). TD/OTD tables use `class="data-table tdotd"` with one TD and one
OTD row per method.
