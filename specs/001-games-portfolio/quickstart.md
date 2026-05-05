# Quickstart: Games Portfolio

## Prerequisites

- A web browser (any modern browser)
- For local preview: any static file server (e.g., `python -m http.server 8000`, `npx serve`, or VS Code Live Server)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/pcosel/pcosel.github.io.git
   cd pcosel.github.io
   ```

2. Start a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

3. Open `http://localhost:8000` in your browser.

## Adding a New Game

1. Open `data/games.json`
2. Add a new entry to the `games` array:
   ```json
   {
     "slug": "my-awesome-game",
     "name": "My Awesome Game",
     "shortDescription": "A short description for the overview page.",
     "description": "A longer detailed description for the detail page.",
      "jam": {
        "name": "Game Jam Name",
        "url": "https://itch.io/jam/game-jam-name"
      },
      "coverImage": "assets/images/screenshots/my-awesome-game/cover.svg",
      "screenshots": [
        "assets/images/screenshots/my-awesome-game/01.svg",
        "assets/images/screenshots/my-awesome-game/02.svg",
        "assets/images/screenshots/my-awesome-game/03.svg"
      ],
     "playUrl": "https://pcosel.itch.io/my-awesome-game",
     "downloadUrl": "https://pcosel.itch.io/my-awesome-game/download"
   }
   ```
3. Add cover and screenshot images to the `assets/images/screenshots/` directory under a subfolder for your game.
4. Commit and push to `main` — GitHub Pages deploys automatically.

## Theme Toggle

The dark/light theme toggle is located in the top-right corner of every page. The selected theme persists across sessions via `localStorage`.

## Deployment

Push to the `main` branch. GitHub Pages will automatically deploy the site. No build step required.
