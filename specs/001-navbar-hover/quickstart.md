# Quickstart: Navbar Hover Alignment

## Purpose

Validate the updated top navigation bar against the reference image, the hover behavior, and the preserved avatar and navigation items.

## Prerequisites

- The project dependencies are installed.
- The app runs locally in the browser.
- The feature branch `001-navbar-hover` is available.

## Validation Steps

1. Start the app with the standard development command.
2. Open the application in a desktop-sized browser window.
3. Confirm the top bar visually matches the reference layout closely enough to recognize the same structure, spacing, and hierarchy.
4. Move the pointer across each navigation item and verify that hover feedback appears immediately.
5. Confirm that hover feedback does not move the header, resize the bar, or disturb adjacent items.
6. Verify that the existing navigation items are still present in the same order.
7. Verify that the avatar remains visible on the right side of the header.
8. Trigger the avatar interaction, if available, and confirm it still behaves like a user entry point.
9. Run the repository lint command to confirm the change does not introduce style or syntax issues.

## Expected Results

- The navbar matches the reference style at a glance.
- Hover feedback is visible for every interactive navigation item.
- The `li` navigation items remain intact.
- The avatar stays visible and accessible.
- No validation step introduces layout instability or broken spacing.

## References

- Spec: [spec.md](spec.md)
- Technical decisions: [research.md](research.md)
- Interaction model: [data-model.md](data-model.md)
