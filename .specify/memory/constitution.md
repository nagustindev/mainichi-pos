<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- Modified principles: N/A (new constitution scaffold replaced with final principles)
- Added sections: Core Principles, Quality Standards, Development Workflow
- Removed sections: placeholder scaffold tokens and example guidance
- Follow-up TODOs: none
-->

# Mainichi POS Constitution

## Core Principles

### I. Code Quality Is Non-Negotiable
Every feature, fix, and refactor MUST be readable, explicit, and maintainable. We favor clear naming, small functions, consistent structure, and reuse over cleverness. Code that cannot be understood by a teammate within a normal review cycle is considered incomplete.

Rationale: maintainability reduces defect risk and keeps the POS fast to evolve as business rules change.

### II. Test-First and Regression Safety
No behavior change is considered complete without a failing or updated test that captures the intended requirement before implementation. Unit, integration, and UI-level tests MUST cover critical sales flows, state transitions, and edge cases such as invalid quantities, empty cart states, and failed payment or inventory conditions.

Rationale: a POS system is operationally sensitive; untested changes create financial and customer-facing risk.

### III. User Experience Consistency
The interface MUST behave consistently across the sales flow, from catalog browsing to cart updates and checkout completion. Labels, actions, feedback, spacing, and state transitions MUST follow a coherent visual and interaction model and remain accessible to keyboard and screen-reader users.

Rationale: consistent user experience reduces confusion, improves speed of sale, and preserves trust during high-pressure transactions.

### IV. Performance Is a Product Requirement
The application MUST remain responsive for real-time sales operations under normal store load. Rendering, state updates, list filtering, and checkout flows MUST avoid unnecessary re-renders, heavy synchronous work, and blocking operations. Performance regressions MUST be measured and justified when they are intentional.

Rationale: slow interaction directly reduces cashier throughput and harms customer experience.

### V. Maintainability Through Review and Ownership
Changes MUST be reviewed for correctness, readability, accessibility, and product impact before merge. The team MUST document assumptions, edge cases, and trade-offs in code and PRs so that future contributors can safely maintain the system.

Rationale: POS software must remain stable across staff changes, seasonal promos, and operational refinements.

## Quality Standards
All work MUST follow the repository's linting and formatting rules, and any exception MUST be explained in the PR with a clear business or technical justification. Components MUST prefer reusable patterns, clearly scoped state, and deterministic data flow. Error states, empty states, and loading states MUST be visible and understandable to the cashier. Accessibility is a default requirement, not a follow-up item; focus states, labels, and contrast must meet product and WCAG-aligned expectations. Security-sensitive data, including payment or transaction details, MUST never be exposed in logs, UI state, or client-side debugging output.

## Development Workflow
Features and fixes MUST be developed in small, reviewable iterations with explicit acceptance criteria. Changes to product data, pricing logic, cart behavior, or checkout flow require validation against the real user journey and at least one regression check for the impacted path. Merges are allowed only when tests are green, reviews are completed, and the change does not introduce a user-visible regression or performance cliff. The team MUST keep documentation and comments current with behavior so the system remains understandable during onboarding and maintenance.

## Governance
This Constitution supersedes ad hoc development practices for Mainichi POS. Any amendment requires a documented rationale, a clear impact review, and agreement from the maintainers before the change becomes effective. Versioning follows semantic versioning: MAJOR for incompatible governance or principle changes, MINOR for added or materially expanded principles, and PATCH for clarifying or non-semantic refinements. Compliance is reviewed during pull requests, architecture decisions, and release readiness checks; if a change conflicts with this Constitution, the conflict MUST be resolved before merge. The project will maintain a single source of truth for governance in this document and will update the version and amendment date whenever a material change is made.

**Version**: 1.0.0 | **Ratified**: 2026-08-21 | **Last Amended**: 2026-08-21
