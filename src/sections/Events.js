'use client';
import React from 'react';
import EventList from '../components/EventList';
import Link from 'next/link';

export default function Events() {
  return (
    <section
      id="events"
      className="relative px-6 lg:px-20 py-28 text-white text-center overflow-hidden"
      style={{ background: 'linear-gradient(to bottom right, #2b0605, #100505)' }}
    >
      {/* Corner blobs — no centered rings */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#DC143C] opacity-[0.05] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8B0000] opacity-[0.06] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#ff3c38]/50" />
            <span className="text-[#ff3c38] text-xs font-bold tracking-widest uppercase">Stay Updated</span>
            <div className="w-10 h-px bg-[#ff3c38]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">Upcoming</span>{' '}
            <span className="text-white font-[Pacifico]">Events</span>
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            Workshops, seminars, and special sessions at Sheetal Academy, Uran.
          </p>
        </div>

        <EventList />

        <div className="mt-6">
          <Link
            href="/past-events"
            className="inline-block px-7 py-3 rounded-full bg-white/10 border border-white/15 hover:bg-[#ff3c38] hover:border-[#ff3c38] transition-all duration-300 text-white font-semibold text-sm"
          >
            View Past Events →
          </Link>
        </div>
      </div>
    </section>
  );
}