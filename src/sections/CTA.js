'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function CTA() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [inView, controls]);

  return (
    <section
      id="cta"
      className="py-32 px-6 lg:px-20 text-white relative z-10 text-center"
      style={{
        background: 'radial-gradient(circle at 20% 40%, #3b0d0c, #1a0e0e)',
      }}
      ref={ref}
    >
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">
            Ready
          </span>{' '}
          <span className="text-white font-[Pacifico]">to Grow?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl leading-relaxed font-light text-white/90"
        >
          Join{' '}
          <span className="font-semibold text-[#ff3c38]">
            Sheetal Academy, Uran
          </span>{' '}
          and become a confident English speaker. Book a free demo session today!
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-6 flex-wrap pt-4"
        >
          <Link
            href="#contact"
            className="bg-white text-red-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-100 transition-all"
          >
            Book a Free Demo
          </Link>

          <Link
            href="/brochure.pdf"
            target="_blank"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-red-800 transition-all"
          >
            Download Brochure
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
