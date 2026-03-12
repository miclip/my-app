# Coffee Machine Buying Guide

A lightweight single-page quiz app that recommends coffee machines based on your preferences. Built with Vite, Preact, TypeScript, and Tailwind CSS v4.

## Quick Start

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Output goes to `dist/`. The app uses relative asset paths (`base: './'`) so it works when deployed to any subdirectory, including GitHub Pages.

## Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` folder to a `gh-pages` branch, or configure GitHub Actions to do it automatically

Example GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

## How It Works

Users answer 5 questions about their coffee preferences (budget, daily cups, milk drinks, counter space, and hands-on willingness). A weighted scoring engine matches answers to five machine categories and recommends specific models with pros/cons.

## Tech Stack

- **Preact** — ~3 KB React alternative
- **Vite** — fast dev server and optimized builds
- **Tailwind CSS v4** — utility-first styling, purged for production
- **TypeScript** — type-safe throughout

Production bundle: ~13 KB gzipped total.
