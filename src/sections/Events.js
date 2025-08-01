'use client';
import React from 'react';
import EventList from '../components/EventList';

export default function Events() {
  return (
    <section
      id="events"
      className="relative px-6 lg:px-20 py-32 text-white text-center"
      style={{
        background: "linear-gradient(to bottom right, #2b0605, #100505)",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">
            Upcoming
          </span>{' '}
          <span className="text-white font-[Pacifico]">Events</span>
        </h2>

        <EventList />
      </div>
    </section>
  );
}
