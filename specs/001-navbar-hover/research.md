# Research: Navbar Hover Alignment

## Decision 1: Reuse the existing layout shell
- Decision: Implement the change inside the current top application bar and keep the rest of the app shell intact.
- Rationale: The feature is a visual and interaction update to a single header surface, so changing the existing layout component minimizes risk and keeps the work easy to review.
- Alternatives considered: Creating a new header system or refactoring the whole layout; both were rejected because they would add scope without improving the navbar behavior.

## Decision 2: Use the current shadcn UI primitives
- Decision: Keep the avatar, button, and dropdown menu primitives already present in the codebase.
- Rationale: The project already uses shadcn components, so reusing them preserves style consistency and avoids introducing parallel UI patterns.
- Alternatives considered: Rebuilding the header controls with custom markup only; rejected because it increases maintenance and makes visual consistency harder to preserve.

## Decision 3: Use lucide-react for iconography
- Decision: Use lucide-react icons for navbar affordances and section labels.
- Rationale: The dependency is already installed and matches the visual language used by modern shadcn-based interfaces.
- Alternatives considered: Inline SVGs or a separate icon package; rejected because they add unnecessary duplication and styling overhead.

## Decision 4: Preserve the existing CSS and utility workflow
- Decision: Keep the current Tailwind and global CSS setup and layer the navbar update on top of it.
- Rationale: The existing app already ships with a coherent theme, typography, and spacing system, so the navbar should conform to that system rather than introduce a new one.
- Alternatives considered: Introducing a new stylesheet or a separate design system for the header; rejected because it would fragment the visual language.

## Decision 5: Validate with visual and lint checks
- Decision: Treat linting plus direct browser verification of hover, active, and avatar states as the acceptance method for the planning phase.
- Rationale: The feature is primarily visual, so browser-level validation is the best way to confirm the expected interaction.
- Alternatives considered: Adding contract-style artifacts or backend checks; rejected because the feature is fully frontend-local.
