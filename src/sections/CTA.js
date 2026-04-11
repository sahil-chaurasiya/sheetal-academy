'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function CTA() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  return (
    <section
      id="cta"
      className="py-28 px-6 lg:px-20 text-white relative z-10 text-center"
      style={{ background: 'radial-gradient(circle at 20% 40%, #3b0d0c, #1a0e0e)' }}
      ref={ref}
      aria-label="Call to action — join Sheetal Academy"
    >
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={fadeInUp}>
          <span className="inline-block bg-[#ff3c38]/20 border border-[#ff3c38]/40 text-[#ff3c38] text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full">
            100% Guarantee · Since 1989
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">Ready</span>{' '}
          <span className="text-white font-[Pacifico]">to Speak English?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl leading-relaxed font-light text-white/85 max-w-2xl mx-auto"
        >
          Join{' '}
          <span className="font-semibold text-[#ff3c38]">Sheetal Academy, Uran</span>{' '}
          — and experience the difference of individual attention, no batch system, flexible timings, and a 100% result guarantee. Students from 4 to 70 years old have transformed their lives here. You can too.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto text-sm text-white/70"
        >
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            🕗 Mon–Sat, 8 AM–9 PM
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            👤 No Batch System
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            🏠 Online & Offline
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-5 flex-wrap pt-2"
        >
          <a
            href="#contact"
            className="bg-[#ff3c38] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#e2302c] transition-all hover:scale-105"
          >
            Enquire Now — It&apos;s Free
          </a>
          <a
            href="https://wa.me/919967286368?text=Hi%2C+I%27m+interested+in+joining+Sheetal+Academy."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
