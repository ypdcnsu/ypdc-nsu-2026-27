# YPDC NSU Chapter 2026–27 – Cabinet Website

Static website (no build step). Files:

- `index.html` – page structure (rarely needs editing)
- `style.css` – design and colours
- `script.js` – **all content is at the top of this file** (society info, members, teams)
- `assets/photos/` – put member photos and the logo here

## Edit content
Open `script.js` and change the block marked `EDIT ONLY THIS BLOCK`:
- Member photos (two per member):
  - `photo` = transparent PNG cut-out of the person (stands in front), e.g. `assets/photos/aliyan.png`
  - `bgPhoto` = the same photo WITH its background (shows inside the diagonal panel), e.g. `assets/photos/aliyan-bg.jpg`
- Logo: `logo: "assets/photos/logo.png"`
- Theme colour: `theme: "red"` (red, blue, green, purple, orange, teal) or a hex like `"#0a7a3d"`
- Teams: edit `lead`, `about`, `join` in `TEAMS`

## Deploy on GitHub Pages
1. Create a new repository on github.com (e.g. `ypdc-nsu-2026-27`), public.
2. Upload ALL files from this folder (keep the folder structure; `index.html` must be at the top level).
3. Repository -> Settings -> Pages -> Source: "Deploy from a branch" -> Branch: `main` / `(root)` -> Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/ypdc-nsu-2026-27/`
5. Open the site, tap **QR code** to generate the final QR for that address (or use any QR generator), and replace `assets/qr-temporary.png`.

`assets/qr-temporary.png` points to the old preview link — do not print it.
