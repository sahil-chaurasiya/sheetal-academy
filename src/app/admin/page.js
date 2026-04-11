'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import JobPanel from '@/components/admin/JobPanel';
import EventForm from '@/components/admin/EventForm';
import BannerPanel from '@/components/admin/BannerPanel';

const TABS = [
  { id: 'events',  label: '📅 Events' },
  { id: 'jobs',    label: '💼 Jobs' },
  { id: 'banners', label: '📢 Ads & Banners' },
];

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('events');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) router.push('/admin-login');
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-[crimson]">Admin Dashboard</h1>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => router.push('/')}
            className="px-3 py-1.5 rounded bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm"
          >
            🏠 Home
          </button>
          <button
            onClick={() => router.push('/events')}
            className="px-3 py-1.5 rounded bg-green-100 text-green-800 hover:bg-green-200 text-sm"
          >
            📅 Events Page
          </button>
          <button
            onClick={() => router.push('/careers')}
            className="px-3 py-1.5 rounded bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-sm"
          >
            💼 Careers Page
          </button>
          <button
            onClick={() => { localStorage.removeItem('adminToken'); router.push('/admin-login'); }}
            className="px-3 py-1.5 rounded bg-red-100 text-red-700 hover:bg-red-200 text-sm"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Tab Nav */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === tab.id
                ? 'bg-[crimson] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'events'  && <EventForm />}
      {activeTab === 'jobs'    && <JobPanel />}
      {activeTab === 'banners' && <BannerPanel />}
    </div>
  );
}
