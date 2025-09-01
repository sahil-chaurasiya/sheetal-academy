'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import About from '../sections/About';
import Courses from '../sections/Courses';
import Contact from '../sections/Contact';
import Events from '../sections/Events';
import FAQs from '../sections/FAQs';
import CTA from '../sections/CTA';
import Resources from '../sections/Resources';
import Footer from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Loader delay
    return () => clearTimeout(timeout);
  }, []);

  // 👇 Handle hash scroll after loader is gone
  useEffect(() => {
    if (!loading && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [loading, pathname]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute w-80 h-80 bg-gradient-to-tr from-[#DC143C] via-[#B22222] to-[#FF2400] rounded-full blur-3xl opacity-20 animate-pulse" />

        {/* Spinner */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border-8 border-t-transparent border-r-transparent border-b-[#DC143C] border-l-[#8B0000] animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center text-[#8B0000] text-3xl font-bold font-cursive">
            SA
          </div>
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold text-[#8B0000] tracking-wide"
        >
          Loading <span className="text-[#DC143C]">Sheetal Academy</span>...
        </motion.p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28 lg:pt-10">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 relative bg-white min-h-[auto] lg:min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* LEFT: Brand Message */}
          <motion.div
            className="w-full lg:w-1/2 z-10 space-y-8"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block bg-[#DC143C] text-white px-5 py-1.5 rounded-full text-sm tracking-widest uppercase font-semibold shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              Speak Boldly. Lead Confidently.
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#B22222]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-[cursive] text-5xl md:text-7xl text-[#DC143C]">
                Redefining
              </span>{' '}
              <span className="text-black font-sans">English Fluency</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-light leading-relaxed text-gray-700 max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              At <span className="font-semibold text-[#B22222]">Sheetal Academy, Uran</span> – we
              don&apos;t just teach English. We build confident speakers, sharp thinkers, and future
              leaders.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#courses"
                className="relative inline-block px-6 py-3 font-semibold text-white bg-[#e34242] rounded-xl overflow-hidden transition-all duration-300 group hover:scale-105"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#DC143C] via-[#8B0000] to-[#DC143C] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Explore Courses
                </span>
              </a>

              <a
                href="#contact"
                className="text-[#B22222] underline underline-offset-4 decoration-2 hover:text-[#8B0000] font-medium text-base transition"
              >
                Talk to Us
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Hero Visual */}
          <div className="w-0 lg:w-1/2 hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute w-72 h-72 bg-[#FF2400] rounded-full blur-2xl opacity-30 z-0" />
              <img
                src="/hero-girl.png"
                alt="Confident Student"
                className="relative z-10 w-[300px] md:w-[400px] drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#DC143C] opacity-10 rounded-tl-full blur-2xl z-0" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#8B0000] opacity-10 rounded-br-full blur-2xl z-0" />
        </motion.section>

        {/* Other Sections */}
        {[About, Courses, Events, FAQs, Resources, CTA, Contact].map((Component, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Component />
          </motion.div>
        ))}
      </main>
      <Footer />
    </>
  );
}
