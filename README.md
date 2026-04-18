# Hariom Chauhan — Personal Portfolio Website

A modern, fully responsive personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. Designed with a cyberpunk-editorial aesthetic featuring a dark/light mode toggle, smooth animations, and a clean developer-centric UI.

---

## Live Preview

> Open `index.html` directly in any modern browser — no build step, no server, no dependencies required.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Contact](#contact)

---

## Overview

This portfolio was built to showcase skills, projects, and academic background in a professional and visually engaging format. It uses no frameworks or build tools — just semantic HTML5, modern CSS (custom properties, Flexbox, Grid), and vanilla JavaScript.

The design follows a **cyberpunk-editorial** theme — dark mesh grid background, electric teal accents (`#00ffc8`), and sharp typography using the Syne and Space Mono font families.

---

## Features

| Feature | Description |
|---|---|
| Dark / Light Mode | Toggle persisted via `localStorage` |
| Loading Animation | Animated progress bar on initial page load |
| Typing Animation | Cycles through 5 developer taglines in the hero section |
| Scroll Reveal | Elements animate into view on scroll with staggered delays |
| Sticky Navbar | Glassmorphism blur header with active section highlighting |
| Mobile Responsive | Mobile-first layout with hamburger navigation |
| Skill Bar Animation | Progress bars animate when scrolled into view |
| 3D Card Tilt | Project cards react to mouse movement with perspective tilt |
| Cursor-Follow Glow | Hero background glow tracks the user's cursor |
| Contact Form | Frontend-only form with loading spinner and success feedback |
| Scroll-to-Top | Smooth-scroll button that appears after scrolling 400px |
| Console Easter Egg | ASCII art banner visible in browser DevTools |

---

## Sections

1. **Hero** — Name, title, animated typing tagline, CTA buttons, terminal mockup, and stat pills (LeetCode, CodeChef, Hackathon).
2. **About** — Personal introduction, info card with key details, and badge tags.
3. **Education** — Vertical timeline covering B.Tech at NIET, Intermediate (76%), and High School (70%).
4. **Projects** — Cards for three featured projects with tech stack tags and hover effects.
5. **Skills** — Animated progress bars for languages and frameworks; pill tags for CS core subjects.
6. **Achievements** — Hackathon placement, CodeChef and LeetCode/GFG milestones.
7. **Contact** — Contact info panel, social links (GitHub, LinkedIn, LeetCode), and a frontend contact form.
8. **Footer** — Copyright with name.

---

## Tech Stack

- **HTML5** — Semantic markup (`<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`)
- **CSS3** — Custom properties, Flexbox, CSS Grid, transitions, keyframe animations
- **JavaScript (ES6+)** — Vanilla JS, Intersection Observer pattern, DOM manipulation
- **Google Fonts** — Syne (display), Space Mono (monospace/code), DM Sans (body)
- **Font Awesome 6** — Icon library via CDN

No npm, no bundler, no framework. Zero runtime dependencies beyond the two CDN links above.

---

## Project Structure

```
portfolio/
├── index.html       # Main HTML file — all sections and markup
├── style.css        # All styles — variables, layout, components, responsive
├── script.js        # All JS — loader, theme, typing, scroll, form, effects
└── README.md        # This file
```

---

## Getting Started

### Option 1 — Open directly

```bash
# Clone or download the repository
git clone https://github.com/your-username/portfolio.git

# Navigate into the folder
cd portfolio

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Serve locally (recommended for development)

```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .

# Using VS Code
# Install the "Live Server" extension and click "Go Live"
```

Then visit `http://localhost:3000` in your browser.

---

## Customization

All theme colors are defined as CSS custom properties at the top of `style.css` and can be changed in one place:

```css
:root {
  --accent: #00ffc8;       /* Primary accent color */
  --accent-2: #6c63ff;     /* Secondary accent (gradients) */
  --bg: #080c14;           /* Page background */
  --text: #e8edf5;         /* Body text */
  /* ... */
}
```

To update personal information, edit the relevant sections directly in `index.html`. To add a new typing phrase, add a string to the `phrases` array in `script.js`:

```js
const phrases = [
  'Passionate Developer',
  'AI & Web Enthusiast',
  'Your New Phrase Here',   // ← add here
];
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |

Requires support for CSS custom properties, `backdrop-filter`, CSS Grid, and ES6+.

---

## Contact

**Hariom Chauhan**
B.Tech Computer Science — Noida Institute of Engineering and Technology

- Email: [hariom06065@gmail.com](mailto:hariom06065@gmail.com)
- Phone: +91-8810851557
- GitHub: [github.com/your-username](https://github.com/)
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/)

---

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it as a template for your own portfolio — a credit in the footer or README is appreciated but not required.

---

*Built with HTML, CSS, JavaScript, and lots of coffee.*
