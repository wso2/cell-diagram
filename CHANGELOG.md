# @wso2/cell-diagram

## 0.3.1

### Patch Changes

- d590506: Refine the dark preset for better readability and Material 3 alignment.

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

## 0.3.0

### Minor Changes

- 8d3bd1b: Add `mode` and `colors` props to `<CellDiagram>` for externally driven theming.

  - `mode?: 'light' | 'dark'` — defaults to `'light'` so existing callers see no
    visual change. Pass `'dark'` to render the diagram with the new dark
    preset.
  - `colors?: Partial<CellDiagramColors>` — merge per-token overrides on top
    of the active preset. Useful for snapping the diagram's accents to a host
    application's brand palette.

  The new `CellDiagramColors`, `CellDiagramThemeMode`, `lightColors`, and
  `darkColors` exports allow advanced consumers to introspect or build their
  own palettes.

  Internally the library now wraps its tree in an Emotion `ThemeProvider` so
  all styled components receive their colors through `theme.colors.*`. The
  historical `Colors` enum is retained as a frozen object alias of
  `lightColors`, so any code importing `Colors` directly continues to compile
  and renders the light palette.

  Brand language-icon SVGs (Java blue, Python yellow, etc.) are intentionally
  kept identity-colored in both modes.

## 0.2.0

### Minor Changes

- 7e02edc: Upgrade react version to 18

## 0.1.0

### Minor Changes

- ed50cff: pre-release

## 0.1.0

### Minor Changes

- c96259a: pre-release
