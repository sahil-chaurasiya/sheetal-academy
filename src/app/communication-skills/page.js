import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: PROFESSIONAL INTENT SUPPORT PAGE ─────────────────────
// Primary keyword  : "communication skills course uran"
// Secondary        : "professional english communication uran",
//                    "corporate english training uran", "business english uran"
// Intent           : TRANSACTIONAL — professionals seeking career English skills
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
//                    /interview-preparation, /personality-development (related)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Communication Skills Course in Uran | Professional English — Sheetal Academy',
  description:
    'Build powerful professional communication skills at Sheetal Academy, Uran. Business English, public speaking, GD, debate, email writing, telephone etiquette, and more. Trusted corporate communication training since 1989.',
  keywords: [
    'communication skills course uran',
    'communication skills training uran',
    'professional english communication uran',
    'corporate english training uran',
    'business english course uran',
    'english communication navi mumbai',
    'professional communication course navi mumbai',
    'corporate communication training uran',
    'business communication uran',
    'english for professionals uran',
    'workplace english uran',
    'sheetal academy communication skills',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/communication-skills' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Communication Skills Course in Uran | Professional English — Sheetal Academy',
    description:
      'Corporate English, public speaking, GD, business communication, and professional etiquette at Sheetal Academy Uran. Individual coaching since 1989.',
    url: 'https://sheetal-academy.vercel.app/communication-skills',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Communication Skills Training Uran' }],
  },
};

const skills = [
  { icon: '💼', title: 'Business & Corporate English', desc: 'Speak with authority in corporate environments — client calls, team meetings, boardroom presentations, and executive communication.' },
  { icon: '🗣️', title: 'Public Speaking', desc: 'Address audiences confidently through Talk Shows and Stage Speaking sessions with real audiences and expert feedback.' },
  { icon: '💬', title: 'Group Discussion (GD)', desc: 'Articulate your views, listen actively, and lead GDs — a critical skill for MBA admissions, job interviews, and corporate teams.' },
  { icon: '⚡', title: 'Debate & Argumentation', desc: 'Structure arguments, counter opposing viewpoints, and speak forcefully — building mental agility and communication confidence.' },
  { icon: '📧', title: 'Email & Letter Writing', desc: 'Write professional emails and formal letters that are clear, appropriately toned, and impactful in corporate contexts.' },
  { icon: '📞', title: 'Telephone Etiquette', desc: 'Handle professional and business calls with proper greetings, active listening, clear communication, and polished closings.' },
  { icon: '📰', title: 'Newspaper Reading', desc: 'Build vocabulary, topical awareness, and comprehension through structured newspaper reading — ideal for GDs and interviews.' },
  { icon: '🤝', title: 'Professional Body Language', desc: 'Align your non-verbal communication with your words — posture, eye contact, handshakes, and corporate presence.' },
  { icon: '🎙️', title: 'American Accent & Call Centre', desc: 'Specialised training for BPO and call centre professionals — neutral accent, clarity, and professional phone communication.' },
];

const whoNeedsThis = [
  { profile: 'Working Professionals', need: 'Communicate confidently in English at the workplace, in meetings, and with clients.' },
  { profile: 'Job Seekers', need: 'Stand out in interviews, GDs, and professional settings with polished English communication.' },
  { profile: 'Business Owners', need: 'Build authority and trust with clients, partners, and stakeholders through clear business English.' },
  { profile: 'MBA / Entrance Aspirants', need: 'Master Group Discussions and personal interviews for competitive entrance processes.' },
  { profile: 'Call Centre Aspirants', need: 'Develop the accent, tone, and telephone communication skills demanded by BPO employers.' },
  { profile: 'Recent Graduates', need: 'Bridge the gap between academic English and workplace communication expected by employers.' },
];

export default function CommunicationSkills() {
  return (
    <SubPageLayout pageTitle="Communication Skills Training">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Professional English · Corporate Communication · Uran
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Communication Skills
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Training in Uran</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            At <strong className="text-white">Sheetal Academy, Uran</strong>, communication skills training goes beyond basic spoken English. We develop your ability to communicate with authority in professional settings — business meetings, GDs, interviews, public speaking, and corporate correspondence — through our individual-coaching model since 1989.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire Now
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              See All English Classes in Uran
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── SKILLS GRID ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">What We Teach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Complete Communication Skills Programme
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            Nine core communication competencies — each taught individually, each focused on giving you a real edge in professional and social settings.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#f5d0d0] hover:shadow-lg hover:border-[#DC143C]/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-[#DC143C] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO NEEDS THIS ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Who Needs Professional Communication Skills Training?
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl text-sm">
            Communication skills training at Sheetal Academy is not just for people who cannot speak English — it is for anyone who wants to communicate with more authority, clarity, and professional impact.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {whoNeedsThis.map((item, i) => (
              <div key={i} className="bg-[#fdf5f5] rounded-2xl p-6 border border-[#f5d0d0]">
                <h3 className="font-bold text-[#B22222] text-sm mb-2">{item.profile}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINK TO PRIMARY + RELATED ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-16"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Explore Related Programmes</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/english-speaking-classes-uran', label: 'English Speaking Classes in Uran', desc: 'Our primary programme — the foundation for all communication skills.' },
              { href: '/interview-preparation', label: 'Interview Preparation', desc: 'Apply your communication skills in real mock interview practice.' },
              { href: '/personality-development', label: 'Personality Development', desc: '15 modules covering body language, confidence, leadership, and more.' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#DC143C]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="font-bold text-white text-sm mb-1">{link.label}</div>
                <div className="text-white/50 text-xs">{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#B22222] mb-6">What Professionals From Uran Say</h2>
          <div className="bg-white rounded-2xl p-7 border border-[#f5d0d0]">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(s => (<svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic mb-3">&ldquo;I was a manager at a company in the JNPT area but could never communicate confidently with senior clients in English. Sheetal Academy&apos;s corporate communication training changed that completely. Email writing, telephone etiquette, business English — everything covered individually. My promotion followed within 6 months.&rdquo;</p>
            <div className="font-bold text-gray-800 text-sm">Nilesh A. — Operations Manager, JNPT Area</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Build the Communication Skills That Open Doors in Uran
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Join Sheetal Academy&apos;s communication skills training in Uran — individual coaching, corporate-ready curriculum, and a 35-year legacy of transforming professionals across Navi Mumbai and beyond.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
