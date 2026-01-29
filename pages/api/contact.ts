import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const DEST_EMAIL = process.env.GMAIL_TO || 'remitarjohnlydrick@gmail.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ success: false, error: 'Missing fields' });

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  if (!user || !pass) {
    return res.status(500).json({ success: false, error: 'Email not configured. Set GMAIL_USER and GMAIL_PASS in .env.local' });
  }

  try {
    const transportOptions: any = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use STARTTLS
      auth: { user, pass },
      requireTLS: true,
    };

    if (process.env.SMTP_DEBUG === 'true') {
      transportOptions.logger = true;
      transportOptions.debug = true;
    }

    const transporter = nodemailer.createTransport(transportOptions);

    // Verify connection configuration
    await transporter.verify();

    const mailOptions = {
      from: `Portfolio <${user}>`,
      replyTo: `${email}`,
      to: DEST_EMAIL,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info && info.messageId ? info.messageId : info);

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Mail error:', err);
    const message = err && err.message ? err.message : 'Failed to send email';
    return res.status(500).json({ success: false, error: 'Failed to send email', details: message });
  }
}
