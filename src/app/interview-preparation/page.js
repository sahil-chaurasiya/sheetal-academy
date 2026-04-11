import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: JOB-SEEKER INTENT SUPPORT PAGE ───────────────────────
// Primary keyword  : "interview preparation in english uran"
// Secondary        : "mock interview practice uran", "job interview coaching uran",
//                    "english for job interview", "gd practice uran"
// Intent           : TRANSACTIONAL — job seekers wanting interview-specific coaching
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
//                    /communication-skills, /personality-development (related)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Interview Preparation in English | Mock Interview Coaching — Sheetal Academy Uran',
  description:
    'Prepare for job interviews in English at Sheetal Academy, Uran. Mock interviews, Group Discussion practice, HR English coaching, professional communication, and confidence training. Trusted since 1989.',
  keywords: [
    'interview preparation in english uran',
    'interview preparation uran',
    'mock interview practice uran',
    'job interview english coaching uran',
    'interview skills course uran',
    'english for job interview uran',
    'gd practice uran',
    'group discussion training uran',
    'hr interview english coaching',
    'interview preparation navi mumbai',
    'english interview coaching navi mumbai',
    'sheetal academy interview preparation',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/interview-preparation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Interview Preparation in English | Mock Interview Coaching — Sheetal Academy Uran',
    description:
      'Mock interviews, GD practice, HR English, and professional confidence training at Sheetal Academy, Uran. Ace your next interview.',
    url: 'https://sheetal-academy.vercel.app/interview-preparation',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Interview Preparation Uran' }],
  },
};

const whatWeCover = [
  {
    icon: '🎭',
    title: 'How to Give and Take Interviews',
    desc: 'Understand the structure of professional interviews — how to respond to HR questions, structure your answers with confidence, and leave a lasting impression on interviewers.',
  },
  {
    icon: '🎯',
    title: 'Mock Interview Practice',
    desc: 'Real scenario practice sessions in English — with detailed feedback on your language, tone, body language, pacing, and confidence level after every session.',
  },
  {
    icon: '💬',
    title: 'Group Discussion (GD) Practice',
    desc: 'Participate in structured GDs, learn to contribute meaningfully, handle interruptions, and emerge as a confident contributor — a skill critical for MNCs, banking, MBA, and PSU interviews.',
  },
  {
    icon: '📞',
    title: 'Telephone & HR Screening Practice',
    desc: 'Practice telephonic interviews, introduce yourself professionally, answer screening questions fluently, and handle unexpected questions with composure.',
  },
  {
    icon: '💼',
    title: 'Professional Corporate English',
    desc: 'Learn business-level English specifically used in corporate interviews — vocabulary, tone, professional expressions, and the ability to discuss your work experience fluently.',
  },
  {
    icon: '🤝',
    title: 'Confidence, Body Language & Presence',
    desc: 'Our Personality Development modules directly address interview-specific body language — posture, eye contact, handshakes, and the overall first impression that wins offers.',
  },
];

const interviewTypes = [
  'Campus placements and fresher interviews',
  'MNC and corporate job applications',
  'Banking and government sector interviews',
  'MBA entrance GDs and personal interviews',
  'BPO, call centre, and customer service roles',
  'Mid-career professional role changes',
  'Managerial and leadership position interviews',
];

const faqs = [
  {
    q: 'How does Sheetal Academy help with interview preparation in English?',
    a: 'Interview preparation at Sheetal Academy is built into the speaking practice programme. Students practise mock interviews as both interviewer and interviewee — in English — with feedback on language, tone, body language, and content. For dedicated interview coaching, individual sessions are scheduled around your target interview type and date.',
  },
  {
    q: 'Is there separate interview coaching or is it part of the English course?',
    a: 'Interview preparation is integrated into the English Speaking course, but can also be taken as a focused coaching module. Many students join specifically for pre-interview preparation — attending sessions for a short, intensive period before their interview date.',
  },
  {
    q: 'Does interview preparation at Sheetal Academy include Group Discussion practice?',
    a: 'Yes. Group Discussion is one of the 11 speaking practice types at Sheetal Academy. GD sessions are conducted with expert mentors from different professional backgrounds, simulating the real experience of a competitive GD panel.',
  },
];

export default function InterviewPreparation() {
  return (
    <SubPageLayout pageTitle="Interview Preparation in English">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Career-Ready English · Mock Interview · GD Practice · Uran
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Interview Preparation
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">in English — Uran</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            At <strong className="text-white">Sheetal Academy, Uran</strong>, interview preparation is not a separate add-on — it is woven into every stage of our English coaching programme. We teach you how to give and take interviews, speak confidently under pressure, handle HR questions fluently, and project the professional presence that wins offers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire Now
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              See English Classes in Uran →
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── WHAT WE COVER ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">What We Cover</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Comprehensive Interview Preparation at Sheetal Academy
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            Every element of interview success is addressed — language, confidence, structure, body language, and the ability to think on your feet in English.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {whatWeCover.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#f5d0d0] hover:shadow-lg hover:border-[#DC143C]/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm group-hover:text-[#DC143C] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERVIEW TYPES ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto lg:flex lg:gap-12 lg:items-start">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-[#B22222] mb-4">
              Which Interviews Does This Prepare You For?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Sheetal Academy&apos;s interview preparation covers every professional interview scenario — from fresher campus placements to experienced professional roles.
            </p>
            <ul className="space-y-3">
              {interviewTypes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#DC143C] flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-[#fdf5f5] rounded-2xl p-7 border border-[#f5d0d0]">
              <h3 className="font-bold text-[#B22222] text-lg mb-4">Why Sheetal Academy Produces Interview-Ready Students</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Most English classes teach grammar and vocabulary — and stop there. Sheetal Academy goes further. Our speaking practice programme includes <strong>11 types of oral exercises</strong>, of which mock interviews and GDs are key components. Students do not just learn English — they practice using it under the exact pressure of a real interview.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Combined with our <a href="/personality-development" className="text-[#DC143C] font-semibold underline">Personality Development</a> course — covering confidence, body language, and professional presence — Sheetal Academy students walk into interviews as complete candidates, not just English speakers.
              </p>
              <a
                href="/english-speaking-classes-uran"
                className="inline-block px-6 py-3 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition text-sm"
              >
                View English Classes in Uran — Full Programme →
              </a>
            </div>
          </div>
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

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ace Your Next Interview with Confidence</h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Join Sheetal Academy, Uran — and develop the English fluency, professional presence, and interview confidence that employers want. Individual coaching, no batch, 35+ years of proven results.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
