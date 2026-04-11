import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: NEAR-ME + RAIGAD SUPPORT PAGE ────────────────────────
// Primary keyword  : "english classes near me uran"
// Secondary        : "english classes near uran", "best english institute raigad",
//                    "english coaching raigad district", "english classes alibag"
// Intent           : TRANSACTIONAL — near-me searches from Raigad + outer Navi Mumbai
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary)
//                    /online-english-course (for distant students)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'English Classes Near Me — Uran & Raigad District | Sheetal Academy',
  description:
    'Searching for English classes near you in Uran, Panvel, Alibag, Pen, Khopoli, or anywhere in Raigad? Sheetal Academy is the #1 English speaking institute in the region — individual coaching, 100% guarantee, since 1989.',
  keywords: [
    'english classes near me uran',
    'english classes near uran',
    'english institute raigad',
    'best english institute raigad',
    'english coaching raigad district',
    'english classes alibag',
    'spoken english alibag',
    'english classes pen maharashtra',
    'spoken english pen',
    'spoken english khopoli',
    'english classes khopoli',
    'english coaching near me navi mumbai',
    'english academy raigad',
    'spoken english classes raigad',
    'sheetal academy near me',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/english-classes-near-uran' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'English Classes Near Me — Uran & Raigad District | Sheetal Academy',
    description:
      'Sheetal Academy in Uran serves Raigad district and Navi Mumbai with the best individual English coaching since 1989. Walk in or learn online.',
    url: 'https://sheetal-academy.vercel.app/english-classes-near-uran',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — English Classes Near Uran, Raigad' }],
  },
};

const areasServed = [
  { area: 'Uran', detail: 'Main campus — Kamtha Road, Uran 400702', mode: 'Offline' },
  { area: 'Panvel & New Panvel', detail: '20–30 min by road from Panvel', mode: 'Offline / Online' },
  { area: 'Belapur & Nerul', detail: 'Accessible via Navi Mumbai roads', mode: 'Offline / Online' },
  { area: 'Alibag', detail: 'Online course with doorstep material delivery', mode: 'Online' },
  { area: 'Pen', detail: 'Individual online coaching available', mode: 'Online' },
  { area: 'Khopoli', detail: 'Online classes with session compensation', mode: 'Online' },
  { area: 'Karjat', detail: 'Online individual coaching — India-wide', mode: 'Online' },
  { area: 'All of Raigad District', detail: 'Online course with doorstep material delivery', mode: 'Online' },
];

export default function EnglishClassesNearUran() {
  return (
    <SubPageLayout pageTitle="English Classes Near You — Raigad">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Uran · Raigad District · Navi Mumbai · Online India-Wide · Since 1989
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            English Classes
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Near You</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-7">
            <strong className="text-white">Sheetal Academy, Uran</strong> — established 1989 — is the most trusted English speaking institute in Raigad district and Navi Mumbai. Whether you are in <strong className="text-[#DC143C]">Uran, Panvel, Alibag, Pen, Khopoli</strong>, or anywhere across Raigad — we have an option for you: in-person at our Uran branch or online with doorstep material delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Enquire Now — Free Consultation
            </a>
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              View Full Programme →
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── AREAS SERVED ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Service Coverage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Sheetal Academy Serves Your Area
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl text-sm">
            In-person students commute to our Uran branch. Students in distant areas of Raigad district access the same individual coaching through our online programme.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {areasServed.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-[#f5d0d0] hover:border-[#DC143C]/40 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-[#DC143C] font-bold text-sm flex-shrink-0 mt-0.5">📍</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm mb-0.5">{item.area}</div>
                    <div className="text-gray-500 text-xs mb-1">{item.detail}</div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.mode === 'Offline' ? 'bg-[#DC143C]/10 text-[#DC143C]' : item.mode === 'Online' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                      {item.mode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOT SETTLE FOR NEARBY OPTIONS ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-6">
            Why Travel to Uran — or Go Online — Instead of a Local Class?
          </h2>
          <div className="prose max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              When you search for <strong>&ldquo;English classes near me&rdquo;</strong> in Alibag, Pen, Khopoli, or Karjat — the options you find are typically small, undifferentiated coaching centres with group batches, no proven methodology, and no track record.
            </p>
            <p>
              Sheetal Academy in Uran offers something fundamentally different: <strong>35+ years of consistently delivering fluency</strong> through a no-batch, individual-attention model. Your teacher works exclusively with you — not splitting attention across 20 students. This is why Sheetal Academy students achieve in 3–6 months what takes years elsewhere.
            </p>
            <p>
              For students in Alibag, Pen, Khopoli, and other Raigad areas where commuting to Uran is difficult, our{' '}
              <a href="/online-english-course" className="text-[#DC143C] font-semibold underline">online English course</a>{' '}
              delivers the same one-on-one coaching to your home — with course materials physically shipped to your door.
            </p>
            <p>
              The best English class near you is not always the closest one. It is the one that actually makes you fluent.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="/english-speaking-classes-uran" className="inline-block px-6 py-3 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition text-sm">
              English Classes in Uran — Full Details →
            </a>
            <a href="/online-english-course" className="inline-block px-6 py-3 border border-[#DC143C] text-[#DC143C] font-semibold rounded-xl hover:bg-[#DC143C]/5 transition text-sm">
              View Online Course
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST + PROOF SECTION ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B22222] mb-6">Students from Across Raigad — Their Results</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-3">&ldquo;I am from Alibag. The online course from Sheetal Academy changed my life. Course material arrived at home. My teacher focused entirely on me every session. I now speak fluent English at my government job.&rdquo;</p>
              <div className="font-bold text-gray-800 text-sm">Ganesh T. — Govt. Employee, Alibag</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-3">&ldquo;Searched for English classes near me in Pen. Nothing good was available. Found Sheetal Academy online. Took the online course. Best decision. The individual attention is something no local class near Pen can offer.&rdquo;</p>
              <div className="font-bold text-gray-800 text-sm">Sanjay B. — Businessman, Pen</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#f5d0d0]">
            <h3 className="font-bold text-[#B22222] text-sm mb-3">The Sheetal Academy Difference — For Every Student in Raigad</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Sheetal Academy has operated since 1989 in Uran — with a consistent no-batch, individual-attention model. For students who can commute, in-person coaching is available at our Kamtha Road campus. For students in Alibag, Pen, Khopoli, Karjat, or anywhere in Raigad district, the same quality of coaching is available online with physical course material delivery. Call <a href="tel:+919967286368" className="text-[#DC143C] font-semibold">+91 99672 86368</a> for a free consultation.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ FOR "NEAR ME" INTENT ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B22222] mb-6">
            Common Questions — English Classes Near Uran &amp; Raigad
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is there a good English speaking class near Uran?',
                a: 'Yes — Sheetal Academy on Kamtha Road, Uran is the most established English speaking institute in the entire Uran–Raigad–Navi Mumbai region. Established in 1989, it offers individual one-on-one coaching, no batch system, and a 100% success guarantee.'
              },
              {
                q: 'What is the nearest English speaking class to Alibag?',
                a: 'For students in Alibag who cannot commute, Sheetal Academy offers an online English course with the same individual coaching quality — with course material physically delivered to your home in Alibag. Call +91 99672 86368.'
              },
              {
                q: 'Are there English classes in Pen, Maharashtra?',
                a: "Sheetal Academy's online English course is available for students in Pen, Maharashtra. Individual live sessions, doorstep material delivery, and session compensation for missed classes — the same programme as the in-person course in Uran."
              },
              {
                q: 'Which is the best English institute in Raigad district?',
                a: 'Sheetal Academy in Uran is the longest-running English speaking institute in Raigad district — established in 1989. With 35+ years of consistent results, a no-batch individual-attention model, and a 100% guarantee, it is the clear leader in the region.'
              },
              {
                q: 'Can I join Sheetal Academy online if I am in Khopoli or Karjat?',
                a: "Yes. Sheetal Academy's online course is available across India — including Khopoli, Karjat, and all of Raigad district. Course materials are physically shipped to your address. Sessions are live, one-on-one, and fully individual."
              },
            ].map((item, i) => (
              <div key={i} className="border border-[#f5d0d0] rounded-2xl p-6 hover:border-[#DC143C]/40 transition-colors">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Best English Class Near You Is Sheetal Academy
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Wherever you are in Raigad or Navi Mumbai — Sheetal Academy has a path to fluency for you. Offline in Uran or online from your home. 35+ years. Individual coaching. 100% guarantee.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}