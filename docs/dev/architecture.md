# 🏗️ Architecture Guide

Deep dive into the Chekameh codebase architecture and design patterns.

## 🎯 Architecture Overview

Chekameh follows a **modular component-based architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                   USER INTERFACE LAYER                   │
│  (HTML Structure, CSS Styling, Panel System)             │
└──────────────────┬──────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────┐
│              APPLICATION LOGIC LAYER                    │
│  (ui.js - Events, State, Panel Navigation)             │
└──────────────────┬──────────────────────────────────────┘
                   │
      ┌────────────┼────────────┐
      │            │            │
┌─────▼─────┐  ┌──▼──────┐  ┌──▼──────────┐
│  Map      │  │ Timeline │  │  Chatbot   │
│  Layer    │  │  Logic   │  │  Integration│
│ (map.js)  │  │          │  │            │
└─────┬─────┘  └──┬───────┘  └──┬────────┘
      │           │            │
┌─────▼───────────▼────────────▼─────────┐
│          DATA LAYER                     │
│  (data.js - Eras, Cities, Poets)       │
└─────────────────────────────────────────┘
```

---

## 📁 File Organization

### Core Files

#### `index.html` (Entry Point)

- Main HTML structure
- Header with timeline
- Map container
- Panel overlay
- Legend
- Script references

#### `data.js` (Data Store)

- ERAS array - 6 historical periods
- CITIES array - City locations and metadata
- POETS array - Poet details and works
- Static data (doesn't require database)

#### `ui.js` (User Interactions)

- Panel rendering system
- Event listeners
- State management
- Navigation logic

#### `map/map.js` (Map Component)

- MapLibre GL JS initialization
- Marker creation
- Map controls
- Historical borders
- City interactions

#### `styles.css` (Styling)

- CSS variables (colors, fonts)
- Component styles
- Responsive design
- Animations

---

## 🔄 Data Flow Architecture

### State Management Flow

```
User Action
    ↓
Event Listener (ui.js)
    ↓
Update Global State
  - currentEra
  - panelStack
    ↓
Render Function
    ↓
Query Data (data.js)
    ↓
Update DOM
    ↓
Visual Feedback to User
```

### Example: Clicking a Time Slider

```
1. User clicks slider
   ↓
2. 'input' event fires
   ↓
3. updateEra(newIndex) called
   ↓
4. currentEra = newIndex
   ↓
5. DOM updates:
   - era-name
   - era-years
   - era-badge
   ↓
6. Broadcast eraChanged event
   ↓
7. Map listens to event
   ↓
8. Map updates city markers for new era
```

---

## 🎨 Component Architecture

### Panel System (ui.js)

#### Core Functions

```javascript
// Open/Close
openOverlay(); // Show panel
closePanel(); // Hide panel and reset

// Navigation
goBack(); // Return to previous view
panelStack; // Maintains history

// Rendering
renderPanel(); // Update panel content
```

#### Panel Types

**City View**

```
City Panel
├── Eyebrow (CITY)
├── Title (City name in Persian/English)
├── Subtitle (Era name)
└── Body (List of poet cards)
    └── Poet Cards (clickable)
```

**Poet View**

```
Poet Panel
├── Eyebrow (POET)
├── Title (Poet name)
├── Subtitle (Dates)
├── Body
│   ├── Biography
│   └── Works List
│       └── Work Cards (clickable)
```

**Work View**

```
Work Panel
├── Eyebrow (WORK)
├── Title (Work name)
├── Subtitle (Era)
└── Body (Poem text with translations)
```

### Map Component (map/map.js)

#### Initialization

```javascript
initMap()
├── Create MapLibre instance
├── Set initial bounds
├── Add controls
├── Add historical borders
└── Setup event listeners
```

#### Marker Management

```javascript
createCityMarkers()
├── Filter cities by era
├── Create HTML markers
├── Position on map
└── Add click handlers
```

### Timeline Component (ui.js)

```javascript
setupTimeline()
├── Initialize slider DOM
├── Set min/max values
└── Add input listeners

updateEra(index)
├── Update currentEra
├── Update DOM elements
└── Dispatch eraChanged event
```

---

## 🗄️ Data Structure

### ERAS Array

```javascript
const ERAS = [
  {
    name: "دوره‌ی سامانی", // Persian name
    nameEn: "Samanid Era", // English name
    years: "875 – 1000 CE", // Time period
  },
  // ... more eras
];
```

### CITIES Array

```javascript
const CITIES = [
  {
    id: "bukhara", // Unique identifier
    name: "بخارا", // Persian name
    nameEn: "Bukhara", // English name
    lat: 39.77, // Latitude
    lon: 64.42, // Longitude
    x: 320, // SVG X coordinate (optional)
    y: 180, // SVG Y coordinate (optional)
    eras: [0, 1, 2, 3], // Applicable era indices
    poets: [
      // Poets in this city
      {
        id: "rudaki",
        name: "رودکی",
        nameEn: "Rudaki",
        dates: "858 – 941 CE",
        emoji: "📜",
        bio: "Biography text...",
        works: [
          {
            name: "Work name",
            nameEn: "English name",
            desc: "Description",
            lines: ["Line 1", "Line 2"],
          },
        ],
      },
    ],
  },
  // ... more cities
];
```

---

## 🔀 Event System

### Global Events

```javascript
// Dispatched when era changes
document.dispatchEvent(
  new CustomEvent("eraChanged", {
    detail: eraIndex,
  }),
);

// Listening for era changes
document.addEventListener("eraChanged", (e) => {
  updateMapMarkers(e.detail);
});
```

### Event Flow

```
UI Layer              Application Layer    Data Layer
────────────────────────────────────────────────────────
User Click ─────→ Event Listener
                       │
                       ├─→ Update State
                       │
                       ├─→ Query Data (CITIES, POETS)
                       │
                       ├─→ Render UI
                       │
                       └─→ Dispatch Event ──→ Map Listens
                                               │
                                               └─→ Update Map
```

---

## 🎯 Key Design Patterns

### 1. **State-Driven Architecture**

- Single source of truth (ERAS, CITIES, POETS)
- Global state (currentEra, panelStack)
- Re-render on state change

### 2. **Event-Driven Communication**

- Components communicate via events
- Decoupled modules
- Easy to extend

### 3. **Modular Organization**

- Separation of concerns
- Each file has single responsibility
- Easy to test and maintain

### 4. **Data-Driven Rendering**

- Render from data, not hardcoded HTML
- Template-like functions
- Dynamic content generation

---

## 🔌 Extension Points

### Adding New Features

#### 1. New Poet

```javascript
// Edit data.js
const CITIES = [
  {
    // ... existing city
    poets: [
      // ... existing poets
      {
        id: "new-poet",
        name: "نام",
        // ... poet data
      },
    ],
  },
];
```

#### 2. New Era

```javascript
// Edit data.js
const ERAS = [
  // ... existing eras
  {
    name: "دوره‌ی جدید",
    nameEn: "New Era",
    years: "XXXX – XXXX CE",
  },
];

// Update cities to include new era index
// Update poets' associations
```

#### 3. New Panel Type

```javascript
// Edit ui.js - Add to renderPanel()
else if (type === "my-new-type") {
  eyebrow.textContent = "NEW TYPE";
  title.textContent = data.title;
  // ... render logic
}
```

#### 4. New Map Feature

```javascript
// Edit map/map.js
function addNewFeature() {
  // Initialize MapLibre control
  // Add to map
  // Setup event handlers
}
```

---

## 🧪 Testing Architecture

### Unit Testing

- Individual functions tested in isolation
- Data transformation logic
- UI rendering functions

### Integration Testing

- Component interactions
- Event propagation
- Data flow

### E2E Testing

- Full user workflows
- Browser compatibility
- Mobile responsiveness

---

## ⚡ Performance Optimization

### Current Optimizations

- Lazy rendering of DOM
- Efficient data queries
- Minimal repaints
- CSS transitions instead of JS animations

### Scalability

- Can handle 100+ poets
- Can display 50+ markers
- Modular code supports expansion

### Browser Caching

- Static assets cached
- Long-term versioning possible
- Service workers ready

---

## 🔐 Security Architecture

### Data Security

- All data is public (open-source)
- No sensitive user data collected
- No database vulnerabilities
- Static site = no injection risks

### CDN Security

- HTTPS enforced
- Trusted CDN providers
- Regular dependency updates

---

## 📊 Dependency Graph

```
index.html
├── styles.css
├── data.js
├── ui.js (depends on data.js)
├── map/map.js (depends on data.js)
└── External Libraries
    ├── MapLibre GL JS (from CDN)
    ├── Bootstrap 5 RTL (from npm)
    └── Google Fonts
```

---

## 🔄 Update Flow

When data changes:

```
data.js (CITIES array updated)
    ↓
renderPanel() re-reads data
    ↓
createCityMarkers() updates map
    ↓
UI reflects changes
```

---

## 🚀 Deployment Architecture

```
Local Development
    ↓
Git Repository (GitHub)
    ↓
Build Process (Optional: Minify, Optimize)
    ↓
Static Hosting (Netlify, Vercel)
    ↓
CDN (Global Distribution)
    ↓
End User Browser
```

---

## 📚 Related Documentation

- [Installation Guide](installation.md)
- [API Reference](api.md)
- [Contributing Guide](contributing.md)
- [Development Overview](overview.md)

---

**Understanding the architecture helps you contribute effectively!** 🚀
