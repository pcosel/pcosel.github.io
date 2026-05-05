# Implementation Plan: Games Portfolio

**Branch**: `001-games-portfolio` | **Date**: 2026-05-05 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-games-portfolio/spec.md`

## Summary

Build a static personal games portfolio site hosted on GitHub Pages. The site features a games overview page (`/games/`) listing games newest-first, each linking to a detail page with an interactive image gallery, dark/light theme toggle, and Itch.io download/play buttons. Game data is defined in a single JSON file; pages are vanilla HTML/CSS/JS with no build step.

## Technical Context

**Language/Version**: HTML5, CSS3, Vanilla JavaScript (ES2020+)
**Primary Dependencies**: None (zero external libraries)
**Storage**: Single JSON data file (`data/games.json`)
**Testing**: Not required
**Target Platform**: GitHub Pages (static file hosting, served from `main` branch)
**Project Type**: static-site
**Performance Goals**: Overview page under 500KB (excluding images); gallery interactions instant (no page reload)
**Constraints**: Fully static, no build step, GitHub Pages compatible, responsive (320px–1440px+)
**Scale/Scope**: Personal portfolio, ~5–20 games, each with 1–10 screenshots

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Static-First**: Output is fully static (HTML/CSS/JS/assets). No server-side rendering or runtime DB queries.
- [x] **GitHub Pages Native**: Site lives at `pcosel.github.io`, served from `main` branch. `/games/` maps to `games/index.html`.
- [x] **Simplicity**: Zero external dependencies. Vanilla HTML/CSS/JS. No build step. No framework.

## Project Structure

### Documentation (this feature)

```text
specs/001-games-portfolio/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (repository root)

```text
├── index.html                 # Homepage with navigation to games section
├── css/
│   ├── main.css               # Core styles, CSS custom properties for theming
│   ├── overview.css           # Games overview page styles
│   └── detail.css             # Game detail page styles
├── js/
│   ├── theme-toggle.js        # Dark/light theme toggle with localStorage persistence
│   └── gallery.js             # Image gallery logic (arrows, thumbnails, highlighting)
├── data/
│   └── games.json             # Single JSON file defining all game data
├── assets/
│   ├── images/
│   │   └── screenshots/       # All images per game subdirectory (cover + screenshots)
│   └── placeholder.svg        # Fallback image for failed loads
└── games/
    └── index.html             # Games overview + detail page (single template, detail shown via ?game=<slug>)
```

**Structure Decision**: Flat static site with vanilla HTML/CSS/JS. No build step. Game list is rendered client-side from `data/games.json` on the overview page. Game detail views are handled by a single template (`games/index.html`) that reads `?game=<slug>` from the URL query parameter, looks up the matching entry in `data/games.json`, and renders the detail view dynamically. Adding a new game only requires updating `games.json` and adding images — no new HTML files needed.

## Complexity Tracking

No Constitution violations — all gates pass without justification needed.
