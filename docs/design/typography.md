# 🔤 Typography Guide

Complete font and text documentation for Chekameh.

## 📚 Font System

Chekameh uses a carefully selected font stack optimized for Persian and English text.

---

## 🔡 Persian Typography

### Vazirmatn (Body Text)

**Purpose**: Primary font for Persian body text and most UI elements

**Weights Available**:

- 300 (Light)
- 400 (Regular) - Default
- 500 (Medium)
- 700 (Bold)

**Import**:

```css
@import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap");
```

**Usage**:

```css
body {
  font-family: "Vazirmatn", sans-serif;
  font-weight: 400;
  line-height: 1.6;
}
```

**Size Scale**:

- **Large**: 18px - Navigation items
- **Normal**: 16px - Body text
- **Small**: 14px - Secondary text
- **Tiny**: 12px - Captions

### Lalezar (Headings)

**Purpose**: Persian headings and display text for visual impact

**Weights Available**:

- 400 (Regular)
- 700 (Bold)

**Import**:

```css
@import url("https://fonts.googleapis.com/css2?family=Lalezar:wght@400;700&display=swap");
```

**Usage**:

```css
h1,
h2,
h3 {
  font-family: "Lalezar", sans-serif;
  font-weight: 700;
}
```

**When to Use**:

- Page titles
- Section headings
- Important labels
- Brand/logo text

---

## 🔤 English Typography

### Cormorant Garamond (Decorative)

**Purpose**: Elegant serif font for English poetry, quotes, and display text

**Weights Available**:

- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 700 (Bold)

**Import**:

```css
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;700&display=swap");
```

**Usage**:

```css
.poem {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.8;
}
```

**When to Use**:

- Poetry excerpts
- Inspirational quotes
- Featured text
- Poem titles

### Roboto (System)

**Purpose**: Clean, modern font for numbers, code, and UI fallback

**Weights Available**:

- 400 (Regular)
- 500 (Medium)
- 700 (Bold)

**Import**:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
```

**Usage**:

```css
code,
pre {
  font-family: "Roboto", monospace;
  font-weight: 400;
}
```

**When to Use**:

- Code blocks
- Technical text
- Numbers
- System messages

### Roboto Mono (Code)

**Purpose**: Monospace font for code and technical content

**Import**:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap");
```

**Usage**:

```css
code {
  font-family: "Roboto Mono", monospace;
  font-size: 14px;
}
```

---

## 📏 Type Scale

### Heading Hierarchy

| Element | Size | Weight | Font      | Line Height |
| ------- | ---- | ------ | --------- | ----------- |
| H1      | 32px | 700    | Lalezar   | 1.2         |
| H2      | 28px | 700    | Lalezar   | 1.3         |
| H3      | 24px | 700    | Lalezar   | 1.4         |
| H4      | 20px | 600    | Vazirmatn | 1.4         |
| H5      | 18px | 600    | Vazirmatn | 1.5         |
| H6      | 16px | 600    | Vazirmatn | 1.5         |

### Body Text

| Type  | Size | Weight | Line Height | Margin |
| ----- | ---- | ------ | ----------- | ------ |
| Body  | 16px | 400    | 1.6         | 16px   |
| Lead  | 18px | 400    | 1.7         | 16px   |
| Small | 14px | 400    | 1.5         | 12px   |
| Tiny  | 12px | 400    | 1.4         | 8px    |

---

## 🎨 CSS Variables

```css
:root {
  /* Font Families */
  --font-persian: "Vazirmatn", sans-serif;
  --font-heading: "Lalezar", sans-serif;
  --font-english: "Cormorant Garamond", serif;
  --font-code: "Roboto Mono", monospace;

  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 28px;
  --text-4xl: 32px;

  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.8;
}
```

---

## 📝 Usage Examples

### Page Title

```html
<h1 style="font-family: var(--font-heading); font-size: 32px;">
  نقشه‌ی شعر پارسی
</h1>
```

### Body Paragraph

```html
<p style="font-family: var(--font-persian); font-size: 16px; line-height: 1.6;">
  متن پاراگراف اینجا می‌رود...
</p>
```

### Poetry Excerpt

```html
<blockquote
  style="font-family: var(--font-english); font-style: italic; font-size: 18px;"
>
  "The taste of something noble"
</blockquote>
```

### Code Block

```html
<code style="font-family: var(--font-code); font-size: 14px;">
  const cities = CITIES.filter(c => c.eras.includes(0));
</code>
```

---

## 🌐 RTL Support

Chekameh is RTL-first for Persian text:

```css
/* For RTL content */
.rtl-text {
  direction: rtl;
  text-align: right;
  font-family: var(--font-persian);
}

/* For LTR content (English) */
.ltr-text {
  direction: ltr;
  text-align: left;
  font-family: var(--font-english);
}
```

---

## 📱 Responsive Typography

Font sizes scale with screen size:

```css
/* Desktop (1200px+) */
@media (min-width: 1200px) {
  h1 {
    font-size: 32px;
  }
  body {
    font-size: 16px;
  }
}

/* Tablet (768px - 1199px) */
@media (max-width: 1199px) {
  h1 {
    font-size: 28px;
  }
  body {
    font-size: 15px;
  }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  h1 {
    font-size: 24px;
  }
  body {
    font-size: 14px;
  }
}
```

---

## 🎯 Accessibility

### Font Recommendations

**For Readability**:

- Minimum 16px for body text
- 1.5-1.6 line height minimum
- High contrast colors
- Sans-serif for UI, serif for poetry

**For Dyslexia**:

- Use clear, open fonts
- Increase spacing
- Avoid justified text
- Use adequate line height

### WCAG Compliance

- ✅ Font sizes meet minimum 16px
- ✅ Line heights provide adequate spacing
- ✅ Contrast ratios > 4.5:1
- ✅ Fonts are Web-safe

---

## 🔄 Font Fallbacks

Complete font stack with fallbacks:

```css
/* Persian Text */
body {
  font-family: "Vazirmatn", "Tahoma", "Arial", sans-serif;
}

/* Headings */
h1,
h2,
h3 {
  font-family: "Lalezar", "Tahoma", "Arial", sans-serif;
}

/* English */
.english {
  font-family: "Cormorant Garamond", "Georgia", "Times New Roman", serif;
}

/* Code */
code,
pre {
  font-family: "Roboto Mono", "Courier New", monospace;
}
```

---

## ⚡ Performance

### Font Loading Strategy

```css
/* Use font-display: swap for better performance */
@font-face {
  font-family: "Vazirmatn";
  src: url("...") format("woff2");
  font-display: swap; /* Show fallback immediately */
}
```

### Best Practices

1. **Use Web Safe Fonts** - Reduce HTTP requests
2. **Limit Font Weights** - Use only necessary weights
3. **Optimize File Size** - Use WOFF2 format
4. **Lazy Load** - Load fonts only when needed

---

## 📊 Typography Checklist

- [ ] All fonts imported correctly
- [ ] Font weights match design
- [ ] Line heights optimal
- [ ] Font sizes responsive
- [ ] RTL text displays correctly
- [ ] Contrast meets WCAG
- [ ] Fallback fonts defined
- [ ] Performance optimized

---

## 🔗 Resources

### Font Resources

- [Google Fonts](https://fonts.google.com/)
- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn)
- [Persian Typography Guide](https://type.today/)

### Typography Tools

- [Font Pair Generator](https://www.fontpair.co/)
- [Type Scale Calculator](https://type-scale.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Questions about typography? Check the [Design FAQ](../resources/faq.md)** 🔤
