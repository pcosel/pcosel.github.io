# Data Model: Games Portfolio

## Entity: Game

Represents a single game entry in the portfolio.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | URL-friendly identifier (lowercase, hyphenated, unique). Used in URL query parameter for detail view (`?game={slug}`) |
| `name` | string | Yes | Display name of the game |
| `shortDescription` | string | Yes | Brief description shown on the overview page (1–2 sentences) |
| `description` | string | Yes | Full detailed description shown on the detail page |
| `jam` | object | No | Game jam info (see below) — optional, only present if game is from a jam |
| `date` | string (YYYY-MM-DD) | Yes | Date of the game (required for ordering) |
| `coverImage` | string | Yes | Relative path to the cover image (e.g., `assets/images/screenshots/my-game/cover.webp`) |
| `screenshots` | string[] | No | Array of relative paths to screenshot images. Minimum 0, typical 3–8. |
| `playUrl` | string (URL) | No | External Itch.io URL to play the game in-browser |
| `downloadUrl` | string (URL) | No | External Itch.io URL to download the game |

### Sub-entity: jam

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Name of the game jam |
| `url` | string (URL) | Yes | Link to the game jam's Itch.io page |

### Validation Rules

- `slug` must be unique across all games
- `slug` must match `^[a-z0-9]+(-[a-z0-9]+)*$`
- `date` is always required (used for ordering)
- `jam` is optional
- `coverImage` and entries in `screenshots` must reference existing files
- `playUrl` and `downloadUrl` are optional but at least one must be present

### Ordering

Games are sorted by `date`.

## Entity: Site Config

Not persisted in data file. Hardcoded in HTML:

| Field | Value |
|-------|-------|
| `siteName` | "pcosel" |
| `gamesPath` | "/games/" |
| `themeStorageKey` | "theme" (localStorage key) |
