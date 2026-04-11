import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: GEO SUB-AREA SUPPORT PAGE ────────────────────────────
// Primary keyword  : "spoken english classes near panvel"
// Secondary        : "english classes panvel", "english institute near panvel",
//                    "english coaching new panvel", "best english class panvel"
// Intent           : TRANSACTIONAL — Panvel-area searchers finding nearest option
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
//                    /spoken-english-navi-mumbai (parent geo page)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Spoken English Classes Near Panvel | Best English Institute — Sheetal Academy',
  description:
    'The best English speaking classes near Panvel — Sheetal Academy in Uran. Just 20–30 min from Panvel and New Panvel. Individual attention, no batch, flexible timings, 100% guarantee. Since 1989.',
  keywords: [
    'spoken english classes near panvel',
    'english classes near panvel',
    'english institute near panvel',
    'english coaching panvel',
    'best english class panvel',
    'english speaking course panvel',
    'english classes new panvel',
    'english coaching near panvel',
    'spoken english panvel',
    'english academy near panvel',
    'personality development panvel',
    'sheetal academy panvel',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/spoken-english-panvel' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Spoken English Classes Near Panvel | Best English Institute — Sheetal Academy',
    description:
      "Nearest and most trusted English speaking institute to Panvel — Sheetal Academy Uran. Individual coaching, no batch, 100% guarantee since 1989.",
    url: 'https://sheetal-academy.vercel.app/spoken-english-panvel',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — English Classes Near Panvel' }],
  },
};

const differentiators = [
  {
    icon: '📍',
    title: 'Closest Quality Institute to Panvel',
    desc: "Sheetal Academy in Uran is 20–30 minutes from Panvel and New Panvel. No need to travel to Mumbai — the most trusted individual-attention English institute in the region is right at your doorstep.",
  },
  {
    icon: '📅',
    title: '35+ Years — Longer Than Any Panvel Competitor',
    desc: 'Founded in 1989, Sheetal Academy has operated for over three decades. No other English institute serving the Panvel area comes close to this track record of sustained results.',
  },
  {
    icon: '👤',
    title: 'Individual Coaching — No Batch',
    desc: 'English classes in and around Panvel are largely group-based. At Sheetal Academy, every student gets dedicated one-on-one teaching — the reason our students progress in months what takes others years.',
  },
  {
    icon: '🕗',
    title: 'Attend Any Time — No Fixed Batch Schedule',
    desc: 'Come between 8 AM and 9 PM, Monday to Saturday — at any time that fits your schedule. No rigid batch timing means consistent attendance and faster progress.',
  },
  {
    icon: '🌐',
    title: "Can't Commute? Online Option Available",
    desc: 'If travelling from Panvel or New Panvel is inconvenient, our online course provides the exact same individual coaching with course materials physically delivered to your address.',
  },
  {
    icon: '🏆',
    title: '100% Success Guarantee',
    desc: 'We back every student with a 100% guarantee. Enrol, follow the programme, and you will achieve real English fluency. No other English class near Panvel offers this.',
  },
];

export default function SpokenEnglishPanvel() {
  return (
    <SubPageLayout pageTitle="Spoken English Near Panvel">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ 20–30 Min from Panvel · Individual Coaching · Since 1989
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Spoken English Classes
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Near Panvel</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-7">
            <strong className="text-white">Sheetal Academy</strong>, in Uran, is the most trusted English speaking institute for students from{' '}
            <strong className="text-[#DC143C]">Panvel, New Panvel, Kamothe, and Kharghar</strong>. Just a short commute away — or available fully online — with individual attention, no batch system, and a 100% guarantee since 1989.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Panvel', 'New Panvel', 'Kamothe', 'Kharghar', 'Uran', 'Online'].map((loc) => (
              <span key={loc} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white/85 text-xs font-semibold rounded-full">
                📍 {loc}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire Now — Free Consultation
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              English Speaking Classes in Uran — Enrol →
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
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Why Panvel Students Choose Sheetal Academy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            The Best English Coaching Near Panvel — And Why
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl text-sm">
            Students from Panvel and New Panvel have a clear choice: group English coaching classes in Panvel, or individual-attention coaching at Sheetal Academy, Uran. The results speak for themselves.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
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

      {/* ── HOW TO REACH ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-6">How to Reach Sheetal Academy from Panvel</h2>
          <div className="bg-[#fdf5f5] rounded-2xl p-7 border border-[#f5d0d0] mb-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>Address:</strong> Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran — 400 702, Navi Mumbai.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Uran is connected from Panvel and New Panvel via road. The journey typically takes <strong>20–30 minutes by car or auto-rickshaw</strong>. Many students from Panvel commute daily.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              For students who prefer not to commute, our <a href="/online-english-course" className="text-[#DC143C] font-semibold underline">online English course</a> provides the same individual coaching from home — with course material shipped directly to your address in Panvel or New Panvel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919967286368" className="inline-block px-6 py-3 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition text-sm">
              Call: +91 99672 86368
            </a>
            <a href="/#contact" className="inline-block px-6 py-3 border border-[#DC143C] text-[#DC143C] font-semibold rounded-xl hover:bg-[#DC143C]/5 transition text-sm">
              Send Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-16"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/english-speaking-classes-uran', label: 'English Classes in Uran', desc: 'Full programme — curriculum, timings, and enrolment.' },
              { href: '/spoken-english-navi-mumbai', label: 'Spoken English — All of Navi Mumbai', desc: 'Coverage across every Navi Mumbai node.' },
              { href: '/online-english-course', label: 'Online English Course', desc: 'Individual coaching from home — anywhere in India.' },
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
            From Panvel to Fluent English — Start at Sheetal Academy
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            The best English speaking institute near Panvel is Sheetal Academy, Uran — 35+ years, individual coaching, and a 100% guarantee. Stop attending group classes that do not see your progress. Join us today.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
