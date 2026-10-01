# 1st Assist Ltd — React/Vite rebuild

## Setup

```bash
npm install
npm run dev
```

`react-router-dom`, `motion` and `lucide-react` are already in `package.json`, so a plain
`npm install` is all you need.

## Deploying (works on GitHub Pages, Netlify, Vercel, or any static host)

The site uses relative asset paths (`base: './'` in `vite.config.js`) and `HashRouter`, so the same
build works at a domain root (Netlify, Vercel) or in a sub-folder (GitHub Pages). Page links look like `/#/services`.

- **Netlify / Vercel:** import the GitHub repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** repo Settings -> Pages -> Source: **GitHub Actions**. The workflow in
  `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
- **Drag-and-drop:** run `npm run build`, then drag the `dist` folder onto app.netlify.com/drop.

Images in pages must be written as ``src={`${import.meta.env.BASE_URL}images/file.jpg`}`` (not `"/images/file.jpg"`),
otherwise they break on GitHub Pages.

## Structure

- `src/pages/` — one file per route: Home, Services, Fleet, About, Quote, Contact, Terms, NotFound
- `src/components/` — Navbar, Footer, BrandLockup, QuoteForm, QuickCheck, Faq, Reveal (scroll animation),
  PageTransition, ScrollProgress, WhatsAppButton, RouteLine
- `src/hooks/usePageTitle.js` — sets a per-page browser-tab title
- `src/styles/global.css` — colour/type tokens (CSS variables at the top) plus shared layout classes
- `src/styles/*.css` — one stylesheet per page/component

## Still to confirm before launch

- All images are local, in `public/images/`, and are referenced with a leading slash (`/images/...`). In CSS this matters:
  `url('images/x.jpg')` (no slash) works in dev but 404s on the deployed site. Keep photos under about 300 KB
  (resize to about 1900 px wide, JPEG quality 75-80) — phone cameras produce 3-5 MB files that make pages slow.
- Forms post to FormSubmit (`formsubmit.co/info@1stassistltd.com`). The first submission triggers an
  activation email to that address; the address must confirm it before messages are delivered.
- Route-time estimates in `QuickCheck.jsx` are indicative — have the company confirm them.
- `info@1stassist.uk` on the Contact page — confirm this address is real and monitored.
