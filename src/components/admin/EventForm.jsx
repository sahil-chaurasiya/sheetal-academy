'use client';
import { useEffect, useState } from 'react';

export default function EventForm() {
  const [form, setForm] = useState({ title: '', description: '', date: '', price: '' });
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [eventToDelete, setEventToDelete] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error('Failed to fetch events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage('Event created!');
        setForm({ title: '', description: '', date: '', price: '' });
        fetchEvents();
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error.');
    }
  };

  const confirmDelete = (eventId) => setEventToDelete(eventId);

  const handleDelete = async () => {
    if (!eventToDelete) return;

    try {
      const res = await fetch(`/api/events/${eventToDelete}`, { method: 'DELETE' });
      if (res.ok) {
        setEvents(events.filter(e => e._id !== eventToDelete));
        setEventToDelete(null);
      } else {
        alert('Failed to delete event.');
      }
    } catch {
      alert('Error deleting event.');
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4 text-[crimson]">Create Event</h1>

      {/* Event creation form */}
      <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-xl shadow mb-8">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (optional)"
          className="w-full p-2 border rounded"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded">Create Event</button>
        {message && <p className="text-green-600">{message}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>

      {/* Posted events list */}
      <h2 className="text-xl font-semibold mb-4">Posted Events</h2>
      {loading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p className="text-gray-500">No events posted yet.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event._id}
              className="border border-gray-200 rounded p-4 bg-white shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-[crimson]">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Date: {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Price: ₹{event.price !== undefined && event.price !== '' ? event.price : 0}
                  </p>
                  <p className="text-sm font-semibold mt-1 text-[crimson]">
                    Registrations: {event.registrationCount || 0}
                  </p>
                </div>
                <button
                  onClick={() => confirmDelete(event._id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Delete confirmation modal */}
      {eventToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">Are you sure you want to delete this event?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setEventToDelete(null)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
