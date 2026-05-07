# Feature Specification: Display Game Jam Themes

**Feature Branch**: `002-jam-theme-display`  
**Created**: 2026-05-07  
**Status**: Draft  
**Input**: User description: "For the games portfolio of my GitHub page, the theme of the respective game jam a game was part of should be directly visable to the user without going to the jams website. On the overview view the theme should be displayed next to the name of the jam and in the detail view it should be displayed underneath the jam name above the description."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Jam Theme on Overview Page (Priority: P1)

As a visitor browsing the games portfolio overview, I want to see the game jam theme displayed next to each jam's name on the game cards, so that I can understand what constraint or prompt each game was built under without leaving the page.

**Why this priority**: This is the primary entry point for understanding the context of each game. The overview is the first thing users see, so displaying themes here delivers immediate value.

**Independent Test**: Can be fully tested by navigating to `/games/` and verifying that each game card with an associated jam displays the jam theme alongside the jam name. Delivers the core value of surface-level context for each game.

**Acceptance Scenarios**:

1. **Given** a game has an associated game jam with a theme defined, **When** I view the games overview page, **Then** the jam theme is displayed next to the jam name on the game card
2. **Given** a game has an associated game jam but no theme is defined, **When** I view the games overview page, **Then** the card displays the jam name and date without a theme, and no broken or empty theme placeholder is visible
3. **Given** a game has no associated game jam (independent project), **When** I view the games overview page, **Then** the card displays only the date with no jam name or theme

---

### User Story 2 - View Jam Theme on Detail Page (Priority: P1)

As a visitor viewing a game's detail page, I want to see the game jam theme displayed beneath the jam name and above the game description, so that I have full context about the jam's prompt before reading about the game.

**Why this priority**: The detail page is the secondary entry point where users seek deeper information. Showing the theme in a prominent position here complements the overview and ensures the information is available regardless of navigation path.

**Independent Test**: Can be fully tested by navigating to `/games/?game=<slug>` for any game with a jam, and verifying the theme appears below the jam name and above the description. Delives complete context on the detail view.

**Acceptance Scenarios**:

1. **Given** a game has an associated game jam with a theme defined, **When** I view the game's detail page, **Then** the jam theme is displayed underneath the jam name and above the game description
2. **Given** a game has an associated game jam but no theme is defined, **When** I view the game's detail page, **Then** the page displays the jam name and date without a theme, and no broken or empty theme placeholder is visible
3. **Given** a game has no associated game jam, **When** I view the game's detail page, **Then** the page displays only the date with no jam name or theme

---

### User Story 3 - Specify Jam Theme When Adding a Game (Priority: P2)

As the site maintainer, I want to include the jam theme when I add a new game to the portfolio, so that the theme is immediately visible to visitors alongside the game information.

**Why this priority**: This enables the feature to work end-to-end but is secondary to the display functionality itself.

**Independent Test**: Can be fully tested by adding a new game entry with an associated jam theme, and confirming the theme appears correctly on both the overview card and the detail page on next page load.

**Acceptance Scenarios**:

1. **Given** I am adding a new game entry that was part of a game jam, **When** I include the jam theme alongside the jam name, **Then** the theme appears on both the overview card and the detail page
2. **Given** I am adding a new game entry that was part of a game jam but I do not know the theme, **When** I omit the theme, **Then** the jam name and date still display correctly without any empty placeholder or broken layout
3. **Given** a game entry already has a jam theme, **When** I correct the theme to the proper value, **Then** the updated theme is reflected on both views

---

### Edge Cases

- What happens when a jam theme is very long (e.g., a multi-clause prompt)?
- What happens when a jam theme contains special characters, quotes, or HTML-like content?
- How does the layout handle games with both a jam and theme alongside games without either, within the same overview list?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display the game jam theme next to the jam name in plain text enclosed in parentheses, e.g., *Jam Name (Theme)*
- **FR-002**: System MUST display the game jam theme next to the jam name in plain text enclosed in parentheses, e.g., *Jam Name (Theme)*, inline with the jam name and date in the detail view
- **FR-003**: System MUST gracefully omit the theme display when a jam has no theme defined, without showing empty placeholders or broken layout
- **FR-004**: System MUST gracefully omit theme display for games that have no associated game jam
- **FR-005**: Theme display MUST remain visually consistent with the existing page design (typography, spacing, color scheme) on both views
- **FR-006**: Theme display MUST adapt to the existing responsive layout (mobile and desktop breakpoints) without breaking card or detail page structure

### Key Entities

- **Jam Theme**: A short text string representing the theme or prompt of a game jam. Each game entry may optionally include a theme for its associated jam.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can identify the jam theme for any game with a defined theme at a glance on the overview page
- **SC-002**: Users can identify the jam theme for any game with a defined theme without scrolling on the detail page
- **SC-003**: 100% of games with a jam theme defined display the theme correctly on both overview and detail views
- **SC-004**: Games without a jam or without a defined theme render without visual artifacts, empty placeholders, or layout breaks
- **SC-005**: Adding or updating a jam theme in the data file requires zero code changes and is reflected immediately on page load
- **SC-006**: The theme display maintains visual consistency with existing page elements across desktop and mobile viewports

## Assumptions

- On the overview view, long jam themes are truncated with an ellipsis after 20 characters
- On the detail view, the full jam theme is displayed without truncation
- Jam themes are short text strings (typically a phrase or short sentence), not long paragraphs
- The existing data file (`data/games.json`) is the appropriate location to store jam themes, adding a `theme` field to the jam sub-object
- The site maintainer is comfortable editing the JSON data file to add or update themes
- Themes are denormalized per-game rather than managed in a separate jams data file, consistent with the existing pattern for jam data
- The existing single-page architecture with query-parameter routing remains unchanged
- No new external dependencies or libraries will be introduced
