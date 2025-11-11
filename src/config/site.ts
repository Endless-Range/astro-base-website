/**
 * Site-wide Configuration
 *
 * This file contains global site settings used across all pages and layouts.
 * Update these values to change your site's basic information.
 */

export const siteConfig = {
  name: 'Your Company',
  tagline: 'Building amazing digital experiences.',
  url: 'https://yoursite.com',
  description: 'Your company description goes here.',

  // Company information
  company: {
    name: 'Your Company',
    legalName: 'Your Company Inc.',
    email: 'hello@yoursite.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'USA'
    }
  },

  // Social media links
  social: {
    twitter: 'https://twitter.com/yoursite',
    linkedin: 'https://linkedin.com/company/yoursite',
    github: 'https://github.com/yoursite',
    facebook: 'https://facebook.com/yoursite',
    instagram: 'https://instagram.com/yoursite',
    youtube: 'https://youtube.com/@yoursite'
  },

  // SEO defaults
  seo: {
    defaultTitle: 'Your Company - Building amazing digital experiences',
    titleTemplate: '%s | Your Company',
    defaultDescription: 'Your company description goes here.',
    keywords: ['web development', 'design', 'digital solutions']
  }
} as const;
