'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { BookOpenIcon, FileTextIcon, VideoIcon } from 'lucide-react';

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

const resources = [
  {
    title: 'Grammar Essentials (PDF)',
    link: '/resources/grammar-essentials-v2.pdf',
    type: 'pdf',
  },
  {
    title: 'Top 50 Spoken English Phrases',
    link: '/resources/english-phrases-v2.pdf',
    type: 'pdf',
  },
  {
    title: 'Public Speaking Tips',
    link: 'https://www.youtube.com/watch?v=sample-public-speaking',
    type: 'video',
  },
  {
    title: 'Vocabulary Builder (PDF)',
    link: '/resources/vocabulary-builder-v2.pdf',
    type: 'pdf',
  },
];

export default function Resources() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [inView, controls]);

  const getIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FileTextIcon className="w-6 h-6 text-[#ff3c38]" />;
      case 'video':
        return <VideoIcon className="w-6 h-6 text-[#ff3c38]" />;
      case 'ebook':
        return <BookOpenIcon className="w-6 h-6 text-[#ff3c38]" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="resources"
      className="relative px-6 lg:px-20 py-32 text-white text-center"
      style={{
        background: 'radial-gradient(circle at 20% 40%, #3b0d0c, #1a0e0e)',
      }}
      ref={ref}
    >
      <motion.div
        className="max-w-4xl mx-auto space-y-10"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">
            Free
          </span>{' '}
          <span className="text-white font-[Pacifico]">Resources</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-white/90 leading-relaxed"
        >
          Boost your English skills with our curated collection of helpful PDFs,
          videos, and reading materials – free for all learners.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-left"
        >
          {resources.map((res, index) => (
            <Link
              key={index}
              href={res.link}
              target={res.link.startsWith('http') ? '_blank' : '_self'}
              className="flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-md p-5 rounded-xl hover:bg-white/10 transition-all"
            >
              {getIcon(res.type)}
              <span className="text-white text-lg font-medium">
                {res.title}
              </span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
