'use client';

import { motion } from 'framer-motion';
import { Instagram, PhoneCall, MapPin, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative bg-[#0f0505] text-white pt-16 pb-8 px-6 lg:px-20 overflow-hidden"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <meta itemProp="name" content="Sheetal Academy" />
      <meta itemProp="foundingDate" content="1989" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff3c38]/40 to-transparent" />
      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#DC143C] opacity-[0.03] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10"
      >
        {/* Logo & Tagline */}
        <div className="lg:col-span-1">
          <Image
            src="/logo.jpg"
            alt="Sheetal Academy — English Speaking Institute, Uran, Navi Mumbai"
            width={100}
            height={100}
            className="mb-4 rounded-xl shadow-md"
            priority
          />
          <p className="text-sm text-white/50 leading-relaxed">
            <span className="font-semibold text-white">Sheetal Academy</span><br />
            An Institute of English Speaking<br />
            <span className="text-[#ff3c38] font-semibold">Since 1989</span> · Uran, Navi Mumbai
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            <span className="text-xs text-white/40">Open Mon–Sat, 8 AM–9 PM</span>
          </div>
        </div>

        {/* Uran Branch */}
        <div>
          <h3 className="text-sm font-bold mb-4 text-[#ff3c38] uppercase tracking-widest">Uran Branch</h3>
          <ul className="space-y-3 text-sm text-white/55">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-[#ff3c38] mt-0.5 flex-shrink-0" />
              <span itemProp="address">Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran – 400 702, Navi Mumbai</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall size={13} className="text-[#ff3c38]" />
              <a href="tel:+919967286368" className="hover:text-white transition underline-grow">+91 99672 86368</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={13} className="text-[#ff3c38]" />
              <a href="https://instagram.com/sheetalacademyuran" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline-grow">
                @sheetalacademyuran
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold mb-4 text-[#ff3c38] uppercase tracking-widest">Our Programmes</h3>
          <ul className="space-y-2 text-sm text-white/55">
            {[
              { href: '/english-speaking-classes-uran', label: 'English Classes in Uran' },
              { href: '/spoken-english-navi-mumbai', label: 'Spoken English — Navi Mumbai' },
              { href: '/spoken-english-panvel', label: 'English Classes Near Panvel' },
              { href: '/english-classes-near-uran', label: 'English Classes Near Uran' },
              { href: '/personality-development', label: 'Personality Development' },
              { href: '/communication-skills', label: 'Communication Skills' },
              { href: '/interview-preparation', label: 'Interview Preparation' },
              { href: '/online-english-course', label: 'Online English Course' },
              { href: '/public-speaking-guide', label: 'Public Speaking' },
              { href: '/#contact', label: 'Contact Us' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition underline-grow inline-block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Local SEO geo-text */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/8 relative z-10">
        <p className="text-[10px] text-white/20 text-center leading-relaxed max-w-4xl mx-auto">
          Sheetal Academy — Uran's most trusted English speaking institute since 1989. Serving Uran, Panvel, New Panvel, Belapur, Nerul, Kharghar, Alibag, Pen, Khopoli, and all of Raigad district and Navi Mumbai. Spoken English, personality development, corporate communication, American accent, call centre training, grammar, and vocabulary — individual coaching, no batch. Open Monday to Saturday, 8 AM to 9 PM. Call: +91 99672 86368.
        </p>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Sheetal Academy, Uran. All rights reserved.</p>
          <a href="https://wa.me/919967286368?text=Hi%2C+I%27m+interested+in+courses+at+Sheetal+Academy." target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-xs font-bold rounded-full hover:bg-[#1ebe5d] transition">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
        <p className="text-[11px] text-white/20 italic">
          Website by{' '}
          <a href="https://sahilchaurasiya.me/contact" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50 transition">
            Sahil Chaurasiya
          </a>
        </p>
        {/* Scroll to top */}
        <button
          onClick={scrollTop}
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[#ff3c38] hover:text-[#ff3c38] transition-all duration-300 hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp size={14} />
        </button>
      </div>

      {/*
        SEO internal link section — visually hidden (sr-only) but fully crawlable.
        aria-hidden intentionally removed so Googlebot follows these links and
        passes PageRank to all key service pages.
      */}
      <section className="sr-only">
        <p>Sheetal Academy, established 1989, offers the best English speaking classes in Uran, Navi Mumbai, Panvel, New Panvel, Belapur, Nerul, Raigad district, and across India via online coaching. Individual attention, no batch system, 100% success guarantee. Programmes include spoken English, personality development, communication skills, public speaking, interview preparation, call centre training, American accent coaching, and grammar courses.</p>
        <nav aria-label="SEO Internal Links — Primary and Supporting Pages">
          <a href="/english-speaking-classes-uran">English Speaking Classes in Uran — Primary Page</a>
          <a href="/english-speaking-classes">Spoken English Classes for Beginners to Advanced</a>
          <a href="/personality-development">Personality Development Course Uran — 15 Modules</a>
          <a href="/communication-skills">Communication Skills Training Uran</a>
          <a href="/interview-preparation">Interview Preparation in English Uran</a>
          <a href="/online-english-course">Online English Speaking Course India</a>
          <a href="/public-speaking-guide">Public Speaking Course Uran — 11 Practice Types</a>
          <a href="/how-to-improve-english-speaking">How to Improve English Speaking — 3-Step Method</a>
          <a href="/spoken-english-navi-mumbai">Spoken English Classes in Navi Mumbai</a>
          <a href="/spoken-english-panvel">Spoken English Classes Near Panvel</a>
          <a href="/english-classes-near-uran">English Classes Near Me — Uran Raigad</a>
          <a href="/about">About Sheetal Academy Uran Since 1989</a>
          <a href="/faqs">FAQs — Sheetal Academy English Classes Uran</a>
        </nav>
      </section>
    </footer>
  );
}