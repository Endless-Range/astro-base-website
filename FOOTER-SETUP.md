# Footer Setup Documentation

This document explains how the centralized footer configuration works in this Astro project.

## Overview

The footer is now **fully centralized** across the entire site. All footer content (company information, navigation links, social media) is defined in a single configuration file, making it easy to maintain and update.

## Key Files

### 1. Configuration Files

- **`src/config/site.ts`** - Global site configuration
  - Company name, contact information
  - Social media URLs
  - SEO defaults

- **`src/config/footer.ts`** - Footer-specific configuration
  - Footer columns and links
  - Social media links for footer
  - Footer styling options
  - Footer variants (like minimal footer for 404 page)

### 2. Layouts (Automatically include footer)

All layouts now import and use the centralized footer config:

- **`src/layouts/LandingLayout.astro`** - For landing pages
- **`src/layouts/InnerLayout.astro`** - For content pages
- **`src/layouts/BlogLayout.astro`** - For blog posts

### 3. Components

- **`src/components/library/Footer.astro`** - The footer component itself

## How It Works

### The Single Source of Truth

All footer content is defined in **`src/config/footer.ts`**:

```typescript
export const footerConfig = {
  companyName: 'Your Company',
  tagline: 'Building amazing digital experiences.',

  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        // ...
      ]
    },
    // More columns...
  ],

  socialLinks: [
    { platform: 'twitter', href: '...', icon: 'twitter' },
    // More social links...
  ],

  backgroundColor: 'bg-neutral-900'
}
```

### Layouts Automatically Include Footer

Each layout imports the config and passes it to the Footer component:

```astro
---
import Footer from '../components/library/Footer.astro';
import { footerConfig } from '../config/footer';
---

<Footer
  slot="footer"
  companyName={footerConfig.companyName}
  tagline={footerConfig.tagline}
  columns={footerConfig.columns}
  socialLinks={footerConfig.socialLinks}
  backgroundColor={footerConfig.backgroundColor}
/>
```

### Pages Use Layouts

Pages simply use the appropriate layout - the footer is included automatically:

```astro
---
import InnerLayout from '../layouts/InnerLayout.astro';
---

<InnerLayout title="My Page">
  <!-- Your page content -->
</InnerLayout>
<!-- Footer is automatically included from the layout -->
```

## How to Update Footer Content

### Option 1: Update Site-Wide Footer

To change the footer across the entire site:

1. Open **`src/config/footer.ts`**
2. Edit the `footerConfig` object
3. Save the file

Changes will automatically appear on all pages that use the layouts.

### Option 2: Update Company Information

To change company name, contact info, or social media:

1. Open **`src/config/site.ts`**
2. Update the `siteConfig` object
3. Save the file

The footer config imports from `site.ts`, so changes cascade automatically.

### Option 3: Create Custom Footer Variant

For special pages (like 404) that need a different footer:

1. Open **`src/config/footer.ts`**
2. Add a new variant to `footerVariants`:

```typescript
export const footerVariants = {
  minimal: {
    ...footerConfig,
    columns: [
      { title: 'Quick Links', links: [...] }
    ]
  },

  // Add your custom variant:
  custom: {
    ...footerConfig,
    columns: [
      // Your custom columns
    ]
  }
}
```

3. Use it in your page:

```astro
---
import { footerVariants } from '../config/footer';
---

<Footer
  slot="footer"
  {...footerVariants.custom}
/>
```

## File Structure

```
astro-base-website/
├── src/
│   ├── config/
│   │   ├── site.ts           # Global site settings
│   │   └── footer.ts         # Footer configuration
│   │
│   ├── layouts/
│   │   ├── LandingLayout.astro  # Uses footerConfig
│   │   ├── InnerLayout.astro    # Uses footerConfig
│   │   └── BlogLayout.astro     # Uses footerConfig
│   │
│   ├── components/
│   │   └── library/
│   │       └── Footer.astro     # Footer component
│   │
│   └── pages/
│       ├── index.astro          # Uses LandingLayout → gets footer
│       ├── contact.astro        # Uses InnerLayout → gets footer
│       ├── 404.astro            # Uses InnerLayout → gets footer
│       └── ...
│
└── FOOTER-SETUP.md           # This file
```

## Benefits of This Setup

1. **Single Source of Truth** - Update footer in one place, changes everywhere
2. **No Duplication** - Footer content is never repeated
3. **Consistent** - Same footer across all pages (unless you choose a variant)
4. **Easy Maintenance** - Clear structure, easy to find and update
5. **Type Safety** - TypeScript ensures correct data structure
6. **Flexible** - Support for variants when needed

## Common Tasks

### Change Company Name

**File:** `src/config/site.ts`

```typescript
export const siteConfig = {
  name: 'Your New Company Name',  // ← Change this
  company: {
    name: 'Your New Company Name',  // ← And this
    // ...
  }
}
```

### Add a Footer Link

**File:** `src/config/footer.ts`

Find the appropriate column and add your link:

```typescript
{
  title: 'Company',
  links: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },  // ← Add here
  ]
}
```

### Add a Social Media Link

**File:** `src/config/site.ts` (for the URL)

```typescript
social: {
  twitter: 'https://twitter.com/yoursite',
  linkedin: 'https://linkedin.com/company/yoursite',
  youtube: 'https://youtube.com/@yoursite',  // ← Add here
}
```

**File:** `src/config/footer.ts` (to display it)

```typescript
socialLinks: [
  { platform: 'twitter', href: siteConfig.social.twitter, icon: 'twitter' },
  { platform: 'youtube', href: siteConfig.social.youtube, icon: 'youtube' },  // ← Add here
]
```

### Change Footer Background Color

**File:** `src/config/footer.ts`

```typescript
export const footerConfig = {
  // ...
  backgroundColor: 'bg-neutral-900'  // ← Change to any Tailwind color
}
```

## Troubleshooting

### Footer not showing on a page

Make sure the page is using one of the layouts:
- `LandingLayout`
- `InnerLayout`
- `BlogLayout`

If using `BaseLayout` directly, you need to manually add the footer.

### Footer shows old content

1. Make sure you saved `src/config/footer.ts`
2. Restart the dev server (`npm run dev`)
3. Clear browser cache and refresh

### Need different footer on one page

Use a footer variant or pass custom props to the Footer component on that specific page.

## Questions?

If you need to modify the footer setup or have questions about how it works, refer to:
- `src/config/footer.ts` - Footer configuration
- `src/config/site.ts` - Site-wide settings
- `src/components/library/Footer.astro` - Footer component implementation
