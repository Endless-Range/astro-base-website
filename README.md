# Astro Component Library Starter

A comprehensive, production-ready component library for building modern, accessible websites with Astro and Tailwind CSS. Perfect for agencies and developers who want to ship client websites faster without sacrificing quality.

## Features

- **11 Production-Ready Components**: Navigation, Heroes (3 variants), Split Sections, Feature Cards, CTAs (2 variants), Contact Form, Footer
- **3 Layout Templates**: Base, Landing, and Inner page layouts with SEO built-in
- **Customizable Design System**: Easily change colors, fonts, and spacing per project
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Built with semantic HTML and ARIA labels
- **TypeScript Support**: Full type safety with TypeScript
- **Comprehensive Documentation**: Detailed specs, usage guide, and demo page

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit [http://localhost:4321](http://localhost:4321) to see your site.

## Project Structure

```
astro-component-library/
├── src/
│   ├── components/
│   │   └── library/          # All reusable components
│   │       ├── Navigation.astro
│   │       ├── HeroMinimal.astro
│   │       ├── HeroBold.astro
│   │       ├── HeroVideo.astro
│   │       ├── SplitSection.astro
│   │       ├── FeatureCard.astro
│   │       ├── FeatureGrid.astro
│   │       ├── CTASimple.astro
│   │       ├── CTASplit.astro
│   │       ├── ContactForm.astro
│   │       └── Footer.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Foundation layout with SEO
│   │   ├── LandingLayout.astro # Landing page template
│   │   └── InnerLayout.astro   # Content page template
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   └── components-demo.astro # Component showcase
│   └── styles/
│       └── global.css          # Design system + Tailwind
├── specs/                      # Documentation
│   ├── component-library-spec.md
│   ├── design-system-spec.md
│   └── usage-guide.md
└── public/                     # Static assets
```

## Component Overview

### Navigation
Sticky header with transparent-to-solid scroll effect and mobile hamburger menu.

```astro
<Navigation
  logoText="My Brand"
  navLinks={[
    {label: "Home", href: "/"},
    {label: "About", href: "/about"}
  ]}
  cta={{label: "Get Started", href: "/start"}}
  transparent={true}
/>
```

### Hero Components

**HeroMinimal**: Clean, centered hero
```astro
<HeroMinimal
  title="Welcome to Our Site"
  subtitle="Build amazing websites faster"
  cta={{label: "Learn More", href: "/about"}}
/>
```

**HeroBold**: Large typography with gradient option
```astro
<HeroBold
  headline="Transform Your <span class='highlight'>Business</span>"
  subtext="Join thousands of satisfied customers"
  cta={{label: "Get Started", href: "/start"}}
  gradientBackground={true}
/>
```

**HeroVideo**: Dramatic video background
```astro
<HeroVideo
  videoSrc="/videos/hero.mp4"
  title="Innovation Meets Design"
  overlayOpacity="medium"
/>
```

### Split Sections

Two-column layouts with content and images:

```astro
<SplitSection
  title="Why Choose Us"
  content="<p>Your content here...</p>"
  imageSrc="/images/team.jpg"
  imageAlt="Our team"
  imageRight={false}
/>
```

### Feature Components

**FeatureGrid**: Container for feature cards
```astro
<FeatureGrid title="Our Services" columns={3}>
  <FeatureCard
    icon="🚀"
    title="Fast"
    description="Lightning-fast performance"
  />
  <!-- More cards... -->
</FeatureGrid>
```

### CTA Components

**CTASimple**: Centered call-to-action
```astro
<CTASimple
  title="Ready to Get Started?"
  primaryCta={{label: "Sign Up", href: "/signup"}}
/>
```

**CTASplit**: CTA with image
```astro
<CTASplit
  title="See It In Action"
  content="Watch our platform transform your workflow"
  cta={{label: "Watch Demo", href: "/demo"}}
  imageSrc="/images/dashboard.jpg"
/>
```

### Contact Form

```astro
<ContactForm
  title="Get In Touch"
  action="https://formspree.io/f/YOUR_ID"
/>
```

### Footer

```astro
<Footer
  companyName="Acme Corp"
  tagline="Making the world better"
  columns={[...]}
  socialLinks={[...]}
/>
```

## Layout Templates

### LandingLayout

For landing pages with full-width sections:

```astro
---
import LandingLayout from '../layouts/LandingLayout.astro';
import HeroBold from '../components/library/HeroBold.astro';
---

<LandingLayout title="Home" description="Welcome">
  <HeroBold ... />
  <!-- More sections -->
</LandingLayout>
```

### InnerLayout

For content pages with page headers:

```astro
---
import InnerLayout from '../layouts/InnerLayout.astro';
---

<InnerLayout
  title="About Us"
  pageTitle="Our Story"
  pageSubtitle="We've been innovating since 2010"
>
  <div class="prose">
    <!-- Your content -->
  </div>
</InnerLayout>
```

## Customization

### Changing Colors

1. Open `src/styles/global.css`
2. Find the `@theme` section
3. Update the color hex values:

```css
/* Primary Color */
--color-primary-600: #9333ea; /* Change to your brand color */
```

Use [UI Colors](https://uicolors.app/) to generate complete palettes.

### Changing Fonts

1. Update the Google Fonts link in `src/layouts/BaseLayout.astro`
2. Update `--font-sans` in `src/styles/global.css`:

```css
--font-sans: 'Your Font', system-ui, sans-serif;
```

### Customizing Components

Components accept props for easy customization. Check the detailed prop documentation in each component file or in `specs/component-library-spec.md`.

## Design System

### Colors

- **Neutral**: 50-950 shades for text, backgrounds, borders
- **Primary**: Blue (customizable) - main accent color
- **Secondary**: Green (customizable) - secondary accent

### Typography

- **Font**: Inter (Google Fonts)
- **Scale**: Responsive (mobile → desktop)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing

Consistent spacing scale from `xs` (8px) to `4xl` (96px)

### Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Documentation

Detailed documentation is available in the `/specs` folder:

- **[component-library-spec.md](specs/component-library-spec.md)**: Complete component API reference
- **[design-system-spec.md](specs/design-system-spec.md)**: Design system guidelines
- **[usage-guide.md](specs/usage-guide.md)**: Comprehensive usage examples and patterns

## Demo Page

Visit [/components-demo](http://localhost:4321/components-demo) to see all components in action with live examples.

## SEO Features

All layouts include:
- Meta titles and descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card support
- Canonical URLs
- Structured data ready

## Form Integration

The ContactForm component works with:
- **Formspree**: Set `action="https://formspree.io/f/YOUR_ID"`
- **Netlify Forms**: Add `data-netlify="true"` attribute
- **Custom APIs**: Point to your endpoint

## Deployment

Build and deploy to any static hosting:

```bash
npm run build
```

Deploy the `dist/` folder to:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- Any static hosting

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- WCAG AA color contrast
- Focus states on interactive elements

## Tech Stack

- **[Astro](https://astro.build)**: Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com)**: Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)**: Type safety
- **Modern CSS**: CSS variables, custom properties

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Best Practices

1. **Keep library components untouched**: Copy to `src/components/project/` for customization
2. **Optimize images**: Use WebP format and responsive sizes
3. **Test responsive**: Check all breakpoints during development
4. **Accessibility**: Test keyboard navigation and screen readers
5. **Performance**: Lazy load images and optimize assets

## Tips for Multi-Client Use

1. **Create a template repository**: Fork this as a base for new projects
2. **Customize per client**: Update colors and fonts in `global.css`
3. **Document changes**: Track client-specific modifications
4. **Version control**: Use Git branches for different clients
5. **Component extensions**: Create client-specific wrapper components

## Troubleshooting

**Styles not applying?**
- Ensure `global.css` is imported in your layout
- Check Tailwind classes are correct
- Clear browser cache

**Mobile menu not working?**
- Check for JavaScript errors in console
- Ensure no conflicting IDs exist

**Form not submitting?**
- Verify `action` URL is correct
- Check form service configuration
- Review browser console for errors

## Contributing

This is a starter template. Feel free to:
- Add new components
- Enhance existing components
- Improve documentation
- Share your improvements

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [UI Colors - Palette Generator](https://uicolors.app/)
- [Google Fonts](https://fonts.google.com)
- [Unsplash - Free Images](https://unsplash.com)

## License

This component library is provided as-is for use in client projects. Modify and distribute freely.

## Support

For questions about Astro, consult the [official documentation](https://docs.astro.build) or join the [Astro Discord](https://astro.build/chat).

---

**Built with** ❤️ **using Astro + Tailwind CSS**

Ready to build amazing websites? Start by customizing the design system, then explore the components demo page!
