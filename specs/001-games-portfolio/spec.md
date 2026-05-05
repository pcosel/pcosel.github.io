# Feature Specification: Games Portfolio

**Feature Branch**: `001-games-portfolio`  
**Created**: 2026-05-05  
**Status**: Draft  
**Input**: User description: "I want to build a static site for my personal github page. For now the site should contain a subdomain with a list of games I developed for various game jams ordered chronologically. Each entry of a game consists of a name, a short description, the specific game jam or date and a cover image. Each game has a detail page that can be accessed by clicking on the entry. The detail page contains all the information of the entry in the overview plus a detailed description, an image gallery with some screenshots and buttons to donwload or play the game. The image gallery consists of one big image at the top overlayed with arrows on either side to switch between the images and an overview of all the images at the bottom with a small thumbnail for each image. The site(s) should look modern, be responsive and fast."

## Clarifications

### Session 2026-05-05

- Q: Should the image gallery cycle at boundaries or stop? → A: Stop at boundaries (no cycling)
- Q: Chronological order direction for games list? → A: Newest first (reverse chronological)
- Q: What format should be used to define game data? → A: Single JSON/YAML data file listing all games
- Q: Which platform hosts the playable/downloadable game builds? → A: Primarily Itch.io
- Q: Should the site use a dark or light color scheme? → A: Both with a toggle switch
- Q: (Follow-up) Should game jam names link to the jam page? → A: Yes, game jam names link to the jam's Itch.io page

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Games Overview (Priority: P1)

As a visitor, I want to see a chronological list of all games on a dedicated page, so I can quickly scan the portfolio and pick games that interest me.

**Why this priority**: This is the primary entry point to the feature. Without the overview page, there is no way to discover individual games.

**Independent Test**: Navigating to `/games/` displays all games sorted chronologically, each showing name, short description, game jam/date, and a cover image. Clicking any entry navigates to that game's detail page.

**Acceptance Scenarios**:

1. **Given** I am on the games overview page, **When** I scroll through the list, **Then** I see all games ordered reverse chronologically (newest first) with name, short description, game jam/date, and cover image for each entry
2. **Given** I am on the games overview page, **When** I click a game entry, **Then** I am taken to that game's detail page
3. **Given** I am viewing the overview on a mobile device, **When** I scroll, **Then** the layout adapts properly and remains readable

---

### User Story 2 - View Game Detail Page (Priority: P2)

As a visitor interested in a specific game, I want to see a detailed page with screenshots, descriptions, and links to play or download it.

**Why this priority**: This delivers the core value—showcasing each game's details and providing access to play/download. Requires the overview (P1) to be navigable first.

**Independent Test**: With P1 complete, clicking any game from the overview loads a detail page showing the full description, an interactive image gallery with navigation arrows and thumbnails, and download/play buttons.

**Acceptance Scenarios**:

1. **Given** I am on a game detail page, **When** I view the page, **Then** I see the game name, full description, game jam/date, cover image, screenshot gallery, and download/play buttons
2. **Given** I am viewing the image gallery, **When** I click the left or right arrow, **Then** the main image switches to the previous or next screenshot
3. **Given** I am viewing the image gallery, **When** I click a thumbnail in the strip below, **Then** that image becomes the main displayed image
4. **Given** I am viewing the image gallery, **When** the main image changes (via arrow or thumbnail click), **Then** the corresponding thumbnail in the strip is visually highlighted to indicate the currently displayed image
5. **Given** I am on the detail page, **When** I click a download or play button, **Then** I am navigated to the corresponding external link

---

### User Story 3 - Navigate From Site Home to Games (Priority: P3)

As a visitor landing on the personal site homepage, I want to easily find the games section.

**Why this priority**: Provides discoverability from the site root. Lower priority since direct `/games/` URL access already works.

**Independent Test**: The homepage includes a navigation link to the games overview page.

**Acceptance Scenarios**:

1. **Given** I am on the site homepage, **When** I click the games link in navigation, **Then** I am taken to the games overview page

---

### Edge Cases

- Game has only one screenshot: gallery arrows are hidden, single thumbnail shown
- First image in gallery is displayed: left arrow is hidden
- Last image in gallery is displayed: right arrow is hidden
- Gallery has more than 5 images: the thumbnail strip is horizontally scrollable so all thumbnails remain accessible
- Game has no download link or no play link: only the available button(s) are shown
- Cover image or screenshot fails to load: a placeholder is displayed gracefully
- Very long game descriptions: text wraps and scrolls naturally without breaking layout
- No games added yet: overview shows a "no games yet" message instead of an empty page

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST have a games overview page at `/games/` listing all games ordered reverse chronologically (newest first)
- **FR-002**: Each game entry on the overview MUST display: name, short description, game jam or date (linked to the jam's Itch.io page when applicable), and a cover image
- **FR-003**: Each game MUST have a detail view accessible via `?game=<slug>` on the games page, reachable by clicking its overview entry
- **FR-004**: The detail view MUST display: game name, detailed description, game jam or date, and cover image
- **FR-005**: The detail view MUST include an image gallery with a large main image, left/right navigation arrows, and a thumbnail strip below
- **FR-008**: The detail view MUST include buttons to download and/or play the game, linking to external URLs
- **FR-009**: The site MUST include a homepage with navigation to the games section
- **FR-010**: The entire site MUST be fully static (HTML/CSS/JS files served directly, no server-side rendering)
- **FR-011**: The site MUST be responsive and display correctly on mobile, tablet, and desktop viewports
- **FR-012**: The site MUST load fast with minimal assets and no unnecessary dependencies
- **FR-013**: The site MUST support both a dark and a light color theme with a visible toggle switch to switch between them

### Key Entities

- **Game**: Represents a single game entry with attributes: name, short description, detailed description, game jam or date, cover image path, screenshot image paths, download URL (optional), play URL (optional)
- **Site Navigation**: Links connecting the homepage to the games overview and individual game detail pages

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A visitor can reach any game's detail page from the homepage within 3 clicks
- **SC-002**: The games overview page loads and becomes interactive within 2 seconds on a standard connection
- **SC-003**: The image gallery responds to arrow and thumbnail clicks without page reload
- **SC-004**: The site displays correctly at viewport widths of 320px (mobile), 768px (tablet), and 1440px (desktop) without horizontal scrolling or broken layout
- **SC-005**: Total page weight for the games overview is under 500KB (images excluded)

## Assumptions

- "Subdomain" refers to a URL path `/games/` rather than a literal DNS subdomain, consistent with GitHub Pages conventions
- Games are ordered newest-first (reverse chronological)
- Game data (names, descriptions, images, links) is stored in a single JSON or YAML data file, not a database or CMS
- External download and play links point to Itch.io
- The site supports both dark and light themes with a user-visible toggle; the toggle persists the user's preference
- Images will be optimized (compressed, appropriately sized) before being added to the site
