# Scalefort Website - Technical Specification & Page Structure

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React (functional components + hooks) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Fonts | Google Fonts |
| Animations | CSS transitions + Framer Motion |
| Build tool | Vite |
| Deployment | Static export - no backend needed |

---

## File Structure

```text
scalefort/
|-- public/
|   |-- favicon.svg
|-- src/
|   |-- components/
|   |   |-- Navbar.jsx
|   |   |-- Hero.jsx
|   |   |-- Services.jsx
|   |   |-- ServiceCard.jsx
|   |   |-- WhyScalefort.jsx
|   |   |-- CallToAction.jsx
|   |   |-- Footer.jsx
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|-- docs/
|-- index.html
|-- package.json
|-- vite.config.js
```

---

## Typography

Use Google Fonts:
- **Display / Headings:** `Sora`
- **Body:** `Plus Jakarta Sans`

Import in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap');
```

---

## Color Palette

Define in `:root` inside `index.css`:

```css
:root {
  --color-navy:   #0D1B3E;
  --color-yellow: #F5A623;
  --color-cream:  #F5F0E8;
  --color-white:  #FFFFFF;
  --color-gray:   #6B7280;
  --color-light:  #F9F7F3;
}
```

---

## Page Sections

### 1. `<Navbar />`
- Logo left: "S" icon + "SCALEFORT OUTSOURCING" text
- Nav links: Services | Why Us | Contact
- CTA button: "Let's Talk" - navy background, yellow text, rounded pill
- Sticky on scroll with white translucent background and shadow
- Mobile: hamburger menu

### 2. `<Hero />`
- Full-width section, cream background
- Left column:
  - Small label: "Tech Talent Outsourcing"
  - H1: **"Build Better."** (navy)
  - H1: **"Scale Faster."** (yellow)
  - Subheading: broad tech talent outsourcing message
  - Primary CTA: "Let's Build Together"
  - Secondary CTA: "Explore Talent"
  - Trust line: "Trusted by growing teams that need flexible tech capacity"
- Right column:
  - Use an approved realistic team-collaboration image
  - Add overlay labels for broad talent categories such as Engineering, Product, Cloud, Data and Support
  - Avoid generic stock-photo treatment; keep the image bright, clear and tied to collaboration

### 3. `<Services />`
- Section label: "Talent We Provide"
- Section title: "Flexible Tech Talent for Every Stage of Growth."
- Optional short description under the section title
- Include a supporting realistic image panel near the section header when an approved asset is available
- Three service cards, stacking on mobile:
  1. Software Engineering Teams
  2. Product, UI/UX & Digital Teams
  3. Cloud, Data, Support & Tech Ops

Each card should include:
- Lucide icon
- Service label
- Card title
- Quote bubble
- Description
- Four benefit rows
- Badges for representative roles or capabilities
- CTA button

Cards should have:
- White background, soft shadow
- Yellow top border accent
- Hover lift effect

### 4. `<WhyScalefort />`
- Background: navy
- Section label: "Why Choose Us"
- Section title: "More Than a Vendor. We're Your Team."
- Description: flexible tech talent partnership message
- Three pillars:
  1. **We Fit Your Workflow**
  2. **Flexible & Scalable**
  3. **Quality First, Always**

### 5. `<CallToAction />`
- Full-width yellow background
- Headline: "Ready to Scale Your Tech Team?"
- Sub-text: "Tell us the skills, roles or outcomes you need. We'll help you build the right outsourced tech team."
- Contact options:
  - www.scalefort.org
  - outsourcing@scalefort.org
- Big CTA button: "Get In Touch Today"

### 6. `<Footer />`
- Dark navy background
- Left: Logo + tagline "Your Goals. Our Expertise. Stronger Together."
- Services links:
  - Engineering Talent
  - Product & Design Talent
  - Cloud, Data & Tech Ops
- Company links:
  - Why Scalefort
  - Contact Us
- Contact links:
  - www.scalefort.org
  - outsourcing@scalefort.org
- Bottom bar: "(c) 2025 Scalefort Outsourcing. All rights reserved."

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| Mobile (`< 640px`) | Single column everywhere, hamburger nav, stacked cards |
| Tablet (`640px-1024px`) | Stacked hero and cards with comfortable spacing |
| Desktop (`> 1024px`) | Full layout with hero columns and three service cards |

---

## Animations & Interactions

- Hero text fades in with staggered motion
- Sections fade up as they enter the viewport
- Service cards lift on hover
- Navbar gains white translucent background and shadow after scrolling
- CTA buttons scale or lift subtly on hover

---

## Accessibility

- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h3>`
- Use visible focus rings on interactive elements
- Keep mobile tap targets at least 44px high
- Ensure color contrast meets WCAG AA minimums
- Avoid text clipping or overflow on mobile
