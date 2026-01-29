'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with the public key (works at module load time)
const _publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
if (_publicKey) {
  try {
    emailjs.init(_publicKey);
  } catch (e) {
    // init may throw if misconfigured, but we don't want to crash the app
    // leave initialization best-effort and surface errors when sending
    // console.warn('EmailJS init failed:', e);
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('Sending...');
    const data = Object.fromEntries(formData);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    // Debug: show which path will be used (values are booleans to avoid leaking keys)
    console.log('ContactForm: EmailJS config', {
      hasServiceId: !!serviceId,
      hasTemplateId: !!templateId,
      hasUserId: !!userId,
    });

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: process.env.NEXT_PUBLIC_EMAILJS_TO,
    };

    // If EmailJS is configured, use it from the client. Otherwise fall back to server API.
    if (serviceId && templateId && userId) {
      console.log('ContactForm: using EmailJS client send');
      console.log('ContactForm: templateParams', templateParams, 'env_to:', process.env.NEXT_PUBLIC_EMAILJS_TO);
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((result) => {
          setStatus('Message sent — thank you!');
          form.reset();
        })
        .catch((err) => {
          console.error('EmailJS error:', err);
          const msg = (err && (err.text || err.message)) || JSON.stringify(err) || 'Error sending message';
          setStatus(`Error: ${msg}`);
        });
    } else {
      console.log('ContactForm: falling back to server /api/contact');
      // fallback to existing server-side endpoint
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(async (res) => {
          const body = await res.json().catch(() => ({}));
          if (!res.ok || body?.success !== true) {
            const msg = body?.error || body?.details || 'Failed to send message';
            console.error('API error:', msg, body);
            setStatus(`Error: ${msg}`);
            return;
          }
          setStatus('Message sent — thank you!');
          form.reset();
        })
        .catch((err) => {
          console.error(err);
          setStatus('Error sending message. Please try again later.');
        });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn primary">Send Message</button>
      </div>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
