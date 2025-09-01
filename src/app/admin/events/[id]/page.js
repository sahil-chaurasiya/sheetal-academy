'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function EventRegistrationsPage() {
  const { id } = useParams();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchRegistrations = async () => {
      try {
        const res = await fetch(`/api/registrations/${id}`);
        const data = await res.json();
        setRegistrations(data);
      } catch (err) {
        console.error('Failed to fetch registrations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [id]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[crimson] mb-6">Event Registrations</h1>

      {loading ? (
        <p>Loading...</p>
      ) : registrations.length === 0 ? (
        <p className="text-gray-500">No registrations for this event yet.</p>
      ) : (
        <ul className="space-y-4">
          {registrations.map((r) => (
            <li key={r._id} className="border rounded-lg p-4 bg-white shadow">
              <p><strong>Name:</strong> {r.name}</p>
              <p><strong>Email:</strong> {r.email}</p>
              <p><strong>Phone:</strong> {r.phone}</p>
              <p className="text-sm text-gray-500">
                Registered on: {r.registeredAt ? new Date(r.registeredAt).toLocaleString() : "N/A"}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <Link href="/admin" className="text-blue-600 hover:underline">
          ⬅ Back to Admin Dashboard
        </Link>
      </div>
    </div>
  );
}
