# Anis · portfolio

My personal site: software developer, AI & automation specialist and business engineer.

**Live:** https://anis-ai.pages.dev (soon also https://anis-ai.is-a.dev)

A scroll-driven story in seven chapters: hello, craft, beliefs, the automation "machine", work, about and contact. Plain HTML, CSS and JavaScript with [GSAP](https://gsap.com) + ScrollTrigger for the scroll animations and [Lenis](https://lenis.darkroom.engineering) for smooth scrolling. No build step.

Type: [Melodrama](https://www.fontshare.com/fonts/melodrama) by Indian Type Foundry (self-hosted in `fonts/`, ITF Free Font License) and [Big Shoulders](https://fonts.google.com/specimen/Big+Shoulders) from Google Fonts.

## Editing

All text, projects, colours and links live in `data.js`. The other files read from it.

- `index.html`: page structure and the SVG character
- `style.css`: layout, colours and type
- `main.js`: renders the content and drives the scroll animations

Visitors with reduced motion enabled (or without JavaScript libraries loading) get a plain, fully readable page.

## Running locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 5173
```

## Deploying

Hosted on Cloudflare Pages (project `anis-ai`):

```
npx wrangler@4.40.0 pages deploy . --project-name anis-ai --branch main
```
