# Data Model: Display Game Jam Themes

## Entities

### Jam Theme (field addition)

**Location**: `data/games.json` → `games[]` → `jam` → `theme`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `theme` | string | No | The theme or prompt of the game jam. Displayed in parentheses next to the jam name. |

**Constraints**:
- Optional field — games without a theme render normally
- Truncated to 20 characters with ellipsis on overview cards
- Displayed in full on detail page
- Maximum practical length: ~100 characters (single line on detail page)

**Example** (modified jam object):

```json
"jam": {
  "name": "Ludum Dare 54",
  "url": "https://itch.io/jam/ludum-dare-54",
  "theme": "Cozy catastrophe"
}
```

## Relationships

No new relationships. The `theme` field is a leaf attribute of the existing `jam` sub-object.

## Validation Rules

- `theme` must be a string
- If `jam` exists but `theme` is absent or null, theme display is omitted
- No server-side validation (static file); malformed data may cause display issues
