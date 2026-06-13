# Development Overview

This page covers the tech stack, project structure, and core features of Chekameh from a development perspective. For step-by-step setup, see the [installation guide](installation.md); for how the pieces fit together, see the [architecture guide](architecture.md).

## Project structure

```
PersianCultureMap/
├── index.html          # Entry point
├── data.js             # Eras, cities, and poet data
├── ui.js                # Panel system, state, event handling
├── styles.css           # Styling and design tokens
├── map/
│   └── map.js           # MapLibre initialization and controls
├── assets/
│   ├── fonts/
│   └── images/
├── docs/                 # This documentation site
└── package.json
```

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Mapping | MapLibre GL JS (4.7.1+) | Loaded from CDN |
| UI framework | Bootstrap 5.3.8 (RTL) | Responsive layout, RTL support |
| Application logic | Vanilla JavaScript (ES6+) | No build step required |
| Fonts | Vazirmatn, Lalezar, Cormorant Garamond, Roboto Mono | See [typography](../design/typography.md) |
| Documentation | Zensical / MkDocs | Static site generator |

## Browser support

Chekameh targets current versions of Chrome, Firefox, Safari, and Edge (90+), including their mobile equivalents. JavaScript must be enabled; no other runtime dependencies are required for end users.

## Core features

- **Interactive map** — pan, zoom, and historical border overlays via MapLibre, with city markers that change based on the selected era.
- **Time slider** — navigates between the six historical eras, triggering an `eraChanged` event that the map and UI both listen for.
- **Poet and city panels** — a single panel component renders city, poet, and work views, with a navigation stack for back/forward behavior.
- **Chatbot** — answers natural-language questions about poets, eras, and Persian literary history.

For the user-facing walkthrough of these features, see the [getting started guide](../guide/getting-started.md).

## Data and state

All content lives in `data.js` as three structures: `ERAS`, `CITIES` (each with nested `poets` and `works`), and runtime state (`currentEra`, `panelStack`, `cityMarkers`). The [architecture guide](architecture.md) covers how these interact, and the [API reference](api.md) documents the functions for working with them directly.

## Scalability

The current dataset ([X] poets, [X] cities, 6 eras) is well within what the map and panel system are designed for — the architecture comfortably supports significantly more without changes to the rendering logic.

## Next steps

- [Installation guide](installation.md) — set up a local environment
- [Architecture guide](architecture.md) — codebase structure and data flow
- [API reference](api.md) — function-level documentation
- [Contributing guide](contributing.md) — how to submit changes