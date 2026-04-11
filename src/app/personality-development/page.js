import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: COURSE SUPPORT PAGE ──────────────────────────────────
// Primary keyword  : "personality development course in uran"
// Secondary        : "personality development classes uran", "soft skills training uran",
//                    "confidence building uran", "body language training uran"
// Intent           : TRANSACTIONAL — enrol in personality dev specifically
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
//                    /communication-skills (related support)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Personality Development Course in Uran | 15-Module Programme — Sheetal Academy',
  description:
    'Transform your personality with Sheetal Academy\'s 15-module Personality Development course in Uran. Covers voice & accent, body language, leadership, confidence, corporate communication, soft skills, and more.',
  keywords: [
    'personality development course in uran',
    'personality development classes uran',
    'personality development uran',
    'soft skills training uran',
    'confidence building course uran',
    'body language training uran',
    'leadership training uran',
    'voice accent training uran',
    'personality development navi mumbai',
    'soft skills course navi mumbai',
    'corporate communication uran',
    'sheetal academy personality development',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/personality-development' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Personality Development Course in Uran | 15-Module Programme — Sheetal Academy',
    description:
      '15 modules: voice training, body language, confidence, leadership, corporate communication, soft skills, and more. Individual coaching at Sheetal Academy Uran since 1989.',
    url: 'https://sheetal-academy.vercel.app/personality-development',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Personality Development Course Uran' }],
  },
};

const modules = [
  { num: '01', title: 'Business & Corporate Level Communication', desc: 'Master professional English communication for workplace and corporate settings — meetings, presentations, and client interaction.' },
  { num: '02', title: 'Voice & Accent Training', desc: 'Develop a clear, neutral professional accent and improve voice quality, tone, and modulation for maximum impact.' },
  { num: '03', title: 'Soft Skills', desc: 'Build interpersonal and professional soft skills — the invisible qualities that drive career success.' },
  { num: '04', title: 'Letter Writing', desc: 'Write formal and professional letters with clarity, correct structure, and appropriate tone.' },
  { num: '05', title: 'Drafting E-mails', desc: 'Compose clear, professional, and effective business emails that command attention and respect.' },
  { num: '06', title: 'Telephone Etiquettes', desc: 'Handle calls professionally — proper greetings, active listening, clear communication, and professional closings.' },
  { num: '07', title: 'Table Manners', desc: 'Learn professional dining etiquette for business lunches, client meetings, and social gatherings.' },
  { num: '08', title: 'Stress Management', desc: 'Practical techniques to stay calm, composed, and effective under pressure in professional and personal situations.' },
  { num: '09', title: 'Time Management', desc: 'Organise your time to maximise productivity, meet deadlines, and project reliability and professionalism.' },
  { num: '10', title: 'Leadership Skills', desc: 'Develop the communication, influence, and decision-making qualities of a true leader.' },
  { num: '11', title: 'Positive Thinking', desc: 'Cultivate a mindset that radiates confidence, attracts success, and enables you to handle challenges constructively.' },
  { num: '12', title: 'Stage & Crowd Holding Skills', desc: 'Learn to command a room, hold attention, and deliver speeches and presentations with authority and impact.' },
  { num: '13', title: 'Confidence Boosting', desc: 'Targeted individual sessions to eliminate hesitation, self-doubt, and speaking anxiety permanently.' },
  { num: '14', title: 'Body Language', desc: 'Understand and consciously improve your non-verbal communication — posture, eye contact, gestures, and first impressions.' },
  { num: '15', title: 'Motivating Sessions', desc: 'Inspiring sessions to keep you energised, goal-oriented, and consistently moving toward your personal and professional aspirations.' },
];

const faqs = [
  {
    q: 'What is included in the Personality Development course at Sheetal Academy?',
    a: 'The course covers 15 comprehensive modules — from voice training, body language, and confidence building to corporate communication, leadership, soft skills, email writing, and motivating sessions. It is a complete personal transformation programme.',
  },
  {
    q: 'Can I take the Personality Development course separately from the English course?',
    a: 'Yes. The Personality Development course can be taken as a standalone programme. However, many students choose to combine it with the English Speaking course for maximum benefit — as strong English and a strong personality together create a truly competitive professional profile.',
  },
  {
    q: 'Is the Personality Development course available online?',
    a: 'Yes. Like all Sheetal Academy courses, the Personality Development programme is available both at our Uran branch and online, with individual coaching and doorstep course material delivery.',
  },
];

export default function PersonalityDevelopment() {
  return (
    <SubPageLayout pageTitle="Personality Development Course">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-[#DC143C]/15 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ 15-Module Programme · Individual Coaching · Uran
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Personality{' '}
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Development</span>
            <br className="hidden md:block" />
            <span className="text-white/70 font-light text-3xl md:text-5xl">Course in Uran</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            At <strong className="text-white">Sheetal Academy, Uran</strong>, our Personality Development programme addresses every dimension of how you present yourself to the world. With{' '}
            <strong className="text-[#DC143C]">15 individually taught modules</strong> — voice training, body language, confidence, leadership, corporate communication, and more — we help you make a lasting impression in every situation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire About This Course
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              View English Classes in Uran
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── 15 MODULES ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Complete Programme</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-3">
            15 Modules of Personal Excellence
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            Each module is taught individually — your teacher works with you on your specific gaps, not a generic group syllabus. This is why Sheetal Academy students transform faster than those attending group personality development courses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => (
              <div
                key={m.num}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#f5d0d0] hover:shadow-lg hover:border-[#DC143C]/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="text-4xl font-black text-[#DC143C]/15 mb-2 group-hover:text-[#DC143C]/25 transition-colors">{m.num}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-[#DC143C] transition-colors">{m.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY COMBINE WITH ENGLISH ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-6">
            Why Combine Personality Development with English Speaking Classes?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Many students focus only on spoken English and neglect how they carry themselves. Others improve their personality but cannot communicate in English. Sheetal Academy is unique in offering both — and the combination is what truly transforms a person&apos;s professional and social life.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            When you speak fluent English <em>and</em> carry yourself with confidence, professional body language, and leadership presence — you become the person every employer, client, and social circle notices. That is the complete transformation Sheetal Academy delivers.
          </p>
          <a
            href="/english-speaking-classes-uran"
            className="inline-block px-7 py-3 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition text-sm"
          >
            See Our English Speaking Classes in Uran →
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B22222] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
                <h3 className="font-bold text-gray-800 mb-2 text-sm">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-bold text-[#B22222] mb-4">Also Explore</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/english-speaking-classes-uran', label: 'English Speaking Classes in Uran' },
              { href: '/communication-skills', label: 'Communication Skills Training' },
              { href: '/interview-preparation', label: 'Interview Preparation' },
              { href: '/public-speaking-guide', label: 'Public Speaking Course' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 border border-[#DC143C]/30 text-[#DC143C] text-sm font-medium rounded-full hover:bg-[#DC143C] hover:text-white transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transform Your Personality in Uran</h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Enrol in Sheetal Academy&apos;s Personality Development course in Uran. Individual coaching across 15 powerful modules — building the complete, confident professional that you deserve to be.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
