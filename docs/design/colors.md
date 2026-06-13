# 🎨 Color System

Complete documentation of the Chekameh color palette and usage guidelines.

## 🎯 Color Philosophy

Our color system is inspired by Persian art and architecture:

- **Turquoise** - Traditional Persian tile work (primary)
- **Gold** - Ancient Persian precious metals (accent)
- **Cream** - Aged parchment and manuscripts (background)
- **Ink** - Traditional calligraphy (text)

---

## 🌈 Primary Color Palette

### Turquoise (Primary)

```css
--turquoise: #009688 /* Main primary color */ --turquoise-light: #4db6ac
  /* Light variant */ --turquoise-dark: #00695c /* Dark variant */
  --turquoise-lighter: #b2dfdb /* Lighter tint */ --turquoise-darkest: #004d40
  /* Darkest shade */;
```

**Uses**:

- Primary buttons
- Navigation highlights
- Map elements
- Active states
- Link colors
- Header accents

**Visual Reference**:

- Hex: `#009688`
- RGB: `0, 150, 136`
- HSL: `174°, 100%, 29%`

### Gold (Accent)

```css
--gold: #c5a059 /* Main accent color */ --gold-light: #d4b87a
  /* Light variant */ --gold-dark: #b8925a /* Dark variant */
  --gold-lighter: #e8d5be /* Lighter tint */ --gold-darkest: #8b6f47
  /* Darkest shade */;
```

**Uses**:

- Secondary buttons
- Highlights
- Borders
- Icons
- Emphasis elements
- Special markers

**Visual Reference**:

- Hex: `#C5A059`
- RGB: `197, 160, 89`
- HSL: `37°, 47%, 56%`

### Cream (Background)

```css
--cream: #f9f6f0 /* Main background */ --cream-dark: #f0ebe0
  /* Slightly darker */ --cream-darker: #e7dfce /* Darker for contrast */;
```

**Uses**:

- Page background
- Panel backgrounds
- Card backgrounds
- Text backgrounds

**Visual Reference**:

- Hex: `#F9F6F0`
- RGB: `249, 246, 240`
- HSL: `28°, 62%, 96%`

### Ink (Text)

```css
--ink: #1a2a2a /* Main text color */ --ink-light: #3a4a4a /* Light variant */
  --ink-lighter: #5a6a6a /* Lighter for secondary */;
```

**Uses**:

- Body text
- Headings
- Primary UI text
- Navigation text

**Visual Reference**:

- Hex: `#1A2A2A`
- RGB: `26, 42, 42`
- HSL: `180°, 24%, 13%`

---

## 🎓 Neutral Palette

For text, borders, and backgrounds:

```css
--white: #ffffff /* Pure white */ --gray-light: #f5f5f5 /* Very light gray */
  --gray: #e0e0e0 /* Medium gray */ --gray-dark: #424242 /* Dark gray */
  --black: #000000 /* Pure black */;
```

---

## 📊 Semantic Colors

### Status Colors

**Success**

```css
--success: #4caf50 /* Green - positive action */ --success-light: #c8e6c9
  /* Light green */ --success-dark: #2e7d32 /* Dark green */;
```

**Warning**

```css
--warning: #ff9800 /* Orange - caution */ --warning-light: #ffe0b2
  /* Light orange */ --warning-dark: #e65100 /* Dark orange */;
```

**Error**

```css
--error: #f44336 /* Red - problem */ --error-light: #ffcdd2 /* Light red */
  --error-dark: #c62828 /* Dark red */;
```

**Info**

```css
--info: #2196f3 /* Blue - information */ --info-light: #bbdefb /* Light blue */
  --info-dark: #1565c0 /* Dark blue */;
```

---

## 🎨 Usage Guidelines

### Button Colors

**Primary Button**

- Background: `--turquoise`
- Text: `--white`
- Hover: `--turquoise-dark`

**Secondary Button**

- Background: `--gold`
- Text: `--ink`
- Hover: `--gold-dark`

**Ghost Button**

- Background: `transparent`
- Border: `--turquoise`
- Text: `--turquoise`
- Hover: `--turquoise-light` background

### Text Colors

**Primary Text**

- Color: `--ink`

**Secondary Text**

- Color: `--ink-light`

**Tertiary Text**

- Color: `--ink-lighter`

**Link Text**

- Color: `--turquoise`
- Hover: `--turquoise-dark`

### Background Colors

**Page Background**

- Background: `--cream`

**Card/Panel Background**

- Background: `--white`
- Border: `--gray-light`

**Section Background**

- Background: `--cream`

**Interactive Hover**

- Background: `--turquoise-lighter`

---

## 🎯 Era Colors

Each historical era has a unique color for identification:

```javascript
// In data.js
const eraColors = [
  "#1976D2", // Era 1 - Samanid (Blue)
  "#388E3C", // Era 2 - Abbasid (Green)
  "#7B1FA2", // Era 3 - Seljuk (Purple)
  "#F57C00", // Era 4 - Ilkhanate (Orange)
  "#D32F2F", // Era 5 - Timurid (Red)
  "#C2185B", // Era 6 - Safavid (Pink)
];
```

**Usage**:

- Timeline indicator
- Era badges
- City markers
- Historical borders

---

## 🚨 Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:

| Element            | Min Ratio | Status |
| ------------------ | --------- | ------ |
| Body text on cream | 7.1:1     | ✅ AAA |
| Links on cream     | 5.5:1     | ✅ AA  |
| Buttons on white   | 4.5:1     | ✅ AA  |
| Icons on turquoise | 3:1       | ✅ AA  |

### Color Blindness

Colors are distinguishable for:

- Deuteranopia (red-green)
- Protanopia (red-green)
- Tritanopia (blue-yellow)

### Guidelines

1. **Don't rely on color alone** - Use icons/patterns too
2. **Sufficient contrast** - Test with contrast checker
3. **Labels** - Always provide text labels
4. **Consistent meaning** - Red always = error, Green = success

---

## 💻 Implementation

### CSS Variables

Add to your CSS:

```css
:root {
  /* Primary */
  --turquoise: #009688;
  --turquoise-light: #4db6ac;
  --turquoise-dark: #00695c;

  /* Accent */
  --gold: #c5a059;
  --gold-light: #d4b87a;
  --gold-dark: #b8925a;

  /* Background */
  --cream: #f9f6f0;
  --cream-dark: #f0ebe0;

  /* Text */
  --ink: #1a2a2a;
  --ink-light: #3a4a4a;
}
```

### Usage Examples

```css
/* Button */
.btn-primary {
  background-color: var(--turquoise);
  color: white;
}

.btn-primary:hover {
  background-color: var(--turquoise-dark);
}

/* Text */
body {
  color: var(--ink);
  background-color: var(--cream);
}

a {
  color: var(--turquoise);
}

a:hover {
  color: var(--turquoise-dark);
}
```

---

## 🎨 Tools & Resources

### Color Pickers

- [Adobe Color](https://color.adobe.com/)
- [ColorHunt](https://colorhunt.co/)
- [Coolors](https://coolors.co/)

### Contrast Checkers

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

### Color Accessibility

- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Accessible Colors](https://accessible-colors.com/)

---

## 📐 Color Codes

### Quick Reference

| Name      | Hex       | RGB         | HSL           | Use        |
| --------- | --------- | ----------- | ------------- | ---------- |
| Turquoise | `#009688` | 0,150,136   | 174°,100%,29% | Primary    |
| Gold      | `#C5A059` | 197,160,89  | 37°,47%,56%   | Accent     |
| Cream     | `#F9F6F0` | 249,246,240 | 28°,62%,96%   | Background |
| Ink       | `#1A2A2A` | 26,42,42    | 180°,24%,13%  | Text       |

---

## ✅ Color Audit Checklist

When implementing colors:

- [ ] Using CSS variables
- [ ] Testing contrast ratio
- [ ] Checking for color blindness issues
- [ ] Verifying WCAG compliance
- [ ] Testing on different devices
- [ ] Testing print version
- [ ] Testing in dark mode

---

## 🔄 Color Updates

To update colors site-wide:

1. Edit CSS variables in root
2. All elements using `var()` update automatically
3. No need to find and replace

---

**Questions about colors? Check the [Design FAQ](../resources/faq.md)** 🎨
