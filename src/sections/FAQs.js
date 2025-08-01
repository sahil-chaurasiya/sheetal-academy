'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What courses are offered at Sheetal Academy, Uran?",
    answer: "We offer Spoken English, Personality Development, Corporate Training, and Advanced English Fluency Programs."
  },
  {
    question: "What are the timings for classes?",
    answer: "We are open from 8 AM to 10 PM. You can choose a convenient batch that fits your schedule."
  },
  {
    question: "Do you provide demo sessions?",
    answer: "Yes, we offer free demo sessions so you can experience the class before enrolling."
  },
  {
    question: "Do you offer certificates?",
    answer: "Yes, students receive a certificate upon successful course completion."
  },
  {
    question: "Are the classes online or offline?",
    answer: "We currently offer offline classes at our Uran center to ensure personal attention."
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-20 px-6 lg:px-20 text-white"
      style={{
        background: 'linear-gradient(to right bottom, rgb(43, 6, 5), rgb(16, 5, 5))',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-red-700 bg-[#2b0605]/50 rounded-xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 hover:bg-[#3a0c0b] transition-colors duration-300 focus:outline-none"
              >
                <h3 className="text-lg font-semibold flex justify-between items-center text-white">
                  {faq.question}
                  <span>{openIndex === index ? '−' : '+'}</span>
                </h3>
              </button>
              {openIndex === index && (
                <div className="px-6 pt-2 pb-4 text-sm text-red-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
