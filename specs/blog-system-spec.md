# Blog System Specification

## Overview

The blog system provides a complete solution for publishing blog posts with featured images, author information, categories, and reading time estimates.

## URL Structure

- **Blog Index**: `/blog`
- **Individual Posts**: `/blog/[slug]`

**Note**: Categories are displayed but NOT included in URLs for cleaner, simpler links.

## Components

### BlogLayout.astro

Layout template for individual blog posts.

**Location**: `src/layouts/BlogLayout.astro`

**Props**:
- `title` (string, required): Post title
- `description` (string, required): Post excerpt/meta description
- `ogImage` (string, optional): Social sharing image (defaults to featuredImage)
- `featuredImage` (string, required): Hero image URL
- `author` (string, required): Author name
- `authorImage` (string, optional): Author avatar URL
- `date` (string, required): Publication date (formatted string)
- `category` (string, required): Post category
- `readingTime` (number, optional): Estimated reading time in minutes

**Features**:
- Full-width hero image
- Author info with avatar (or initials fallback)
- Publication date and reading time
- Category badge
- Styled content area with typography
- "Back to Blog" link
- SEO meta tags

**Content Styling**:
Uses Tailwind's `prose` classes with custom enhancements:
- Headings: Bold, proper hierarchy
- Links: Primary color, hover underline
- Code: Inline code styling
- Blockquotes: Left border, italic
- Images: Rounded, shadow
- Lists: Proper spacing

### BlogCard.astro

Preview card for blog listing page.

**Location**: `src/components/library/BlogCard.astro`

**Props**:
- `title` (string, required): Post title
- `excerpt` (string, required): Post preview text
- `featuredImage` (string, required): Card image URL
- `slug` (string, required): Post URL slug (e.g., "my-post")
- `category` (string, required): Post category
- `author` (string, required): Author name
- `authorImage` (string, optional): Author avatar URL
- `date` (string, required): Publication date
- `readingTime` (number, optional): Reading time in minutes

**Features**:
- Hover effects (scale image, lift card)
- Category badge on image
- Title truncation (2 lines)
- Excerpt truncation (3 lines)
- Author avatar with fallback
- Reading time icon

## Pages

### Blog Index Page

**Location**: `src/pages/blog/index.astro`

**Features**:
- Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Category filtering with sticky filter bar
- All/category toggle buttons
- JavaScript-powered filtering
- No results message
- Responsive design

**How to Add Posts**:

1. Add post data to the `blogPosts` array in `index.astro`
2. Create the corresponding post file in `src/pages/blog/[slug].astro`

**Data Structure**:
```javascript
{
  title: "Post Title",
  excerpt: "Brief description...",
  featuredImage: "https://...",
  slug: "url-friendly-slug",
  category: "Category Name",
  author: "Author Name",
  authorImage: "https://...", // optional
  date: "Nov 8, 2025",
  readingTime: 5, // optional, in minutes
}
```

### Individual Blog Posts

**Location**: `src/pages/blog/[slug].astro`

**Structure**:
```astro
---
import BlogLayout from '../../layouts/BlogLayout.astro';
---

<BlogLayout
  title="Post Title"
  description="Post description"
  featuredImage="https://..."
  author="Author Name"
  date="Nov 8, 2025"
  category="Category"
  readingTime={5}
>
  <!-- Your markdown/HTML content here -->
  <h2>Section Title</h2>
  <p>Content...</p>
</BlogLayout>
```

## Content Guidelines

### Writing Posts

1. **Frontmatter**: Include all required props in BlogLayout
2. **Structure**: Use semantic HTML headings (h2, h3, h4)
3. **Paragraphs**: Keep paragraphs concise (3-5 sentences)
4. **Lists**: Use ul/ol for bullet points and numbered lists
5. **Code**: Use `<code>` for inline code, `<pre><code>` for blocks
6. **Images**: Include alt text for accessibility
7. **Links**: Use descriptive anchor text

### Content Formatting Examples

**Headings**:
```html
<h2>Main Section</h2>
<h3>Subsection</h3>
```

**Emphasized Text**:
```html
<p><strong>Important point</strong> - regular text continues...</p>
```

**Lists**:
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

**Code Blocks**:
```html
<pre><code>const example = "code here";</code></pre>
```

**Blockquotes**:
```html
<blockquote>
  "A notable quote or important callout."
</blockquote>
```

**Links**:
```html
<a href="https://example.com" target="_blank">External Link</a>
```

## Categories

### Default Categories

The sample posts include these categories:
- Web Development
- Accessibility
- CSS
- Design
- Performance

### Adding New Categories

Simply use a new category name in your post data. The filter buttons will automatically update based on unique categories in the `blogPosts` array.

### Category Guidelines

- Use title case (e.g., "Web Development")
- Keep names concise (1-3 words)
- Be consistent across posts
- Common categories: Development, Design, Tutorial, News, Case Study

## Image Recommendations

### Featured Images

- **Dimensions**: 1200x600px minimum (2:1 aspect ratio)
- **Format**: JPG or WebP
- **File Size**: Under 200KB (optimize before uploading)
- **Content**: Relevant to post topic, high quality

### Author Images

- **Dimensions**: 100x100px minimum (square)
- **Format**: JPG or WebP
- **File Size**: Under 50KB
- **Content**: Headshot or avatar

### Image Sources

- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- Your own photography or graphics

## SEO Optimization

### Meta Tags

BlogLayout automatically includes:
- Page title (post title + site name)
- Meta description (post excerpt)
- Open Graph tags (for social sharing)
- Twitter Card tags
- Canonical URL

### Best Practices

1. **Title**: 50-60 characters, include keywords
2. **Description**: 150-160 characters, compelling summary
3. **Featured Image**: Use as OG image for social shares
4. **Content**: Use headings for structure
5. **Links**: Include internal links to related posts

## Reading Time Calculation

### Manual Calculation

Average reading speed: 200-250 words per minute

```
Reading Time = Total Words / 225
```

### Optional: Automatic Calculation

For future enhancement, you could add a plugin to calculate reading time automatically from post content.

## Migration to Content Collections (Advanced)

For a more robust blog with many posts, consider using Astro's Content Collections:

1. Create `src/content/blog/` directory
2. Move posts to markdown files (`.md` or `.mdx`)
3. Define schema in `src/content/config.ts`
4. Query posts using `getCollection()`

**Benefits**:
- Type-safe frontmatter
- Markdown files instead of Astro pages
- Automatic slug generation
- Better content organization

See Astro's [Content Collections docs](https://docs.astro.build/en/guides/content-collections/) for implementation.

## Customization

### Changing Layout

Edit `BlogLayout.astro` to:
- Adjust hero image height
- Change typography styles
- Modify author display
- Add social sharing buttons
- Include related posts section

### Styling Content

Modify the `prose` classes in BlogLayout:
- Font sizes: `prose-p:text-lg`
- Colors: `prose-headings:text-neutral-900`
- Spacing: `prose-p:mb-6`
- Link styles: `prose-a:text-primary-600`

### Filter Behavior

Edit the JavaScript in `blog/index.astro` to:
- Change animation effects
- Add URL parameters for filtering
- Implement search functionality
- Add pagination

## Common Use Cases

### Adding a New Post

1. Add entry to `blogPosts` array in `blog/index.astro`
2. Create new file: `blog/your-slug.astro`
3. Copy structure from existing post
4. Write your content
5. Test locally before publishing

### Updating Author Info

Change author props in individual post files. For site-wide author defaults, create an authors data file.

### Changing Categories

Update category names in both:
1. Blog index `blogPosts` array
2. Individual post BlogLayout props

### Featured Posts

To highlight specific posts:
1. Add a `featured: true` property to post data
2. Filter featured posts in blog index
3. Display in a special section

## Troubleshooting

**Category filter not working?**
- Check JavaScript console for errors
- Verify data-category attributes match

**Images not loading?**
- Use absolute URLs or check image paths
- Ensure images are in `public/` folder if local

**Styling looks wrong?**
- Verify global.css is imported
- Check for CSS conflicts
- Ensure Tailwind is processing correctly

**Links broken?**
- Verify slug matches filename
- Check for typos in hrefs
- Use `/blog/slug` format (with leading slash)

---

## Example Workflow

### Publishing a New Post

1. **Write Content**: Draft your post in markdown/HTML
2. **Choose Images**: Select featured image and author photo
3. **Calculate Reading Time**: Count words, divide by 225
4. **Create Post File**: `src/pages/blog/my-new-post.astro`
5. **Add to Index**: Update `blogPosts` array
6. **Test Locally**: `npm run dev` and review
7. **Build**: `npm run build` to verify no errors
8. **Deploy**: Push to your hosting platform

---

*Last Updated: 2025*
