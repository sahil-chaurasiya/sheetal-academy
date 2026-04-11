'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const quickLinks = [
  { title: 'English Speaking Classes in Uran', href: '/english-speaking-classes-uran', icon: '🗣️', desc: 'Complete course details, curriculum, and how to join.' },
  { title: 'Spoken English — Navi Mumbai', href: '/spoken-english-navi-mumbai', icon: '📍', desc: 'Students from across Navi Mumbai served from our Uran branch.' },
  { title: 'Online English Course', href: '/online-english-course', icon: '🌐', desc: 'Learn from home — individual coaching with doorstep materials.' },
  { title: 'Personality Development', href: '/personality-development', icon: '💼', desc: 'Our 15-module personality & corporate communication programme.' },
  { title: 'Interview Preparation', href: '/interview-preparation', icon: '🎯', desc: 'Mock interviews, GD, and professional English coaching.' },
  { title: 'Public Speaking', href: '/public-speaking-guide', icon: '🎤', desc: '11 types of speaking practice — stage, debate, talk shows & more.' },
  { title: 'Communication Skills', href: '/communication-skills', icon: '🤝', desc: 'Build professional communication for career and social success.' },
  { title: 'How to Improve English', href: '/how-to-improve-english-speaking', icon: '📈', desc: 'Our proven 3-step method explained step by step.' },
];

export default function Resources() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  return (
    <section
      id="resources"
      className="py-24 px-5 lg:px-20 text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #1a0e0e, #2a0605)' }}
      ref={ref}
      aria-label="Resources and quick links"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff3c38]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#ff3c38]/15 border border-[#ff3c38]/35 text-[#ff3c38] text-xs tracking-widest uppercase font-bold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#ff3c38] rounded-full animate-pulse" />
            Explore Everything
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="text-[#ff3c38]">Quick</span>{' '}
            <span className="font-[Pacifico]">Links</span>
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Sheetal Academy&apos;s programmes, courses, and approach — tap any card to explore.
          </p>
        </motion.div>

        {/* Quick link cards — clearly clickable */}
        <motion.nav aria-label="Course and resource links">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {quickLinks.map((link, i) => (
              <motion.li key={i} variants={fadeInUp} className="list-none">
                <Link
                  href={link.href}
                  className="group flex flex-col h-full bg-white/[0.06] border border-white/10 rounded-2xl p-5 hover:bg-[#ff3c38]/10 hover:border-[#ff3c38]/50 active:scale-[0.98] transition-all duration-250 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_24px_rgba(255,60,56,0.15)] relative overflow-hidden"
                >
                  {/* Shimmer sweep */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top row: icon + arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl select-none" role="img" aria-hidden="true">{link.icon}</span>
                    <span
                      className="w-7 h-7 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff3c38] group-hover:border-[#ff3c38] transition-all duration-250"
                    >
                      <ArrowRight
                        size={13}
                        className="text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-250"
                      />
                    </span>
                  </div>

                  <h3 className="font-semibold text-white text-sm mb-1.5 leading-snug group-hover:text-[#ff3c38] transition-colors duration-200">
                    {link.title}
                  </h3>
                  <p className="text-white/45 text-xs leading-relaxed mt-auto">{link.desc}</p>

                  {/* Bottom tap hint — only on mobile */}
                  <span className="mt-3 text-[10px] font-semibold text-[#ff3c38]/60 group-hover:text-[#ff3c38] uppercase tracking-wider transition-colors sm:hidden">
                    Tap to explore →
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Contact strip */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 bg-gradient-to-r from-[#ff3c38]/12 to-[#8B0000]/12 border border-[#ff3c38]/30 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-bold text-white text-base mb-0.5">Have a Question?</h3>
            <p className="text-white/55 text-sm">Our team is available Monday to Saturday, 8 AM–9 PM.</p>
          </div>
          <a
            href="tel:+919967286368"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#ff3c38] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#e2302c] active:scale-95 transition-all duration-200 shadow-lg shadow-[#ff3c38]/20 whitespace-nowrap"
          >
            <span aria-hidden="true">📞</span> Call: +91 99672 86368
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}