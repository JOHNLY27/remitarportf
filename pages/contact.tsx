import { useState } from 'react';

export default function ContactPage() {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('sending');
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			if (res.ok) {
				setStatus('success');
				setForm({ name: '', email: '', message: '' });
			} else setStatus('error');
		} catch {
			setStatus('error');
		}
	};

	return (
		<main>
			<h1>Contact</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input name="name" value={form.name} onChange={handleChange} required />
				</label>
				<label>
					Email
					<input name="email" type="email" value={form.email} onChange={handleChange} required />
				</label>
				<label>
					Message
					<textarea name="message" value={form.message} onChange={handleChange} required />
				</label>
				<button type="submit" disabled={status === 'sending'}>Send</button>
			</form>

			{status === 'sending' && <p>Sending...</p>}
			{status === 'success' && <p>Message sent — thank you.</p>}
			{status === 'error' && <p>Failed to send message. Please try again later.</p>}
		</main>
	);
}
