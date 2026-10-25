# shriyash.dev

My portfolio site: a small hash-routed SPA (`#/about`, `#/projects`, `#/resume`) built with plain JavaScript and webpack.

## Development

```sh
npm install
npm run start   # dev server at http://localhost:8080
npm run build   # production build into dist/
npm run lint
```

## Deployment

Vercel builds from source on push (`npm run build`, output `dist/`). `dist/` is not committed.

## Updating the resume

The resume exists twice, so update both:

1. Replace `src/assets/Shriyash_Ghimire_Resume.pdf` (keep the file name; it is the Download PDF link).
2. Mirror the changes in the `resume-section` block of `src/template.html`.

## Where things live

- `src/template.html`: all page markup (About, Projects, Resume, footer)
- `src/style.css`: styles; the loader's CSS is inline in the template `<head>`
- `src/router.js`: hash routing between views
- `src/nav.js`: Connect menu
- `src/assets/`: files served under a fixed name (resume PDF, link-preview image)
