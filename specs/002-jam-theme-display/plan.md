# Implementation Plan: Display Game Jam Themes

**Branch**: `003-jam-theme-display` | **Date**: 2026-05-07 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-jam-theme-display/spec.md`

## Summary

Add a `theme` field to the jam sub-object in `data/games.json` and display it on both the overview cards (inline with jam name in parentheses, truncated at 20 characters) and the detail page (inline with jam name in parentheses, full theme, same font style). The `renderJamOrDate` function in `games/index.html` will be modified to include the theme inline for both views.

## Technical Context

**Language/Version**: HTML, CSS, JavaScript (vanilla ES5, no build step)
**Primary Dependencies**: None — uses existing project files only
**Storage**: `data/games.json` — single JSON data file
**Testing**: Manual verification in browser
**Target Platform**: GitHub Pages (static file hosting)
**Project Type**: static-site
**Performance Goals**: No impact — minimal JS string rendering, no additional network requests
**Constraints**: Static output only, GitHub Pages compatible, no build step, existing ES5-compatible JS patterns
**Scale/Scope**: Personal portfolio site, small number of games

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

- [x] **Static-First**: All changes are static HTML/CSS/JS. No server-side rendering or runtime DB queries.
- [x] **GitHub Pages Native**: No changes to build process or deployment. Deployable to `main` branch.
- [x] **Simplicity**: No new dependencies, frameworks, or build steps. Changes are limited to one data field and rendering logic.

## Project Structure

### Documentation (this feature)

```text
specs/002-jam-theme-display/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (repository root)

```text
data/games.json              # Add "theme" field to jam objects; update sample games with themes
games/index.html             # Modify renderJamOrDate() for both views
css/overview.css             # Add theme truncation styles for overview cards
css/detail.css               # Add theme styles for detail page
```

**Structure Decision**: No structural changes. The feature modifies existing files only. The `theme` field is added to the jam sub-object inline, consistent with the existing denormalized pattern. The rendering is handled by extending the existing `renderJamOrDate` function. CSS changes are scoped to existing style files.

## Complexity Tracking

Not applicable — no Constitution Check violations.
