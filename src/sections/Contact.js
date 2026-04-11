'use client';

import { Phone, MapPin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}. ${form.message || 'I would like to know more about your courses.'} My number is ${form.phone}.`
    );
    window.open(`https://wa.me/919967286368?text=${msg}`, '_blank');
    setForm({ name: '', phone: '', message: '' });
  };

  const contactCards = [
    { icon: <Phone size={18} className="text-[#ff3c38]" />, label: 'Uran Branch', value: '+91 99672 86368', href: 'tel:+919967286368', sub: 'Mon–Sat · 8 AM–9 PM' },
    { icon: <Instagram size={18} className="text-[#ff3c38]" />, label: 'Instagram', value: '@sheetalacademyuran', href: 'https://instagram.com/sheetalacademyuran', sub: 'Follow for updates', external: true },
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-white text-sm border border-white/20 focus:outline-none focus:border-[#ff3c38] focus:ring-1 focus:ring-[#ff3c38] transition placeholder-white/30';

  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-20 text-white relative overflow-hidden"
      style={{ background: 'radial-gradient(circle at 80% 20%, #2b0605, #1a0e0e)' }}
      aria-label="Contact Sheetal Academy"
    >
      {/* Corner blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#DC143C] opacity-[0.05] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#8B0000] opacity-[0.06] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#ff3c38]/50" />
            <span className="text-[#ff3c38] text-xs font-bold tracking-widest uppercase">Reach Out</span>
            <div className="w-10 h-px bg-[#ff3c38]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">Get in</span>{' '}
            <span className="text-white font-[Pacifico]">Touch</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            We are available <strong className="text-white">Monday to Saturday, 8 AM to 9 PM</strong>. Walk in, call, or WhatsApp us — our team is always ready to help.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {contactCards.map((c, i) => (
            <motion.div
              key={i}
              className="shimmer bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#ff3c38]/40 transition-all duration-300"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                {c.icon}
                <span className="text-sm font-semibold text-[#ff3c38]">{c.label}</span>
              </div>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="text-white/90 text-base font-medium hover:text-[#ff3c38] transition-colors block"
              >
                {c.value}
              </a>
              <p className="text-white/40 text-xs mt-1">{c.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* WhatsApp form */}
          <motion.form
            onSubmit={handleWhatsApp}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl space-y-5"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white">Send an Enquiry</h3>
              <p className="text-white/40 text-xs mt-1">Submitting opens WhatsApp with your message pre-filled.</p>
            </div>

            <div>
              <label className="block text-white/60 mb-1.5 text-xs font-semibold uppercase tracking-wider">Your Name</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange} required
                className={inputClass}
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-white/60 mb-1.5 text-xs font-semibold uppercase tracking-wider">Phone Number</label>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange} required
                className={inputClass}
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-white/60 mb-1.5 text-xs font-semibold uppercase tracking-wider">Message (optional)</label>
              <textarea
                name="message" rows="3" value={form.message} onChange={handleChange}
                className={inputClass + ' resize-none'}
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                placeholder="Which course are you interested in?"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#ff3c38] hover:bg-[#e3322e] text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              <Send size={16} />
              Send via WhatsApp →
            </button>
          </motion.form>

          {/* Map + addresses */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl" style={{ height: '280px' }}>
              <iframe
                title="Sheetal Academy Uran Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15089.663088226108!2d72.9321166!3d18.8919459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dbcd1439ca1b%3A0x61b19ac4cac49b25!2sSheetal%20Academy!5e0!3m2!1sen!2sin!4v1690894711567!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
              <MapPin size={16} className="text-[#ff3c38] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Uran Branch</div>
                <div className="text-white/55 text-xs leading-relaxed">Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran – 400 702, Navi Mumbai</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}