# Research: Games Portfolio

## Decision: No Build Step, Client-Side JSON Rendering

**Rationale**: Both the overview and detail views render by fetching `data/games.json` at page load. The overview generates card entries dynamically. The detail view reads `?game=<slug>` from the URL query parameter and renders the matching game's information. No new HTML files are needed per game.

**Alternatives considered**:
- Static HTML per game: Requires a new file for each game, more maintenance
- Static site generator (Jekyll, Hugo): Adds toolchain complexity for a simple portfolio
- Hash-based routing (`#/slug`): Less shareable URLs, worse for bookmarking

## Decision: Vanilla CSS Custom Properties for Theming

**Rationale**: Dark/light theme toggle uses CSS custom properties (CSS variables) on `:root` with a `[data-theme="dark"]` attribute. Theme preference persists in `localStorage`. No JavaScript framework needed.

**Alternatives considered**:
- CSS `prefers-color-scheme` media query only: No user toggle control
- Separate CSS files per theme: Requires JS to swap `<link>` tags, more fragile

## Decision: Single JSON Data File

**Rationale**: Clarified during specification. One `games.json` file contains all game entries with slug, name, descriptions, dates, image paths, and links. Simple to edit, version-controlled, and loaded client-side.

**Alternatives considered**:
- Per-game Markdown files: More files to manage, requires parsing
- YAML data file: Equivalent to JSON but JSON has better native browser support

## Decision: Image Gallery with Vanilla JS

**Rationale**: The gallery uses a lightweight vanilla JS module. Arrow navigation hides at boundaries (no cycling). Thumbnail strip is horizontally scrollable for >5 images. Active thumbnail is highlighted via CSS class toggle.

**Alternatives considered**:
- External gallery library: Unnecessary dependency, violates Simplicity
- CSS-only gallery: Cannot handle active state highlighting and boundary arrow logic cleanly

## Decision: Responsive Breakpoints

**Rationale**: Three breakpoints aligned with spec's success criteria:
- Mobile: ≤ 480px (single column, compact cards)
- Tablet: 481px–1024px (two-column grid)
- Desktop: > 1024px (three-column grid, full gallery)

**Alternatives considered**:
- Fluid-only layout: Insufficient control for gallery and card layout
