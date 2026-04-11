'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    title: 'Spoken English Course',
    description: 'A complete 3-step programme covering Grammar, Vocabulary, Spoken English, Smart English, and dynamic Speaking Practice.',
    icon: '🗣️',
    badge: 'Core Programme',
    href: '/english-speaking-classes-uran',
    linkLabel: 'View English Course Details',
    details: [
      'Step 1 (Ab-initio): English introduced with Alphabets & Spelling Book, covering all grammar essentials including tenses, modal verbs (will/would/shall/should), and sentence construction.',
      'Step 2: Spoken English book with frequently used sentences for instant fluency. Vocabulary — Animated, Modern English, Pronunciation, Word Meanings, and Clarification of similar words.',
      'Step 3 (Smart English): Idioms, Proverbs & Phrases — the icing on the cake. Periodic seminars and vivas to test knowledge. Certificate of Excellence issued upon successful completion.',
      'Refresher students with existing grammar knowledge may start directly from Vocabulary & Spoken English.',
    ],
  },
  {
    title: 'Personality Development',
    description: 'A comprehensive course featuring 15 key modules: from body language and confidence boosting to leadership and stage skills.',
    icon: '💼',
    badge: 'New Feather in Our Cap',
    href: '/personality-development',
    linkLabel: 'View Personality Development Details',
    details: [
      'Business & Corporate Level Communication',
      'Voice & Accent Training',
      'Soft Skills & Letter Writing',
      'Drafting Professional E-mails',
      'Telephone Etiquettes & Table Manners',
      'Stress Management & Time Management',
      'Leadership Skill & Positive Thinking',
      'Stage & Crowd Holding Skills',
      'Confidence Boosting, Body Language & Motivating Sessions',
    ],
  },
  {
    title: 'Corporate & Call Centre Training',
    description: 'Specialised training for professionals, corporate employees, and call centre aspirants including American Accent coaching.',
    icon: '🏢',
    badge: 'Professional Edge',
    href: '/communication-skills',
    linkLabel: 'View Corporate Training Details',
    details: [
      'Special Training for Call Centre, American Accent',
      'Business & Corporate Level Communication',
      'Professional Email Drafting & Telephone Etiquette',
      'Leadership, Soft Skills, and Presentation Skills',
      'Stage Speaking and Confidence Boosting',
      'Ideal for working professionals and career changers',
    ],
  },
  {
    title: 'Speaking Practice Programme',
    description: 'Dynamic, multi-format speaking practice sessions conducted in a friendly atmosphere with experts from various walks of life.',
    icon: '🎤',
    badge: 'Exclusive Feature',
    href: '/interview-preparation',
    linkLabel: 'View Speaking Practice Details',
    details: [
      'G.D. — Group Discussion',
      'Informal & Freedom Speaking Practice',
      'Public Speaking and Talk Shows',
      'Debate Sessions',
      'Interview Practice (Give & Take)',
      'Stage Speaking & Newspaper Reading',
      'Current Affairs & Listening Practice',
      'Tongue Twister, Role Play & Conversation',
      'Library Access for self-paced learning',
      'Speaking practice experts from different walks of life for real-world exposure',
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section
      id="courses"
      className="relative px-6 lg:px-20 py-28 text-center text-white"
      style={{ background: 'linear-gradient(to bottom right, #2a0605, #0f0606)' }}
      aria-label="Courses at Sheetal Academy"
    >
      <motion.div
        className="mb-4 inline-block bg-[#ff3c38]/20 border border-[#ff3c38]/40 text-[#ff3c38] text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Since 1989 · Uran, Navi Mumbai
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">Our</span>{' '}
        <span className="text-white font-[Pacifico]">Programmes</span>
      </motion.h2>

      <motion.p
        className="text-white/60 max-w-2xl mx-auto mb-14 text-base"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Every programme is delivered with <strong className="text-white">individual attention</strong> — no batch, no compromise. Flexible timings, Monday to Saturday, 8 AM to 9 PM.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-xl text-left hover:border-[#ff3c38]/40 transition-all duration-300 flex flex-col"
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="text-4xl mb-3">{course.icon}</div>
            <div className="text-xs text-[#ff3c38] font-semibold tracking-widest uppercase mb-2">{course.badge}</div>
            <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">{course.description}</p>
            <div className="flex flex-wrap gap-3 mt-auto">
              {/* Visible SEO link to dedicated page — crawlable by Google */}
              <Link
                href={course.href}
                className="inline-block text-sm font-semibold text-white bg-[#ff3c38]/20 border border-[#ff3c38]/40 px-4 py-2 rounded-lg hover:bg-[#ff3c38] hover:border-[#ff3c38] transition-all duration-200"
                aria-label={course.linkLabel}
              >
                Full Details →
              </Link>
              <button
                onClick={() => setSelectedCourse(course)}
                className="inline-block text-sm font-semibold text-[#ff3c38] hover:text-white transition-colors duration-200"
                aria-label={`Quick view ${course.title}`}
              >
                Quick View
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Duration block */}
      <motion.div
        className="mt-14 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-7 text-left"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-lg font-bold text-[#ff3c38] mb-3">Course Duration & Timings</h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
          <div><span className="font-semibold text-white">6 Months</span> — 1 Hour daily</div>
          <div><span className="font-semibold text-white">3 Months</span> — 2 Hours daily</div>
          <div><span className="font-semibold text-white">Mon – Sat</span> — 8 AM to 9 PM</div>
          <div><span className="font-semibold text-white">Online & Offline</span> available</div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a0e0e] border border-white/10 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl overflow-y-auto max-h-[85vh]"
              initial={{ scale: 0.9, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 text-white hover:text-[#ff3c38] transition"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="text-5xl mb-3">{selectedCourse.icon}</div>
              <div className="text-xs text-[#ff3c38] font-semibold tracking-widest uppercase mb-2">{selectedCourse.badge}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedCourse.title}</h3>
              <ul className="space-y-2 mb-7">
                {selectedCourse.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 text-sm leading-relaxed">
                    <span className="text-[#ff3c38] mt-0.5 flex-shrink-0">✔</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919967286368?text=Hi%2C+I%27m+interested+in+a+course+at+Sheetal+Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff3c38] hover:bg-[#e2302c] text-white font-semibold py-2.5 px-6 rounded-full text-center transition"
                >
                  Enquire on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setSelectedCourse(null)}
                  className="border border-white/30 text-white font-semibold py-2.5 px-6 rounded-full text-center hover:bg-white/10 transition"
                >
                  Contact Us
                </a>
                <Link
                  href={selectedCourse.href}
                  className="border border-[#ff3c38]/40 text-[#ff3c38] font-semibold py-2.5 px-6 rounded-full text-center hover:bg-[#ff3c38]/10 transition"
                  onClick={() => setSelectedCourse(null)}
                >
                  Full Page →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}