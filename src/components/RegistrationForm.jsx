'use client';
import { useState } from 'react';

export default function RegisterForm({ eventId, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    // Simple frontend validation
    if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      setMsg('Name should only contain letters.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setMsg('Enter a valid 10-digit Indian phone number.');
      return;
    }

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
    <div className="fixed top-[64px] left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-11/12 max-w-md space-y-3 shadow-lg"
      >
        <h2 className="text-lg font-semibold text-center">Register for Event</h2>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          minLength={2}
          className="w-full p-2 border rounded text-black"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded text-black"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone (10 digits)"
          value={form.phone}
          onChange={handleChange}
          required
          pattern="[6-9][0-9]{9}"
          title="Enter a valid 10-digit Indian phone number"
          className="w-full p-2 border rounded text-black"
        />

        <div className="flex flex-wrap gap-2 justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-500 w-full sm:w-auto"
          >
            Cancel
          </button>
        </div>

        {msg && <p className="text-sm text-gray-600 mt-2 text-center">{msg}</p>}
      </form>
    </div>
  );
}
