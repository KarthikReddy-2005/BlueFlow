# Restaurant demos

A reusable Next.js restaurant website system. The root route redirects to `/demo/buddys-place`; `/demo/ember-and-oak` remains available.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/demo/buddys-place`. Use `npm run lint` and `npm run build` before deployment.

## Add a restaurant

Add a typed configuration in `src/data/restaurants/` and register it in `src/data/restaurants/index.ts`. Shared page sections live in `src/components/restaurant/`. Place its web images in `public/restaurants/<slug>/`; keep full-size originals outside `public/`.

Set `NEXT_PUBLIC_SITE_URL` to the deployment origin so Open Graph and Restaurant JSON-LD image URLs are absolute. Vercel deployments can also use `VERCEL_URL` as a fallback. Demo pages are marked `noindex` until approved for publication.

Menu prices, hours, links, and photos should be checked against current restaurant sources before presenting a demo as final. See `public/restaurants/buddys-place/RESEARCH_NOTES.md` and `ASSET_NOTES.md` for Buddy's Place source notes.
