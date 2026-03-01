# Definitive Build Plan: Academic Personal Site (11ty + Pico.css)

## Project Goal

To deploy a highly performant, statically generated academic website requiring zero client-side framework JavaScript. It must natively render LaTeX at compile-time, utilize semantic classless CSS, and be structurally optimized for a future automated AI-agent content pipeline (both ingestion and generation).

## Technology Stack & Dependencies

### Core Technologies

Static Site Generator: `Eleventy (@11ty/eleventy v3)`

Styling: `Pico.css` (Loaded via CDN in the base template)

Markup: Markdown (`.md`) with Nunjucks (`.njk`) for templating.

NPM Dependencies

`@11ty/eleventy`: The core compiler.

`markdown-it`: The underlying markdown parser.

`@mdit/plugin-katex`: For compiling `$$\alpha$$` into standard MathML/HTML at build time.

Optional: bun (Runtime) instead of Node.js for sub-second compilation.

## Target Project Structure

You will create this exact directory tree. It separates configuration, templates, and content.

```
my-academic-site/
├── package.json
├── eleventy.config.js       # The engine configuration (KaTeX setup)
├── src/
│   ├── _includes/
│   │   ├── base.njk         # The master HTML layout (loads Pico.css)
│   │   └── nav.njk          # Reusable navigation component
│   ├── index.md             # Your homepage/bio
│   ├── cv.md                # Curriculum Vitae
│   ├── posts/               # Future AI-agent blog directory
│   │   ├── posts.json       # Directory data (auto-tags all files inside)
│   │   └── sample-paper.md  
│   └── public/              # Static assets (PDFs, headshot)
│       ├── profile.jpg
│       └── llms.txt         # Plaintext manifest for AI research agents
```

## Step-by-Step Implementation Guide

### Phase 1: Initialization & Dependency Installation

Execute these commands in your terminal.

Initialize the project:
```
mkdir my-academic-site && cd my-academic-site
npm init -y
```

Install Eleventy and the Markdown math plugins:
```
npm install @11ty/eleventy markdown-it @mdit/plugin-katex --save-dev
```

Update package.json scripts to include:
```
"start": "eleventy --serve",
"build": "eleventy"
```

### Phase 2: Core Configuration (eleventy.config.js)

This is the most critical step for an academic site. It overrides the default parser to strictly handle LaTeX block and inline math.

Create eleventy.config.js in the root.

Implement the following logic:

- Import markdown-it and @mdit/plugin-katex.
- Initialize the parser with { html: true }.
- Attach the KaTeX plugin.
- Tell Eleventy to use this custom parser via eleventyConfig.setLibrary("md", ...).
- Configure Eleventy to passthrough copy the src/public folder to the final build.
- Set the input directory to src and output to _site.

### Phase 3: Layouts & Aesthetics (src/_includes/base.njk)

This dictates the visual structure without writing manual CSS.

Create a standard HTML5 boilerplate.

In the `<head>`, link Pico.css: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">`.

Link the KaTeX CSS (required for font rendering, even though the math is pre-compiled): `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">`.

Wrap the body content in `<main class="container">`.

Inject `{{ content | safe }}` where the Markdown output should appear.

### Phase 4: Content Hydration

`src/index.md`: Write your bio. Include YAML frontmatter layout: base.njk. Test inline math by writing $E=mc^2$.

`src/cv.md`: Create standard markdown lists for your education and publications.

### Phase 5: The Agent-Ready Blog (src/posts/)

Create `src/posts/posts.json` with the following content to automatically apply layouts and tags to all future AI-generated files:

```
{
  "layout": "base.njk",
  "tags": ["post"]
}
```

Create `src/public/llms.txt`. Write a brief markdown summary of your site's structure and direct AI agents to your /posts/ directory. This ensures when an AI crawler hits your site, it knows exactly how to read your research.

## Execution Order Summary

- **Scaffold**: Create directories and run npm install.
- **Configure**: Write the eleventy.config.js math pipeline.
- **Template**: Create base.njk with Pico.css.
- **Draft**: Write index.md and test LaTeX compilation via npm start.
- **Prepare for AI**: Set up the posts directory defaults and the llms.txt manifest.

## Bio

```
layout: base.njk

title: Adrian Robert Minut

Adrian Robert Minut

Hi, I'm Adrian. I'm a CS PhD student at Sapienza University of Rome, co-advised by Prof. Emanuele Rodolà (PI of the GLADIA group) and Prof. Iacopo Masi (PI of the OmnAI group).

My research focuses on Large Language Models (LLMs), specifically exploring model merging and uncertainty estimation. The primary goal of my work is to develop methods that make these models more robust, efficient, and interpretable.

Background

My background is originally in Software Engineering, which translates well to writing scalable code for AI research. In 2025, I was a research intern at RIKEN in Japan, where I studied variational learning. This experience provided a rigorous theoretical framework that deepened my understanding of model merging and uncertainty estimation, directly informing how I design efficient and robust methods today.

Beyond the Lab

When I'm not running experiments, I play a lot of rogue-like and souls-like games. Turns out, figuring out punishing game mechanics isn't all that different from wrestling with search and optimization problems in AI.

Contact: minut@di.uniroma1.it
```

## Publications

```
layout: base.njk title: Publications

Publications

My research centers on evolutionary model merging and uncertainty estimation in Large Language Models, with a focus on developing efficient, robust methods.

2026

Spilled Energy in Large Language Models
Adrian Robert Minut, Hazem Dewidar, Iacopo Masi.
ICLR 2026
PDF | Code

2025

$\text{MERGE}^3$: Efficient Evolutionary Merging on Consumer-grade GPUs
Tommaso Mencattini, Adrian Robert Minut, Donato Crisostomi, Andrea Santilli, Emanuele Rodolà.
ICML 2025
PDF | Code

Mergenetic: a Simple Evolutionary Model Merging Library
Adrian Robert Minut, Tommaso Mencattini, Andrea Santilli, Donato Crisostomi, Emanuele Rodolà.
ACL 2025 (System Demonstrations)
PDF | Code

For a complete and up-to-date list of citations, please visit my Google Scholar profile.
```