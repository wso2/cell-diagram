---
"@wso2/cell-diagram": patch
---

Refine the dark preset for better readability and Material 3 alignment.

- Decouple `OUTLINE` (container chrome) from `ON_SURFACE_VARIANT` (text
  labels) so dimming the cell octagon no longer dims component labels.
  `ComponentName`, `PortLabel`, `IconWrapper`, and `TopIconWrapper` now
  read `ON_SURFACE_VARIANT`; the cell boundary and port rims continue to
  use `OUTLINE`.
- Default cell and component link strokes fall back to `OUTLINE` instead
  of `ON_SURFACE_VARIANT`, so they recede with the rest of the container
  chrome.
- Retune dark tokens: lift `SURFACE` and surrounding neutrals toward
  Material 3 elevation guidance; brighten `PRIMARY`/`SECONDARY` one tone
  for dark surfaces; dim `OUTLINE` to quiet the cell frame; brighten
  `ON_SURFACE_VARIANT` for AA label contrast.

Light mode is visually unchanged.
