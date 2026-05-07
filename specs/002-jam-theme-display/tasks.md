# Tasks: Display Game Jam Themes

**Input**: Design documents from `/specs/002-jam-theme-display/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: None requested in specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Foundational (Blocking Prerequisites)

**Purpose**: Data model update and shared rendering logic required before any user story can display themes.

**CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T001 Add `theme` field to three of the four sample games with jams in `data/games.json` (nebula-drift, last-light, void-runners) with realistic theme strings; leave pixel-fishing without a theme to test the "jam exists but no theme" edge case
- [ ] T002 Add an `escapeHtml` helper function to `games/index.html` that replaces `<`, `>`, `&`, and `"` with their HTML entities; modify `renderJamOrDate` (lines 84-92) to include `escapeHtml(game.jam.theme)` in parentheses after the jam name when present, using the `asLink` parameter to control truncation: truncate theme to 20 characters with `…` suffix when `asLink` is false (overview), display full theme when `asLink` is true (detail)

**Checkpoint**: Foundation ready — jam themes render in both views; user story styling can now proceed.

---

## Phase 2: User Story 1 - View Jam Theme on Overview Page (Priority: P1) [MVP]

**Goal**: Display the jam theme next to the jam name on game cards in the overview view, truncated at 20 characters.

**Independent Test**: Navigate to `/games/` and verify each game card with a jam displays the theme in parentheses next to the jam name, with long themes truncated at 20 characters and no visual artifacts for games without themes.

- [ ] T003 [US1] Add a `.card-theme` CSS class in `css/overview.css` for the theme `<span>` wrapper within `.card-meta` (truncation is handled by JS in T002, CSS only provides consistent visual styling matching `.card-meta` font size and color)

**Checkpoint**: User Story 1 complete — overview cards display truncated jam themes correctly.

---

## Phase 3: User Story 2 - View Jam Theme on Detail Page (Priority: P1)

**Goal**: Display the full jam theme beneath the jam name and above the game description on the detail view.

**Independent Test**: Navigate to `/games/?game=nebula-drift` and verify the theme appears in parentheses below the jam name, above the description, displayed in full without truncation.

- [ ] T004 [US2] Verify `.detail-meta` styling in `css/detail.css` accommodates the theme text in parentheses without additional CSS changes; add theme-specific styling only if visual consistency requires it

**Checkpoint**: User Story 2 complete — detail pages display full jam themes correctly.

---

## Phase 4: User Story 3 - Specify Jam Theme When Adding a Game (Priority: P2)

**Goal**: Ensure the data pattern for adding themes is clear and documented so the site maintainer can include themes when adding new games.

**Independent Test**: Add a new game entry with a jam theme to `data/games.json` and confirm it appears on both overview and detail views without code changes.

- [ ] T005 [US3] Verify `specs/002-jam-theme-display/quickstart.md` accurately documents the `theme` field pattern for adding games with jam themes

**Checkpoint**: User Story 3 complete — maintainer documentation reflects theme field usage.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and consistency checks.

- [ ] T006 Verify visual consistency of theme display across desktop and mobile viewports (test at 480px breakpoint) in `css/overview.css` and `css/detail.css`
- [ ] T007 Verify games without a jam (`echo-chamber`) and games with a jam but no theme render without empty placeholders or layout breaks

---

## Dependencies & Execution Order

### Phase Dependencies

- **Foundational (Phase 1)**: No dependencies — start immediately
- **User Story 1 (Phase 2)**: Depends on Foundational completion
- **User Story 2 (Phase 3)**: Depends on Foundational completion (can parallel with US1)
- **User Story 3 (Phase 4)**: Depends on all display phases being complete
- **Polish (Phase 5)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Depends on Phase 1 — modifies `css/overview.css`
- **US2 (P1)**: Depends on Phase 1 — modifies `css/detail.css` (parallel with US1, different files)
- **US3 (P2)**: Depends on Phase 1 and 2 — documentation verification only

### Parallel Opportunities

- T003 [US1] and T004 [US2] can run in parallel (different CSS files, no shared dependencies after Phase 1)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Foundational (data + rendering)
2. Complete Phase 2: User Story 1 (overview CSS)
3. **STOP and VALIDATE**: Navigate to `/games/` and verify themes appear on cards
4. Deploy/demo if ready

### Incremental Delivery

1. Phase 1 → Foundation ready
2. Phase 2 → Overview themes visible (MVP)
3. Phase 3 → Detail themes visible
4. Phase 4 → Documentation verified
5. Phase 5 → Polish and cross-check

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- Each user story is independently completable and testable
- Commit after each phase
- Stop at checkpoints to validate independently
