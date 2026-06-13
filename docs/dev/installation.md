# Installation & Setup

Chekameh is a static site with no build step — getting it running locally just means cloning the repo and serving the files.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (for optional tooling)
- [Git](https://git-scm.com/)
- A modern browser (Chrome, Firefox, Safari, or Edge)
- A code editor — VS Code is recommended for the Live Server extension below

## Quick start

```bash
git clone https://github.com/MDaV05/PersianCultureMap.git
cd PersianCultureMap
npm install
```

Then serve the project with any of the options below and open it in your browser.

## Running a local server

The map needs to be served over `http://`, not opened directly as a file — MapLibre and the fonts won't load correctly under `file://`.

**VS Code Live Server** (recommended): install the "Live Server" extension, then right-click `index.html` and choose "Open with Live Server." It auto-refreshes on save.

**Python**:

```bash
python -m http.server 8000
```

**Node**:

```bash
npx http-server -p 8000
```

Either way, visit `http://localhost:8000` (or `:5500` for Live Server).

## Building the documentation site

This documentation is built with Zensical/MkDocs. To build or preview it locally:

```bash
pip install mkdocs mkdocs-material
mkdocs serve
```

## Troubleshooting

**Map doesn't load / console shows a CORS error** — make sure you're using `http://localhost`, not opening `index.html` directly from the filesystem.

**Fonts look wrong or are missing** — check that the Google Fonts `@import` in `styles.css` is reachable; this requires an internet connection on first load.

**Map tiles don't appear** — verify the MapLibre CDN links in `index.html` are loading (check the Network tab in DevTools) and that you have an internet connection.

**Port already in use** — pick a different port, e.g. `python -m http.server 8001`.

## Next steps

- [Architecture guide](architecture.md) — how the codebase is organized
- [API reference](api.md) — available functions and data structures
- [Contributing guide](contributing.md) — how to submit changes