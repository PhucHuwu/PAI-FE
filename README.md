# PAI-FE

Frontend project (Next.js + TypeScript) for PAI website, using mock data only.

## Project structure

```text
src/
  app/                     # App Router entrypoints
    (pages)/               # route groups for static pages
      about/page.tsx
      methodology/page.tsx
      ranking/page.tsx
    globals.css
    layout.tsx
    page.tsx               # home route (/)

  features/                # feature-first modules
    home/
      components/          # UI sections used only by home feature
      home-page.tsx
      home-page.module.css
      home.types.ts
      index.ts

  mock/                    # mock data by domain/page
    pages/
      home.mock.ts
```

## Conventions for this repo

- Pure FE and mock data only, no backend integration.
- Keep page-specific UI in `src/features/<feature>/components`.
- Keep typed mock data in `src/mock/**` and import into features.
- `src/app` should stay thin: route wiring + layout only.

## Run locally

```bash
npm install
npm run dev
```

## Build check

```bash
npm run build
```
