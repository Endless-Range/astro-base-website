# CLAUDE.md

## Project Overview
Astro website for [client name]. [Brief description of site type and purpose].

## Tech Stack
- Astro 5.x with static output
- Tailwind CSS v4
- TypeScript (strict mode)
- Deployed on [Cloudflare/Netlify/Vercel]

## Conventions - FOLLOW THESE

### Links
- ALL internal links must have trailing slash: `/about/` not `/about`
- Use relative paths for internal links, not absolute URLs

### Components
- Use Astro components (.astro) for static content
- Only use React (.tsx) when client-side interactivity is required
- Props must be typed with TypeScript interfaces

### Styling
- Use Tailwind utility classes, no custom CSS unless absolutely necessary
- Tokens are defined in /src/styles/global.css using Tailwind v4's @theme directive
- Mobile-first: start with base styles, add `md:` and `lg:` breakpoints
- Use astro-icon, not emojis

### Images
- All images go in /src/assets/ for automatic optimization
- Use Astro's <Image /> component, not raw <img> tags
- Always include alt text
- OG images go in /public/og/ (need predictable URLs)

### Content
- Use content collections in /src/content/ for structured content (blog, pages)
- Define schemas in /src/content/config.ts
- Page-level content (hero text, descriptions) should be in collections, not hardcoded

### SEO
- Every page needs title, description meta tags
- Include Open Graph tags on all pages
- Use semantic HTML (one h1 per page, proper heading hierarchy)

## File Structure
```
src/
  assets/       # Images, fonts (processed by build)
  components/   # Reusable UI components
  content/      # Content collections (markdown/MDX)
    config.ts   # Collection schemas
  layouts/      # Page layouts (BaseLayout.astro)
  pages/        # Routes
  styles/       # Global CSS, Tailwind config
public/
  og/           # Open Graph images
  favicon.svg
```

## Dev Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run check    # TypeScript checking
```

## Don't Do This
- No inline styles
- No `any` types in TypeScript
- Don't skip alt text on images
- Don't use div when semantic HTML exists (nav, main, section, article)
- Don't put content images in /public/ (loses optimization)
- Don't hardcode page content in components