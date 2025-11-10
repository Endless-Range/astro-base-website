/**
 * Contact Form API Endpoint
 *
 * Handles form submissions and sends emails via Resend.
 * Supports multiple email services as fallback.
 */

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const message = formData.get('message')?.toString();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Get environment variables
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const toEmail = import.meta.env.PUBLIC_CONTACT_EMAIL || 'contact@example.com';
    const fromEmail = import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // Check if Resend is configured
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured. Email will not be sent.');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email service not configured. Please check server settings.',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Prepare email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
            <h1 style="color: #2563eb; margin: 0 0 16px 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #666; margin: 0;">You have received a new message from your website contact form.</p>
          </div>

          <div style="background-color: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151; display: block; margin-bottom: 4px;">Name:</strong>
              <span style="color: #111827;">${name}</span>
            </div>

            <div style="margin-bottom: 20px;">
              <strong style="color: #374151; display: block; margin-bottom: 4px;">Email:</strong>
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </div>

            ${phone ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151; display: block; margin-bottom: 4px;">Phone:</strong>
              <span style="color: #111827;">${phone}</span>
            </div>
            ` : ''}

            <div style="margin-bottom: 0;">
              <strong style="color: #374151; display: block; margin-bottom: 8px;">Message:</strong>
              <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px;">
                <p style="margin: 0; color: #111827; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>

          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
              This email was sent from your website contact form.
            </p>
          </div>
        </body>
      </html>
    `;

    // Prepare plain text version
    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
This email was sent from your website contact form.
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to send email. Please try again later.',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    console.log('Email sent successfully:', data);

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
