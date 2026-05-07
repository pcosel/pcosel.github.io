# Research: Display Game Jam Themes

## Summary

No external research was required. The feature operates entirely within the existing codebase patterns. All technical decisions are derived from direct examination of the current implementation.

## Decision: Extend existing renderJamOrDate function

**Rationale**: The `renderJamOrDate` function in `games/index.html` (lines 84-92) is the single point where jam information is rendered for both overview and detail views. Extending this function with a theme parameter is the minimal change required, avoiding duplication.

**Alternatives considered**:
- Creating a separate `renderJamTheme` function — unnecessary for a single-line display addition
- Modifying `renderOverview` and `renderDetail` separately — would duplicate theme logic

## Decision: Truncate at 20 characters on overview cards

**Rationale**: Overview cards have limited horizontal space (image takes 200px fixed, remaining space for text). A 20-character truncation with CSS ellipsis keeps cards visually consistent without requiring dynamic layout adjustments. The full theme remains visible on the detail page.

**Alternatives considered**:
- No truncation — risks uneven card heights and text overflow on mobile
- Line-clamp truncation — more complex for a single-line meta element; character limit with CSS `text-overflow: ellipsis` is simpler and sufficient

## Decision: Plain text in parentheses styling

**Rationale**: Matches the existing `.card-meta` and `.detail-meta` styling conventions. The existing `.card-meta` class uses `font-size: 0.8rem` and `color: var(--text-muted)`, which is appropriate for theme display without introducing new CSS classes.

**Alternatives considered**:
- New CSS class for theme — adds maintenance overhead for a trivial style difference
- Bold or highlighted theme — would compete with jam name for visual attention

## Decision: Add theme to data/games.json jam sub-object

**Rationale**: Consistent with existing pattern where jam data (`name`, `url`) lives inline per game. No separate jams data file exists, and creating one would be out of scope.

**Alternatives considered**:
- Separate `data/jams.json` file — unnecessary complexity, no other feature requires jam-independent data
