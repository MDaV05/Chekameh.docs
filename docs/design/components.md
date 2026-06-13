# 🧩 Component System

Comprehensive documentation of UI components used throughout Chekameh.

---

## 🎯 Component Philosophy

Our components are:

- **Simple** - Easy to understand and use
- **Accessible** - WCAG 2.1 AA compliant
- **Responsive** - Work on all devices
- **Maintainable** - Clear structure and documentation
- **Reusable** - Used consistently throughout the site

---

## 🎨 Core Components

## Buttons

### Primary Button

Used for main actions and calls-to-action.

```html
<button class="btn btn-primary">Click Me</button>
```

**CSS**:

```css
.btn-primary {
  background-color: var(--turquoise);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: var(--font-persian);
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: var(--turquoise-dark);
}

.btn-primary:active {
  transform: scale(0.98);
}
```

**States**:

- **Normal** - Default appearance
- **Hover** - Darker turquoise
- **Active** - Slight scale down
- **Disabled** - Grayed out

---

### Secondary Button

Used for less prominent actions.

```html
<button class="btn btn-secondary">Secondary Action</button>
```

**CSS**:

```css
.btn-secondary {
  background-color: var(--gold);
  color: var(--ink);
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: var(--gold-dark);
}
```

---

### Ghost Button

Minimal button style, often for secondary actions.

```html
<button class="btn btn-ghost">Cancel</button>
```

**CSS**:

```css
.btn-ghost {
  background-color: transparent;
  border: 2px solid var(--turquoise);
  color: var(--turquoise);
  padding: 10px 22px;
  border-radius: 4px;
}

.btn-ghost:hover {
  background-color: var(--turquoise-lighter);
}
```

---

## 📋 Cards

### Poet Card

Displays a single poet with basic information.

```html
<div class="poet-card">
  <div class="poet-emoji">📜</div>
  <h3 class="poet-name">رودکی</h3>
  <p class="poet-name-en">Rudaki</p>
  <p class="poet-dates">858 – 941 CE</p>
  <p class="poet-cities">Bukhara</p>
</div>
```

**CSS Structure**:

```css
.poet-card {
  padding: 16px;
  background: var(--cream);
  border: 1px solid var(--gray-light);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.poet-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--turquoise);
}

.poet-emoji {
  font-size: 32px;
  margin-bottom: 12px;
}

.poet-name {
  font-family: var(--font-heading);
  font-size: 18px;
  margin: 8px 0;
  text-align: right;
}
```

---

### Work Card

Displays a single literary work.

```html
<div class="work-card">
  <h4 class="work-name">نام اثر</h4>
  <p class="work-name-en">Work Title</p>
  <p class="work-description">Brief description of the work...</p>
</div>
```

---

## 🎨 Panels

### Panel Container

Main container for displaying content overlays.

```html
<div id="panel" class="panel">
  <header class="panel-header">
    <div class="panel-eyebrow">POET</div>
    <button class="panel-back">←</button>
    <button class="panel-close">✕</button>
  </header>
  <main id="panel-body" class="panel-body">
    <!-- Content here -->
  </main>
</div>
```

**CSS**:

```css
.panel {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  max-width: 100%;
  height: 100vh;
  background: var(--white);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.panel.open {
  transform: translateX(0);
}

@media (max-width: 768px) {
  .panel {
    width: 100%;
  }
}
```

---

### Panel Header

Navigation and title area.

```css
.panel-header {
  padding: 16px;
  background: var(--cream);
  border-bottom: 2px solid var(--turquoise);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel-eyebrow {
  font-size: 12px;
  font-weight: bold;
  color: var(--turquoise);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.panel-back,
.panel-close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--turquoise);
}
```

---

### Panel Body

Content area.

```css
.panel-body {
  padding: 24px;
  direction: rtl;
}

.panel-body h2 {
  font-size: 24px;
  margin-bottom: 8px;
  font-family: var(--font-heading);
}

.panel-body p {
  margin: 12px 0;
  line-height: 1.6;
  color: var(--ink-light);
}
```

---

## 📊 Timeline/Slider

### Timeline Slider

Interactive era selection control.

```html
<div class="timeline">
  <input
    type="range"
    id="timeline-slider"
    class="slider"
    min="0"
    max="5"
    value="0"
  />
  <div class="timeline-labels">
    <span class="timeline-label">875</span>
    <span class="timeline-label">1736</span>
  </div>
</div>
```

**CSS**:

```css
.timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--gray-light);
  outline: none;
  -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--turquoise);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--turquoise);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

---

## 🗺️ Map Components

### Map Container

The MapLibre GL JS map instance holder.

```html
<div id="map" class="map-container"></div>
```

**CSS**:

```css
.map-container {
  width: 100%;
  height: calc(100vh - 80px); /* Full height minus header */
  background: var(--cream);
  position: relative;
}

.maplibregl-ctrl-top-right {
  top: 20px;
  right: 20px;
}
```

---

### Map Controls

Zoom and navigation controls.

**Built into MapLibre GL JS**:

- Zoom in/out buttons
- Navigation control
- Fullscreen toggle
- Custom controls possible

---

## 📱 Header

### Header Component

Main navigation and branding area.

```html
<header class="app-header">
  <div class="header-left">
    <h1 class="app-title">
      <span class="title-persian">نقشه‌ی شعر پارسی</span>
      <span class="title-english">Persian Poetry Map</span>
    </h1>
  </div>

  <div class="header-right">
    <div class="era-display">
      <div class="era-name">دوره‌ی سامانی</div>
      <div class="era-years">875 – 1000 CE</div>
    </div>
    <div class="timeline">
      <!-- Timeline slider -->
    </div>
  </div>
</header>
```

**CSS**:

```css
.app-header {
  background: var(--cream);
  border-bottom: 2px solid var(--turquoise);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.app-title {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title-persian {
  font-family: var(--font-heading);
  font-size: 24px;
  color: var(--turquoise);
}

.title-english {
  font-size: 14px;
  color: var(--ink-light);
  font-family: var(--font-english);
}
```

---

## 🎯 Badge Components

### Era Badge

Visual indicator for historical era.

```html
<span class="era-badge era-1">Era 1</span>
```

**CSS**:

```css
.era-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: bold;
  color: white;
}

.era-1 {
  background: #1976d2;
} /* Blue */
.era-2 {
  background: #388e3c;
} /* Green */
.era-3 {
  background: #7b1fa2;
} /* Purple */
.era-4 {
  background: #f57c00;
} /* Orange */
.era-5 {
  background: #d32f2f;
} /* Red */
.era-6 {
  background: #c2185b;
} /* Pink */
```

---

## ✨ States & Interactions

### Loading State

```css
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.loading::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--turquoise);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

### Hover State

```css
.interactive:hover {
  background-color: var(--turquoise-lighter);
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
```

---

### Focus State (Accessibility)

```css
button:focus,
input:focus {
  outline: 2px solid var(--turquoise);
  outline-offset: 2px;
}
```

---

## 📦 Component Usage Guide

### When to Use Each Component

| Component        | Use Case             | Example            |
| ---------------- | -------------------- | ------------------ |
| Primary Button   | Main actions         | "Read More"        |
| Secondary Button | Secondary actions    | "Share"            |
| Ghost Button     | Low-priority actions | "Cancel"           |
| Poet Card        | List poets           | City view          |
| Work Card        | List works           | Poet view          |
| Era Badge        | Identify era         | Anywhere era shown |

---

## ♿ Accessibility

All components include:

- Keyboard navigation
- Screen reader support
- High contrast
- Focus indicators
- ARIA labels

```html
<!-- Example with accessibility -->
<button class="btn btn-primary" aria-label="Read poet biography">
  Read More
</button>
```

---

## 🎨 Customization

### Modifying Colors

Update CSS variables in root:

```css
:root {
  --turquoise: #new-color;
}
```

### Adjusting Spacing

Update padding/margin values consistently:

```css
.btn {
  padding: 12px 24px; /* Adjust both */
}
```

### Changing Fonts

Update font family variables:

```css
:root {
  --font-persian: "NewFont", sans-serif;
}
```

---

## 📚 Related Documentation

- [Colors Guide](colors.md)
- [Typography Guide](typography.md)
- [Development Overview](../dev/overview.md)
- [API Reference](../dev/api.md)

---

**Need to add a new component?** [Contribute!](../dev/contributing.md) 🧩
