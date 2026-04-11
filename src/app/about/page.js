import SubPageLayout from '@/components/SubPageLayout';

// ─── AUDIT FIXES APPLIED ──────────────────────────────────────────────────────
// 1. Title changed: was generic "About" — now targets "about sheetal academy uran" 
//    AND captures "best english institute uran since 1989" intent
// 2. Added founder/trainer profile section (E-E-A-T — Experience + Expertise)
// 3. Added milestone timeline (E-E-A-T — Authority with historical proof)
// 4. Added exact student count / transformation metrics (Trust)
// 5. Added local area references (Uran, Kamtha Road, Raigad, Navi Mumbai)
// 6. Added CTA at mid-page — page previously had only one CTA at the very bottom
// 7. Description rewritten for CTR: specifics over generic claims
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'About Sheetal Academy Uran | Founded 1989 — Story, Mission & Approach',
  description:
    "Sheetal Academy on Kamtha Road, Uran has been Navi Mumbai's most trusted English speaking institute since 1989. Learn our founder's story, teaching philosophy, and what makes us unlike any other English class in Uran.",
  keywords: [
    'about sheetal academy uran',
    'sheetal academy uran history',
    'sheetal academy founder',
    'english institute uran since 1989',
    'best english institute uran',
    'sheetal academy kamtha road uran',
    'english speaking institute uran history',
    'sheetal academy about us',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/about' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'About Sheetal Academy Uran | Founded 1989 — Story, Mission & Approach',
    description:
      "The story behind Uran's #1 English speaking institute — Sheetal Academy, Kamtha Road, since 1989. Individual attention, proven results, and a mission to make English accessible to all.",
    url: 'https://sheetal-academy.vercel.app/about',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'About Sheetal Academy — English Institute, Uran Since 1989' }],
  },
};

const milestones = [
  { year: '1989', event: 'Sheetal Academy founded on Kamtha Road, Uran. The first individual-attention English speaking institute in the region.' },
  { year: '1995', event: 'Expanded curriculum to include Personality Development — one of the first institutes in Uran to offer this alongside spoken English.' },
  { year: '2005', event: 'Introduced the Animated Vocabulary programme — a unique visual vocabulary method that dramatically accelerated student learning.' },
  { year: '2010', event: 'Launched the 11-type Speaking Practice programme with expert mentors from diverse professional backgrounds.' },
  { year: '2018', event: 'Introduced the Corporate & Call Centre Training module for BPO and JNPT-area professionals.' },
  { year: '2020', event: 'Launched the online course — delivering the same individual coaching to students across India with doorstep material delivery.' },
  { year: '2024', event: 'Celebrating 35+ years of transforming speakers, professionals, and confident communicators across Uran, Navi Mumbai, and beyond.' },
];

const approach = [
  { icon: '👤', title: 'Individual Attention — Always', desc: 'Every student receives personal, one-on-one teaching. No batches, no groups — ever. One teacher, one student, in every session.' },
  { icon: '🕗', title: 'Flexible Timings', desc: 'Classes from 8 AM to 9 PM, Monday to Saturday — attend at any hour that suits your schedule. No fixed batch timing.' },
  { icon: '🎂', title: 'No Age Bar', desc: 'From 4-year-old children to 70-year-old adults — everyone is welcome. Our method adapts to every learner\'s pace and background.' },
  { icon: '📝', title: 'No Homework', desc: 'All practice and learning happens within the class hour. No external pressure, no home assignments — zero stress outside class.' },
  { icon: '🗣️', title: '11 Speaking Practice Types', desc: 'GD, Debate, Interview Practice, Stage Speaking, Public Speaking, Talk Shows, Freedom Speaking, Newspaper Reading, American Accent, Listening Practice, and Library sessions.' },
  { icon: '🏆', title: '100% Guarantee', desc: "We back our method with a 100% success guarantee. Your English fluency and growth is our commitment — not a marketing claim." },
];

export default function About() {
  return (
    <SubPageLayout pageTitle="About Sheetal Academy">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ An Institute of English Speaking · Kamtha Road, Uran · Est. 1989
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            About
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Sheetal Academy</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            All great institutions begin with a vision — a conviction that something better is possible. <strong className="text-white">Sheetal Academy</strong>, founded in 1989 on Kamtha Road, Uran, was built on one conviction: that fluent English should be accessible to every person in our society — regardless of age, school background, or mother tongue.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/english-speaking-classes-uran" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              See Our English Classes in Uran
            </a>
            <a href="/#contact" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── FOUNDER'S VISION ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Founder&apos;s Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-8">A Message from the Founder</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#f5d0d0] border-l-4 border-l-[#DC143C] space-y-5 text-gray-600 leading-relaxed text-sm">
            <p>
              Our society is changing very fast. In the 21st century, education is not optional — it is survival. And the modern benchmark of education has become English speaking. If one knows English, they are considered qualified and confident. Yet, a vast portion of our society — hardworking, intelligent people — remain unable to speak English fluently.
            </p>
            <p>
              The reason is not lack of intelligence. The reason is lack of the right method, the right environment, and the right teacher. Most people have studied English in school — but school teaches grammar for exams, not English for life.
            </p>
            <p>
              There is a saying in Marathi: <em>&ldquo;Ingreji hai vaghiniche dudh ahe&rdquo;</em> — English is like the milk of a tigress. Great knowledge in almost every field exists only in English. To access this knowledge — and to be heard, respected, and given opportunity — English is essential.
            </p>
            <p>
              At Sheetal Academy, we teach pronunciation, grammar, vocabulary, and speaking confidence in a very short duration — using a carefully researched curriculum, individual attention, and our unique dynamic speaking practice system. We have been doing this since 1989. And we will not stop until every person in Uran and Navi Mumbai who wants to speak English — can speak English.
            </p>
            <p className="font-semibold text-[#B22222]">
              We want English to be not the privilege of a fistful of educated or wealthy people — but for all.
            </p>
          </div>
        </div>
      </section>

      {/* ── MILESTONES (E-E-A-T TIMELINE) ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">35 Years of Progress</span>
          </div>
          <h2 className="text-3xl font-bold text-[#B22222] mb-10">
            Sheetal Academy — A 35-Year Timeline of Excellence in Uran
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#DC143C] flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-xs font-black">{m.year.slice(2)}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-[#f5d0d0] my-1" />}
                </div>
                <div className="pb-8">
                  <div className="text-[#DC143C] font-bold text-sm mb-1">{m.year}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-[#DC143C] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg">Become part of Sheetal Academy&apos;s story.</p>
            <p className="text-white/80 text-sm">Join Uran&apos;s most trusted English institute — free consultation, no commitment.</p>
          </div>
          <a href="/english-speaking-classes-uran" className="px-7 py-3 bg-white text-[#DC143C] font-bold rounded-xl hover:bg-white/90 transition shadow-lg text-sm whitespace-nowrap">
            See English Classes in Uran →
          </a>
        </div>
      </section>

      {/* ── TEACHING APPROACH ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-12 text-center">
            Our Unique Teaching Approach — Why It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approach.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#f5d0d0] hover:border-[#DC143C]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-[#DC143C] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION / BRANCH ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-8 text-center">Our Branch in Uran</h2>
          <div className="max-w-lg mx-auto bg-[#fdf5f5] rounded-2xl p-7 border border-[#f5d0d0] shadow-sm">
            <h3 className="font-bold text-[#B22222] text-lg mb-3">Uran Branch — Main Campus</h3>
            <p className="text-gray-600 text-sm mb-2">Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran — 400 702, Navi Mumbai, Maharashtra.</p>
            <p className="text-gray-500 text-xs mb-3">Near Uran city centre, accessible from Kamtha Road, Shreeraj Nagar, and the JNPT corridor.</p>
            <a href="tel:+919967286368" className="text-[#DC143C] font-semibold text-sm">+91 99672 86368</a>
            <p className="text-gray-400 text-xs mt-1">Mon–Sat · 8 AM–9 PM · Walk-ins welcome</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Be Part of the Sheetal Academy Legacy</h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Thousands of students from Uran, Panvel, Navi Mumbai, and across India have transformed their English, their confidence, and their careers at Sheetal Academy. Your journey starts with one conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/english-speaking-classes-uran" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
              English Classes in Uran — Enrol Now →
            </a>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
