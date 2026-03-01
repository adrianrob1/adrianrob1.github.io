# adrianrob1.github.io

Personal academic website for [Adrian Robert Minut](https://adrianrob1.github.io), CS PhD student at Sapienza University of Rome.

**Live site:** https://adrianrob1.github.io

## Stack

| Layer | Technology |
|---|---|
| Static site generator | [Eleventy v3](https://www.11ty.dev/) |
| Styling | [Pico.css v2](https://picocss.com/) (CDN, jade theme) |
| Math | [KaTeX](https://katex.org/) — compiled at build time, zero client-side JS |
| Templating | Nunjucks (`.njk`) + Markdown |
| Hosting | GitHub Pages via GitHub Actions |

## Project Structure

```
src/
├── _includes/
│   ├── base.njk          # Master layout — Pico.css, sidebar, nav
│   └── nav.njk           # Top navigation bar
├── index.md              # Homepage / bio
├── publications.md       # Publications list
├── posts/
│   ├── posts.json        # Auto-applies layout + "post" tag to all posts
│   ├── index.njk         # Blog listing page
│   └── *.md              # Individual posts
└── public/
    ├── profile.jpg       # Sidebar headshot
    └── llms.txt          # Plain-text manifest for AI crawlers
eleventy.config.js        # Build config: markdown-it + KaTeX pipeline
```

## Local Development

```bash
npm install
npm start       # dev server at http://localhost:8080 with live reload
npm run build   # production build → _site/
```

Requires Node.js 20+.

## Writing Posts

Add a Markdown file to `src/posts/`. The `posts.json` directory data file automatically applies the layout and tags — no frontmatter required beyond the title:

```markdown
---
title: "My New Post"
date: 2026-03-01
---

Inline math: $E = mc^2$

Block math:

$$\theta_{\text{merged}} = (1 - \lambda)\,\theta_A + \lambda\,\theta_B$$
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys `_site/` to GitHub Pages.

To enable for the first time: **Settings → Pages → Source → GitHub Actions**.
