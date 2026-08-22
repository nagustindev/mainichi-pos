# Implementation Plan: Navbar Hover Alignment

**Branch**: `001-navbar-hover` | **Date**: 2026-08-22 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-navbar-hover/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Refresh the top navigation bar so it visually matches the reference image, adds clear hover feedback, preserves the existing `li` navigation items, and keeps the avatar visible and usable. The implementation will reuse the current layout component and existing shadcn UI primitives, with lucide-react icons and the app's existing CSS/Tailwind styling approach.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript with React 19 in a Vite application

**Primary Dependencies**: React, shadcn UI primitives, lucide-react icons, Tailwind CSS 4

**Storage**: N/A

**Testing**: ESLint plus manual UI verification in the browser

**Target Platform**: Desktop web application

**Project Type**: Frontend web application

**Performance Goals**: Hover feedback should feel immediate and not introduce visible layout shift

**Constraints**: Preserve the existing CSS system, keep the current navigation items, and retain the avatar area in the header

**Scale/Scope**: Single global top navigation component used across the app shell

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The plan is compliant with the constitution because it keeps the change localized to the frontend layout, preserves accessibility and user experience consistency, and avoids introducing persistence, backend coupling, or broader architectural changes.

## Project Structure

### Documentation (this feature)

```text
specs/001-navbar-hover/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── layout/
│   │   ├── MainLayout.jsx
│   │   └── TopAppBar.jsx
│   └── ui/
│       ├── avatar.jsx
│       ├── button.jsx
│       └── dropdown-menu.jsx
├── features/
│   └── pos/
│       └── PosView.jsx
├── styles/
│   └── globals.css
└── main.jsx
```

**Structure Decision**: Update the existing layout component at [src/components/layout/TopAppBar.jsx](../../src/components/layout/TopAppBar.jsx) and reuse the current shadcn primitives under [src/components/ui](../../src/components/ui) so the navbar aligns with the reference without changing the app shell architecture.

## Complexity Tracking

No constitution violations require justification.
