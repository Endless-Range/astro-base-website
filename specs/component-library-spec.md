# Component Library Specification

## Overview

This Astro component library provides a comprehensive set of reusable, accessible, and customizable UI components for building modern client websites quickly and consistently.

## Components

### Navigation Components

#### Navigation.astro
**Purpose**: Main site navigation with responsive mobile menu and scroll effects

**Props**:
- `logoText` (string): Logo text or image path
- `logoIsImage` (boolean): Whether logo is an image (default: false)
- `navLinks` (Array): Navigation menu items `[{label, href}]`
- `cta` (Object): Call-to-action button `{label, href}`
- `transparent` (boolean): Start with transparent background (default: true)

**Features**:
- Sticky positioning with scroll-based background transition
- Smooth mobile hamburger menu
- Fully responsive
- Accessibility-ready with proper ARIA labels

**Customization Points**:
- Logo can be text or image
- Navigation links array easily customizable
- CTA button color matches design system primary color
- Transparent-to-solid scroll effect can be disabled

---

### Hero Components

#### HeroMinimal.astro
**Purpose**: Clean, centered hero section for simple pages

**Props**:
- `title` (string, required): Main headline
- `subtitle` (string): Optional subtext
- `cta` (Object): Primary CTA `{label, href}`
- `secondaryCta` (Object): Optional secondary CTA

**Use Cases**:
- Inner pages
- Simple landing pages
- Minimal design aesthetic projects

#### HeroBold.astro
**Purpose**: Impactful hero with large typography

**Props**:
- `headline` (string, required): Large headline (supports HTML for highlighting)
- `subtext` (string): Supporting text
- `cta` (Object): Primary CTA
- `secondaryCta` (Object): Optional secondary CTA
- `gradientBackground` (boolean): Use gradient background (default: false)

**Features**:
- Supports highlighted text with `.highlight` class
- Supports gradient text with `.gradient-text` class
- Hover scale effect on primary button
- Optional gradient background

#### HeroVideo.astro
**Purpose**: Dramatic video background hero

**Props**:
- `videoSrc` (string, required): Path to video file (mp4, webm)
- `posterImage` (string): Fallback image
- `title` (string, required): Main headline
- `subtitle` (string): Optional subtext
- `cta`, `secondaryCta` (Objects): Action buttons
- `overlayOpacity` (string): 'light', 'medium', 'dark' (default: 'medium')

**Technical Notes**:
- Video should be optimized for web (compressed, appropriate resolution)
- Poster image improves initial load experience
- Overlay ensures text readability
- Includes animated scroll indicator

---

### Layout Components

#### SplitSection.astro
**Purpose**: Two-column content/image layout

**Props**:
- `title` (string, required): Section headline
- `content` (string, required): Main text (supports HTML)
- `imageSrc` (string, required): Path to image
- `imageAlt` (string, required): Alt text
- `cta` (Object): Optional CTA button
- `imageRight` (boolean): Image position (default: false - left side)
- `backgroundColor` (string): Background color class (default: 'bg-white')

**Responsive Behavior**:
- Side-by-side on desktop (lg breakpoint)
- Stacks vertically on mobile
- Image always appears first on mobile

**Customization**:
- Switch image side with `imageRight` prop
- Background color easily changed
- Content supports HTML for rich formatting

---

### Feature/Service Components

#### FeatureCard.astro
**Purpose**: Individual feature/service card

**Props**:
- `icon` (string): Icon HTML/emoji/SVG
- `title` (string, required): Card title
- `description` (string, required): Card description
- `link` (Object): Optional link `{href, label}`
- `centered` (boolean): Center align content (default: false)

**Features**:
- Hover effects (border color change, shadow, link arrow animation)
- Flexible icon support (SVG, emoji, icon fonts)
- Optional "Learn more" link

#### FeatureGrid.astro
**Purpose**: Container for multiple FeatureCards

**Props**:
- `title` (string): Section title
- `subtitle` (string): Section subtitle
- `columns` (number): 2, 3, or 4 columns (default: 3)
- `centered` (boolean): Center title/subtitle (default: true)

**Usage Pattern**:
```astro
<FeatureGrid title="Our Services" columns={3}>
  <FeatureCard ... />
  <FeatureCard ... />
  <FeatureCard ... />
</FeatureGrid>
```

---

### CTA Components

#### CTASimple.astro
**Purpose**: Centered call-to-action block

**Props**:
- `title` (string, required): CTA headline
- `subtitle` (string): Supporting text
- `primaryCta` (Object, required): Primary button `{label, href}`
- `secondaryCta` (Object): Optional secondary button
- `backgroundColor` (string): Background color class (default: 'bg-primary-600')
- `darkMode` (boolean): Light text on dark bg (default: true)

**Variants**:
- Dark mode (light text)
- Light mode (dark text)
- Custom background colors

#### CTASplit.astro
**Purpose**: Two-column CTA with image

**Props**:
- `title` (string, required): CTA headline
- `content` (string, required): Supporting text
- `cta` (Object, required): Action button
- `imageSrc`, `imageAlt` (strings, required): Image details
- `imageRight` (boolean): Image position (default: true)
- `backgroundColor` (string): Background color (default: 'bg-neutral-900')

**Best For**:
- Product showcases
- Feature highlights
- More visual CTAs

---

### Form Components

#### ContactForm.astro
**Purpose**: Styled contact form with validation

**Props**:
- `title`, `subtitle` (strings): Form heading
- `action` (string): Form action URL (default: '#')
- `method` (string): Form method (default: 'POST')
- `includeMessage` (boolean): Include textarea (default: true)
- `includePhone` (boolean): Include phone field (default: true)
- `submitLabel` (string): Button text (default: 'Send Message')

**Features**:
- HTML5 validation ready
- Accessible form labels
- Focus states with primary color
- Optional client-side handling (commented in script)

**Integration Notes**:
- Replace `action` with your form endpoint
- Uncomment and customize JavaScript for AJAX submission
- Works with services like Formspree, Netlify Forms, etc.

---

### Footer Component

#### Footer.astro
**Purpose**: Multi-column footer with navigation and social links

**Props**:
- `companyName` (string): Company name for copyright
- `tagline` (string): Company description
- `columns` (Array): Footer nav columns `[{title, links: [{label, href}]}]`
- `socialLinks` (Array): Social media `[{platform, href, icon}]`
- `backgroundColor` (string): Background color (default: 'bg-neutral-900')

**Default Structure**:
- Company info + social (4 columns on large screens)
- 3 navigation columns (2 columns each)
- Bottom bar with copyright and legal links

**Customization**:
- Easy to add/remove columns
- Social icons are SVG strings (fully customizable)
- Automatic current year in copyright

---

## Layout Templates

### BaseLayout.astro
**Purpose**: Foundation for all pages

**Props**:
- `title` (string, required): Page title
- `description` (string): Meta description
- `ogImage` (string): Open Graph image URL
- `canonicalUrl` (string): Canonical URL
- `includeNav`, `includeFooter` (booleans): Toggle nav/footer

**SEO Features**:
- Complete meta tag setup
- Open Graph support (Facebook, LinkedIn)
- Twitter Card support
- Canonical URLs
- Structured for search engines

**Slots**:
- `navigation`: Custom navigation
- Default slot: Main content
- `footer`: Custom footer

### LandingLayout.astro
**Purpose**: Landing page layout with transparent navigation

**Props**:
- All BaseLayout props
- `transparentNav` (boolean): Transparent nav (default: true)

**Pre-configured**:
- Navigation component included
- Footer component included
- Optimized for full-width sections

### InnerLayout.astro
**Purpose**: Standard content pages

**Props**:
- All BaseLayout props
- `pageTitle` (string): On-page heading
- `pageSubtitle` (string): On-page subtitle
- `containerized` (boolean): Wrap in container (default: true)

**Features**:
- Non-transparent navigation
- Optional page header section
- Content container for readable line lengths
- Can disable containerization for custom layouts

---

## Questions & Considerations

### For Client Customization

**Q: How should clients customize colors per project?**
A: Edit the CSS variables in `src/styles/global.css`. The `@theme` section contains all color definitions. Recommend keeping the structure (50-950 shades) but changing hex values.

**Q: What about custom fonts?**
A: Update the Google Fonts link in `BaseLayout.astro` and change `--font-sans` in `global.css`. Or use local fonts by adding files to `public/fonts/`.

**Q: Can components be used outside these layouts?**
A: Yes! All library components are standalone and can be imported into any Astro page/component.

**Q: How to add more navigation links?**
A: Pass a custom `navLinks` array to the Navigation component, or edit the default in `Navigation.astro`.

### Technical Decisions

**Q: Why Tailwind CSS v4?**
A: Latest version with improved performance, native CSS variable support, and better developer experience. Uses `@theme` for better integration.

**Q: Why are some props HTML strings (content, icon)?**
A: Provides maximum flexibility. Allows rich text, custom icons, and HTML formatting without complex slot patterns.

**Q: Should we add animation libraries?**
A: Currently using CSS transitions/animations. Consider adding Framer Motion or GSAP for complex animations on a per-project basis to keep bundle size lean.

**Q: Form handling strategy?**
A: Left intentionally flexible. Clients can use:
- Formspree
- Netlify Forms
- Custom API endpoints
- Third-party form services

Uncomment and customize the JavaScript in ContactForm.astro for AJAX handling.

---

## Component Naming Conventions

- **Descriptive names**: `HeroBold`, `CTASimple`, `SplitSection`
- **Variant suffixes**: Minimal, Bold, Video, Simple, Split
- **Container components**: Grid suffix (FeatureGrid)

## File Organization

```
src/
├── components/
│   └── library/          # All reusable components
├── layouts/              # Page layouts
├── pages/                # Routes
└── styles/
    └── global.css        # Design system + Tailwind
```

## Browser Support

- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Mobile Safari, Chrome Mobile
- Graceful degradation for older browsers

## Accessibility

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Alt text required for images
- Color contrast meets WCAG AA standards

---

*Last Updated: 2025*
