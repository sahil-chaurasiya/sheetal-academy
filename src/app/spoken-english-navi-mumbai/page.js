import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: GEO SUPPORT PAGE (NAVI MUMBAI) ───────────────────────
// Primary keyword  : "spoken english classes in navi mumbai"
// Secondary        : "english speaking classes navi mumbai",
//                    "english institute near navi mumbai", "best spoken english navi mumbai"
// Intent           : TRANSACTIONAL — Navi Mumbai searchers finding nearest option
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
//                    /spoken-english-panvel (Panvel sub-area)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Best Spoken English Classes in Navi Mumbai | Sheetal Academy',
  description:
    'Looking for spoken English classes in Navi Mumbai? Sheetal Academy in Uran serves all of Navi Mumbai — Panvel, Belapur, Nerul, Kharghar, and more. Individual coaching, no batch, 100% guarantee. Since 1989.',
  keywords: [
    'spoken english classes in navi mumbai',
    'english speaking classes navi mumbai',
    'english academy navi mumbai',
    'spoken english course navi mumbai',
    'english institute near navi mumbai',
    'best spoken english navi mumbai',
    'english classes belapur',
    'english classes nerul',
    'english classes kharghar',
    'spoken english navi mumbai individual coaching',
    'best english institute navi mumbai',
    'sheetal academy navi mumbai',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/spoken-english-navi-mumbai' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Spoken English Classes in Navi Mumbai | Sheetal Academy',
    description:
      "Navi Mumbai's most trusted English speaking institute in Uran — individual coaching, no batch, flexible timings, 100% guarantee since 1989.",
    url: 'https://sheetal-academy.vercel.app/spoken-english-navi-mumbai',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Spoken English Classes Navi Mumbai' }],
  },
};

const naviMumbaiAreas = [
  { area: 'Uran', note: 'Main campus — Kamtha Road, Uran 400702. Walk-in welcome.' },
  { area: 'Panvel & New Panvel', note: '20–30 min by road. Easily commutable.' },
  { area: 'CBD Belapur', note: 'Accessible via Navi Mumbai road network.' },
  { area: 'Nerul', note: 'Reachable by road — online classes also available.' },
  { area: 'Kharghar', note: 'Online individual coaching available.' },
  { area: 'Airoli & Ghansoli', note: 'Online classes with doorstep material delivery.' },
  { area: 'Vashi & Sanpada', note: 'Online course available — same quality as offline.' },
  { area: 'Kalamboli', note: 'Online and in-person options available.' },
];

const whyChooseUs = [
  { icon: '📅', title: 'The Most Experienced Institute in the Region', desc: "Established in 1989, Sheetal Academy has more combined experience than any English speaking institute serving Navi Mumbai. That track record is not built by luck — it is built by results." },
  { icon: '👤', title: 'Individual Attention — Not a Navi Mumbai Batch Class', desc: 'Most English institutes across Navi Mumbai run batches of 15–30 students. At Sheetal Academy, every student gets one-on-one teaching. Your weaknesses are your teacher\'s sole focus.' },
  { icon: '🕗', title: 'Join Any Time — No Fixed Batch', desc: 'Attend any time between 8 AM and 9 PM, Monday to Saturday. There is no fixed class time — you come when you can, and your teacher is there.' },
  { icon: '🌐', title: 'Cannot Commute? Online Course Available', desc: "Students from across Navi Mumbai can access the same individual coaching from home — with course materials shipped to your doorstep anywhere in Navi Mumbai." },
  { icon: '🎓', title: 'Certificate of Excellence', desc: 'Receive a recognised Certificate of Excellence on completion — a credential that validates your fluency and communication skills to employers.' },
  { icon: '🏆', title: '100% Success Guarantee', desc: 'We back our programme with a 100% guarantee. If you follow the course, you will achieve fluency. That is our commitment to every student across Navi Mumbai.' },
];

export default function SpokenEnglishNaviMumbai() {
  return (
    <SubPageLayout pageTitle="Spoken English — Navi Mumbai">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Serving All of Navi Mumbai · Since 1989 · Uran Branch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Spoken English Classes
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">in Navi Mumbai</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-7">
            <strong className="text-white">Sheetal Academy</strong>, located in Uran, is the most trusted English speaking institute serving students from across <strong className="text-[#DC143C]">Navi Mumbai</strong> — Panvel, Belapur, Nerul, Kharghar, and beyond — since 1989. Individual coaching, no batch system, and flexible timings make us the preferred choice over any group English class in Navi Mumbai.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Panvel', 'Belapur', 'Nerul', 'Kharghar', 'Uran', 'Online Navi Mumbai'].map((loc) => (
              <span key={loc} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white/85 text-xs font-semibold rounded-full">
                📍 {loc}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire Now
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              View Full Programme Details →
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── WHY CHOOSE ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Why Choose Sheetal Academy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Why Navi Mumbai Students Choose Sheetal Academy Over Local Batch Classes
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            Navi Mumbai has many English coaching centres — but none with the individual-attention model, the track record, and the comprehensive curriculum that Sheetal Academy has maintained since 1989.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
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

      {/* ── AREAS SERVED ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-4">
            Areas of Navi Mumbai We Serve
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl text-sm">
            Whether you can commute to our Uran branch or prefer our online course — we serve students from across all of Navi Mumbai.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {naviMumbaiAreas.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#fdf5f5] rounded-xl p-4 border border-[#f5d0d0]">
                <span className="text-[#DC143C] font-bold text-sm flex-shrink-0 mt-0.5">📍</span>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{item.area}</div>
                  <div className="text-gray-500 text-xs">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6 italic">
            * For students who cannot commute, our{' '}
            <a href="/online-english-course" className="text-[#DC143C] underline">online English course</a>{' '}
            provides the same individual coaching with doorstep material delivery anywhere in Navi Mumbai.
          </p>
        </div>
      </section>

      {/* ── LINK TO PANVEL PAGE + PRIMARY ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-16"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Looking for English Classes in a Specific Area?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/english-speaking-classes-uran', label: 'English Speaking Classes in Uran', desc: 'Our main campus — full programme details, curriculum, and enrolment.' },
              { href: '/spoken-english-panvel', label: 'English Classes Near Panvel', desc: 'Specific information for students from Panvel and New Panvel.' },
              { href: '/online-english-course', label: 'Online English Course', desc: 'Learn from anywhere in Navi Mumbai — individual coaching at home.' },
              { href: '/english-classes-near-uran', label: 'English Classes Near Uran', desc: 'Serving Raigad district — Alibag, Pen, Khopoli, and beyond.' },
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

      {/* ── CTA ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Begin Your English Speaking Journey — Navi Mumbai
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Whether you are in Panvel, Belapur, Nerul, or anywhere in Navi Mumbai — Sheetal Academy is your nearest, most trusted English speaking institute. 35+ years of results, individual coaching, and a 100% guarantee.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}