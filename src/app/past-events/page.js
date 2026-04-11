'use client';
import React from 'react';
import Link from 'next/link';
import EventList from '@/components/EventList';

export default function PastEventsPage() {
  return (
    <section
      className="relative min-h-screen w-full px-6 lg:px-20 py-32 text-white text-center flex flex-col items-center"
      style={{
        background: "linear-gradient(to bottom right, #100505, #2b0605)",
      }}
    >
      <div className="max-w-6xl w-full space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">
            Past
          </span>{' '}
          <span className="text-white font-[Pacifico]">Events</span>
        </h2>

        {/* ✅ Dynamic past events from DB */}
        <EventList type="past" />

        {/* Back to Home button */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block bg-[#ff3c38] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#e63230] transition duration-300"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
