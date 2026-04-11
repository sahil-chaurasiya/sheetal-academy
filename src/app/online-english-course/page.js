import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: ONLINE INTENT SUPPORT PAGE ───────────────────────────
// Primary keyword  : "online english speaking course india"
// Secondary        : "online spoken english course", "learn english online",
//                    "online english classes individual coaching",
//                    "online english course with doorstep material"
// Intent           : TRANSACTIONAL — remote learners anywhere in India
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Online English Course with Individual Coaching | Sheetal Academy — All India',
  description:
    "Join Sheetal Academy's online English speaking course from anywhere in India. One-on-one coaching, no batch, missed sessions compensated, course material delivered to your doorstep. 100% guarantee since 1989.",
  keywords: [
    'online english speaking course india',
    'online spoken english course',
    'learn english online',
    'online english classes individual coaching',
    'online english course doorstep material',
    'online english classes from home',
    'spoken english online course india',
    'individual online english coaching',
    'online english course uran',
    'online english classes navi mumbai',
    'learn spoken english at home',
    'sheetal academy online course',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/online-english-course' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Online English Course with Individual Coaching | Sheetal Academy — All India',
    description:
      "Learn spoken English from home with Sheetal Academy — individual coaching, no batch, doorstep material delivery, and 100% guarantee. Available across India.",
    url: 'https://sheetal-academy.vercel.app/online-english-course',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Online English Speaking Course' }],
  },
};

const onlineFeatures = [
  { icon: '🏠', title: 'Learn from the Comfort of Your Home', desc: 'No commute, no disruption. Access Sheetal Academy\'s 35-year proven methodology from wherever you are — with the same individual coaching quality as the offline programme.' },
  { icon: '👤', title: 'Strictly One-on-One — No Group, No Batch', desc: 'Our online programme is strictly individual. One teacher focuses entirely on you in every session — diagnosing your specific weaknesses and advancing you at your own pace.' },
  { icon: '🔄', title: 'Every Missed Session is Compensated', desc: "Can't attend a session? No problem. Every missed class is compensated — ensuring you never fall behind and always complete the full programme." },
  { icon: '📦', title: 'Course Material Delivered to Your Doorstep', desc: 'All course books, printed materials, and learning resources are physically shipped to your address anywhere in India. No need to source or arrange anything yourself.' },
  { icon: '📞', title: 'Management Always Reachable', desc: 'Our team is just a call away. Any query, scheduling need, or concern is handled directly and quickly — no automated systems, no delays.' },
  { icon: '🎤', title: 'Visit Branch for Speaking Practice', desc: "Online students are warmly invited to visit our Uran branch for speaking practice sessions — even after completing the online programme — at no extra cost." },
];

const onlineCurriculum = [
  'Grammar — tenses, modals, sentence construction',
  'Vocabulary — animated, modern English, and pronunciation',
  'Spoken English — frequently used sentences for instant fluency',
  'Smart English — idioms, proverbs, and professional phrases',
  'Speaking Practice — GD, debate, interviews, stage speaking',
  'Personality Development modules (optional)',
  'Corporate & Call Centre training (optional)',
  'Certificate of Excellence on completion',
];

const comparisonRows = [
  { feature: 'Teaching model', sheetal: 'One-on-one individual coaching', others: 'Group batches (15–30 students)' },
  { feature: 'Missed sessions', sheetal: 'Compensated — every time', others: 'Lost — attend next batch' },
  { feature: 'Course material', sheetal: 'Physically shipped to your home', others: 'PDFs / screen sharing only' },
  { feature: 'Progress pace', sheetal: 'At your speed — fully personalised', others: 'Fixed batch pace' },
  { feature: 'Teacher focus', sheetal: '100% on you in every session', others: 'Divided among 15–30 students' },
  { feature: 'Speaking practice', sheetal: '11 types including GD, debate, stage', others: 'Basic Q&A or none' },
];

export default function OnlineEnglishCourse() {
  return (
    <SubPageLayout pageTitle="Online English Speaking Course">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Learn from Home · Individual Coaching · 100% Guarantee
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Online English
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Speaking Course</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            <strong className="text-white">Sheetal Academy</strong> brings its trusted 35-year methodology directly to your home. Individual one-on-one coaching, course material delivered to your doorstep, missed session compensation, and a 100% guarantee — from wherever you are in India.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['No Batch', 'Individual Sessions', 'Doorstep Material', 'Sessions Compensated', '100% Guarantee'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white/85 text-xs font-semibold rounded-full">
                ✔ {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire About Online Course
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              See Our Uran Campus
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── ONLINE FEATURES ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Online Facilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-3">
            What Makes Sheetal Academy&apos;s Online Course Different
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            Most online English courses put you in a group or make you watch pre-recorded videos. At Sheetal Academy, the online experience is identical to the offline one — fully live, fully individual.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#f5d0d0] hover:shadow-lg hover:border-[#DC143C]/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-2 group-hover:text-[#DC143C] transition-colors">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4 text-center">
            What the Online English Course Covers
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-sm">
            The same rigorous curriculum as our offline programme — no shortcuts, no reduction in quality. This is the full Sheetal Academy experience, delivered to your home.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {onlineCurriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#fdf5f5] rounded-xl p-4 border border-[#f5d0d0]">
                <span className="text-[#DC143C] font-bold mt-0.5 flex-shrink-0">✔</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-8">
            Sheetal Academy Online vs Typical Online English Courses
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-xs text-gray-500 font-semibold pb-3 pr-6">Feature</th>
                  <th className="text-left text-xs text-[#DC143C] font-bold pb-3 pr-6">Sheetal Academy</th>
                  <th className="text-left text-xs text-gray-400 font-semibold pb-3">Most Online Courses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5d0d0]">
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-6 text-gray-600 font-medium text-xs">{row.feature}</td>
                    <td className="py-3 pr-6 text-gray-800 text-xs font-semibold">{row.sheetal}</td>
                    <td className="py-3 text-gray-400 text-xs">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS + TESTIMONIAL ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B22222] mb-8">How the Online Course Works — Step by Step</h2>
          <div className="grid sm:grid-cols-4 gap-4 mb-12">
            {[
              { step: '1', title: 'Enquire', desc: 'Call or WhatsApp us. We assess your current English level — free.' },
              { step: '2', title: 'Enrol', desc: 'Confirm your course. We ship your course materials to your address.' },
              { step: '3', title: 'Schedule', desc: 'Choose your daily session time — any slot between 8 AM and 9 PM.' },
              { step: '4', title: 'Learn', desc: 'Attend live one-on-one sessions. Progress at your own pace with 100% individual focus.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-[#f5d0d0] text-center">
                <div className="w-8 h-8 rounded-full bg-[#DC143C] text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <div className="font-bold text-gray-800 text-sm mb-1">{s.title}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-7 border border-[#f5d0d0]">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic mb-3">&ldquo;I was in Pune and could not attend in person. The online course was exactly as described — one teacher, fully focused on me. Materials arrived at my door in 3 days. After 5 months I can speak English confidently at my workplace. Sheetal Academy online is the real deal.&rdquo;</p>
            <div className="font-bold text-gray-800 text-sm">Amol K. — Software Professional, Pune</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Online English Course Today</h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Wherever you are in India — Sheetal Academy delivers 35+ years of expertise to your home. Individual coaching, doorstep materials, and a 100% success guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl">
              Enquire Now →
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-4 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              View Uran Campus Details
            </a>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
