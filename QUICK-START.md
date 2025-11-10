# Quick Start Guide

Welcome to your Astro Component Library! Here's everything you need to get started.

## 🚀 Get Running in 2 Minutes

```bash
# 1. Navigate to the project
cd astro-component-library

# 2. Start the dev server (already installed)
npm run dev

# 3. Open in browser
# Visit: http://localhost:4321
```

## 📁 What You Got

### 11 Production-Ready Components
Located in `src/components/library/`:
- **Navigation.astro** - Sticky header with mobile menu
- **HeroMinimal.astro** - Clean, centered hero
- **HeroBold.astro** - Large typography hero
- **HeroVideo.astro** - Video background hero
- **SplitSection.astro** - Content + image layouts
- **FeatureCard.astro** - Individual feature cards
- **FeatureGrid.astro** - Grid container for cards
- **CTASimple.astro** - Centered CTA
- **CTASplit.astro** - CTA with image
- **ContactForm.astro** - Styled form
- **Footer.astro** - Multi-column footer

### 3 Layout Templates
Located in `src/layouts/`:
- **BaseLayout.astro** - SEO-ready foundation
- **LandingLayout.astro** - For landing pages
- **InnerLayout.astro** - For content pages

### Documentation
Located in `specs/`:
- **component-library-spec.md** - Complete component reference
- **design-system-spec.md** - Design system details
- **usage-guide.md** - Comprehensive examples

## 🎨 Customize for Your First Project

### Step 1: Change Colors (2 minutes)

Open `src/styles/global.css` and update the primary color:

```css
/* Find this around line 24: */
--color-primary-600: #2563eb;

/* Change to your brand color: */
--color-primary-600: #9333ea; /* Example: Purple */
```

**Pro Tip**: Use [uicolors.app](https://uicolors.app/) to generate a full palette from one color.

### Step 2: Change Font (1 minute)

1. Open `src/layouts/BaseLayout.astro`
2. Replace the Google Fonts link (around line 50)
3. Update `--font-sans` in `global.css` (line 55)

### Step 3: Update Site Info

In `BaseLayout.astro`, change:
```astro
const siteName = 'Your Site Name'; // Line 40
const siteUrl = Astro.site || 'https://yoursite.com'; // Line 41
```

## 📄 Create Your First Page

Create `src/pages/about.astro`:

```astro
---
import InnerLayout from '../layouts/InnerLayout.astro';
import SplitSection from '../components/library/SplitSection.astro';
---

<InnerLayout
  title="About Us"
  pageTitle="Our Story"
  pageSubtitle="Building amazing things since 2024"
>
  <SplitSection
    title="Who We Are"
    content="<p>Your content here...</p>"
    imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
    imageAlt="Team"
  />
</InnerLayout>
```

Visit: `http://localhost:4321/about`

## 🎯 View Examples

- **Homepage**: [http://localhost:4321](http://localhost:4321) - Sample landing page
- **Component Demo**: [http://localhost:4321/components-demo](http://localhost:4321/components-demo) - All components showcased

## 📚 Common Tasks

### Add a Contact Page

```astro
---
import InnerLayout from '../layouts/InnerLayout.astro';
import ContactForm from '../components/library/ContactForm.astro';
---

<InnerLayout title="Contact" pageTitle="Get In Touch">
  <ContactForm action="https://formspree.io/f/YOUR_ID" />
</InnerLayout>
```

### Create a Services Page

```astro
---
import InnerLayout from '../layouts/InnerLayout.astro';
import FeatureGrid from '../components/library/FeatureGrid.astro';
import FeatureCard from '../components/library/FeatureCard.astro';
---

<InnerLayout title="Services" pageTitle="What We Do">
  <FeatureGrid title="Our Services" columns={3}>
    <FeatureCard
      icon="💻"
      title="Web Development"
      description="Custom websites built for your needs"
    />
    <!-- Add more cards... -->
  </FeatureGrid>
</InnerLayout>
```

### Build a Landing Page

```astro
---
import LandingLayout from '../layouts/LandingLayout.astro';
import HeroBold from '../components/library/HeroBold.astro';
import CTASimple from '../components/library/CTASimple.astro';
---

<LandingLayout title="Special Offer">
  <HeroBold
    headline="Limited Time <span class='highlight'>Offer</span>"
    subtext="Get started today"
    cta={{label: "Sign Up", href: "/signup"}}
  />

  <CTASimple
    title="Don't Miss Out"
    primaryCta={{label: "Get Started", href: "/start"}}
  />
</LandingLayout>
```

## 🔧 Key Files to Know

- **`src/styles/global.css`** - Design system (colors, fonts, spacing)
- **`src/layouts/BaseLayout.astro`** - SEO meta tags, site info
- **`src/pages/index.astro`** - Your homepage
- **`astro.config.mjs`** - Astro configuration

## 🚢 Ready to Deploy?

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

Deploy the `dist/` folder to:
- Netlify (drag & drop or GitHub integration)
- Vercel (connect your repo)
- Cloudflare Pages
- Any static hosting service

## 💡 Pro Tips

1. **Keep library components unchanged** - Copy to `src/components/project/` for client-specific changes
2. **Use the demo page** - Reference `/components-demo` while building
3. **Read the specs** - Check `specs/` folder for detailed documentation
4. **Test responsive** - Use browser dev tools to check mobile/tablet views
5. **Optimize images** - Use WebP format and compress before adding

## 🆘 Need Help?

- **Full README**: Check `README.md` for comprehensive info
- **Component Docs**: See `specs/component-library-spec.md`
- **Usage Examples**: See `specs/usage-guide.md`
- **Astro Docs**: [docs.astro.build](https://docs.astro.build)

## ✅ Next Steps

1. ✅ Customize colors in `global.css`
2. ✅ Update site name in `BaseLayout.astro`
3. ✅ Edit homepage (`src/pages/index.astro`)
4. ✅ Add your pages (about, services, contact, etc.)
5. ✅ Replace placeholder images with real ones
6. ✅ Set up form handling (Formspree or Netlify Forms)
7. ✅ Test on mobile devices
8. ✅ Build and deploy!

---

**Happy Building! 🎉**

You now have everything you need to create beautiful, professional websites quickly. Start with the demo page to see what's possible, then customize to your heart's content.
