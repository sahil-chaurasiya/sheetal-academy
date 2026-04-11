'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
const fadeInUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

const stats = [
  { value: '1989', label: 'Established' },
  { value: '4–70', label: 'Age Range' },
  { value: '100%', label: 'Guarantee' },
  { value: 'No Batch', label: 'Individual Focus' },
];

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => { if (inView) controls.start('show'); }, [inView, controls]);

  return (
    <section
      id="about"
      className="relative px-6 lg:px-20 py-28 flex flex-col items-center text-center text-white overflow-hidden"
      style={{ background: 'radial-gradient(circle at 20% 40%, #3b0d0c, #1a0e0e)' }}
      ref={ref}
      aria-label="About Sheetal Academy"
    >
      {/* Corner blobs — stay at edges, never over content */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#DC143C] opacity-[0.06] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B0000] opacity-[0.08] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <motion.div className="max-w-5xl w-full space-y-10 relative z-10" variants={container} initial="hidden" animate={controls}>
        <motion.div variants={fadeInUp}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#ff3c38]/50" />
            <span className="text-[#ff3c38] text-xs font-bold tracking-widest uppercase">Our Story</span>
            <div className="w-12 h-px bg-[#ff3c38]/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">About</span>{' '}
            <span className="text-white font-[Pacifico]">Sheetal Academy</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed font-light text-white/85 max-w-3xl mx-auto">
          <span className="font-semibold text-[#ff3c38]">Sheetal Academy, Uran</span> — An Institute of English Speaking — was founded on a dream: to make fluent English accessible to every person in our society, regardless of age, background, or mother tongue. Since <span className="font-semibold text-white">1989</span>, we have been the most trusted name in English speaking education in Uran and Navi Mumbai.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-base text-white/65 max-w-3xl mx-auto leading-relaxed">
          At Sheetal Academy, we teach not just English — we build speakers, thinkers, and leaders. Every student receives <span className="font-semibold text-white">individual attention</span> with no batch or group system, ensuring personalised progress at your own pace.
        </motion.p>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {stats.map((s, i) => (
            <div key={i}
              className="shimmer bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-[#ff3c38]/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-extrabold text-[#ff3c38] mb-1">{s.value}</div>
              <div className="text-xs text-white/50">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <a href="#contact"
            className="glow-red inline-block px-8 py-3.5 bg-[#ff3c38] text-white font-semibold rounded-full shadow-lg hover:bg-[#e1332f] transition-all duration-300 hover:-translate-y-0.5">
            Enquire &amp; Enrol Today →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}