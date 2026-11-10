# WebPage

Personal site for Simukayi "Simi" Mutasa, MD. Plain static HTML/CSS: no build step, no framework.
Live at https://simirad.com/

| File | Purpose |
|---|---|
| `index.html` | Main page: opening, about, work (practice, research previews, app previews), personal, connect |
| `research.html` | Four research case studies, then filterable publications, talks, posters, leadership & honors |
| `apps.html` | App portfolio: three featured projects with synthetic-data screenshots, plus more projects |
| `site.js` | Compact phone menu, publication filters, footer year (pages work without it) |
| `assets/og/` | Page-specific social preview images (1200×630) |
| `assets/apps/shots/` | App screenshots: synthetic demonstration data only |
| `styles.css` | Shared styles (midnight navy / warm white / brass; follows system dark mode) |
| `simi-mutasa.vcf` | "Add to contacts" card (for the business-card QR code) |
| `assets/Mutasa_CV.pdf` | CV with home address and phone number redacted |
| `assets/headshot.*` | Portrait |

## Preview locally

```bash
python3 -m http.server 8000
```

## Updating contact details

When the business email changes, update it in `index.html` (3 places, search for `mailto:`),
`simi-mutasa.vcf` (`EMAIL` line) and the JSON-LD block at the top of `index.html`.

## Domain

Served at https://simirad.com via GitHub Pages (the `CNAME` file sets the custom domain).
DNS is on Cloudflare: four `A` records for `@` pointing to GitHub Pages and `www` as a CNAME
to `stmutasa.github.io`, all set to "DNS only". If the domain ever changes, update `CNAME`
and the absolute URLs (`canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD and `URL`
in the vCard).
