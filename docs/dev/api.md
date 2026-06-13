# 📚 API Reference

Complete documentation of Chekameh's public API and functions.

## 🎯 Overview

Chekameh exposes several functions and events for extending functionality. All functions are called on the global `window` object.

---

## 🎨 UI Functions

### Panel Management

#### `openOverlay()`

Opens the overlay and shows the panel.

**Returns**: `void`

**Example**:

```javascript
openOverlay();
```

**Use Case**: Show the panel when user interacts with content

---

#### `closePanel()`

Closes the panel and resets the navigation stack.

**Returns**: `void`

**Example**:

```javascript
closePanel();
```

**Use Case**: Hide panel and return to normal map view

---

#### `goBack()`

Navigate back one level in the panel stack.

**Returns**: `void`

**Example**:

```javascript
goBack();
```

**Use Case**: Implement back button functionality

---

#### `openCity(city)`

Open a specific city's panel.

**Parameters**:

- `city` (Object) - City object from CITIES array

**Returns**: `void`

**Example**:

```javascript
const city = CITIES[0]; // Get first city
openCity(city);
```

**Use Case**: Programmatically open a city

---

#### `openPoet(poet, city)`

Open a specific poet's panel.

**Parameters**:

- `poet` (Object) - Poet object from city's poets array
- `city` (Object) - Parent city object

**Returns**: `void`

**Example**:

```javascript
const city = CITIES[0];
const poet = city.poets[0];
openPoet(poet, city);
```

**Use Case**: Show poet details

---

#### `openWork(work, poet)`

Open a specific work's panel.

**Parameters**:

- `work` (Object) - Work object from poet's works array
- `poet` (Object) - Parent poet object

**Returns**: `void`

**Example**:

```javascript
const city = CITIES[0];
const poet = city.poets[0];
const work = poet.works[0];
openWork(work, poet);
```

**Use Case**: Display poem text and details

---

#### `renderPanel(panelData, showBack)`

Internal function to render panel content.

**Parameters**:

- `panelData` (Object) - `{ type, data, city?, poet? }`
- `showBack` (Boolean) - Whether to show back button

**Returns**: `void`

**Example**:

```javascript
renderPanel({ type: "city", data: CITIES[0] }, false);
```

**Note**: Usually called internally; use `openCity()` etc. instead

---

### Timeline/Era Management

#### `updateEra(index)`

Change the current era and update all UI elements.

**Parameters**:

- `index` (Number) - Era index (0-5)

**Returns**: `void`

**Example**:

```javascript
updateEra(0); // Set to Samanid era
updateEra(5); // Set to Safavid era
```

**Use Case**: Change era programmatically

---

#### `setupTimeline()`

Initialize the timeline slider (called automatically on page load).

**Returns**: `void`

**Example**:

```javascript
setupTimeline();
```

**Note**: Automatically called during initialization

---

#### `setupUI()`

Initialize all UI components (called automatically on page load).

**Returns**: `void`

**Example**:

```javascript
setupUI();
```

**Note**: Automatically called when DOM is ready

---

## 🗺️ Map Functions

### Map Initialization

#### `initMap()`

Initialize the MapLibre GL JS map instance.

**Returns**: `maplibregl.Map` instance

**Example**:

```javascript
const map = initMap();
```

**Use Case**: Access the map object for direct manipulation

---

#### `createCityMarkers()`

Create and display markers for the current era.

**Returns**: `void`

**Example**:

```javascript
createCityMarkers();
```

**Use Case**: Refresh markers when era changes

---

### Map Controls

#### Zoom Controls

```javascript
// These are built into MapLibre, accessed via map object
map.zoomIn();
map.zoomOut();
map.setZoom(12);
```

---

#### Pan/Navigation

```javascript
// Pan to coordinates
map.flyTo({
  center: [lon, lat],
  zoom: 4,
  duration: 1000,
});

// Set bounds
map.fitBounds(bounds);
```

---

## 📊 Data Access

### Global Data Objects

#### `ERAS`

Array of era objects.

**Structure**:

```javascript
[
  {
    name: "string", // Persian name
    nameEn: "string", // English name
    years: "string", // Year range
  },
  // ... 5 more eras
];
```

**Example**:

```javascript
console.log(ERAS[0].name); // "دوره‌ی سامانی"
```

---

#### `CITIES`

Array of city objects.

**Structure**:

```javascript
[
  {
    id: "string",
    name: "string",
    nameEn: "string",
    lat: number,
    lon: number,
    eras: [numbers],
    poets: [
      {
        id: "string",
        name: "string",
        nameEn: "string",
        dates: "string",
        emoji: "string",
        bio: "string",
        works: [
          {
            name: "string",
            nameEn: "string",
            desc: "string",
            lines: ["string"],
          },
        ],
      },
    ],
  },
  // ... more cities
];
```

**Example**:

```javascript
const bukhara = CITIES.find((c) => c.id === "bukhara");
console.log(bukhara.poets.length); // Number of poets
```

---

### Global State

#### `currentEra`

Currently selected era index (0-5).

**Type**: `Number`

**Example**:

```javascript
console.log(currentEra); // 0-5
```

---

#### `panelStack`

Navigation history for the panel.

**Type**: `Array<Object>`

**Structure**:

```javascript
[
  { type: "city", data: cityObject },
  { type: "poet", data: poetObject, city: cityObject },
  // ... more entries
];
```

**Example**:

```javascript
console.log(panelStack.length); // Depth of navigation
```

---

#### `cityMarkers`

Reference to created city marker objects.

**Type**: `Object`

**Example**:

```javascript
console.log(Object.keys(cityMarkers)); // ["bukhara", "tus", ...]
```

---

## 🎯 Events

### Custom Events

#### `eraChanged`

Fired when the era is changed.

**Detail**: `eraIndex` (Number)

**Example**:

```javascript
document.addEventListener("eraChanged", (e) => {
  console.log(`Era changed to: ${e.detail}`);
  // Update custom UI
});
```

---

#### `openCityPanel`

Fired when a city should be opened (from map).

**Detail**: `cityObject`

**Example**:

```javascript
document.addEventListener("openCityPanel", (e) => {
  console.log(`Opening city: ${e.detail.name}`);
});
```

---

### Browser Events

#### Timeline Slider Input

```javascript
const slider = document.getElementById("timeline-slider");
slider.addEventListener("input", (e) => {
  console.log(`New era index: ${e.target.value}`);
});
```

---

#### Panel Close Button

```javascript
const closeBtn = document.getElementById("panel-close");
closeBtn.addEventListener("click", () => {
  console.log("Panel closed");
});
```

---

#### City Marker Click

```javascript
// Automatically dispatches openCityPanel event
// Or manually:
document.querySelector(".city-marker").addEventListener("click", () => {
  // City marker clicked
});
```

---

## 🔧 Utility Functions

### Array Operations

#### Finding a City

```javascript
const city = CITIES.find((c) => c.id === "bukhara");
```

#### Filtering Cities by Era

```javascript
const citiesInEra = CITIES.filter((c) => c.eras.includes(currentEra));
```

#### Finding a Poet

```javascript
const poet = CITIES.flatMap((c) => c.poets).find((p) => p.id === "rudaki");
```

---

### DOM Manipulation

#### Getting Elements

```javascript
const panel = document.getElementById("panel");
const panelBody = document.getElementById("panel-body");
const slider = document.getElementById("timeline-slider");
```

#### Creating Elements

```javascript
const card = document.createElement("div");
card.className = "poet-card";
card.textContent = "Poet Name";
```

---

## 📝 Extending the API

### Adding a New Function

1. **Define the function** in appropriate file (ui.js, map.js)
2. **Make it global** if needed: `window.myFunction = myFunction;`
3. **Document it** in this file
4. **Add event listeners** if needed
5. **Test thoroughly**

### Example: Custom Analysis Function

```javascript
// In data.js
function findPoetsByEra(eraIndex) {
  return CITIES.filter((city) => city.eras.includes(eraIndex))
    .flatMap((city) => city.poets)
    .filter(
      (poet, index, self) => self.findIndex((p) => p.id === poet.id) === index,
    ); // Remove duplicates
}

// Make global
window.findPoetsByEra = findPoetsByEra;

// Use
const safavidPoets = findPoetsByEra(5);
```

---

## 🐛 Common Issues

### Issue: Function not found

**Solution**: Ensure function is added to global scope

```javascript
window.myFunction = myFunction;
```

### Issue: Data not updating

**Solution**: Manually call render functions after data changes

```javascript
updateEra(currentEra); // Refresh all UI
```

### Issue: Events not firing

**Solution**: Check event names and ensure listeners are attached

```javascript
document.addEventListener("eraChanged", listener);
```

---

## 📚 Related Documentation

- [Architecture Guide](architecture.md)
- [Installation Guide](installation.md)
- [Contributing Guide](contributing.md)

---

**Happy coding! 🚀**
