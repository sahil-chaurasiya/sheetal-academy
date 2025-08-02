'use client';

import { motion } from 'framer-motion';
import { Instagram, PhoneCall, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a0e0e] text-white pt-16 pb-8 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Logo & Tagline */}
        <div>
          <img
            src="/logo.jpg"
            alt="Sheetal Academy Uran"
            className="w-32 h-auto mb-4 rounded shadow-md"
          />
          <p className="text-sm text-[#ccc]">
            <span className="font-semibold text-white">Sheetal Academy, Uran</span><br />
            Institute of English Speaking — Grow your English & Present Confidently.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#ff3c38]">Contact</h3>
          <ul className="space-y-3 text-sm text-[#ddd]">
            <li className="flex items-center gap-2">
              <PhoneCall size={18} className="text-[#ff3c38]" />
              <a href="tel:+919967286368" className="hover:text-white transition">+91 99672 86368</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-[#ff3c38]" />
              Uran, Navi Mumbai – 400702
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} className="text-[#ff3c38]" />
              <a
                href="https://instagram.com/sheetalacademyuran"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                @sheetalacademyuran
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#ff3c38]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#ddd]">
            <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="#courses" className="hover:text-white transition">Courses</Link></li>
            <li><Link href="#events" className="hover:text-white transition">Events</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="mt-14 text-center text-xs text-gray-400 space-y-1">
        <p>&copy; {new Date().getFullYear()} Sheetal Academy, Uran. All rights reserved.</p>
        <p className="italic text-[11px] text-gray-500">
          Website developed by{' '}
          <a
            href="https://portfolio-next-sahil-s-projects-6c199edc.vercel.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition"
          >
            Sahil Chaurasiya
          </a>. For technical issues, contact via portfolio.
        </p>
      </div>
    </footer>
  );
}
