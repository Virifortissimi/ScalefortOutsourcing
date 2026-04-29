# Contact Email API

This API receives the Scalefort Outsourcing contact form submission and sends email to:

- `outsourcing@scalefort.org`
- the sender's email address

The frontend posts to `VITE_CONTACT_API_URL` when set, otherwise it uses `/api/forms/outsourcing-contact`.

## Endpoint

```http
POST /api/forms/outsourcing-contact
Content-Type: application/json
```

## Request Body

```json
{
  "name": "Ada Okafor",
  "email": "ada@example.com",
  "requestedRole": "Frontend developer and QA support",
  "message": "We need two people to join our product team next month.",
  "companyWebsite": ""
}
```

## Success Response

```json
{
  "message": "Message sent. We will reach out shortly."
}
```

Use status `200` or `201`.

## Error Response

```json
{
  "message": "We could not send your message. Please try again."
}
```

Use:

- `400` for missing or invalid fields
- `403` for an unapproved Origin or Referer
- `409` for duplicate submissions inside the duplicate window
- `429` for rate limit violations
- `405` for unsupported methods
- `500` for mail provider failures

## Validation Rules

- `name`: required string, 2-100 characters
- `email`: required valid email address
- `requestedRole`: required string, 2-160 characters
- `message`: required string, 10-3000 characters
- `companyWebsite`: optional honeypot field; if filled, treat as bot traffic

Also trim all string values before sending mail.

## Email Behavior

Send two emails after validation:

1. Internal notification to `outsourcing@scalefort.org`
   - Subject: `New outsourcing enquiry from {name}`
   - Reply-To: sender email
   - Include name, email, requested role/team, and message.

2. Confirmation email to sender
   - Subject: `We received your Scalefort Outsourcing enquiry`
   - Confirm that the message was received.
   - Mention that the team will reach out soon.

## Environment Variables

Use your chosen email provider. For example, with SMTP:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
MAIL_FROM="Scalefort Outsourcing <no-reply@scalefort.org>"
CONTACT_TO=outsourcing@scalefort.org
OUTSOURCING_ALLOWED_ORIGINS=https://outsourcing.scalefort.org
```

On the frontend, set:

```env
VITE_CONTACT_API_URL=https://your-api-domain.com/api/forms/outsourcing-contact
```

If the API lives on the same domain as the site, you can omit `VITE_CONTACT_API_URL` and serve the endpoint at `/api/forms/outsourcing-contact`.

## Abuse Controls

For the current implementation:

- Rate limit by client IP/forwarded IP: `2 submissions per 2 hours`
- Rate limit by client IP/forwarded IP: `5 submissions per day`
- Reject requests whose `Origin` or `Referer` is not `https://outsourcing.scalefort.org`
- Use the hidden `companyWebsite` honeypot field
- Hash `client IP + sender email + message` server-side and reject duplicates for 24 hours
- Log invalid, duplicate, blocked-origin, rate-limited, and email-send failure events without logging full message bodies

## Example Node/Express Handler

```js
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

app.post('/api/forms/outsourcing-contact', async (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const requestedRole = req.body.requestedRole?.trim();
  const message = req.body.message?.trim();

  if (
    !name ||
    !isValidEmail(email) ||
    !requestedRole ||
    !message ||
    message.length < 10
  ) {
    return res.status(400).json({
      message: 'Please provide your name, email, role or team need, and message.',
    });
  }

  try {
    await Promise.all([
      transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.CONTACT_TO || 'outsourcing@scalefort.org',
        replyTo: email,
        subject: `New outsourcing enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Role or team needed: ${requestedRole}`,
          '',
          message,
        ].join('\n'),
      }),
      transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: email,
        subject: 'We received your Scalefort Outsourcing enquiry',
        text: [
          `Hello ${name},`,
          '',
          'Thank you for contacting Scalefort Outsourcing. We have received your message and our team will reach out soon.',
          '',
          `Role or team needed: ${requestedRole}`,
          '',
          'Scalefort Outsourcing',
        ].join('\n'),
      }),
    ]);

    return res.status(200).json({
      message: 'Message sent. We will reach out shortly.',
    });
  } catch (error) {
    console.error('Contact email failed:', error);

    return res.status(500).json({
      message: 'We could not send your message. Please try again.',
    });
  }
});

app.listen(process.env.PORT || 3000);
```

## CORS

If the API is hosted on a different domain from `https://outsourcing.scalefort.org`, allow that origin:

```http
Access-Control-Allow-Origin: https://outsourcing.scalefort.org
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

## Security Notes

- Never expose SMTP credentials in frontend code.
- Add rate limiting to prevent form spam.
- Consider CAPTCHA or Turnstile if spam becomes an issue.
- Log mail failures server-side, but do not expose provider errors to users.
