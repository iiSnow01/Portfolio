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
- `src/components/Projects.jsx`: Three featured projects with source links and screenshots or reproducible examples, plus an archive for smaller projects. Screenshots live in `public/`.

The portfolio links to the relevant source and sample assets. CV Genius describes its LinkedIn import as simulated, and GT Chicken labels its contact form as a local demo.
