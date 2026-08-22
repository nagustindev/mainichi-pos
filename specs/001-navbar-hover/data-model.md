# Data Model: Navbar Hover Alignment

## Overview

This feature does not introduce new persistent data. The design operates on the existing navigation items and avatar information already used by the header.

## Entities

### NavigationItem
- **Purpose**: Represents one visible item in the top navigation bar.
- **Fields**:
  - `label`: Display text shown to the user.
  - `href` or equivalent destination: The target for the item.
  - `isActive`: Whether the item represents the current section.
  - `isHovered`: Whether the item is currently under pointer focus.
- **Validation Rules**:
  - Each item must remain visible in the expected order.
  - Each item must have a clear active and hover presentation.
  - Hover state must not remove or rename the item.
- **Notes**: The existing `li` structure is preserved rather than replaced.

### HeaderAvatar
- **Purpose**: Represents the user identity element shown at the right side of the header.
- **Fields**:
  - `imageSource`: Current avatar image, if available.
  - `fallbackLabel`: Short fallback text or initials.
  - `isVisible`: Whether the avatar is displayed in the header.
  - `isInteractive`: Whether the avatar can open its associated user menu.
- **Validation Rules**:
  - The avatar must stay visible in the top bar.
  - If the image is unavailable, the fallback must remain readable and recognizable.
- **Notes**: The avatar remains part of the existing user actions area.

### TopBarState
- **Purpose**: Captures the visible state of the header during interaction.
- **Fields**:
  - `activeItem`: The currently selected navigation item.
  - `hoveredItem`: The item currently receiving hover feedback.
  - `menuOpen`: Whether the avatar or user menu is open.
- **Validation Rules**:
  - Hover state must be temporary and must not override the active section indication.
  - State changes must not shift layout spacing or header height.
