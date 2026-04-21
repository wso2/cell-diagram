# cell-diagram

A React component library that visualizes cell architectures.

## Installation

```bash
npm install @wso2/cell-diagram
```

## Basic usage

```tsx
import { CellDiagram } from '@wso2/cell-diagram';

<CellDiagram project={project} />;
```

## Theming (light / dark)

`<CellDiagram>` accepts an optional `mode` prop and, for advanced cases, a
`colors` prop that lets host applications drive the palette from the outside.
Defaults are unchanged — callers that don't pass `mode` get the original
light appearance.

### Switching modes

```tsx
import { CellDiagram } from '@wso2/cell-diagram';

// Follow the host application's theme.
<CellDiagram project={project} mode={isDarkTheme ? 'dark' : 'light'} />;
```

The library subscribes its internal styled components to an Emotion
`ThemeProvider`, so toggling `mode` re-renders the canvas live; zoom, layout
and selection state persist across the swap.

### Backstage example

```tsx
import { useTheme } from '@material-ui/core/styles';

export function CellDiagramTab({ project }) {
  const theme = useTheme();
  return (
    <CellDiagram
      project={project}
      mode={theme.palette.type === 'dark' ? 'dark' : 'light'}
    />
  );
}
```

### Per-token overrides

For host apps that want to snap accents to their own brand without giving up
the rest of the preset, pass `colors`:

```tsx
import { CellDiagram, CellDiagramColors } from '@wso2/cell-diagram';

const brandOverride: Partial<CellDiagramColors> = {
  PRIMARY: '#22D3EE',
  PRIMARY_HOVER: '#67E8F9',
};

<CellDiagram project={project} mode="dark" colors={brandOverride} />;
```

The full token set is exported as `CellDiagramColors` and the two presets as
`lightColors` / `darkColors`.

### What's themed and what isn't

Themed surfaces include the canvas background, all node types
(cell/component/connection/project/external), all link layers
(architecture/observability/diff), legend, controls and tooltips.

**Not themed**: brand language-icon SVGs (Java blue, Python yellow, NodeJS
green, etc.) — those are kept identity-colored in both modes.

## Migration from `0.2.x`

- The `Colors` enum at `@wso2/cell-diagram` was previously a TypeScript
  `enum`. From `0.3.0` it is a frozen object alias of `lightColors`. Value
  imports (`Colors.PRIMARY`) keep working unchanged. Type imports
  (`: Colors`) also keep working through a `type Colors = CellDiagramColors`
  alias.
- Callers that don't pass `mode` see no visual change.
