# FilmMeet — filmmeetapp.com

Public site for the FilmMeet app, hosted on GitHub Pages from this repo
(branch `gh-pages`, root).

## Structure

- `/` — Landing page ("The app that gets you on set"). Plain HTML/CSS/JS:
  `index.html`, `style.css`, `app.js` + images/video at the repo root.
  The Investors tab's "Explore Demo here" button and the nav "Demo" link
  both lead to `/demo/` (`FILMMEET_DEMO_URL` in `app.js`).
- `/demo/` — Interactive investor demo (compiled React app, unchanged
  contents, moved into `demo/`). It shares the root branding: favicon,
  theme color, and a floating "FilmMeet Home" pill (top-right,
  `demo/filmmeet-nav.css`) linking back to `/`.
- Brand assets (root): `filmmeet-logo.png` (full logo, HD 1884×1422),
  `filmmeet-icon.png` (clapperboard icon only, HD 1024×1024),
  `filmmeet-logo.jpeg` (original logo as used on the landing page),
  `favicon.ico` / `favicon.png` / `favicon-32.png` / `apple-touch-icon.png`
  (all icon-only, derived from the landing-page logo).
- `CNAME` — custom domain `filmmeetapp.com` (DNS at Network Solutions:
  four A records on `@` → 185.199.108/109/110/111.153 and a `www` CNAME →
  alin5647.github.io).

Fallback URL: https://alin5647.github.io/filmmeet-demo/ (redirects to the
custom domain once DNS is live).
