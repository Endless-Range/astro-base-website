/**
 * Footer Configuration
 *
 * This file contains the centralized footer configuration for the entire site.
 * All footer content, links, and social media are defined here in one place.
 *
 * To update footer content site-wide, simply edit this file.
 */

import { siteConfig } from './site';

export const footerConfig = {
  // Company information
  companyName: siteConfig.company.name,
  tagline: siteConfig.tagline,

  // Footer columns with navigation links
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Security', href: '/security' },
        { label: 'Roadmap', href: '/roadmap' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' },
        { label: 'API', href: '/api' },
        { label: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Licenses', href: '/licenses' }
      ]
    }
  ],

  // Social media links
  socialLinks: [
    {
      platform: 'twitter' as const,
      href: siteConfig.social.twitter,
      icon: 'twitter'
    },
    {
      platform: 'linkedin' as const,
      href: siteConfig.social.linkedin,
      icon: 'linkedin'
    },
    {
      platform: 'github' as const,
      href: siteConfig.social.github,
      icon: 'github'
    }
  ],

  // Footer styling
  backgroundColor: 'bg-neutral-900'
} as const;

// Variant configurations for specific pages (if needed)
export const footerVariants = {
  // Simplified footer for 404 page
  minimal: {
    ...footerConfig,
    columns: [
      {
        title: 'Quick Links',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ]
      }
    ],
    socialLinks: [
      {
        platform: 'twitter' as const,
        href: siteConfig.social.twitter,
        icon: 'twitter'
      },
      {
        platform: 'linkedin' as const,
        href: siteConfig.social.linkedin,
        icon: 'linkedin'
      }
    ]
  }
} as const;
