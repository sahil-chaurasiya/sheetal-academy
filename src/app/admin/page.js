'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import JobPanel from '@/components/admin/JobPanel';
import EventForm from '@/components/admin/EventForm';

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('events');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) router.push('/admin-login');
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-[crimson] mb-6">Admin Dashboard</h1>

      {/* Nav buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2 rounded ${activeTab === 'events' ? 'bg-[crimson] text-white' : 'bg-gray-200'}`}
        >
          Events
        </button>
        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 rounded ${activeTab === 'jobs' ? 'bg-[crimson] text-white' : 'bg-gray-200'}`}
        >
          Jobs
        </button>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 rounded bg-blue-100 text-blue-800 hover:bg-blue-200"
        >
          Go to Home
        </button>
        <button
          onClick={() => router.push('/events')}
          className="px-4 py-2 rounded bg-green-100 text-green-800 hover:bg-green-200"
        >
          View Events Page
        </button>
        <button
          onClick={() => router.push('/careers')}
          className="px-4 py-2 rounded bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
        >
          View Careers Page
        </button>
      </div>

      {/* Content */}
      {activeTab === 'events' && <EventForm />}
      {activeTab === 'jobs' && <JobPanel />}
    </div>
  );
}
