# Portfolio

My personal portfolio: a single static page, no build step. It runs on GitHub Pages as-is.

## Files

| File | What it is |
| --- | --- |
| `content.js` | **All the content**: name, hero text, projects, experience, stack, education, links. Edit this. |
| `index.html` | Layout, styles and the code that renders `content.js`. Change it only to alter the design. |
| `cv.pdf` | The CV behind every "Download CV" button. Replace it with your own (keep the name `cv.pdf`). |
| `favicon.svg` | Browser-tab icon. |
| `assets/` | Optional images. |

## Editing

1. Open `content.js` in any editor (VS Code, Notepad, or directly on github.com with the pencil icon).
2. Change the text inside the quotes.
3. **Add a project / job / degree / certificate:** copy an existing `{ ... }` block, paste it after a comma, and edit it.
4. **Remove one:** delete its `{ ... }` block.
5. Preview locally by double-clicking `index.html`.
6. Commit and push. GitHub Pages updates in about a minute.

Project filter buttons are created automatically from each project's `kind`.
`featured: true` makes a project card dark. An empty `link: ""` hides that link.

If the page shows up blank after an edit, there's usually a missing comma or quote in `content.js`. Open the browser console (F12) to see the line number.

## Publishing on GitHub Pages

1. Create a repo on GitHub. Name it `<your-username>.github.io` to get the root URL, or any name for `https://<your-username>.github.io/<repo>/`.
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. The site is live at the URL shown on that page within a minute or two.

## Colours

| Token | Hex | Use |
| --- | --- | --- |
| navy | `#213448` | Brand, headings, dark sections |
| blue | `#547792` | Accent |
| sky | `#94B4C1` | Tags, lines, text on navy |
| skin | `#EAE0CF` | Cards, bands, text on navy |
| surface | `#F6F1E8` | Page background |

They live as CSS variables at the top of `index.html`.
