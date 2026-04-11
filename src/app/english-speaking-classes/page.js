import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: BROAD INTENT SUPPORT PAGE ────────────────────────────
// Primary keyword  : "spoken english classes for beginners"
// Secondary        : "english speaking course", "learn spoken english",
//                    "english fluency course", "spoken english for professionals"
// Intent           : INFORMATIONAL-to-TRANSACTIONAL — educate then convert
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary money page)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Spoken English Course in Uran | Beginner to Fluent — Sheetal Academy',
  description:
    "Whether you're a complete beginner or want to refine your fluency, Sheetal Academy's structured spoken English course takes you from zero to confident — with individual coaching, no batch system, and 100% guarantee.",
  keywords: [
    'spoken english classes for beginners',
    'english speaking course',
    'learn spoken english',
    'english fluency course',
    'spoken english for beginners',
    'spoken english for professionals',
    'english speaking course for students',
    'improve spoken english',
    'spoken english training',
    'english communication course',
    'english course for job seekers',
    'english fluency training',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/english-speaking-classes' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Spoken English Course in Uran | Beginner to Fluent — Sheetal Academy',
    description:
      "From beginner grammar to confident public speaking — Sheetal Academy's individual-attention spoken English course delivers real fluency with a 100% guarantee.",
    url: 'https://sheetal-academy.vercel.app/english-speaking-classes',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Spoken English Classes' }],
  },
};

const levels = [
  {
    level: 'Beginner',
    label: 'Starting from Zero',
    icon: '🌱',
    desc: 'No prior English knowledge needed. We begin with alphabets, spelling, and basic sentence construction. Grammar is taught practically — not as theory — so you can speak from day one.',
    points: ['Alphabets, spelling, and word formation', 'Basic English grammar — tenses, modals', 'Simple sentence construction in English', 'Foundational vocabulary with pronunciation'],
  },
  {
    level: 'Intermediate',
    label: 'Building Fluency',
    icon: '📈',
    desc: 'For students who know grammar but struggle to speak. Our Spoken English Book and Animated Vocabulary programme builds sentence fluency through frequently used expressions and modern English.',
    points: ['Frequently used English sentences', 'Animated vocabulary — word meanings in mother tongue', 'Modern English expressions and pronunciation', 'Clarification of commonly confused words'],
  },
  {
    level: 'Advanced',
    label: 'Achieving Mastery',
    icon: '🏆',
    desc: 'For those ready to master Smart English and develop a powerful speaking presence. Idioms, proverbs, and extensive speaking practice with real-world scenarios and expert mentors.',
    points: ['Idioms, proverbs, and smart phrases', 'Group Discussion and Debate practice', 'Interview practice and stage speaking', 'American accent and professional communication'],
  },
];

const outcomes = [
  { icon: '🗣️', label: 'Speak fluently in daily conversations' },
  { icon: '💼', label: 'Communicate confidently at work and in interviews' },
  { icon: '🎤', label: 'Present and speak publicly without fear' },
  { icon: '📰', label: 'Read and comprehend English newspapers and media' },
  { icon: '🤝', label: 'Handle group discussions and debates effectively' },
  { icon: '🎓', label: 'Earn a Certificate of Excellence on completion' },
];

export default function EnglishSpeakingClasses() {
  return (
    <SubPageLayout pageTitle="Spoken English Classes — All Levels">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Beginner to Advanced · Individual Coaching · Since 1989
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Spoken English Classes
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">for Every Level</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-7">
            Whether you are starting from scratch or already know grammar but cannot speak — <strong className="text-white">Sheetal Academy&apos;s spoken English course</strong> meets you exactly at your current level and takes you all the way to confident, fluent English. No batches. Individual coaching. 100% guarantee.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/english-speaking-classes-uran" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              View English Classes in Uran →
            </a>
            <a href="/#contact" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── LEVEL-BASED LEARNING ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Level-Wise Programme</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            A Spoken English Course Designed for Your Starting Point
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            At Sheetal Academy, you do not join a batch — you join a programme built around you. The course adapts to your current English level, so whether you are a complete beginner or an intermediate learner, you progress faster than in any group class.
          </p>
          <div className="space-y-6">
            {levels.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-[#f5d0d0] border-l-4 border-l-[#DC143C] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{l.icon}</span>
                  <div>
                    <div className="text-xs text-[#DC143C] font-bold tracking-widest uppercase">{l.level}</div>
                    <h3 className="text-xl font-bold text-gray-800">{l.label}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{l.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {l.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-xs">
                      <span className="w-4 h-4 rounded-full bg-[#DC143C]/15 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-[#DC143C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4 text-center">
            What You Will Achieve After This Spoken English Course
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto text-sm">
            These are not vague promises — they are the specific, measurable outcomes our students achieve through the Sheetal Academy programme.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#fdf5f5] rounded-xl p-5 border border-[#f5d0d0]">
                <span className="text-3xl">{o.icon}</span>
                <span className="text-gray-700 text-sm font-medium">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PROGRAMME + PRIMARY LINK ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Sheetal Academy — Uran&apos;s Spoken English Institute Since 1989
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Sheetal Academy is located in Uran, Navi Mumbai. For over 35 years, it has been the most trusted spoken English institute in the region — serving students from Uran, Panvel, Belapur, Nerul, and across Maharashtra through both offline and online coaching.
            </p>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Our individual-attention model means your teacher works only with you — diagnosing your specific problems and fast-tracking your progress in ways a group class never can.
            </p>
            <a
              href="/english-speaking-classes-uran"
              className="inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg"
            >
              See English Classes in Uran — Full Details →
            </a>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              { num: '35+', label: 'Years of Excellence' },
              { num: '1:1', label: 'Teacher–Student Ratio' },
              { num: '11', label: 'Speaking Practice Types' },
              { num: '100%', label: 'Success Guarantee' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-[#DC143C] mb-1">{stat.num}</div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-E-A-T PROOF + LOCAL SECTION ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B22222] mb-6">Why Thousands in Uran & Navi Mumbai Choose Sheetal Academy</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
              <div className="text-3xl font-black text-[#DC143C]/20 mb-2">35+</div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">Years of Proven Results Since 1989</h3>
              <p className="text-gray-500 text-xs leading-relaxed">No other English speaking institute in Uran, Panvel, or Navi Mumbai has operated continuously since 1989 with the same individual-attention model. That consistency is the proof.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
              <div className="text-3xl font-black text-[#DC143C]/20 mb-2">1:1</div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">Teacher-to-Student Ratio — Every Session</h3>
              <p className="text-gray-500 text-xs leading-relaxed">In every group class in the region, your progress depends on the group. At Sheetal Academy, your progress depends only on you — because your teacher is 100% focused on you.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
              <div className="text-3xl font-black text-[#DC143C]/20 mb-2">11</div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">Types of Speaking Practice</h3>
              <p className="text-gray-500 text-xs leading-relaxed">GD, Debate, Interview Practice, Stage Speaking, Talk Shows, Newspaper Reading, American Accent — no other spoken English course in Uran or Navi Mumbai offers this range.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
              <div className="text-3xl font-black text-[#DC143C]/20 mb-2">4–70</div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">Age Range — No Age Bar</h3>
              <p className="text-gray-500 text-xs leading-relaxed">School children, college students, working professionals, homemakers, and retired adults all study at Sheetal Academy. The individual teaching model adapts to every age and background.</p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 border border-[#f5d0d0]">
            <h3 className="font-bold text-[#B22222] text-sm mb-3">Looking for a Spoken English Course Near You?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Sheetal Academy is located on Kamtha Road, Uran — accessible from Uran town, Panvel, New Panvel, Belapur, Nerul, and the JNPT corridor. For students outside commuting distance, the same individual coaching is available through our <a href="/online-english-course" className="text-[#DC143C] font-semibold underline">online English course</a>.</p>
            <a href="/english-speaking-classes-uran" className="inline-block px-6 py-2.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition text-sm">
              See Spoken English Classes in Uran — Full Details →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Ready to Start Speaking English Fluently?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Enrol in Sheetal Academy&apos;s spoken English course in Uran — the most trusted individual-coaching English institute in Navi Mumbai and Raigad district since 1989.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl">
              Enquire Now →
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-4 border border-[#DC143C] text-[#DC143C] font-bold rounded-xl hover:bg-[#DC143C]/5 transition-all duration-300">
              View Uran Campus Details
            </a>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}