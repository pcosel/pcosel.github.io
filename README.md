# pcosel.github.io

Personal games portfolio site hosted on GitHub Pages.

## Features

- **Games overview** — reverse-chronological list of games with cover images, descriptions, and game jam links
- **Game detail view** — full description, interactive screenshot gallery, and Itch.io download/play buttons
- **Image gallery** — large main image with arrow navigation, thumbnail strip with active highlighting, and horizontal scroll for many images
- **Dark/Light theme** — toggle with `localStorage` persistence
- **Responsive** — works on mobile, tablet, and desktop

## Local Development

```bash
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## Adding a New Game

1. Open `data/games.json`
2. Add a new entry with `slug`, `name`, descriptions, `date`, image paths, and Itch.io URLs
3. Add images to `assets/images/screenshots/<slug>/`
4. Commit and push to `main`

No build step required — GitHub Pages deploys automatically.
