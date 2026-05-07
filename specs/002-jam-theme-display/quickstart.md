# Quickstart: Display Game Jam Themes

## Adding a Theme to an Existing Game

Open `data/games.json` and add a `theme` field to the `jam` object of any game:

```json
"jam": {
  "name": "Ludum Dare 54",
  "url": "https://itch.io/jam/ludum-dare-54",
  "theme": "Your theme here"
}
```

The theme will appear:
- **Overview**: Next to the jam name on the game card, truncated at 20 characters
- **Detail**: Below the jam name, above the description, displayed in full

## Adding a New Game with a Theme

Include the `theme` field when adding a new game entry:

```json
{
  "slug": "my-new-game",
  "name": "My New Game",
  "shortDescription": "A brief description.",
  "description": "A longer description.",
  "jam": {
    "name": "Example Jam",
    "url": "https://itch.io/jam/example-jam",
    "theme": "The jam theme"
  },
  "date": "2026-01-01",
  "coverImage": "assets/images/my-new-game/cover.svg"
}
```

## Games Without a Theme

The `theme` field is optional. If omitted, the jam name and date display normally without any placeholder or visual artifact.
