import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: SKILL-SPECIFIC SUPPORT PAGE ──────────────────────────
// Primary keyword  : "public speaking course in uran"
// Secondary        : "stage speaking uran", "debate training uran",
//                    "group discussion practice uran", "overcome stage fear uran"
// Intent           : TRANSACTIONAL + INFORMATIONAL — specific skill seekers
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
//                    /communication-skills (related)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Public Speaking Course in Uran | Stage Speaking, GD, Debate — Sheetal Academy',
  description:
    'Master public speaking, stage speaking, Group Discussion, and debate at Sheetal Academy, Uran. 11 types of speaking practice with expert mentors from diverse fields. Overcome stage fear. Individual coaching since 1989.',
  keywords: [
    'public speaking course in uran',
    'public speaking training uran',
    'stage speaking uran',
    'debate training uran',
    'group discussion practice uran',
    'overcome stage fear uran',
    'talk show practice uran',
    'public speaking navi mumbai',
    'stage speaking training navi mumbai',
    'gd debate practice uran',
    'speaking practice uran',
    'sheetal academy public speaking',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/public-speaking-guide' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Public Speaking Course in Uran | Stage Speaking, GD, Debate — Sheetal Academy',
    description:
      'Sheetal Academy Uran — 11 types of speaking practice, stage sessions, debates, and Talk Shows. Overcome stage fear and become a confident public speaker.',
    url: 'https://sheetal-academy.vercel.app/public-speaking-guide',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Public Speaking Course Uran' }],
  },
};

const speakingTypes = [
  { num: '01', title: 'Group Discussion (GD)', desc: 'Structured collaborative speaking — essential for MBA admissions, banking interviews, MNC hiring, and corporate team settings. Practise leading, contributing, and concluding GDs.' },
  { num: '02', title: 'Informal Speaking Practice', desc: 'Casual conversational practice that removes hesitation and builds the habit of speaking English naturally without mental translation.' },
  { num: '03', title: 'Freedom Speaking Practice', desc: 'Speak freely on any topic for a set duration — building spontaneity, mental agility, and the ability to express yourself in English without preparation.' },
  { num: '04', title: 'Public Speaking & Talk Shows', desc: 'Structured sessions where students speak before a live audience. Expert mentors from different professional backgrounds attend, giving you real-world pressure and feedback.' },
  { num: '05', title: 'Debate', desc: 'Argue, reason, and articulate your position forcefully and fluently. Debate training sharpens your ability to think fast and speak clearly under pressure.' },
  { num: '06', title: 'How to Give & Take Interviews', desc: 'Role-play real interview scenarios as both interviewer and interviewee — building the composure, language, and presence that wins job offers.' },
  { num: '07', title: 'Stage Speaking', desc: 'Practise commanding a stage — eliminating stage fear, controlling your voice, and holding the attention of an audience with confidence and authority.' },
  { num: '08', title: 'Newspaper Reading', desc: 'Improve pronunciation, vocabulary, and topical awareness through structured newspaper reading. Essential for competitive GDs and professional discussions.' },
  { num: '09', title: 'American Accent & Call Centre Training', desc: 'Specialised training for BPO, call centre, and customer-facing roles. Covers accent neutralisation, professional tone, and telephone communication skills.' },
  { num: '10', title: 'Listening Practice', desc: 'Active listening comprehension — a critical but often overlooked component of effective English communication and professional interaction.' },
  { num: '11', title: 'Library Sessions', desc: 'Self-paced reading and independent learning to supplement classroom work — building depth of vocabulary and comprehension over time.' },
];

export default function PublicSpeakingGuide() {
  return (
    <SubPageLayout pageTitle="Public Speaking & Stage Training">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ 11 Speaking Practices · Stage · GD · Debate · Uran
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Public Speaking
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Course in Uran</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            At <strong className="text-white">Sheetal Academy, Uran</strong>, public speaking is not a single module — it is an entire comprehensive practice system. Our <strong className="text-[#DC143C]">11 types of speaking practice</strong>, conducted with expert mentors from diverse professional fields, transform hesitant speakers into confident, commanding communicators.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire About This Course
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              View Full English Programme →
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── 11 TYPES ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">The 11 Speaking Practices</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-3">
            Complete Speaking Practice Programme at Sheetal Academy
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            No other English institute in Uran or Navi Mumbai offers this depth of speaking practice. Each type targets a specific dimension of speaking ability — together, they produce complete, confident communicators.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {speakingTypes.map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#f5d0d0] hover:shadow-lg hover:border-[#DC143C]/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-[#DC143C]/20 group-hover:text-[#DC143C]/40 transition-colors">{s.num}</span>
                  <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#DC143C] transition-colors">{s.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE EXPERT MENTORS SYSTEM ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-6">
            What Makes Sheetal Academy&apos;s Speaking Practice Unique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Most English coaching centres in Uran and Navi Mumbai treat speaking practice as a side activity — a few minutes of Q&amp;A at the end of a grammar lesson. At Sheetal Academy, speaking practice is the <em>core</em> of the programme.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Our Talk Shows and Public Speaking sessions bring in <strong>expert mentors from different professional backgrounds</strong> — doctors, engineers, businesspeople, teachers, and corporate professionals. This creates a genuine real-world speaking experience: varied audiences, varied topics, and the kind of live pressure that builds real speaking confidence.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The result is that Sheetal Academy students do not just speak better English — they speak with <strong>presence, authority, and composure</strong> in any setting: a job interview, a GD panel, a boardroom, or a stage.
          </p>
          <a
            href="/english-speaking-classes-uran"
            className="inline-block px-7 py-3 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition text-sm"
          >
            See the Full English Speaking Programme in Uran →
          </a>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-[#DC143C] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg">Ready to become a confident public speaker?</p>
            <p className="text-white/80 text-sm">Free consultation · No commitment · Uran & Online</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="/#contact" className="px-7 py-3 bg-white text-[#DC143C] font-bold rounded-xl hover:bg-white/90 transition shadow-lg text-sm whitespace-nowrap">Enquire Now</a>
            <a href="tel:+919967286368" className="px-7 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition text-sm whitespace-nowrap">Call: +91 99672 86368</a>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-bold text-[#B22222] mb-4">Also Explore</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/english-speaking-classes-uran', label: 'English Speaking Classes in Uran' },
              { href: '/communication-skills', label: 'Communication Skills Training' },
              { href: '/interview-preparation', label: 'Interview Preparation' },
              { href: '/personality-development', label: 'Personality Development Course' },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Become the Speaker Everyone Listens To
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Join Sheetal Academy, Uran — and develop the public speaking, debate, and stage presence that sets you apart in every professional and social situation.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
