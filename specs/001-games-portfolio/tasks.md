# Tasks: Games Portfolio

**Input**: Design documents from `/specs/001-games-portfolio/`
**Prerequisites**: plan.md, spec.md, data-model.md, research.md, quickstart.md

**Tests**: Omitted — not requested in feature specification.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic directory structure

- [ ] T001 Create project directories: `css/`, `js/`, `data/`, `assets/images/screenshots/`, `games/`
- [ ] T002 Create `data/games.json` with initial structure and sample game entries

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core site structure, shared styles, and theming that all user stories depend on

- [ ] T003 Create base `index.html` with common `<head>` structure, CSS links, and script references
- [ ] T004 [P] Create `css/main.css` with CSS reset, CSS custom properties for dark and light themes, typography, and responsive breakpoints (320px, 768px, 1440px)
- [ ] T005 [P] Create `js/theme-toggle.js` with dark/light toggle logic, `localStorage` persistence, and `[data-theme]` attribute switching on `<html>`
- [ ] T006 [P] Create `assets/placeholder.svg` as a fallback image for failed image loads

**Checkpoint**: Foundation ready — base HTML structure, shared styles, theme toggle, and placeholder image in place.

---

## Phase 3: User Story 1 - Browse Games Overview (Priority: P1) 🎯 MVP

**Goal**: Visitor can see a reverse-chronological list of all games with name, short description, game jam/date, and cover image on `/games/`

**Independent Test**: Navigate to `/games/` and verify all games are listed newest-first with correct information. Clicking any entry navigates to the detail view.

- [ ] T007 [US1] Create `games/index.html` with HTML shell for the overview section and script to fetch `data/games.json`
- [ ] T008 [US1] Implement overview rendering logic in `games/index.html`: parse JSON, sort by `date` descending, generate card elements with name, short description, cover image, and jam link (when applicable)
- [ ] T009 [US1] Implement overview click handling in `games/index.html`: clicking a game card navigates to `?game=<slug>` on the same page
- [ ] T010 [P] [US1] Create `css/overview.css` with card grid layout, responsive breakpoints (single column mobile, two-column tablet, three-column desktop), and card hover styles
- [ ] T011 [US1] Handle empty state in `games/index.html`: display "no games yet" message when `games.json` contains no entries
- [ ] T012 [US1] Handle image load errors in overview cards: attach `onerror` handler to fallback to `assets/placeholder.svg`

**Checkpoint**: Games overview is fully functional and independently testable.

---

## Phase 4: User Story 2 - View Game Detail Page (Priority: P2)

**Goal**: Visitor can view a detailed game page with full description, interactive image gallery, and Itch.io download/play buttons

**Independent Test**: Navigate to `/games/?game=<slug>` and verify all game details render, gallery works with arrow/thumb navigation, and external links open correctly.

- [ ] T013 [US2] Add detail view HTML structure to `games/index.html`: conditional rendering based on `?game=<slug>` query parameter, showing game name, detailed description, jam link, and date
- [ ] T014 [US2] Implement detail view data loading in `games/index.html`: fetch `data/games.json`, match by slug, populate detail elements
- [ ] T015 [P] [US2] Create `js/gallery.js` with gallery initialization, arrow click handlers (hide at boundaries, no cycling), thumbnail click handlers, active thumbnail highlighting, and horizontal scroll support for >5 images
- [ ] T016 [P] [US2] Create `css/detail.css` with detail page layout, gallery main image container with overlay arrows, thumbnail strip with active highlight state and horizontal scroll, download/play button styles
- [ ] T017 [US2] Implement download/play buttons in `games/index.html`: conditionally render based on `playUrl`/`downloadUrl` presence, link to Itch.io URLs
- [ ] T018 [US2] Handle missing game slug in `games/index.html`: display "game not found" message when slug doesn't match any entry
- [ ] T019 [US2] Handle single screenshot edge case in `js/gallery.js`: hide gallery arrows, show single thumbnail
- [ ] T020 [US2] Handle image load errors in gallery in `js/gallery.js`: fallback to `assets/placeholder.svg` on error

**Checkpoint**: Game detail view with full gallery and action buttons is functional.

---

## Phase 5: User Story 3 - Navigate From Site Home to Games (Priority: P3)

**Goal**: Visitor landing on the homepage can easily find and navigate to the games section

**Independent Test**: Open `index.html` and click the games navigation link — should navigate to `/games/`

- [ ] T021 [US3] Update `index.html` with site title, navigation bar, and link to `games/index.html`
- [ ] T022 [P] [US3] Add consistent navigation header to `games/index.html` with home link back to `index.html`
- [ ] T023 [US3] Style navigation and homepage in `css/main.css` with modern appearance and responsive behavior

**Checkpoint**: Homepage and cross-page navigation are complete.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements affecting the entire site

- [ ] T024 Polish responsive design: audit `css/overview.css`, `css/detail.css`, and `css/main.css` at 320px, 768px, and 1440px viewports
- [ ] T025 Polish dark theme styling: ensure all components (cards, gallery, buttons, navigation) have correct dark-mode colors in `css/main.css`, `css/overview.css`, `css/detail.css`
- [ ] T026 Polish long text handling: ensure long descriptions wrap and scroll naturally in both overview and detail views
- [ ] T027 Validate total page weight of `games/index.html` is under 500KB (excluding images per SC-005)
- [ ] T028 Update `README.md` with site description and quick instructions

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup — blocks all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational — no other story dependencies
- **User Story 2 (Phase 4)**: Depends on Foundational + US1 (shares `games/index.html`)
- **User Story 3 (Phase 5)**: Depends on Foundational — independent of US1/US2 content
- **Polish (Phase 6)**: Depends on all user stories complete

### Parallel Opportunities

- T004, T005, T006 can run in parallel (Phase 2)
- T010, T013, T014, T015, T016, T017 can partially parallelize within their phases where file paths differ
- T022, T023 can run in parallel (Phase 5)
- T024, T025, T026 can run in parallel (Phase 6)

### Within Each User Story

- HTML structure before JavaScript logic
- CSS before integration polish
- Core functionality before edge case handling

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 — games overview with cards, ordering, and detail navigation
4. **STOP and VALIDATE**: Overview page works independently

### Incremental Delivery

1. Setup + Foundational → base site ready
2. Add US1 → games overview (MVP)
3. Add US2 → detail view with gallery
4. Add US3 → homepage navigation
5. Polish → responsive audit, theme refinement, final cleanup
