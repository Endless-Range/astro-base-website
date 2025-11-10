# Design System Specification

## Overview

This design system provides a cohesive, scalable foundation for building consistent user interfaces. It's designed to be easily customizable per project while maintaining structural consistency.

## Color Palette

### Neutral Colors

Used for text, backgrounds, borders, and UI elements.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| 50    | #fafafa  | Lightest backgrounds |
| 100   | #f5f5f5  | Light backgrounds, hover states |
| 200   | #e5e5e5  | Borders, dividers |
| 300   | #d4d4d4  | Disabled states, subtle borders |
| 400   | #a3a3a3  | Placeholder text |
| 500   | #737373  | Secondary text |
| 600   | #525252  | Body text (light backgrounds) |
| 700   | #404040  | Emphasized text |
| 800   | #262626  | Dark backgrounds |
| 900   | #171717  | Headings, primary text |
| 950   | #0a0a0a  | Maximum contrast |

**CSS Variables**: `--color-neutral-{shade}`
**Tailwind Classes**: `bg-neutral-{shade}`, `text-neutral-{shade}`, `border-neutral-{shade}`

### Primary Color (Blue)

Main brand/accent color. Default: Blue spectrum.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| 50    | #eff6ff  | Light backgrounds, highlights |
| 100   | #dbeafe  | Subtle backgrounds |
| 200   | #bfdbfe  | Hover backgrounds |
| 300   | #93c5fd  | Borders, accents |
| 400   | #60a5fa  | Active states |
| 500   | #3b82f6  | Default buttons, links |
| 600   | #2563eb  | **Primary action color** ⭐ |
| 700   | #1d4ed8  | Hover states, emphasis |
| 800   | #1e40af  | Active/pressed states |
| 900   | #1e3a8a  | Dark accents |
| 950   | #172554  | Darkest variant |

**CSS Variables**: `--color-primary-{shade}`
**Tailwind Classes**: `bg-primary-{shade}`, `text-primary-{shade}`, etc.

**Primary Action Color**: `primary-600` (#2563eb)

### Secondary Color (Green)

Secondary accent for variety and visual interest. Default: Green spectrum.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| 50    | #f0fdf4  | Success backgrounds |
| 100   | #dcfce7  | Light success states |
| 200   | #bbf7d0  | Subtle highlights |
| 300   | #86efac  | Borders, accents |
| 400   | #4ade80  | Active states |
| 500   | #22c55e  | Default state |
| 600   | #16a34a  | **Secondary action** ⭐ |
| 700   | #15803d  | Hover states |
| 800   | #166534  | Active/pressed |
| 900   | #14532d  | Dark variant |
| 950   | #052e16  | Darkest variant |

**CSS Variables**: `--color-secondary-{shade}`
**Tailwind Classes**: `bg-secondary-{shade}`, `text-secondary-{shade}`, etc.

---

## Typography

### Font Family

**Default**: Inter (Google Fonts) with system font fallbacks

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif
```

**Why Inter?**
- Excellent readability at all sizes
- Professional, modern appearance
- Optimized for screens
- Wide language support

**Customization**: Change the Google Fonts link in `BaseLayout.astro` and update `--font-sans` in `global.css`

### Type Scale

| Element | Classes | Size (px) | Weight | Usage |
|---------|---------|-----------|--------|-------|
| H1      | `text-4xl md:text-5xl lg:text-6xl` | 36-60 | 700 (Bold) | Page titles, main heroes |
| H2      | `text-3xl md:text-4xl lg:text-5xl` | 30-48 | 700 (Bold) | Section headings |
| H3      | `text-2xl md:text-3xl` | 24-30 | 700 (Bold) | Subsection headings |
| H4      | `text-xl md:text-2xl` | 20-24 | 600 (Semibold) | Card titles |
| H5      | `text-lg md:text-xl` | 18-20 | 600 (Semibold) | Small headings |
| H6      | `text-base md:text-lg` | 16-18 | 600 (Semibold) | Smallest headings |
| Body    | `text-base md:text-lg` | 16-18 | 400 (Regular) | Paragraph text |
| Small   | `text-sm` | 14 | 400 (Regular) | Fine print, captions |
| Tiny    | `text-xs` | 12 | 400 (Regular) | Labels, metadata |

### Font Weights

- **Regular (400)**: Body text
- **Medium (500)**: Emphasized text, nav links
- **Semibold (600)**: Headings, important UI
- **Bold (700)**: Main headings
- **Extrabold (800)**: Large display text
- **Black (900)**: Maximum emphasis (optional)

### Line Heights

Tailwind's default line heights are used:
- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)
- Dense content: `leading-normal` (1.5)

---

## Spacing Scale

Consistent spacing creates visual rhythm and hierarchy.

| Variable | Value | Tailwind | Usage |
|----------|-------|----------|-------|
| `--spacing-xs` | 0.5rem (8px) | `p-2`, `m-2` | Tight spacing |
| `--spacing-sm` | 0.75rem (12px) | `p-3`, `m-3` | Small gaps |
| `--spacing-md` | 1rem (16px) | `p-4`, `m-4` | Default spacing |
| `--spacing-lg` | 1.5rem (24px) | `p-6`, `m-6` | Medium gaps |
| `--spacing-xl` | 2rem (32px) | `p-8`, `m-8` | Large spacing |
| `--spacing-2xl` | 3rem (48px) | `p-12`, `m-12` | Section spacing |
| `--spacing-3xl` | 4rem (64px) | `p-16`, `m-16` | Large sections |
| `--spacing-4xl` | 6rem (96px) | `p-24`, `m-24` | Hero sections |

### Component Spacing Guidelines

- **Card padding**: `p-6 md:p-8` (24-32px)
- **Section padding**: `py-16 md:py-24` (64-96px vertical)
- **Container padding**: `px-4 sm:px-6 lg:px-8` (16-32px horizontal)
- **Element gaps**: `gap-4`, `gap-6`, `gap-8` (16-32px)

---

## Shadows

Elevation creates visual hierarchy.

| Variable | Value | Tailwind | Usage |
|----------|-------|----------|-------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | `shadow-sm` | Subtle elevation |
| `--shadow-md` | 0 4px 6px rgba(0,0,0,0.1) | `shadow-md` | Cards, dropdowns |
| `--shadow-lg` | 0 10px 15px rgba(0,0,0,0.1) | `shadow-lg` | Modals, popovers |
| `--shadow-xl` | 0 20px 25px rgba(0,0,0,0.1) | `shadow-xl` | Maximum elevation |

**Hover Effects**: Combine with transforms for dynamic elevation
```html
class="shadow-md hover:shadow-lg transition-shadow"
```

---

## Border Radius

| Class | Value | Usage |
|-------|-------|-------|
| `rounded` | 0.25rem (4px) | Small elements |
| `rounded-md` | 0.375rem (6px) | Medium elements |
| `rounded-lg` | 0.5rem (8px) | Cards, buttons |
| `rounded-xl` | 0.75rem (12px) | Large containers |
| `rounded-2xl` | 1rem (16px) | Special emphasis |
| `rounded-full` | 9999px | Circular elements |

**Component Defaults**:
- Buttons: `rounded-lg`
- Cards: `rounded-lg`
- Images: `rounded-lg`
- Form inputs: `rounded-lg`

---

## Transitions & Animations

### Transition Speeds

| Variable | Duration | Usage |
|----------|----------|-------|
| `--transition-fast` | 150ms | Quick interactions (hover, focus) |
| `--transition-base` | 250ms | Standard transitions (color, bg) |
| `--transition-slow` | 350ms | Complex animations (slide, fade) |

**Easing**: `ease-in-out` for smooth, natural motion

### Common Transition Classes

```html
<!-- Color transitions -->
class="transition-colors duration-300"

<!-- All properties -->
class="transition-all duration-300"

<!-- Transform only -->
class="transition-transform duration-300"

<!-- Multiple properties -->
class="transition-[background-color,transform] duration-300"
```

### Animation Utilities

**Hover Effects**:
```html
<!-- Scale up -->
class="hover:scale-105 transition-transform"

<!-- Translate -->
class="hover:translate-x-1 transition-transform"

<!-- Opacity -->
class="hover:opacity-90 transition-opacity"
```

**Pre-built Animations**:
- `animate-bounce`: Bouncing effect (scroll indicator)
- `animate-pulse`: Pulsing opacity
- `animate-spin`: Rotating loader

---

## Responsive Breakpoints

| Breakpoint | Min Width | Device |
|------------|-----------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

### Mobile-First Approach

All styles are mobile-first. Apply larger screen styles with prefixes:

```html
<!-- Mobile: column, Desktop: row -->
class="flex-col md:flex-row"

<!-- Mobile: text-2xl, Tablet: text-3xl, Desktop: text-4xl -->
class="text-2xl md:text-3xl lg:text-4xl"
```

---

## Container

**Max Width**: `container` class with auto margins centers content

Default max-widths:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Usage**:
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

---

## Customization Guide

### How to Customize Colors Per Project

1. Open `src/styles/global.css`
2. Find the `@theme` section
3. Replace hex values in `--color-primary-{shade}` and `--color-secondary-{shade}`
4. Keep the same shade structure (50-950) for consistency
5. Use a tool like [Tailwind Color Generator](https://uicolors.app/) to create harmonious palettes

**Example**: Changing to purple primary
```css
--color-primary-500: #a855f7; /* from #3b82f6 */
--color-primary-600: #9333ea; /* from #2563eb */
/* ...update all shades */
```

### How to Change Fonts

1. **Using Google Fonts**:
   - Edit `src/layouts/BaseLayout.astro`
   - Update the Google Fonts link
   - Change `--font-sans` in `global.css`

2. **Using Local Fonts**:
   - Add font files to `public/fonts/`
   - Define `@font-face` in `global.css`
   - Update `--font-sans`

### How to Adjust Spacing

Tailwind's spacing scale is comprehensive, but you can add custom values in `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    }
  }
}
```

---

## Design Principles

1. **Consistency**: Use the same spacing, colors, and typography throughout
2. **Hierarchy**: Clear visual hierarchy with size, weight, and color
3. **Accessibility**: WCAG AA contrast ratios, keyboard navigation
4. **Responsiveness**: Mobile-first, works on all screen sizes
5. **Performance**: Minimal CSS, efficient animations
6. **Customization**: Easy to adapt per project without breaking structure

---

## Questions & Decisions

**Q: Why this specific neutral palette?**
A: Based on Tailwind's slate colors - professional, versatile, works with most accent colors.

**Q: Can I use different color names (like 'brand' instead of 'primary')?**
A: Yes! Update the CSS variable names and Tailwind config. Just be consistent throughout.

**Q: Should spacing be in rem or px?**
A: Using rem allows scaling with user font size preferences (accessibility). Our system uses rem with px equivalents in comments.

**Q: How to add dark mode?**
A: Tailwind supports dark mode with `dark:` prefix. Define dark variants of colors and add `darkMode: 'class'` to tailwind.config.js.

**Q: What about animations for page transitions?**
A: Astro supports View Transitions. Add `<ViewTransitions />` to BaseLayout for smooth page transitions.

---

*Last Updated: 2025*
