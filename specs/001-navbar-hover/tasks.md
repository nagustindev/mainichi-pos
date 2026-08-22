---

description: "Task list for Navbar Hover Alignment"
---

# Tasks: Navbar Hover Alignment

**Input**: Design documents from `/specs/001-navbar-hover/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: No explicit test tasks were requested in the specification. Include a final lint and browser validation step in polish.

**Organization**: Tasks are grouped by user story to keep the navbar work independently understandable and shippable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel with other tasks that do not touch the same file
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the header surface and reference details before editing the component

- [X] T001 Review the current navbar structure and reference constraints in `src/components/layout/TopAppBar.jsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared header data and interaction shell that all stories rely on

- [X] T002 Define the navbar item metadata and lucide icon mapping inside `src/components/layout/TopAppBar.jsx`
- [X] T003 Preserve the avatar trigger and dropdown menu shell in `src/components/layout/TopAppBar.jsx`

**Checkpoint**: The header structure is ready for visual and interaction refinement.

---

## Phase 3: User Story 1 - Reference-Match Navigation Bar (Priority: P1) 🎯 MVP

**Goal**: Make the top bar visually resemble the provided reference image while keeping the existing app shell.

**Independent Test**: Open the app in a desktop browser and confirm the header composition, spacing, and hierarchy match the reference at a glance.

### Implementation for User Story 1

- [X] T004 [US1] Rebuild the top bar shell and spacing in `src/components/layout/TopAppBar.jsx`
- [X] T005 [US1] Align the brand block, navigation group, and right-side utilities to the reference layout in `src/components/layout/TopAppBar.jsx`

**Checkpoint**: User Story 1 should now present the new reference-aligned navbar.

---

## Phase 4: User Story 2 - Hover Feedback on Navigation Items (Priority: P2)

**Goal**: Add clear hover and focus feedback for the navigation items without disturbing layout.

**Independent Test**: Hover and keyboard-focus each navigation item and confirm the visual state changes immediately and consistently.

### Implementation for User Story 2

- [X] T006 [US2] Add hover and focus-visible styling for each navbar item in `src/components/layout/TopAppBar.jsx`
- [X] T007 [US2] Ensure the hover state stays visually distinct from the active state in `src/components/layout/TopAppBar.jsx`

**Checkpoint**: User Story 2 should now provide clear interaction feedback on every nav item.

---

## Phase 5: User Story 3 - Preserve Existing Navbar Items and Avatar (Priority: P3)

**Goal**: Keep the current `li` items and avatar visible and accessible in the updated header.

**Independent Test**: Confirm the same navigation items remain in the same order and the avatar still appears on the right side of the header.

### Implementation for User Story 3

- [X] T008 [US3] Keep the existing `li` navigation entries and order intact in `src/components/layout/TopAppBar.jsx`
- [X] T009 [US3] Keep the avatar trigger visible and reachable in the header utility area in `src/components/layout/TopAppBar.jsx`

**Checkpoint**: User Story 3 should now preserve the existing navigation and avatar behavior.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup across the navbar update

- [X] T010 [P] Verify the updated header against `specs/001-navbar-hover/quickstart.md` and run `pnpm lint` from `/home/agusdev/Proyectos/mainichi-pos`
- [X] T011 Remove any unused navbar imports or dead header constants in `src/components/layout/TopAppBar.jsx`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies - can start immediately
- **Phase 2 (Foundational)**: Depends on Phase 1 completion - blocks all user story work
- **Phase 3 (US1)**: Depends on Phase 2 completion
- **Phase 4 (US2)**: Depends on Phase 3 completion
- **Phase 5 (US3)**: Depends on Phase 4 completion
- **Phase 6 (Polish)**: Depends on all targeted user stories being complete

### User Story Dependencies

- **US1 (P1)**: Establishes the new navbar structure and is the MVP slice
- **US2 (P2)**: Builds on the new structure to add hover and focus feedback
- **US3 (P3)**: Confirms the updated header preserves the existing items and avatar

### Within Each User Story

- Update the shared header shell before refining interactions
- Apply hover and focus states before the final polish pass
- Keep file changes localized to `src/components/layout/TopAppBar.jsx` unless validation reveals a supporting cleanup need

### Parallel Opportunities

- T010 can run independently of T011 during the polish phase

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Stop and validate the header visually against the reference

### Incremental Delivery

1. Deliver US1 as the first visible improvement to the top bar
2. Add US2 hover feedback without changing the layout contract
3. Confirm US3 preservation of the current `li` items and avatar
4. Finish with lint and browser validation

### Parallel Team Strategy

1. One developer can prepare the header shell while another reviews reference spacing decisions
2. After the foundation is complete, one person can refine hover states while another validates avatar preservation
3. Polish validation can be split between lint and browser checks
