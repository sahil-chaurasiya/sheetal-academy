'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/#hero');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const navRefs = useRef([]);
  const router = useRouter();

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Courses', href: '/#courses' },
    { label: 'Events', href: '/#events' },
    { label: 'FAQs', href: '/#faqs' },
    {
      label: 'Resources',
      href: '/#resources',
      dropdown: [
        { label: 'Grammar Essentials (PDF)', href: '/resources/grammar-essentials.pdf' },
        { label: 'Top 50 Spoken English Phrases', href: '/resources/english-phrases.pdf' },
        { label: 'Public Speaking Tips', href: 'https://www.youtube.com/watch?v=sample-public-speaking' },
        { label: 'Vocabulary Builder (PDF)', href: '/resources/vocabulary-builder.pdf' }
      ]
    },
    { label: 'Contact', href: '/#contact' },
    { label: 'Careers', href: '/careers' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      const sections = ['/#hero', '/#about', '/#courses', '/#events', '/#faqs', '/#resources', '/#contact'];
      let current = '/#hero';

      for (let i = 0; i < sections.length; i++) {
        const selector = sections[i].replace('/', '');
        const section = document.querySelector(selector);
        if (section && section.offsetTop <= scrollY) {
          current = sections[i];
        }
      }
      setActiveSection(current);

      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        const startFade = aboutSection.offsetTop - window.innerHeight / 2;
        const endFade = aboutSection.offsetTop + aboutSection.offsetHeight / 2;
        const scrollTop = window.scrollY;
        const progress = Math.min(Math.max((scrollTop - startFade) / (endFade - startFade), 0), 1);
        setScrollProgress(progress);
      }
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        router.push('/admin-login');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  const isExternal = (href) => href.startsWith('/');

  const backgroundColor = `rgba(
    ${Math.round(46 + (255 - 46) * scrollProgress)},
    ${Math.round(2 + (255 - 2) * scrollProgress)},
    ${Math.round(2 + (255 - 2) * scrollProgress)},
    1
  )`;

  const textColor = scrollProgress > 0.5 ? 'text-gray-800' : 'text-gray-100';
  const academyTextColor = scrollProgress > 0.5 ? 'text-gray-800' : 'text-gray-200';

  const dropdownBgColor = `rgba(
    ${Math.round(30 + (245 - 30) * scrollProgress)},
    ${Math.round(30 + (245 - 30) * scrollProgress)},
    ${Math.round(30 + (245 - 30) * scrollProgress)},
    0.95
  )`;

  const dropdownTextColor = scrollProgress > 0.5 ? 'text-gray-900' : 'text-gray-100';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-200 ease-out"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Sheetal Academy Logo"
            width={80}
            height={100}
            priority
            className="rounded"
          />
          <div className="flex flex-col leading-none">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-[crimson] text-xl font-bold tracking-wide"
            >
              SHEETAL
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className={`text-sm tracking-[0.3em] transition-colors duration-500 ${academyTextColor}`}
            >
              ACADEMY
            </motion.span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-6 text-sm font-medium relative transition-colors duration-500 ${textColor}`}>
          {hoveredIndex !== null && (
            <motion.div
              className="absolute h-8 rounded-md bg-gray-200 z-0"
              layoutId="highlight"
              initial={false}
              animate={{
                left: navRefs.current[hoveredIndex]?.offsetLeft || 0,
                width: navRefs.current[hoveredIndex]?.offsetWidth || 0,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;
            const isDropdown = !!link.dropdown;

            const handleMouseEnter = () => {
              clearTimeout(dropdownTimeoutRef.current);
              setHoveredIndex(index);
              if (isDropdown) setDropdownOpenIndex(index);
            };

            const handleMouseLeave = () => {
              dropdownTimeoutRef.current = setTimeout(() => {
                setHoveredIndex(null);
                if (isDropdown) setDropdownOpenIndex(null);
              }, 150);
            };

            return (
              <div
                key={link.label}
                className="relative"
                ref={(el) => (navRefs.current[index] = el)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`relative px-3 py-1 rounded-md transition-colors duration-500 z-10 ${
                    isActive || dropdownOpenIndex === index
                      ? 'text-[crimson] font-semibold'
                      : `${textColor} hover:text-[crimson]`
                  }`}
                >
                  {link.label}
                  {isDropdown && <span className="ml-1">▼</span>}
                </Link>

                {isDropdown && dropdownOpenIndex === index && (
                  <div
                    style={{ backgroundColor: dropdownBgColor }}
                    className={`absolute left-0 top-full mt-3 w-56 rounded-md shadow-lg border-t-4 border-[crimson] z-20 overflow-hidden transition-all duration-300 ${dropdownTextColor}`}
                  >
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className="block px-4 py-3 text-sm hover:bg-[crimson] hover:text-white transition-colors duration-300"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-8 h-8 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-1 bg-[crimson] rounded transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-3' : ''}`} />
          <span className={`block w-8 h-1 bg-[crimson] rounded transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-8 h-1 bg-[crimson] rounded transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-3' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ backgroundColor }}
          className={`md:hidden px-6 pb-4 space-y-3 font-medium rounded-b-xl shadow-lg transition-colors duration-300 ${
            scrollProgress > 0.5 ? 'text-gray-800' : 'text-gray-100'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            const baseColor = scrollProgress > 0.5 ? 'text-gray-800' : 'text-gray-100';

            if (link.dropdown) {
              return (
                <div key={link.label} className="space-y-1">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`w-full text-left transition-all duration-300 hover:text-[crimson] ${
                      isActive ? 'text-[crimson] font-semibold' : baseColor
                    }`}
                  >
                    {link.label} ▼
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => setIsOpen(false)}
                          className="block transition-all duration-300 hover:text-[crimson] text-sm"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return isExternal(link.href) ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block transition-all duration-300 hover:text-[crimson] ${
                  isActive ? 'text-[crimson] font-semibold' : baseColor
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block transition-all duration-300 hover:text-[crimson] ${
                  isActive ? 'text-[crimson] font-semibold' : baseColor
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.header>
  );
}
