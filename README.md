# Amine Aguilal - Portfolio

A bilingual developer portfolio with a charcoal and blue design, responsive project cards, a professional timeline, education, certifications, and a CV request contact link.

## Stack

React, Vite, vanilla CSS, and a short Framer Motion introduction that respects reduced-motion preferences.

## Development

```sh
npm ci
npm run dev
npm run build
```

Production output is written to `dist/`. The existing website is https://snowow.netlify.app/.

## Content

- `src/context/translations.js`: English and French profile, employment dates, education, certifications, and contact details.
- `src/components/Projects.jsx`: Three featured public repositories with descriptions and technology tags. Screenshot assets are loaded from their source repositories, with a local code illustration fallback.

Project cards link to source code; no unverified live demos are advertised. CV Genius's LinkedIn import is explicitly described as simulated.
