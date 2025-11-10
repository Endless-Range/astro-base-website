// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Replace with your actual domain
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    // Enable remote image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Default image format and quality
    format: ['webp', 'avif'],
    quality: 85,
  },
});