'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [inView, controls]);

  return (
    <section
      id="about"
      className="relative px-6 lg:px-20 py-32 flex flex-col items-center text-center text-white"
      style={{
        background: 'radial-gradient(circle at 20% 40%, #3b0d0c, #1a0e0e)',
      }}
      ref={ref}
    >
      <motion.div
        className="max-w-4xl space-y-8"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">
            About
          </span>{' '}
          <span className="text-white font-[Pacifico]">Sheetal Academy</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl leading-relaxed font-light text-white/90"
        >
          <span className="font-semibold text-[#ff3c38]">
            Sheetal Academy, Uran
          </span>{' '}
          is not just an English-speaking institute – it's a transformation
          center. With a proven legacy of excellence in English communication,
          personality development, and public speaking, we empower our students
          with confidence, clarity, and charisma.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-base text-white/70 max-w-3xl mx-auto"
        >
          Whether you're a student, job seeker, or professional — our mission
          is simple: equip you with the fluency and mindset to thrive in any
          situation.
        </motion.p>
      </motion.div>
    </section>
  );
}
