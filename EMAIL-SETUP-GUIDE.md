# Email Setup Guide - Contact Form with Resend

This template includes a fully functional contact form with email integration using [Resend](https://resend.com), a modern email API built for developers.

## Why Resend?

- **Free Tier**: 100 emails/day, 3,000/month (perfect for most websites)
- **Simple Setup**: Just one API key needed
- **Reliable**: Built specifically for transactional emails
- **Great DX**: Clean API and excellent documentation
- **Email Tracking**: See delivery status in the dashboard

## Quick Setup (5 minutes)

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Click "Create API Key"
4. Give it a name (e.g., "My Website Contact Form")
5. Copy the API key (starts with `re_`)

### 3. Configure Environment Variables

1. Copy the example file:
   ```bash
   cd astro-component-library
   cp .env.example .env
   ```

2. Open `.env` and add your values:
   ```env
   # Your Resend API key
   RESEND_API_KEY=re_your_actual_api_key_here

   # Email address that SENDS the form notification
   # For testing, use: onboarding@resend.dev
   # For production, use your verified domain: contact@yourdomain.com
   RESEND_FROM_EMAIL=onboarding@resend.dev

   # Email address that RECEIVES form submissions
   PUBLIC_CONTACT_EMAIL=your.email@gmail.com
   ```

### 4. Test the Form

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to a page with the ContactForm component
3. Fill out and submit the form
4. Check your inbox for the email!

## Domain Verification (For Production)

To send emails from your own domain (like `contact@yourdomain.com`), you need to verify your domain with Resend:

### Step 1: Add Your Domain

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)

### Step 2: Add DNS Records

Resend will provide DNS records to add to your domain:

1. Copy the provided DNS records (MX, TXT, CNAME)
2. Add them to your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.)
3. Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Step 3: Verify Domain

1. Return to Resend dashboard
2. Click "Verify Domain"
3. Once verified, update your `.env`:
   ```env
   RESEND_FROM_EMAIL=contact@yourdomain.com
   ```

## Using the Contact Form Component

The ContactForm component is already set up to work with the API endpoint:

```astro
---
import ContactForm from '../components/library/ContactForm.astro';
---

<ContactForm
  title="Get in Touch"
  subtitle="We'd love to hear from you"
  includePhone={true}
  includeMessage={true}
  submitLabel="Send Message"
/>
```

### Props

- `title` - Form heading (optional)
- `subtitle` - Form description (optional)
- `action` - API endpoint (defaults to `/api/contact`)
- `includePhone` - Show phone field (default: true)
- `includeMessage` - Show message field (default: true)
- `submitLabel` - Button text (default: "Send Message")

## Email Template

The emails sent include:

- **Subject**: "New Contact Form Submission from [Name]"
- **Reply-To**: Automatically set to the sender's email
- **Content**: Formatted HTML with all form fields
- **Styling**: Clean, professional design

You can customize the email template in `src/pages/api/contact.ts`.

## Alternative Email Services

If you prefer a different service, the template is designed to be flexible:

### Option 1: Formspree (No coding required)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update ContactForm action:
   ```astro
   <ContactForm action="https://formspree.io/f/YOUR_FORM_ID" />
   ```
4. Comment out the client-side JavaScript in ContactForm.astro

### Option 2: Netlify Forms (If deploying to Netlify)

1. Add `data-netlify="true"` to the form element in ContactForm.astro
2. Deploy to Netlify
3. Form submissions appear in your Netlify dashboard

### Option 3: SendGrid

1. Install SendGrid SDK: `npm install @sendgrid/mail`
2. Update `src/pages/api/contact.ts` to use SendGrid instead of Resend
3. Add `SENDGRID_API_KEY` to your `.env`

### Option 4: Nodemailer (Self-hosted)

1. Install Nodemailer: `npm install nodemailer`
2. Configure SMTP settings in your `.env`
3. Update the API endpoint to use Nodemailer

## Troubleshooting

### Email Not Sending

1. **Check API key**: Make sure `RESEND_API_KEY` is set in `.env`
2. **Check console**: Look for errors in terminal where dev server is running
3. **Verify from email**: For production, make sure domain is verified in Resend
4. **Test with onboarding email**: Use `onboarding@resend.dev` as `RESEND_FROM_EMAIL` for testing

### API Endpoint Not Working

1. **Check Astro config**: Make sure `output` is set to `'hybrid'` or `'server'` if using SSR
2. **Restart dev server**: Stop and start `npm run dev` after changing `.env`
3. **Check Network tab**: Open browser DevTools and look for 404 or 500 errors

### Form Submits But No Email

1. **Check Resend dashboard**: Go to [Logs](https://resend.com/logs) to see if email was sent
2. **Check spam folder**: Emails might be filtered
3. **Verify TO email**: Make sure `PUBLIC_CONTACT_EMAIL` is correct

### Getting 500 Error

1. **Check server logs**: Terminal where dev server is running will show errors
2. **Validate environment variables**: All required variables must be set
3. **Check API endpoint code**: Make sure `src/pages/api/contact.ts` has no syntax errors

## Security Considerations

### Rate Limiting

Consider adding rate limiting to prevent spam:

```typescript
// In contact.ts API endpoint
const submissions = new Map();
const RATE_LIMIT = 5; // max 5 submissions per hour
const WINDOW = 60 * 60 * 1000; // 1 hour

// Check IP address and count submissions
```

### Spam Protection

Options for spam prevention:

1. **Honeypot field**: Add a hidden field that bots will fill out
2. **reCAPTCHA**: Add Google reCAPTCHA v3
3. **Turnstile**: Use Cloudflare Turnstile (privacy-friendly alternative)
4. **Time-based validation**: Reject forms submitted too quickly

### Input Sanitization

The API endpoint validates:
- Required fields are present
- Email format is valid
- Prevents XSS by escaping HTML in email template

## Production Deployment

Before deploying:

1. ✅ Verify domain in Resend
2. ✅ Update `RESEND_FROM_EMAIL` to use your domain
3. ✅ Update `PUBLIC_CONTACT_EMAIL` to your actual email
4. ✅ Update `PUBLIC_SITE_URL` in `.env`
5. ✅ Add `.env` to `.gitignore` (already done)
6. ✅ Set environment variables in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Cloudflare Pages: Settings → Environment Variables

## Testing Checklist

- [ ] Form submits successfully
- [ ] Email arrives in inbox (check spam folder)
- [ ] Reply-to is set to sender's email
- [ ] All form fields appear in email
- [ ] Success message displays after submission
- [ ] Form resets after successful submission
- [ ] Error message shows if submission fails
- [ ] Loading state shows during submission
- [ ] Form validation works (required fields)

## Monitoring

Keep an eye on your email usage:

1. Log in to [Resend dashboard](https://resend.com/overview)
2. View email delivery status
3. Monitor usage against your plan limits
4. Check for any bounces or spam reports

## Support

- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Resend Support**: support@resend.com
- **Astro Docs**: [docs.astro.build](https://docs.astro.build)

## Cost Comparison

| Service | Free Tier | Paid Plans |
|---------|-----------|------------|
| **Resend** | 100/day, 3,000/month | $20/mo for 50,000 |
| Formspree | 50/month | $10/mo for 1,000 |
| SendGrid | 100/day | $20/mo for 40,000 |
| Mailgun | 5,000/month | $35/mo for 50,000 |

Resend offers the best value for most websites!

---

**Ready to go live?** Follow the setup steps above and your contact form will be sending emails in minutes!
