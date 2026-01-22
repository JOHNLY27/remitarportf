'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // No backend: emulate success
    setTimeout(() => {
      setStatus('Message sent — thank you!');
      form.reset();
    }, 500);
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
