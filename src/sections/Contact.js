'use client';

import { Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
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

  const WhatsAppIcon = ({ size = 18, className = '' }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  const contactCards = [
    { icon: <Phone size={18} className="text-[#ff3c38]" />, label: 'Uran Branch', value: '+91 99672 86368', href: 'tel:+919967286368', sub: 'Mon–Sat · 8 AM–9 PM', accent: '#ff3c38' },
    { icon: <WhatsAppIcon size={18} className="text-[#25D366]" />, label: 'WhatsApp', value: '+91 99672 86368', href: 'https://wa.me/919967286368?text=Hi%2C+I%27m+interested+in+courses+at+Sheetal+Academy.', sub: 'Chat with us instantly', external: true, accent: '#25D366' },
    { icon: <Instagram size={18} className="text-[#E1306C]" />, label: 'Instagram', value: '@sheetal_academy_uran', href: 'https://instagram.com/sheetal_academy_uran', sub: 'Follow for updates', external: true, accent: '#E1306C' },
    { icon: <Facebook size={18} className="text-[#1877F2]" />, label: 'Facebook', value: 'Sheetal Academy Uran', href: 'https://www.facebook.com/sheetalacademyuran', sub: 'Like our page', external: true, accent: '#1877F2' },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactCards.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="shimmer bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
              style={{ '--card-accent': c.accent }}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${c.accent}66`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${c.accent}1a` }}>
                  {c.icon}
                </span>
                <span className="text-sm font-semibold" style={{ color: c.accent }}>{c.label}</span>
              </div>
              <span className="text-white/90 text-base font-medium block break-words">
                {c.value}
              </span>
              <p className="text-white/40 text-xs mt-1">{c.sub}</p>
            </motion.a>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
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
            className="flex flex-col h-full gap-4"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                title="Sheetal Academy Uran Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15089.663088226108!2d72.9321166!3d18.8919459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dbcd1439ca1b%3A0x61b19ac4cac49b25!2sSheetal%20Academy!5e0!3m2!1sen!2sin!4v1690894711567!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 flex-shrink-0">
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