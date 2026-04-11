'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import About from '../sections/About';
import Courses from '../sections/Courses';
import Contact from '../sections/Contact';
import Events from '../sections/Events';
import FAQs from '../sections/FAQs';
import CTA from '../sections/CTA';
import Resources from '../sections/Resources';
import Footer from '../components/Footer';
import { PopupAd, TopBannerStrip } from '../components/PromoDisplay';

const whyItems = [
  { icon: '📅', title: 'Since 1989', desc: 'Over three decades of excellence in English speaking education.' },
  { icon: '👤', title: 'Individual Attention', desc: 'No batch. No group. One teacher dedicated to one student.' },
  { icon: '🕗', title: 'Flexible Timings', desc: 'Join any time between 8 AM and 9 PM, Monday to Saturday.' },
  { icon: '📝', title: 'No Homework', desc: 'All learning happens inside the class — no assignments at home.' },
  { icon: '🎂', title: 'No Age Bar', desc: 'Anyone from 4 years to 70 years can join and learn English.' },
  { icon: '🖥️', title: 'Online & Offline', desc: 'Study from home or visit our branch — both options available.' },
  { icon: '🏆', title: '100% Guarantee', desc: 'We stand behind our training with a 100% result guarantee.' },
  { icon: '🎓', title: 'Certificate Issued', desc: 'Receive a Certificate of Excellence on course completion.' },
];

const trustBadges = [
  { value: '35+', label: 'Years in Uran' },
  { value: '1:1', label: 'Teacher Ratio' },
  { value: '4–70', label: 'Age Range' },
  { value: '100%', label: 'Guarantee' },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [loading, pathname]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0f0505] relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#DC143C] rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border-8 border-t-transparent border-r-transparent border-b-[#DC143C] border-l-[#8B0000] animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center text-[#DC143C] text-2xl font-black tracking-tight">SA</div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base font-semibold text-white/60 tracking-widest uppercase"
        >
          Sheetal <span className="text-[#DC143C]">Academy</span>
        </motion.p>
      </div>
    );
  }

  return (
    <>
      <PopupAd />
      <Header />
      <main className="pt-0 lg:pt-10" style={{ backgroundColor: '#1a0404' }}>
        <TopBannerStrip />

        {/* HERO */}
        <motion.section
          id="hero"
          className="relative overflow-hidden min-h-screen flex items-center"
          style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 60%, #ffe8e8 100%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label="Sheetal Academy — English Speaking Classes Uran"
        >
          {/* Background blobs — pushed into corners, never over content */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC143C] opacity-[0.04] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B0000] opacity-[0.04] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          {/* Subtle vertical accent line */}
          <div className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-[#DC143C]/8 to-transparent pointer-events-none" style={{ right: '38%' }} />

          <div className="relative w-full px-6 lg:px-20 pt-24 pb-10 lg:py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* LEFT */}
              <motion.div
                className="w-full lg:w-[55%] space-y-7 z-10"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <motion.div
                  className="flex items-center gap-2 w-fit"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="flex items-center gap-2 bg-[#DC143C] text-white px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-bold shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white pulse-dot inline-block" />
                    An Institute of English Speaking · Since 1989
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  <span className="block text-[#DC143C]" style={{ fontFamily: 'cursive' }}>
                    Learn English
                  </span>
                  <span className="block text-gray-900 font-sans text-4xl md:text-5xl font-bold mt-1">
                    from the{' '}
                    <span className="relative inline-block">
                      Best Institute
                      <span className="absolute bottom-1 left-0 w-full h-1 bg-[#DC143C] rounded-full opacity-30" />
                    </span>
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl font-light leading-relaxed text-gray-600 max-w-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  At{' '}
                  <span className="font-semibold text-[#B22222]">Sheetal Academy, Uran</span>{' '}
                  — individual attention, no batch system, flexible timings, and a{' '}
                  <span className="font-semibold text-[#B22222]">100% guarantee</span>. Open to all ages, 4 to 70 years.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  {['No Batch System', 'Age 4–70 Yrs', 'Mon–Sat 8 AM–9 PM', 'Online & Offline', 'No Homework'].map((t) => (
                    <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#f5d0d0] text-gray-700 text-xs font-semibold rounded-full shadow-sm">
                      <span className="text-[#DC143C] text-xs">✔</span> {t}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-wrap items-center gap-4 pt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="#courses"
                    className="relative inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white bg-[#DC143C] rounded-xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-xl shadow-lg shadow-[#DC143C]/25"
                  >
                    <span className="absolute inset-0 w-0 bg-[#8B0000] transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative z-10">Explore Courses</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-[#B22222] border-2 border-[#DC143C]/30 rounded-xl hover:bg-[#DC143C] hover:text-white hover:border-[#DC143C] transition-all duration-300"
                  >
                    Free Consultation
                  </a>
                </motion.div>

                <motion.div
                  className="pt-2 grid grid-cols-4 gap-3 max-w-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {trustBadges.map((b, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-extrabold text-[#DC143C]">{b.value}</div>
                      <div className="text-[10px] text-gray-500 leading-tight">{b.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT — visual card panel */}
              <motion.div
                className="hidden lg:flex lg:w-[42%] justify-center items-center"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="relative w-full max-w-[420px] space-y-4">
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#DC143C] opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

                  {/* Big stat card */}
                  <motion.div
                    className="bg-[#DC143C] rounded-3xl p-7 text-white shadow-2xl shadow-[#DC143C]/20 relative overflow-hidden"
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
                    <div className="text-5xl font-black mb-1">35+</div>
                    <div className="text-white/80 text-sm font-medium">Years of transforming lives through English education</div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white pulse-dot" />
                      <span className="text-white/70 text-xs">Since 1989 · Uran, Navi Mumbai</span>
                    </div>
                  </motion.div>

                  {/* Two small cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: '👤', val: 'No Batch', sub: 'Individual attention always' },
                      { icon: '🎂', val: '4–70 Yrs', sub: 'No age bar, ever' },
                    ].map((c, i) => (
                      <motion.div
                        key={i}
                        className="bg-white border border-[#f5d0d0] rounded-2xl p-5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.45 + i * 0.1 }}
                      >
                        <div className="text-2xl mb-2">{c.icon}</div>
                        <div className="text-base font-extrabold text-[#B22222]">{c.val}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{c.sub}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Feature list card */}
                  <motion.div
                    className="bg-white border border-[#f5d0d0] rounded-2xl p-5 shadow-md"
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-xs font-bold text-[#DC143C] uppercase tracking-widest mb-4">What makes us different</div>
                    <ul className="space-y-2.5">
                      {[
                        '100% Guarantee on results',
                        'No homework — all in-class',
                        'Online &amp; Offline both available',
                        'Certificate of Excellence issued',
                        'Mon – Sat · 8 AM to 9 PM',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <span className="w-4 h-4 rounded-full bg-[#DC143C]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-[#DC143C] text-[10px] font-black">✔</span>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" style={{ lineHeight: 0 }}>
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              className="w-full h-[40px] md:h-[60px]" style={{ fill: '#fdf5f5' }}>
              <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
            </svg>
          </div>
        </motion.section>

        {/* WHY CHOOSE US — REDESIGNED */}
        <section
          id="why-choose-us"
          className="relative overflow-hidden py-24 px-6 lg:px-20"
          style={{ background: 'linear-gradient(160deg, #0f0505 0%, #1c0808 55%, #2b0a0a 100%)' }}
          aria-label="Why choose Sheetal Academy"
        >
          {/* Background texture elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#DC143C] opacity-[0.04] blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8B0000] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wcu-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#DC143C" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wcu-grid)" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">

            {/* Header */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#DC143C]" />
                <span className="text-[#DC143C] text-[11px] font-bold tracking-[0.25em] uppercase">Why Students Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-2xl">
                Uran&apos;s Most{' '}
                <span className="relative inline-block">
                  <span className="text-[#DC143C] font-[Pacifico]">Trusted</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6 Q50 2 100 5 Q150 8 198 3" stroke="#DC143C" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7"/>
                  </svg>
                </span>
                {' '}English Institute
              </h2>
              <p className="text-white/45 text-sm max-w-xl leading-relaxed">
                Since 1989, thousands of students, professionals, housewives, and job seekers in Uran and Navi Mumbai have learned spoken English with us — and transformed their lives.
              </p>
            </motion.div>

            {/* Main layout: big feature left + grid right */}
            <div className="grid lg:grid-cols-5 gap-6 mb-6">

              {/* Left: Large featured card */}
              <motion.div
                className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-[#DC143C]/20 p-8 flex flex-col justify-between min-h-[320px]"
                style={{ background: 'linear-gradient(135deg, rgba(220,20,60,0.12) 0%, rgba(139,0,0,0.08) 100%)' }}
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#DC143C] opacity-[0.06] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div>
                  <div className="text-6xl font-black text-[#DC143C] leading-none mb-2">35+</div>
                  <div className="text-white/80 text-xl font-semibold mb-3">Years of Excellence</div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Not a new name. Not a franchise. Sheetal Academy has been the most trusted English institute in Uran since 1989 — built on results, not promises.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse" />
                  <span className="text-white/30 text-xs tracking-widest uppercase">Established 1989 · Uran</span>
                </div>
              </motion.div>

              {/* Right: 2×2 grid of key features */}
              <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                {[
                  { icon: '👤', title: 'Individual Attention', desc: 'No batch. No group. One teacher, one student — always.', accent: true },
                  { icon: '🏆', title: '100% Guarantee', desc: 'We stand fully behind our training with a result guarantee.', accent: false },
                  { icon: '🕗', title: 'Flexible Timings', desc: '8 AM to 9 PM, Monday to Saturday. Walk in anytime.', accent: false },
                  { icon: '🎂', title: 'No Age Bar', desc: '4 to 70 years — learning English has no expiry date.', accent: false },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`relative rounded-2xl p-5 border transition-all duration-300 group cursor-default ${
                      item.accent
                        ? 'bg-[#DC143C] border-[#DC143C]'
                        : 'bg-white/[0.04] border-white/10 hover:border-[#DC143C]/40 hover:bg-white/[0.07]'
                    }`}
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className={`font-bold text-sm mb-1 ${item.accent ? 'text-white' : 'text-white/90'}`}>{item.title}</h3>
                    <p className={`text-xs leading-relaxed ${item.accent ? 'text-white/75' : 'text-white/40'}`}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom row: remaining features as horizontal pills + location */}
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Remaining feature pills */}
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: '📝', title: 'No Homework', desc: 'All in-class' },
                  { icon: '🖥️', title: 'Online & Offline', desc: 'Both available' },
                  { icon: '🎓', title: 'Certificate', desc: 'On completion' },
                  { icon: '📚', title: 'No Batch', desc: 'Pure 1-on-1' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/[0.03] border border-white/8 rounded-xl px-4 py-4 flex flex-col items-center text-center hover:border-[#DC143C]/30 hover:bg-white/[0.06] transition-all duration-300"
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                  >
                    <span className="text-xl mb-2">{item.icon}</span>
                    <span className="text-white/80 text-xs font-semibold">{item.title}</span>
                    <span className="text-white/30 text-[10px] mt-0.5">{item.desc}</span>
                  </motion.div>
                ))}
              </div>

              {/* Location card */}
              <motion.a
                href="tel:+919967286368"
                className="group relative rounded-2xl border border-white/10 hover:border-[#DC143C]/50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:bg-white/[0.04]"
                style={{ background: 'rgba(220,20,60,0.04)' }}
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#DC143C]/10 flex items-center justify-center text-base group-hover:bg-[#DC143C]/20 transition-colors">📍</div>
                <div>
                  <div className="text-[#DC143C] text-xs font-bold tracking-widest uppercase mb-2">Find Us</div>
                  <div className="text-white font-bold text-sm mb-1">Uran Branch</div>
                  <div className="text-white/40 text-xs leading-relaxed">Shop 43, Shreeraj Nagar Apt,<br />Kamtha Road, Uran – 400 702</div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="text-[#DC143C] font-bold text-sm group-hover:underline">+91 99672 86368</div>
                  <svg className="w-3.5 h-3.5 text-[#DC143C] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </motion.a>
            </div>

          </div>
        </section>

        {/* Other Sections */}
        {[About, Courses, Events, FAQs, Resources, CTA, Contact].map((Component, idx) => (
          <div key={idx}>
            <Component />
          </div>
        ))}

        {/*
          SEO internal link section — visually hidden but fully crawlable by Google.
          aria-hidden is intentionally removed so Googlebot follows these links.
        */}
        <section className="sr-only">
          <h2>English Speaking Classes in Uran — Sheetal Academy</h2>
          <p>Sheetal Academy, located at Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran — 400702, is Uran's most trusted and best English speaking institute since 1989. Serving students from Uran, Panvel, New Panvel, Belapur, Nerul, Kharghar, Alibag, Pen, Khopoli, and all of Raigad district and Navi Mumbai. We offer individual-attention spoken English classes, grammar training, vocabulary building, pronunciation coaching, personality development courses, corporate communication training, call centre training, American accent training, public speaking and stage speaking, interview preparation in English, and online English courses. No batch system — one teacher, one student, always. Age no bar (4 to 70 years). Flexible timings Monday to Saturday, 8 AM to 9 PM. 100% success guarantee. Certificate of Excellence on completion. Phone: +91-9967286368.</p>
          <nav aria-label="SEO internal links — full hierarchy">
            <a href="/english-speaking-classes-uran">Best English Speaking Classes in Uran — Primary Page</a>
            <a href="/english-speaking-classes">Spoken English Course for Beginners to Advanced</a>
            <a href="/personality-development">Personality Development Course Uran — 15 Modules</a>
            <a href="/communication-skills">Communication Skills Training Uran — Professional English</a>
            <a href="/interview-preparation">Interview Preparation in English — Mock Interview Uran</a>
            <a href="/online-english-course">Online English Course with Individual Coaching — All India</a>
            <a href="/public-speaking-guide">Public Speaking Course Uran — 11 Speaking Practice Types</a>
            <a href="/how-to-improve-english-speaking">How to Improve English Speaking Fast — 3-Step Method</a>
            <a href="/spoken-english-navi-mumbai">Spoken English Classes in Navi Mumbai — Sheetal Academy</a>
            <a href="/spoken-english-panvel">Spoken English Classes Near Panvel — Best English Institute</a>
            <a href="/english-classes-near-uran">English Classes Near Me — Uran, Raigad District</a>
            <a href="/about">About Sheetal Academy Uran — Founded 1989</a>
            <a href="/faqs">FAQs — English Classes Uran, Sheetal Academy</a>
          </nav>
        </section>
      </main>

      <Footer />
    </>
  );
}