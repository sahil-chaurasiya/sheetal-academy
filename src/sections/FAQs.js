'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: 'Which is the best English speaking institute in Uran?', answer: "Sheetal Academy, established since 1989, is Uran's most trusted and longest-running English speaking institute. With over three decades of experience, individual attention for every student, and a 100% success guarantee, we are consistently ranked as the best English academy in Uran and Navi Mumbai." },
  { question: 'How long does it take to learn spoken English at Sheetal Academy?', answer: 'The course is designed for 6 months at 1 hour per day, or 3 months at 2 hours per day (Monday to Saturday, 8 AM to 9 PM). You may attend at any convenient time within these hours — there is no fixed batch or group.' },
  { question: 'Is there a batch or group system at Sheetal Academy?', answer: 'No. Sheetal Academy has no batch or group system. Every student receives dedicated individual attention — one teacher, one student. You can join any time between 8 AM and 9 PM on any working day.' },
  { question: 'What is the age limit to join Sheetal Academy?', answer: 'There is no age bar. Anyone between 4 years and 70 years of age is welcome. We have tailor-made the learning approach to work for school children, college students, housewives, working professionals, and senior learners alike.' },
  { question: 'What does the spoken English course cover?', answer: 'The course covers Grammar (tenses, modal verbs, sentence construction), Vocabulary (animated, modern English, pronunciation, clarification), Spoken English (frequently used sentences), Smart English (idioms, proverbs, phrases), and extensive Speaking Practice including Group Discussion, Debate, Interview Practice, Stage Speaking, Newspaper Reading, and Listening Practice.' },
  { question: 'What is the Personality Development course?', answer: 'The Personality Development course covers 15 modules: Business & Corporate Communication, Voice & Accent Training, Soft Skills, Letter Writing, Email Drafting, Telephone Etiquette, Table Manners, Stress Management, Time Management, Leadership Skill, Positive Thinking, Stage & Crowd Holding Skills, Confidence Boosting, Body Language, and Motivating Sessions.' },
  { question: 'Does Sheetal Academy offer online English classes?', answer: 'Yes. Both online and offline courses are available. For online students: individual teaching (no group/batch), missed sessions are compensated, course material is delivered to your doorstep, management is just a call away, and you are welcome to visit our branch for speaking practice even after completing your online programme.' },
  { question: 'Is there homework or home assignment at Sheetal Academy?', answer: 'No. Sheetal Academy gives no homework. All learning happens in class through practical interaction, speaking sessions, and guided practice.' },
  { question: 'Does Sheetal Academy offer Call Centre and American Accent training?', answer: 'Yes. Sheetal Academy provides special training for call centre aspirants including American Accent coaching. This is part of the Speaking Practice programme and can also be taken as part of the Corporate Training modules.' },
  { question: 'Is a certificate issued at Sheetal Academy?', answer: 'Yes. A Certificate of Excellence is issued to students upon successful completion of the course.' },
  { question: 'Where is Sheetal Academy located?', answer: 'Sheetal Academy is located at Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran, Navi Mumbai – 400 702. Ph: 9967286368.' },
  { question: 'What types of speaking practice does Sheetal Academy conduct?', answer: 'Sheetal Academy conducts: Group Discussion (GD), Informal Speaking Practice, Freedom Speaking Practice, Public Speaking and Talk Shows, Debate, Interview Practice, Stage Speaking, Newspaper Reading, Call Centre & American Accent Training, Listening Practice, and Library sessions — with speaking practice experts from different walks of life.' },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faqs"
      className="py-24 px-6 lg:px-20 text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(to right bottom, rgb(43, 6, 5), rgb(16, 5, 5))' }}
      aria-label="Frequently Asked Questions"
    >
      {/* Corner blob only — no centered ring */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#DC143C] opacity-[0.05] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#ff3c38]/50" />
            <span className="text-[#ff3c38] text-xs font-bold tracking-widest uppercase">Common Questions</span>
            <div className="w-10 h-px bg-[#ff3c38]/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="font-[Pacifico] text-[#ff3c38]">Questions</span>
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            Everything you need to know about English speaking classes, courses, and facilities at Sheetal Academy, Uran.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#ff3c38]/20 bg-white/3 rounded-2xl overflow-hidden"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left px-5 py-4 flex justify-between items-center gap-3 transition-colors duration-200 ${openIndex === index ? 'bg-[#ff3c38]/10' : 'hover:bg-white/5'}`}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-sm font-semibold text-white leading-snug flex-1" itemProp="name">
                  {faq.question}
                </h3>
                {/* Fixed-size toggle — shrinks to fit, never expands */}
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center text-xs font-bold leading-none
                    ${openIndex === index
                      ? 'bg-[#ff3c38] border-[#ff3c38] text-white'
                      : 'border-white/20 text-white/50'}`}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 1 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <div className="px-5 pb-4 pt-1 text-sm text-white/70 leading-relaxed border-t border-white/8" itemProp="text">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}