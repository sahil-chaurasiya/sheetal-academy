'use client';
import { useState } from 'react';

export default function RegisterForm({ eventId, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, eventId }),
    });
    const data = await res.json();
    setMsg(data.message || data.error);
    if (res.ok) setForm({ name: '', email: '', phone: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-full max-w-md space-y-3">
        <h2 className="text-lg font-semibold">Register for Event</h2>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        <button className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
        <button type="button" onClick={onClose} className="text-sm text-gray-500 ml-4">Cancel</button>
        {msg && <p className="text-sm text-gray-600 mt-2">{msg}</p>}
      </form>
    </div>
  );
}
