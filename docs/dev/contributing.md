# 🤝 Contributing Guide

Thank you for your interest in contributing to Chekameh! This guide will help you get started.

## 💖 Why Contribute?

Your contributions help:

- Preserve Persian literary heritage
- Make education more accessible
- Improve the technology
- Build a global community
- Learn and grow as a developer

---

## 📋 Code of Conduct

We're committed to providing a welcoming and inclusive environment. Please:

- Be respectful and constructive
- Welcome diverse perspectives
- Focus on what's best for the community
- Report inappropriate behavior

---

## 🚀 Getting Started

### 1. Fork the Repository

- Visit [GitHub repository](https://github.com/MDaV05/PersianCultureMap)
- Click "Fork" button
- Clone your fork locally

```bash
git clone https://github.com/YOUR_USERNAME/PersianCultureMap.git
cd PersianCultureMap
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

- Follow the style guide
- Add comments for complex code
- Test thoroughly

### 4. Commit Your Changes

```bash
git add .
git commit -m "Add: Description of changes"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

- Go to original repository
- Click "New Pull Request"
- Describe your changes clearly
- Wait for review

---

## 🎯 Types of Contributions

### 📝 Documentation

- Improve existing docs
- Add examples
- Fix typos
- Add new guides
- Translate documentation

**How to contribute**:

1. Edit markdown files in `/docs`
2. Follow markdown formatting
3. Add images if helpful
4. Test links

### 🐛 Bug Reports

Found a bug? Report it!

**What to include**:

- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if relevant

**Where to report**:

- [GitHub Issues](https://github.com/MDaV05/PersianCultureMap/issues)
- Include `[BUG]` in title

### ✨ Feature Requests

Have an idea? Share it!

**What to include**:

- Clear description of feature
- Why it's useful
- How users might use it
- Any alternatives considered

**Where to request**:

- [GitHub Issues](https://github.com/MDaV05/PersianCultureMap/issues)
- Include `[FEATURE]` in title

### 👨‍💻 Code Contributions

Improve the codebase!

**Possible contributions**:

- Bug fixes
- Performance improvements
- New features
- Code refactoring
- Tests

### 📚 Content Contributions

Expand the poet and city database!

**How to add poets**:

1. Edit `/data.js`
2. Add poet information
3. Include biographical data
4. Add sample works

**How to add cities**:

1. Find city coordinates (lat/lon)
2. Add to CITIES array
3. Associate with poets
4. Set applicable eras

### 🎨 Design Improvements

Make Chekameh more beautiful!

**Possible improvements**:

- Color scheme adjustments
- Typography improvements
- UI/UX enhancements
- Animation tweaks
- Responsive design fixes

---

## 🎨 Coding Standards

### JavaScript

```javascript
// Use clear variable names
const currentEraIndex = 0; // ✅ Good
const e = 0; // ❌ Bad

// Use const by default
const value = 5; // ✅ Best
let value = 5; // ✅ Acceptable
var value = 5; // ❌ Avoid

// Use modern JavaScript (ES6+)
const cities = CITIES.filter((c) => c.eras.includes(0)); // ✅
for (let city of CITIES) {
} // ✅
```

### CSS

```css
/* Use semantic class names */
.poet-card {
} /* ✅ Good */
.pc {
} /* ❌ Bad */

/* Group related styles */
.poet-card {
  /* Layout properties */
  /* Color properties */
  /* Typography properties */
}

/* Use CSS variables */
color: var(--turquoise); /* ✅ Good */
color: #009688; /* ❌ Avoid hardcoding */
```

### HTML

```html
<!-- Use semantic elements -->
<header></header>
<!-- ✅ Good -->
<div class="header"></div>
<!-- ❌ Avoid -->

<!-- Use meaningful class names -->
class="poet-card"
<!-- ✅ Good -->
class="pc"
<!-- ❌ Bad -->

<!-- Maintain structure -->
<div id="panel">
  <header></header>
  <main></main>
</div>
```

### Comments

```javascript
// Use clear comments for "why", not "what"
// ✅ Good
// Filter to only poets from the current era to avoid
// showing outdated information
const poets = CITIES
  .filter(c => c.eras.includes(currentEra))
  .flatMap(c => c.poets);

// ❌ Bad (obvious from code)
// Get poets
const poets = CITIES...
```

---

## 🧪 Testing

### Before Submitting

1. **Manual Testing**
   - [ ] Test in Chrome
   - [ ] Test in Firefox
   - [ ] Test on mobile
   - [ ] Test on tablet

2. **Feature Testing**
   - [ ] Test new feature works
   - [ ] Test existing features still work
   - [ ] Check browser console for errors

3. **Accessibility Testing**
   - [ ] Test keyboard navigation
   - [ ] Test with screen reader
   - [ ] Check color contrast

---

## 📝 Adding New Poets

### Data Format

```javascript
{
  id: "poet-id",              // Unique identifier (lowercase, hyphenated)
  name: "نام شاعر",           // Full name in Persian
  nameEn: "Poet Name",        // Full name in English
  dates: "YYYY – YYYY CE",    // Life dates
  emoji: "🌟",               // Representative emoji
  bio: "Biography text...",   // 2-3 sentences in English
  works: [
    {
      name: "نام اثر",        // Persian title
      nameEn: "Work Title",    // English title
      desc: "Description",     // Brief description
      lines: [                 // Famous lines/excerpts
        "Line in Persian",
        "Line in English translation"
      ]
    }
  ]
}
```

### Steps to Add a Poet

1. Open `/data.js`
2. Find the relevant city
3. Add poet object to `poets` array
4. Ensure era associations are correct
5. Include accurate dates and biography
6. Test in browser

### Poet Addition Checklist

- [ ] Historically accurate dates
- [ ] Correct city association
- [ ] Correct era(s)
- [ ] Biographical information verified
- [ ] At least one work included
- [ ] Persian and English names provided
- [ ] No spelling errors

---

## 🗺️ Adding New Cities

### Data Format

```javascript
{
  id: "city-id",              // Unique identifier
  name: "نام شهر",            // City name in Persian
  nameEn: "City Name",        // City name in English
  lat: 36.0,                  // Latitude
  lon: 52.0,                  // Longitude
  x: 350,                     // Optional: SVG X coordinate
  y: 310,                     // Optional: SVG Y coordinate
  eras: [0, 1, 2, 5],        // Applicable era indices
  poets: [                    // Poets in this city
    // ... poet objects
  ]
}
```

### Steps to Add a City

1. Research city coordinates
2. Open `/data.js`
3. Add city object to CITIES array
4. Associate with relevant poets
5. Set correct era indices
6. Test map rendering

### City Addition Checklist

- [ ] Accurate coordinates (verify with maps)
- [ ] Correct era associations
- [ ] Associated poets verified
- [ ] Persian and English names correct
- [ ] Map displays city correctly
- [ ] No duplicate entries

---

## 📖 Documentation Updates

### Adding a Guide

1. Create new markdown file in `/docs`
2. Follow existing formatting
3. Include clear headings
4. Add examples where helpful
5. Update `/docs/index.md` navigation
6. Update `zensical.toml` config

### Documentation Checklist

- [ ] Clear and concise
- [ ] Grammatically correct
- [ ] Examples provided
- [ ] Links verified
- [ ] No broken references
- [ ] Formatted consistently

---

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows style guide
- [ ] Comments added for clarity
- [ ] Documentation updated
- [ ] Tests pass
- [ ] No console errors
- [ ] Changes are focused and logical

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Content (poets/cities)

## Motivation

Why are these changes needed?

## Related Issues

Fixes #123

## Testing

How to test these changes?

## Checklist

- [ ] My code follows style guide
- [ ] I've updated documentation
- [ ] I've tested locally
- [ ] No new warnings/errors
```

### After Submitting

- Respond to reviewer comments
- Make requested changes
- Push updates to same branch
- Request re-review

---

## 🎓 Learning Resources

### Getting Started with Open Source

- [First Timers Only](https://www.firsttimersonly.com/)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

### Git & GitHub

- [GitHub Learning Lab](https://lab.github.com/)
- [Git Documentation](https://git-scm.com/doc)

### Persian Poetry

- [Encyclopedia of Persian Poetry](https://en.m.wikipedia.org/wiki/Persian_poetry)
- [Shahnameh Online](https://shahnameh.org/)

---

## ❓ Questions?

- Check existing [GitHub Issues](https://github.com/MDaV05/PersianCultureMap/issues)
- Read [FAQ](../resources/faq.md)
- Join [GitHub Discussions](https://github.com/MDaV05/PersianCultureMap/discussions)
- Email maintainers

---

## 🙏 Recognition

Contributors are recognized in:

- GitHub contributors page
- Project README
- Release notes
- Hall of fame (coming soon)

---

## 📋 Roadmap for Contributors

Popular areas for contribution:

- [ ] Add more poets (currently 30+)
- [ ] Add more cities (currently 15+)
- [ ] Improve map UI
- [ ] Enhance chatbot
- [ ] Add poem translations
- [ ] Create tutorial videos
- [ ] Improve documentation
- [ ] Fix bugs

---

**Thank you for contributing to Chekameh! 🌟**

Your efforts help preserve and celebrate the beauty of Persian poetry for generations to come.
