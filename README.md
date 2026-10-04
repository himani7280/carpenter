# WoodHaus

A Next.js carpentry site recreating the eight supplied WoodHaus full-page design previews. Each page has its own route and component; the supplied page artwork is stored locally in `public/reference` so the reference layout renders consistently without external image requests.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/services-details` — Service details
- `/gallery` — Filterable project gallery
- `/blog` — Journal
- `/blog-details` — Journal article
- `/contact` — Contact information and enquiry form

Navigation hotspots link the page-image headers to their matching routes. Reference artwork is in `public/reference`; page components are in `src/components`.

## Checks

```bash
npm run lint
npm run build
```
