# Icon System Guide

This template uses [Astro Icon](https://www.astroicon.dev/) with [Iconify](https://iconify.design/), giving you access to over 200,000+ free icons from popular libraries including Font Awesome, Material Design Icons, and more.

## Why Astro Icon?

- **200,000+ Icons**: Access to all major icon libraries
- **Tree-shakeable**: Only bundles icons you actually use
- **Zero Runtime**: Icons are optimized at build time
- **Type-safe**: Full TypeScript support
- **Customizable**: Easy to style with Tailwind classes

## Installed Icon Sets

The template includes:

- **Font Awesome 6 Solid** (`fa6-solid:*`)
- **Font Awesome 6 Regular** (`fa6-regular:*`)

You can add more icon sets as needed.

## Using Icons in Components

### Basic Usage

```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="fa6-solid:rocket" class="w-6 h-6 text-blue-500" />
```

### In FeatureCard

The FeatureCard component now accepts Iconify icon names:

```astro
---
import FeatureCard from '../components/library/FeatureCard.astro';
import FeatureGrid from '../components/library/FeatureGrid.astro';
---

<FeatureGrid title="Our Services" columns={3}>
  <FeatureCard
    icon="fa6-solid:rocket"
    title="Fast Performance"
    description="Lightning-fast load times with optimized assets"
  />
  <FeatureCard
    icon="fa6-solid:shield-halved"
    title="Secure"
    description="Enterprise-grade security built-in"
  />
  <FeatureCard
    icon="fa6-solid:mobile-screen-button"
    title="Responsive"
    description="Works perfectly on all devices"
  />
</FeatureGrid>
```

## Popular Icon Names

### Font Awesome Solid (`fa6-solid:*`)

```
fa6-solid:rocket          - Rocket
fa6-solid:shield-halved   - Shield
fa6-solid:mobile-screen-button - Mobile
fa6-solid:bolt            - Lightning bolt
fa6-solid:heart           - Heart
fa6-solid:star            - Star
fa6-solid:check           - Check mark
fa6-solid:xmark           - X mark
fa6-solid:circle-check    - Check in circle
fa6-solid:circle-xmark    - X in circle
fa6-solid:envelope        - Envelope
fa6-solid:phone           - Phone
fa6-solid:location-dot    - Location pin
fa6-solid:user            - User
fa6-solid:users           - Multiple users
fa6-solid:building        - Building
fa6-solid:briefcase       - Briefcase
fa6-solid:chart-line      - Line chart
fa6-solid:gear            - Settings gear
fa6-solid:lock            - Lock
fa6-solid:unlock          - Unlock
fa6-solid:cloud           - Cloud
fa6-solid:download        - Download
fa6-solid:upload          - Upload
fa6-solid:arrow-right     - Arrow right
fa6-solid:arrow-left      - Arrow left
fa6-solid:chevron-right   - Chevron right
fa6-solid:chevron-left    - Chevron left
fa6-solid:bars            - Hamburger menu
fa6-solid:magnifying-glass - Search
```

### Font Awesome Regular (`fa6-regular:*`)

```
fa6-regular:heart         - Outlined heart
fa6-regular:star          - Outlined star
fa6-regular:circle-check  - Outlined check
fa6-regular:envelope      - Outlined envelope
fa6-regular:user          - Outlined user
```

## Finding More Icons

### Option 1: Iconify Icon Sets

Browse all available icons at: [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)

Popular icon sets:
- Font Awesome: `fa6-solid:`, `fa6-regular:`, `fa6-brands:`
- Material Design: `mdi:`
- Heroicons: `heroicons:`, `heroicons-outline:`, `heroicons-solid:`
- Bootstrap Icons: `bi:`
- Feather Icons: `feather:`
- Lucide: `lucide:`
- Tabler Icons: `tabler:`

### Option 2: Search by Keyword

1. Go to [https://icones.js.org/](https://icones.js.org/)
2. Search for what you need (e.g., "email", "phone", "menu")
3. Click on an icon to see its full name
4. Copy the name and use it in your components

## Installing Additional Icon Sets

Need more icon sets? Install them with npm:

```bash
# Material Design Icons
npm install @iconify-json/mdi

# Heroicons
npm install @iconify-json/heroicons

# Bootstrap Icons
npm install @iconify-json/bi

# All Font Awesome sets
npm install @iconify-json/fa6-brands

# Or install ALL icon sets (large package)
npm install @iconify/json
```

Then use them:

```astro
<Icon name="mdi:email" />
<Icon name="heroicons:home" />
<Icon name="bi:github" />
<Icon name="fa6-brands:twitter" />
```

## Styling Icons

### With Tailwind Classes

```astro
<!-- Size -->
<Icon name="fa6-solid:rocket" class="w-6 h-6" />
<Icon name="fa6-solid:rocket" class="w-8 h-8" />
<Icon name="fa6-solid:rocket" class="w-12 h-12" />

<!-- Color -->
<Icon name="fa6-solid:heart" class="text-red-500" />
<Icon name="fa6-solid:star" class="text-yellow-400" />
<Icon name="fa6-solid:check" class="text-green-600" />

<!-- Combined -->
<Icon name="fa6-solid:rocket" class="w-8 h-8 text-primary-600 hover:text-primary-700" />
```

### With Background

```astro
<!-- Icon in colored circle -->
<div class="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-full">
  <Icon name="fa6-solid:rocket" class="w-6 h-6 text-primary-600" />
</div>

<!-- Icon in colored square -->
<div class="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg">
  <Icon name="fa6-solid:check" class="w-6 h-6 text-green-600" />
</div>
```

## Example: Feature Section with Icons

```astro
---
import { Icon } from 'astro-icon/components';
import FeatureGrid from '../components/library/FeatureGrid.astro';
import FeatureCard from '../components/library/FeatureCard.astro';
---

<FeatureGrid
  title="Why Choose Us"
  subtitle="Everything you need to build amazing websites"
  columns={3}
>
  <FeatureCard
    icon="fa6-solid:bolt"
    title="Lightning Fast"
    description="Optimized performance with sub-second load times"
    link={{ href: "/features/performance", label: "Learn more" }}
  />

  <FeatureCard
    icon="fa6-solid:shield-halved"
    title="Secure & Reliable"
    description="Enterprise-grade security with 99.9% uptime"
    link={{ href: "/features/security", label: "Learn more" }}
  />

  <FeatureCard
    icon="fa6-solid:mobile-screen-button"
    title="Mobile First"
    description="Beautiful responsive design on all devices"
    link={{ href: "/features/responsive", label: "Learn more" }}
  />

  <FeatureCard
    icon="fa6-solid:gauge-high"
    title="High Performance"
    description="Built for speed with modern web technologies"
  />

  <FeatureCard
    icon="fa6-solid:code"
    title="Developer Friendly"
    description="Clean, well-documented code that's easy to maintain"
  />

  <FeatureCard
    icon="fa6-solid:heart"
    title="Great Support"
    description="Dedicated support team ready to help you succeed"
  />
</FeatureGrid>
```

## Example: Custom Icon Button

```astro
---
import { Icon } from 'astro-icon/components';
---

<button class="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
  <Icon name="fa6-solid:download" class="w-5 h-5" />
  <span>Download Now</span>
</button>
```

## Example: Icon List

```astro
---
import { Icon } from 'astro-icon/components';

const features = [
  { icon: 'fa6-solid:check', text: 'Unlimited projects' },
  { icon: 'fa6-solid:check', text: '24/7 Support' },
  { icon: 'fa6-solid:check', text: 'No setup fees' },
  { icon: 'fa6-solid:check', text: 'Cancel anytime' },
];
---

<ul class="space-y-3">
  {features.map(feature => (
    <li class="flex items-center gap-3">
      <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full">
        <Icon name={feature.icon} class="w-4 h-4 text-green-600" />
      </div>
      <span class="text-neutral-700">{feature.text}</span>
    </li>
  ))}
</ul>
```

## Performance Tips

1. **Only install icon sets you need**: Don't install all icon sets unless necessary
2. **Icons are optimized at build time**: No runtime overhead
3. **SVGs are inlined**: Better performance than icon fonts
4. **Tree-shaking works**: Only icons you use are included in the bundle

## Troubleshooting

### Icon not showing?

1. Check the icon name is correct (search on [icones.js.org](https://icones.js.org/))
2. Make sure the icon set is installed: `npm install @iconify-json/[set-name]`
3. Restart your dev server after installing new icon sets
4. Check browser console for errors

### Icon looks too big/small?

Use Tailwind width/height classes: `w-4 h-4`, `w-6 h-6`, `w-8 h-8`, etc.

### Icon color not working?

Make sure you're using `text-[color]` class and the SVG supports color changes.

## Resources

- **Astro Icon Docs**: [astroicon.dev](https://www.astroicon.dev/)
- **Iconify Documentation**: [iconify.design](https://iconify.design/)
- **Icon Search**: [icones.js.org](https://icones.js.org/)
- **Icon Sets**: [icon-sets.iconify.design](https://icon-sets.iconify.design/)
- **Font Awesome Icons**: [fontawesome.com/icons](https://fontawesome.com/icons)

---

Happy icon hunting!
