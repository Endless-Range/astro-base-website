# Component Library Usage Guide

## Getting Started

### Project Setup

1. **Clone or copy this component library** into your project
2. **Install dependencies**: `npm install`
3. **Start dev server**: `npm run dev`
4. **Customize design system**: Edit `src/styles/global.css`

### Quick Start Example

Create a simple landing page:

```astro
---
// src/pages/index.astro
import LandingLayout from '../layouts/LandingLayout.astro';
import HeroBold from '../components/library/HeroBold.astro';
import FeatureGrid from '../components/library/FeatureGrid.astro';
import FeatureCard from '../components/library/FeatureCard.astro';
import CTASimple from '../components/library/CTASimple.astro';
---

<LandingLayout
  title="Welcome"
  description="My awesome landing page"
>
  <HeroBold
    headline="Build Amazing Websites <span class='highlight'>Faster</span>"
    subtext="Using our reusable component library"
    cta={{label: "Get Started", href: "/get-started"}}
  />

  <FeatureGrid title="Our Features" columns={3}>
    <FeatureCard
      icon="🚀"
      title="Fast Development"
      description="Pre-built components save hours of development time."
    />
    <FeatureCard
      icon="🎨"
      title="Easy Customization"
      description="Customize colors, fonts, and spacing per project."
    />
    <FeatureCard
      icon="📱"
      title="Fully Responsive"
      description="All components work beautifully on any device."
    />
  </FeatureGrid>

  <CTASimple
    title="Ready to get started?"
    subtitle="Join thousands of happy customers"
    primaryCta={{label: "Sign Up Now", href: "/signup"}}
  />
</LandingLayout>
```

---

## Component Usage Examples

### Navigation

```astro
---
import Navigation from '../components/library/Navigation.astro';
---

<!-- Basic usage with defaults -->
<Navigation />

<!-- Custom navigation -->
<Navigation
  logoText="My Brand"
  navLinks={[
    {label: "Home", href: "/"},
    {label: "Services", href: "/services"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"}
  ]}
  cta={{label: "Get Quote", href: "/quote"}}
  transparent={true}
/>

<!-- With logo image -->
<Navigation
  logoText="/images/logo.svg"
  logoIsImage={true}
  navLinks={[...]}
/>
```

---

### Hero Sections

#### Minimal Hero

```astro
<HeroMinimal
  title="Welcome to Our Site"
  subtitle="We help businesses grow online"
  cta={{label: "Learn More", href: "/about"}}
  secondaryCta={{label: "Contact Us", href: "/contact"}}
/>
```

#### Bold Hero with Highlighted Text

```astro
<HeroBold
  headline="Transform Your <span class='highlight'>Business</span> Today"
  subtext="Join over 10,000 companies using our platform"
  cta={{label: "Start Free Trial", href: "/trial"}}
  gradientBackground={true}
/>

<!-- Or with gradient text -->
<HeroBold
  headline="The <span class='gradient-text'>Future</span> is Here"
  subtext="..."
/>
```

#### Video Hero

```astro
<HeroVideo
  videoSrc="/videos/hero-background.mp4"
  posterImage="/images/hero-poster.jpg"
  title="Innovation Meets Design"
  subtitle="Creating digital experiences that matter"
  cta={{label: "Explore", href: "/products"}}
  overlayOpacity="dark"
/>
```

**Video Optimization Tips**:
- Keep videos under 5MB for fast loading
- Use MP4 format with H.264 codec
- Recommended dimensions: 1920x1080
- Compress with tools like HandBrake or FFmpeg

---

### Split Sections

```astro
<!-- Content left, Image right -->
<SplitSection
  title="Why Choose Us"
  content="<p>We've been serving clients for over 10 years...</p><p>Our commitment to quality is unmatched.</p>"
  imageSrc="/images/team.jpg"
  imageAlt="Our team at work"
  cta={{label: "Learn More", href: "/about"}}
  imageRight={false}
/>

<!-- Image left, Content right -->
<SplitSection
  title="Our Process"
  content="..."
  imageSrc="/images/process.jpg"
  imageAlt="Our process"
  imageRight={true}
  backgroundColor="bg-neutral-50"
/>
```

---

### Feature Grids

```astro
<FeatureGrid
  title="What We Offer"
  subtitle="Everything you need to succeed"
  columns={3}
>
  <!-- Icon as emoji -->
  <FeatureCard
    icon="⚡"
    title="Lightning Fast"
    description="Optimized for speed and performance"
  />

  <!-- Icon as SVG -->
  <FeatureCard
    icon='<svg class="w-10 h-10">...</svg>'
    title="Secure"
    description="Bank-level security for your data"
    link={{href: "/security", label: "Learn about security"}}
  />

  <!-- Icon as icon font class (if using Font Awesome, etc) -->
  <FeatureCard
    icon='<i class="fas fa-lock text-4xl"></i>'
    title="Reliable"
    description="99.9% uptime guarantee"
  />
</FeatureGrid>

<!-- 2-column layout -->
<FeatureGrid columns={2} centered={false}>
  <FeatureCard ... />
  <FeatureCard ... />
</FeatureGrid>

<!-- 4-column layout -->
<FeatureGrid columns={4}>
  <FeatureCard ... />
  <FeatureCard ... />
  <FeatureCard ... />
  <FeatureCard ... />
</FeatureGrid>
```

---

### CTA Sections

#### Simple CTA (Dark)

```astro
<CTASimple
  title="Ready to Transform Your Business?"
  subtitle="Join thousands of satisfied customers"
  primaryCta={{label: "Get Started Free", href: "/signup"}}
  secondaryCta={{label: "View Pricing", href: "/pricing"}}
/>
```

#### Simple CTA (Light)

```astro
<CTASimple
  title="Let's Work Together"
  subtitle="Contact us for a free consultation"
  primaryCta={{label: "Contact Us", href: "/contact"}}
  backgroundColor="bg-neutral-100"
  darkMode={false}
/>
```

#### Split CTA

```astro
<CTASplit
  title="See It In Action"
  content="Watch how our platform can transform your workflow and boost productivity by 10x."
  cta={{label: "Watch Demo", href: "/demo"}}
  imageSrc="/images/dashboard.jpg"
  imageAlt="Platform dashboard"
  imageRight={true}
/>
```

---

### Contact Forms

```astro
<!-- Basic form -->
<ContactForm />

<!-- Customized form -->
<ContactForm
  title="Let's Talk"
  subtitle="We'd love to hear about your project"
  action="https://formspree.io/f/yourformid"
  submitLabel="Send Message"
/>

<!-- Minimal form (no phone, no message) -->
<ContactForm
  title="Subscribe"
  subtitle="Get our newsletter"
  includePhone={false}
  includeMessage={false}
  submitLabel="Subscribe"
/>
```

**Form Integration Options**:

1. **Formspree**:
```astro
<ContactForm action="https://formspree.io/f/YOUR_FORM_ID" />
```

2. **Netlify Forms**:
```astro
<ContactForm action="/thank-you" method="POST" />
<!-- Add data-netlify="true" to the form element -->
```

3. **Custom API**:
```astro
<ContactForm action="/api/contact" method="POST" />
```

---

### Footer

```astro
<!-- Basic footer with defaults -->
<Footer />

<!-- Customized footer -->
<Footer
  companyName="Acme Corp"
  tagline="Making the world a better place"
  columns={[
    {
      title: "Products",
      links: [
        {label: "Features", href: "/features"},
        {label: "Pricing", href: "/pricing"},
        {label: "Demo", href: "/demo"}
      ]
    },
    {
      title: "Company",
      links: [
        {label: "About", href: "/about"},
        {label: "Careers", href: "/careers"},
        {label: "Press", href: "/press"}
      ]
    },
    {
      title: "Support",
      links: [
        {label: "Help Center", href: "/help"},
        {label: "Contact", href: "/contact"},
        {label: "Status", href: "/status"}
      ]
    }
  ]}
  socialLinks={[
    {
      platform: "Twitter",
      href: "https://twitter.com/yourhandle",
      icon: '<svg>...</svg>'
    },
    // ... more social links
  ]}
/>
```

---

## Layout Templates

### Using BaseLayout

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Navigation from '../components/library/Navigation.astro';
import Footer from '../components/library/Footer.astro';
---

<BaseLayout
  title="About Us"
  description="Learn about our company and mission"
  ogImage="/images/og-about.jpg"
>
  <Navigation slot="navigation" />

  <main>
    <!-- Your content -->
  </main>

  <Footer slot="footer" />
</BaseLayout>
```

### Using LandingLayout

```astro
---
import LandingLayout from '../layouts/LandingLayout.astro';
import HeroBold from '../components/library/HeroBold.astro';
---

<LandingLayout
  title="Product Launch"
  description="Introducing our new product"
  transparentNav={true}
>
  <HeroBold ... />
  <!-- More sections -->
</LandingLayout>
```

### Using InnerLayout

```astro
---
import InnerLayout from '../layouts/InnerLayout.astro';
---

<InnerLayout
  title="Our Services"
  description="Professional services for your business"
  pageTitle="What We Do"
  pageSubtitle="Comprehensive solutions for modern businesses"
>
  <div class="prose prose-lg max-w-none">
    <h2>Web Development</h2>
    <p>We build modern, fast websites...</p>
  </div>
</InnerLayout>
```

---

## Customization Patterns

### Changing Colors Per Project

1. Open `src/styles/global.css`
2. Locate the `@theme` section
3. Replace primary and secondary color hex codes
4. Save and see changes instantly

**Example**: Purple & Orange theme
```css
/* Primary - Purple */
--color-primary-500: #a855f7;
--color-primary-600: #9333ea;
--color-primary-700: #7e22ce;
/* ...update all shades */

/* Secondary - Orange */
--color-secondary-500: #f97316;
--color-secondary-600: #ea580c;
--color-secondary-700: #c2410c;
/* ...update all shades */
```

Use [UI Colors](https://uicolors.app/) to generate full palettes.

### Changing Fonts

**Method 1: Google Fonts**

1. Edit `src/layouts/BaseLayout.astro`:
```astro
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

2. Edit `src/styles/global.css`:
```css
--font-sans: 'Poppins', system-ui, sans-serif;
```

**Method 2: Local Fonts**

1. Add fonts to `public/fonts/`
2. Define in `global.css`:
```css
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

--font-sans: 'Custom Font', system-ui, sans-serif;
```

### Extending Components

**Option 1: Wrapper Components**

Create project-specific variants:

```astro
---
// src/components/ProjectHero.astro
import HeroBold from './library/HeroBold.astro';

const projectDefaults = {
  gradientBackground: true,
  ...Astro.props
};
---

<HeroBold {...projectDefaults} />
```

**Option 2: Fork and Modify**

Copy library component to project components folder and customize:

```bash
cp src/components/library/FeatureCard.astro src/components/CustomFeatureCard.astro
```

Then modify `CustomFeatureCard.astro` as needed.

---

## Best Practices

### 1. Component Organization

```
src/
├── components/
│   ├── library/         # Untouched library components
│   └── project/         # Project-specific components
├── layouts/
├── pages/
└── styles/
```

### 2. Image Optimization

- Use WebP format for smaller file sizes
- Provide responsive images with `srcset`
- Always include descriptive `alt` text
- Optimize before uploading (TinyPNG, Squoosh)

### 3. SEO Best Practices

- Unique `title` and `description` for each page
- Use semantic HTML (h1, h2, nav, footer, etc.)
- Include Open Graph images (1200x630px)
- Set canonical URLs for duplicate content

### 4. Performance

- Lazy load images: `loading="lazy"`
- Minimize component props complexity
- Use Astro's static site generation
- Optimize fonts with `font-display: swap`

### 5. Accessibility

- Test keyboard navigation
- Use ARIA labels where needed
- Ensure color contrast (use tools like WebAIM)
- Provide text alternatives for media

---

## Common Patterns

### Full Landing Page Structure

```astro
---
import LandingLayout from '../layouts/LandingLayout.astro';
import HeroBold from '../components/library/HeroBold.astro';
import SplitSection from '../components/library/SplitSection.astro';
import FeatureGrid from '../components/library/FeatureGrid.astro';
import FeatureCard from '../components/library/FeatureCard.astro';
import CTASimple from '../components/library/CTASimple.astro';
import ContactForm from '../components/library/ContactForm.astro';
---

<LandingLayout title="Home" description="...">
  <!-- Hero -->
  <HeroBold ... />

  <!-- About/Intro -->
  <SplitSection ... />

  <!-- Features -->
  <FeatureGrid ...>
    <FeatureCard ... />
    <FeatureCard ... />
    <FeatureCard ... />
  </FeatureGrid>

  <!-- Services -->
  <SplitSection imageRight={true} ... />

  <!-- Social Proof / Testimonials -->
  <section>...</section>

  <!-- CTA -->
  <CTASimple ... />

  <!-- Contact -->
  <ContactForm ... />
</LandingLayout>
```

### Inner Content Page

```astro
---
import InnerLayout from '../layouts/InnerLayout.astro';
---

<InnerLayout
  title="About"
  pageTitle="About Our Company"
  pageSubtitle="We've been innovating since 2010"
>
  <div class="prose prose-lg max-w-4xl">
    <h2>Our Story</h2>
    <p>...</p>

    <h2>Our Team</h2>
    <p>...</p>
  </div>

  <FeatureGrid title="Our Values" columns={4}>
    <FeatureCard ... />
    <FeatureCard ... />
    <FeatureCard ... />
    <FeatureCard ... />
  </FeatureGrid>
</InnerLayout>
```

---

## Troubleshooting

### Styles Not Applying

**Issue**: Tailwind classes not working
**Solution**: Ensure `global.css` is imported in your layout

### Navigation Not Sticky

**Issue**: Navigation doesn't stick on scroll
**Solution**: Check that no parent elements have `overflow: hidden`

### Forms Not Submitting

**Issue**: Form doesn't submit
**Solution**:
1. Check `action` prop has valid URL
2. Verify form service is configured
3. Check browser console for errors

### Mobile Menu Not Opening

**Issue**: Hamburger doesn't work
**Solution**: Ensure JavaScript is enabled and no conflicting IDs exist

---

## FAQ

**Q: Can I use this with React/Vue/Svelte?**
A: Yes! Astro supports framework integration. Import your framework components and use alongside library components.

**Q: How do I add animations?**
A: Use Tailwind's animation utilities or add custom animations in `global.css`. Consider libraries like GSAP for complex animations.

**Q: Can I use this for a blog?**
A: Absolutely! Use InnerLayout for blog posts. Add Astro Content Collections for managing posts.

**Q: How to add a blog layout?**
A: Create `BlogLayout.astro` extending `InnerLayout`:
```astro
---
import InnerLayout from './InnerLayout.astro';
const {frontmatter} = Astro.props;
---

<InnerLayout
  title={frontmatter.title}
  description={frontmatter.description}
  pageTitle={frontmatter.title}
>
  <article class="prose prose-lg max-w-4xl mx-auto">
    <slot />
  </article>
</InnerLayout>
```

**Q: Does this work with CMS?**
A: Yes! Works with headless CMS like Sanity, Contentful, Strapi. Fetch data and pass to components as props.

**Q: How to deploy?**
A: Deploy to Netlify, Vercel, Cloudflare Pages, or any static hosting. Run `npm run build` and deploy the `dist/` folder.

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [UI Colors - Palette Generator](https://uicolors.app/)
- [Google Fonts](https://fonts.google.com)
- [WebAIM - Accessibility](https://webaim.org/)

---

*Last Updated: 2025*
