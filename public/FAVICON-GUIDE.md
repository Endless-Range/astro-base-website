# Favicon Generation Guide

This template includes `favicon.svg` which works in modern browsers. For maximum compatibility across all devices and browsers, you should generate additional favicon formats.

## Required Favicon Files

Add these files to the `/public` folder for complete browser support:

- `favicon.ico` (16x16, 32x32, 48x48) - For older browsers
- `favicon-16x16.png` - Standard favicon
- `favicon-32x32.png` - Standard favicon
- `apple-touch-icon.png` (180x180) - iOS home screen icon
- `android-chrome-192x192.png` - Android Chrome
- `android-chrome-512x512.png` - Android Chrome (high res)

## Quick Generation Options

### Option 1: Online Generators (Easiest)
1. **[RealFaviconGenerator.net](https://realfavicongenerator.net/)**
   - Upload your logo/icon (SVG or PNG, min 512x512)
   - Download the generated package
   - Extract files to `/public` folder

2. **[Favicon.io](https://favicon.io/)**
   - Generate from text, image, or emoji
   - Download and extract to `/public`

### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first: brew install imagemagick (macOS)

# Convert your SVG to multiple PNG sizes
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png
convert favicon.svg -resize 192x192 android-chrome-192x192.png
convert favicon.svg -resize 512x512 android-chrome-512x512.png

# Create .ico file (contains multiple sizes)
convert favicon.svg -define icon:auto-resize=16,32,48 favicon.ico
```

### Option 3: Using Sharp (Node.js)
```javascript
// npm install sharp
const sharp = require('sharp');

const sizes = [16, 32, 180, 192, 512];
sizes.forEach(size => {
  sharp('favicon.svg')
    .resize(size, size)
    .toFile(`favicon-${size}x${size}.png`);
});
```

## Update BaseLayout.astro

After generating favicons, update the `<head>` section in `src/layouts/BaseLayout.astro`:

```html
<!-- Replace the single favicon line with: -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

<!-- Optional: Add web app manifest -->
<link rel="manifest" href="/site.webmanifest" />
```

## Optional: Web App Manifest

Create `/public/site.webmanifest` for PWA support:

```json
{
  "name": "Your Site Name",
  "short_name": "YourSite",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#2563eb",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## Testing Your Favicons

1. Clear browser cache
2. Visit your site
3. Check browser tab for favicon
4. Test on mobile devices
5. Use browser dev tools to verify all favicon files load correctly

## Notes

- SVG favicons have the best quality but aren't supported in all browsers
- ICO files are the most compatible but have lower quality
- Apple Touch Icons should be 180x180 for best results
- Android Chrome icons should be 192x192 and 512x512
- Always use a transparent background for PNG favicons
