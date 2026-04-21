---
"@wso2/cell-diagram": minor
---

Add `mode` and `colors` props to `<CellDiagram>` for externally driven theming.

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
