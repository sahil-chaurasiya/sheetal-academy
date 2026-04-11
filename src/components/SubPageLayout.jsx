'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

/**
 * Shared wrapper for all sub-pages (landing pages).
 * Adds the Header, a breadcrumb/back bar, the page content, and the Footer.
 *
 * Props:
 *   children   — the page content
 *   pageTitle  — shown in the breadcrumb  (e.g. "Personality Development")
 */
export default function SubPageLayout({ children, pageTitle }) {
  return (
    <>
      <Header />

      {/* ── Breadcrumb / Back bar ─────────────────────────── */}
      <nav
        className="fixed top-[64px] left-0 w-full z-40 border-b border-[#DC143C]/20 backdrop-blur-md"
        style={{ background: 'rgba(26,8,8,0.92)' }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-20 h-10 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/60 hover:text-[#DC143C] transition-colors duration-200 text-xs font-medium group"
          >
            <ArrowLeft
              size={13}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Home
          </Link>
          <span className="text-white/25 text-xs">›</span>
          <span className="text-white/80 text-xs font-medium truncate">{pageTitle}</span>
        </div>
      </nav>

      {/* Extra top padding to clear fixed Header + breadcrumb bar */}
      <main className="pt-[104px]">
        {children}
      </main>

      <Footer />
    </>
  );
}
