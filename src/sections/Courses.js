'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const courses = [
  {
    title: 'Fluency Booster',
    description:
      'Enhance your spoken English fluency with confidence-building techniques and real-time practice.',
    icon: '🗣️',
    details:
      'Our Fluency Booster course provides personalized speaking sessions, fluency games, and group discussions to help you break the hesitation barrier and speak naturally.',
  },
  {
    title: 'Personality Development',
    description:
      'Develop interpersonal skills, body language, and presentation confidence.',
    icon: '💼',
    details:
      'This course focuses on grooming your presence, communication style, leadership traits, and self-confidence to present yourself better in any situation.',
  },
  {
    title: 'Corporate Training',
    description:
      'Tailored modules for professionals focusing on workplace communication and etiquette.',
    icon: '🏢',
    details:
      'Corporate Training includes email etiquette, public speaking, leadership communication, and team collaboration skills designed for corporate success.',
  },
  {
    title: 'Advanced Grammar',
    description: 'Master the structure of English to speak and write flawlessly.',
    icon: '📘',
    details:
      'Deep dive into sentence structure, tenses, error correction, and advanced usage to sharpen your language accuracy and fluency.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section
      id="courses"
      className="relative px-6 lg:px-20 py-32 text-center text-white"
      style={{
        background: 'linear-gradient(to bottom right, #2a0605, #0f0606)',
      }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.6)]">Our</span>{' '}
        <span className="text-white font-[Pacifico]">Courses</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {courses.map((course, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelectedCourse(course)}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl text-left hover:scale-105 transition-transform duration-300"
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="text-4xl mb-4">{course.icon}</div>
            <h3 className="text-2xl font-semibold text-[#ff3c38] mb-2">{course.title}</h3>
            <p className="text-white/80">{course.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a0e0e] border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
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
              <div className="text-5xl mb-4">{selectedCourse.icon}</div>
              <h3 className="text-2xl font-bold text-[#ff3c38] mb-3">{selectedCourse.title}</h3>
              <p className="text-white/90 mb-6">{selectedCourse.details}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919967286368?text=Hi, I'm interested in the course!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff3c38] hover:bg-[#e2302c] text-white font-semibold py-2 px-6 rounded-full text-center transition"
                >
                  Enroll Now
                </a>
                <a
                  href="#contact"
                  className="border border-white/30 text-white font-semibold py-2 px-6 rounded-full text-center hover:bg-white/10 transition"
                >
                  Know More
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
