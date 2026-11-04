# WebPage

Personal site for Simukayi "Simi" Mutasa, MD. Plain static HTML/CSS: no build step, no framework.
Live at https://stmutasa.github.io/WebPage/

| File | Purpose |
|---|---|
| `index.html` | Main page: opening, about, work, personal, connect |
| `research.html` | Full publications, oral presentations, posters, leadership & honors |
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

## Custom domain

Add the domain under Settings → Pages, create the DNS records GitHub lists, then update the
absolute URLs (`canonical`, `og:url`, `og:image`, JSON-LD, and `URL` in the vCard).
