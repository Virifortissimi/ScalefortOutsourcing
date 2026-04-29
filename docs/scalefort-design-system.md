# Scalefort Website - Design System & Visual Reference

## Brand Colors

```text
Navy (primary):   #0D1B3E   - headings, navbar, footer, dark sections
Yellow (accent):  #F5A623   - highlights, CTAs, underlines, second headline
Cream (base bg):  #F5F0E8   - page background, hero background
White:            #FFFFFF   - card backgrounds, text on dark
Gray:             #6B7280   - body text, secondary labels
Light:            #F9F7F3   - alternate section background
```

### Usage Rules

- **Navy on cream** - hero and body sections
- **Yellow on navy** - dark-section highlights and pill buttons
- **Navy on yellow** - CTA section text
- **White on navy** - footer text and dark-section text
- Yellow should feel like an accent, not a full-page theme.

---

## Typography Scale

```css
/* Display - Hero headline */
font-family: 'Sora', sans-serif;
font-weight: 800;
font-size: clamp(3rem, 8vw, 5.5rem);
line-height: 1.05;

/* Section titles */
font-family: 'Sora', sans-serif;
font-weight: 700;
font-size: clamp(1.75rem, 4vw, 2.75rem);
line-height: 1.15;

/* Card titles */
font-family: 'Sora', sans-serif;
font-weight: 700;
font-size: 1.375rem;

/* Body text */
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: 400;
font-size: 1rem;
line-height: 1.7;

/* Labels / chips */
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: 600;
font-size: 0.72rem;
letter-spacing: 0.1em;
text-transform: uppercase;
```

---

## Spacing System

Use multiples of 4px. Common values:
- `4px` - tight internal padding
- `8px` - small gaps
- `16px` - component internal padding
- `24px` - between elements
- `40px` - section internal padding
- `80px` - between major sections
- `120px` - hero vertical padding

---

## Component Specifications

### Navbar

```text
height: 72px
background: rgba(255,255,255,0.95) with backdrop-blur on scroll
logo font-size: 14px uppercase tracking-widest
nav links: Plus Jakarta Sans 500, 0.9rem, color navy, hover yellow
CTA pill: background navy, color yellow, border-radius 100px, padding 10px 22px
```

### Section Labels

```text
display: inline-block
background: rgba(245,166,35,0.15)
color: #F5A623
border-radius: 100px
padding: 4px 14px
font: Plus Jakarta Sans 600 0.72rem uppercase tracking-widest
margin-bottom: 12px
```

### Service Cards

Use cards to represent broad talent groups, not narrow single-role specialties.

```text
background: #FFFFFF
border-radius: 16px
padding: 32px-40px
box-shadow: 0 4px 24px rgba(13,27,62,0.08)
border-top: 4px solid #F5A623
transition: transform 200ms ease, box-shadow 200ms ease
```

Hover:

```text
transform: translateY(-6px)
box-shadow: 0 12px 40px rgba(13,27,62,0.14)
```

### Benefit Row

```text
display: flex
gap: 14px
align-items: flex-start
margin-bottom: 20px

Icon wrapper:
  width: 40px
  height: 40px
  background: rgba(13,27,62,0.06)
  border-radius: 10px
  icon: navy, 18px

Title: Sora 600 0.95rem navy
Desc: Plus Jakarta Sans 400 0.875rem #6B7280 line-height 1.6
```

### Capability Badges

```text
display: inline-flex
background: #F5F0E8
color: #0D1B3E
border-radius: 6px
padding: 4px 10px
font: Plus Jakarta Sans 500 0.8rem
gap: 6px
flex-wrap: wrap
```

### Primary CTA Button

```text
background: #0D1B3E
color: #F5A623
border: none
border-radius: 100px
padding: 14px 32px
font: Plus Jakarta Sans 600 1rem
```

### Secondary CTA Button

```text
background: transparent
color: #0D1B3E
border: 2px solid #0D1B3E
border-radius: 100px
padding: 12px 30px
font: Plus Jakarta Sans 600 1rem
```

Hover:

```text
background: #0D1B3E
color: #F5A623
```

### "Why Scalefort" Pillar Card

```text
background: rgba(255,255,255,0.06)
border: 1px solid rgba(255,255,255,0.12)
border-radius: 16px
padding: 32px
text-align: left or center

Icon: yellow, inside 56x56 rounded circle with rgba yellow background
Title: Sora 700 1.2rem white
Desc: Plus Jakarta Sans 400 0.9rem rgba(white, 0.7)
```

---

## Decorative Elements

### Hero Background

Add a large navy circle partially off-canvas in the top-right. Use CSS shapes or SVG. Color: `rgba(13,27,62,0.06)`.

The hero visual should communicate a broad tech talent network. Prefer an approved realistic team-collaboration image with light brand overlays and role labels for categories like Engineering, Product, Cloud, Data, QA, Support and Operations.

Do not use dark, generic or heavily filtered stock imagery. If a real photo is used, keep it bright, human, collaborative and easy to understand.

### Supporting Image Panels

Use supporting image panels sparingly in sections where they make the service feel more tangible. Keep image containers at `border-radius: 16px`, use object-cover cropping, and add a light text overlay only when it improves context.

### Section Dividers

Avoid hard lines. Use background color changes and generous vertical padding as natural separators.

### Quote Bubble

```text
background: #0D1B3E
color: #FFFFFF
border-radius: 12px 12px 12px 0
padding: 12px 18px
display: inline-block
font: Plus Jakarta Sans 500 0.9rem
max-width: 260px
```

---

## Do's and Don'ts

### Do

- Use `clamp()` for fluid font sizes
- Use CSS custom properties for all colors
- Add hover states to all interactive elements
- Present Scalefort as a flexible tech talent outsourcing partner
- Use yellow sparingly so it has impact
- Maintain generous whitespace throughout

### Don't

- Don't make the site look limited to one or two narrow specialties
- Don't use dark, generic or unrelated stock photos
- Don't use purple, red or other off-brand colors
- Don't use Inter, Roboto or Arial
- Don't add more than 2 font families
- Don't clip or overflow text on mobile
