# WebPage

Personal professional website for Simukayi Mutasa, MD. Plain static HTML/CSS: no build step, no framework.

- `index.html`: all content
- `styles.css`: styling (light and dark mode follow the visitor's system setting)

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy (GitHub Pages)

Settings → Pages → Source: "Deploy from a branch" → `main` / root.
To use a custom domain, add it under Settings → Pages and create the DNS records GitHub lists there.

## Adding a headshot

Put the image at `assets/headshot.jpg` and replace the `<div class="monogram">` in `index.html` with:

```html
<img src="assets/headshot.jpg" alt="Simukayi Mutasa, MD">
```
