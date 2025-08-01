'use client';

import { Phone, MapPin, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📨 Contact form submitted (not wired to backend yet).');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-20 bg-[#1a0e0e] text-center text-white relative"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">Get in</span>{' '}
        <span className="text-white font-[Pacifico]">Touch</span>
      </h2>

      <p className="text-white/80 max-w-xl mx-auto mb-10">
        We&apos;re here to help you take the next step in your English journey. Reach out to us any time between <strong className="text-white">8 AM to 9 PM</strong>.
      </p>

      {/* 📞 Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left mb-20">
        {/* Phone */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="text-[#ff3c38]" />
            <h3 className="text-lg font-semibold text-[#ff3c38]">Phone</h3>
          </div>
          <p className="text-white/90 text-base">
            <a href="tel:+919967286368" className="underline hover:text-[#ff3c38]">
              +91 99672 86368
            </a>
          </p>
        </div>

        {/* Instagram */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Instagram className="text-[#ff3c38]" />
            <h3 className="text-lg font-semibold text-[#ff3c38]">Instagram</h3>
          </div>
          <p className="text-white/90 text-base">
            <a
              href="https://instagram.com/sheetalacademyuran"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#ff3c38]"
            >
              @sheetalacademyuran
            </a>
          </p>
        </div>

        {/* Location */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="text-[#ff3c38]" />
            <h3 className="text-lg font-semibold text-[#ff3c38]">Location</h3>
          </div>
          <p className="text-white/90 text-base">
            Sheetal Academy, Uran<br />Navi Mumbai
          </p>
        </div>
      </div>

      {/* 🧾 Contact Form + Map Side-by-Side */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-left space-y-6"
        >
          <h3 className="text-2xl font-bold text-[#ff3c38] text-center">Send us a message</h3>

          <div>
            <label htmlFor="name" className="block text-white/80 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#ff3c38]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white/80 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#ff3c38]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white/80 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#ff3c38]"
              placeholder="What would you like to ask?"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#ff3c38] hover:bg-[#e3322e] text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Embedded Map */}
        <div className="flex flex-col">
          <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-xl h-full">
            <iframe
              title="Sheetal Academy Uran Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15089.663088226108!2d72.9321166!3d18.8919459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dbcd1439ca1b%3A0x61b19ac4cac49b25!2sSheetal%20Academy!5e0!3m2!1sen!2sin!4v1690894711567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
