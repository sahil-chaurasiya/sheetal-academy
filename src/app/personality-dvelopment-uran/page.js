import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: GEO-TARGETED LANDING PAGE ───────────────────────────
// Primary keyword  : "personality development classes in uran"
// Secondary        : "personality development uran", "personality development course uran",
//                    "soft skills training uran", "confidence building uran",
//                    "body language training uran", "personality development navi mumbai"
// Intent           : TRANSACTIONAL — enrol in personality development in Uran
// Canonical        : self
// Links to         : /personality-development (parent course detail)
//                    /english-speaking-classes-uran (primary)
//                    /communication-skills (related)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'Personality Development Classes in Uran | Sheetal Academy',
  description:
    'Best personality development classes in Uran at Sheetal Academy. 15-module course covering confidence, body language, soft skills, leadership, voice training & corporate communication. Individual coaching since 1989. Free consultation.',
  keywords: [
    'personality development classes in uran',
    'personality development uran',
    'personality development course uran',
    'personality development institute uran',
    'soft skills training uran',
    'confidence building classes uran',
    'body language training uran',
    'leadership training uran',
    'personality development navi mumbai',
    'personality development classes navi mumbai',
    'soft skills course navi mumbai',
    'corporate communication uran',
    'personality development near uran',
    'personality development near panvel',
    'sheetal academy personality development',
    'best personality development uran',
    'personality development coaching uran',
    'personality grooming classes uran',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/personality-development-uran' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Personality Development Classes in Uran | Sheetal Academy',
    description:
      'Transform your personality with Sheetal Academy in Uran. 15 individually taught modules — confidence, body language, voice training, soft skills, leadership & more. Since 1989.',
    url: 'https://sheetal-academy.vercel.app/personality-development-uran',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — Personality Development Classes in Uran' }],
  },
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Personality Development Classes in Uran',
  description:
    'A 15-module individual-coaching personality development programme in Uran covering voice & accent training, body language, confidence, leadership, corporate communication, soft skills, stress management, and more.',
  url: 'https://sheetal-academy.vercel.app/personality-development-uran',
  educationalLevel: 'Beginner to Advanced',
  teaches: [
    'Confidence building',
    'Body language',
    'Voice & accent training',
    'Soft skills',
    'Leadership',
    'Corporate communication',
    'Stress management',
    'Public speaking',
  ],
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Sheetal Academy',
    url: 'https://sheetal-academy.vercel.app/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop no 43, Shreeraj Nagar Apartment, Kamtha Road',
      addressLocality: 'Uran',
      addressRegion: 'Maharashtra',
      postalCode: '400702',
      addressCountry: 'IN',
    },
  },
  hasCourseInstance: [
    { '@type': 'CourseInstance', courseMode: 'onsite', location: { '@type': 'Place', name: 'Sheetal Academy, Uran' } },
    { '@type': 'CourseInstance', courseMode: 'online' },
  ],
};

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Sheetal Academy',
  url: 'https://sheetal-academy.vercel.app/',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1',
  },
};

const modules = [
  { num: '01', title: 'Business & Corporate Communication', desc: 'Professional English for meetings, presentations, and client interaction.' },
  { num: '02', title: 'Voice & Accent Training', desc: 'Clear, neutral professional accent with improved tone and voice modulation.' },
  { num: '03', title: 'Soft Skills', desc: 'Interpersonal and professional skills that drive career success.' },
  { num: '04', title: 'Letter Writing', desc: 'Formal and professional letters with correct structure and tone.' },
  { num: '05', title: 'Drafting E-mails', desc: 'Clear, professional business emails that command attention.' },
  { num: '06', title: 'Telephone Etiquettes', desc: 'Handle calls professionally — greetings, listening, and closings.' },
  { num: '07', title: 'Table Manners', desc: 'Professional dining etiquette for business and social settings.' },
  { num: '08', title: 'Stress Management', desc: 'Stay calm and effective under pressure in professional situations.' },
  { num: '09', title: 'Time Management', desc: 'Organise time to maximise productivity and project reliability.' },
  { num: '10', title: 'Leadership Skills', desc: 'Communication, influence, and decision-making of a true leader.' },
  { num: '11', title: 'Positive Thinking', desc: 'A mindset that radiates confidence and handles challenges constructively.' },
  { num: '12', title: 'Stage & Crowd Holding', desc: 'Command a room and deliver speeches with authority and impact.' },
  { num: '13', title: 'Confidence Boosting', desc: 'Targeted sessions to eliminate hesitation and speaking anxiety permanently.' },
  { num: '14', title: 'Body Language', desc: 'Improve posture, eye contact, gestures, and first impressions.' },
  { num: '15', title: 'Motivating Sessions', desc: 'Stay energised and goal-oriented toward personal and professional success.' },
];

const testimonials = [
  {
    name: 'Anjali S.',
    role: 'HR Executive, Uran',
    text: 'I always struggled with confidence in meetings. After Sheetal Academy\'s personality development course, I now lead team presentations without hesitation. The body language module alone changed how people perceive me.',
  },
  {
    name: 'Rohit K.',
    role: 'College Student, Uran',
    text: 'I joined for confidence building before my campus interviews. The individual sessions meant my teacher focused entirely on my specific weaknesses. I got placed within 3 months of joining.',
  },
  {
    name: 'Meena P.',
    role: 'Business Owner, Kamtha Road',
    text: 'The corporate communication and soft skills modules were exactly what I needed. My client interactions improved dramatically. I recommend this to every business person in Uran.',
  },
];

const whoCanJoin = [
  'College students preparing for campus placements and group discussions',
  'Job seekers who want to improve their interview personality',
  'Working professionals seeking promotion and leadership roles',
  'Business owners dealing with corporate clients and teams',
  'Homemakers building confidence and social presence',
  'School students developing communication early',
  'Anyone in Uran, Navi Mumbai, Panvel, and surrounding areas',
  'Anyone aged 4 to 70 — no age bar, ever',
];

const compVsOthers = [
  { feature: 'Teaching model', sheetal: 'One teacher — one student, always', others: 'Groups of 15–30 students per batch' },
  { feature: 'Track record', sheetal: '35+ years since 1989 in Uran', others: 'Most opened in the last 5–10 years' },
  { feature: 'Modules', sheetal: '15 comprehensive modules', others: 'Generic 4–6 topic programmes' },
  { feature: 'Personalisation', sheetal: 'Targets your specific weakness', others: 'Same syllabus for everyone' },
  { feature: 'Missed sessions', sheetal: 'Fully compensated', others: 'Lost — attend next batch' },
  { feature: 'Success guarantee', sheetal: '100% guarantee — in writing', others: 'No guarantee offered' },
];

const faqs = [
  {
    q: 'Which is the best personality development class in Uran?',
    a: 'Sheetal Academy, established in 1989 on Kamtha Road, Uran, is the most trusted personality development institute in Uran and Navi Mumbai. With a strict individual-attention model, 15 comprehensive modules, and over 35 years of results, no other institute in Uran comes close.',
  },
  {
    q: 'What does the personality development course at Sheetal Academy cover?',
    a: 'The course covers 15 modules — business communication, voice & accent training, soft skills, letter and email writing, telephone etiquette, table manners, stress management, time management, leadership, positive thinking, stage presence, confidence boosting, body language, and motivating sessions.',
  },
  {
    q: 'Can I take the personality development course without joining English classes?',
    a: 'Yes. The personality development course is available as a standalone programme. However, many students combine it with English speaking classes for a complete professional transformation — fluent English paired with confident body language and soft skills.',
  },
  {
    q: 'Is the personality development course available online?',
    a: 'Yes. Like all Sheetal Academy programmes, the personality development course is available both offline at our Uran branch and online with individual coaching and doorstep course material delivery.',
  },
  {
    q: 'What is the fee for personality development classes in Uran at Sheetal Academy?',
    a: 'Please contact us directly at +91 99672 86368 for current fee details. The initial consultation is free — we assess your goals and recommend the right programme before any fee is discussed.',
  },
  {
    q: 'How long does the personality development course take?',
    a: 'The duration depends on your current level and goals. Since every student receives individual attention, the pace is tailored to you — there is no rigid batch timeline. Most students see significant improvement within 3–6 months.',
  },
];

export default function PersonalityDevelopmentUran() {
  return (
    <SubPageLayout pageTitle="Personality Development Classes in Uran">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />

      {/* ── STICKY WHATSAPP CTA (mobile) ── */}
      <a
        href="https://wa.me/919967286368?text=Hi%2C+I%27m+interested+in+Personality+Development+classes+at+Sheetal+Academy+Uran."
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-4 py-3 rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-all duration-300 md:hidden"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp Us
      </a>

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Uran&apos;s #1 Personality Development Institute · Since 1989 · Kamtha Road
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Personality Development
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Classes in Uran</span>
          </h1>

          {/* Social proof bar */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="text-white/80 text-xs ml-1">4.9 / 5 · 87 students</span>
            </div>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/70 text-xs">35+ years in Uran</span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/70 text-xs">Free first consultation</span>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-7">
            <strong className="text-white">Sheetal Academy</strong>, Uran&apos;s most trusted institute since 1989, offers the most comprehensive personality development programme in Uran and Navi Mumbai.{' '}
            <strong className="text-[#DC143C]">15 individually taught modules</strong> — from confidence and body language to leadership, voice training, and corporate communication. One teacher. One student. Real transformation.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {['15 Modules', 'Individual Attention', 'No Batch System', 'Age 4–70 Yrs', '100% Guarantee', 'Online & Offline'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white/85 text-xs font-semibold rounded-full">
                ✔ {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Book Free Consultation
            </a>
            <a href="tel:+919967286368" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Call: +91 99672 86368
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
            Every module is taught individually — your teacher focuses entirely on your specific gaps, not a generic group syllabus. This is why Sheetal Academy students in Uran transform faster than those attending group personality development courses anywhere in Navi Mumbai.
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

      {/* ── WHO CAN JOIN ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto lg:flex lg:gap-12 lg:items-start">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#DC143C]" />
              <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Who Can Join</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
              Who Can Join Our Personality Development Classes in Uran?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-7 text-sm">
              Sheetal Academy welcomes every learner in Uran and the surrounding Navi Mumbai–Raigad region — regardless of age, background, or current confidence level:
            </p>
            <ul className="space-y-3">
              {whoCanJoin.map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <span className="w-5 h-5 rounded-full bg-[#DC143C] flex-shrink-0 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #B22222 0%, #8B0000 100%)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-6 relative">What You Will Gain</h3>
            <ul className="space-y-4 relative">
              {[
                'Unshakeable confidence in every social and professional situation',
                'Professional body language — posture, eye contact, and first impressions',
                'Clear, commanding voice with a neutral professional accent',
                'Soft skills that employers and clients immediately notice',
                'Leadership presence — influence, decision-making, and authority',
                'Corporate etiquette — emails, calls, meetings, and dining',
                'Stage and public speaking skills that hold any audience',
                'Certificate of Excellence on course completion',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-[#DC143C] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg">Ready to transform your personality in Uran?</p>
            <p className="text-white/80 text-sm">Free consultation — no commitment required.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="/#contact" className="px-7 py-3 bg-white text-[#DC143C] font-bold rounded-xl hover:bg-white/90 transition shadow-lg text-sm whitespace-nowrap">
              Book Free Consultation
            </a>
            <a href="tel:+919967286368" className="px-7 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition text-sm whitespace-nowrap">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Why We Are Different</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Sheetal Academy vs Other Personality Development Classes in Uran
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl text-sm">
            Many personality development and soft skills institutes have opened in Uran and Navi Mumbai. Here is an honest comparison.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f5d0d0]">
                  <th className="text-left text-xs text-gray-500 font-semibold pb-3 pr-6 w-1/3">Feature</th>
                  <th className="text-left text-xs text-[#DC143C] font-bold pb-3 pr-6 w-1/3">Sheetal Academy</th>
                  <th className="text-left text-xs text-gray-400 font-semibold pb-3 w-1/3">Other Classes in Uran</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5d0d0]">
                {compVsOthers.map((row, i) => (
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

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Student Results</span>
          </div>
          <h2 className="text-3xl font-bold text-[#B22222] mb-10">
            What Students From Uran Say About Our Personality Development Classes
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#fdf5f5] rounded-2xl p-6 border border-[#f5d0d0]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HYPER-LOCAL ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Conveniently Located for Uran &amp; Navi Mumbai Students
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto mb-4 text-base leading-relaxed">
            <strong className="text-white">Address:</strong> Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran — 400 702.
          </p>
          <p className="text-white/55 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            Located on Kamtha Road near Uran city centre — easily reachable from Uran bus stand, Shreeraj Nagar, and the JNPT industrial area. Students from Panvel, New Panvel, Belapur, Nerul, and Kharghar attend regularly. For all other locations, our online course delivers the same individual coaching to your home.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Uran Town', 'Kamtha Road', 'Panvel', 'Belapur', 'Nerul', 'JNPT Area', 'Online — All India'].map((loc) => (
              <span key={loc} className="px-4 py-2 rounded-full border border-[#DC143C]/40 bg-[#DC143C]/10 text-white/80 text-sm">
                📍 {loc}
              </span>
            ))}
          </div>
          <a href="tel:+919967286368" className="inline-block px-8 py-3 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition">
            Call Now: +91 99672 86368
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">Common Questions</span>
          </div>
          <h2 className="text-3xl font-bold text-[#B22222] mb-8">
            FAQs — Personality Development Classes in Uran, Sheetal Academy
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="border border-[#f5d0d0] rounded-2xl p-6 hover:border-[#DC143C]/40 transition-colors">
                <h3 className="font-bold text-gray-800 mb-2 text-sm">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINK CLUSTER ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B22222] mb-6">Explore All Our Programmes at Sheetal Academy</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/english-speaking-classes-uran', label: 'Best English Speaking Classes in Uran', desc: 'Uran\'s #1 English institute since 1989. Individual coaching, no batch.' },
              { href: '/communication-skills', label: 'Professional Communication Skills Training', desc: 'Corporate English, business email, GD, telephone etiquette.' },
              { href: '/interview-preparation', label: 'Interview Preparation in English — Uran', desc: 'Mock interviews, HR English, GD practice — get job-ready.' },
              { href: '/online-english-course', label: 'Online English Speaking Course', desc: 'Same individual coaching delivered to your home — anywhere in India.' },
              { href: '/public-speaking-guide', label: 'Public Speaking & Stage Training', desc: 'GD, debate, stage speaking, talk shows with expert mentors.' },
              { href: '/personality-development', label: 'Full 15-Module Personality Development Course', desc: 'See the complete module-by-module breakdown of our programme.' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="block bg-white rounded-2xl p-5 border border-[#f5d0d0] hover:border-[#DC143C]/50 hover:shadow-md transition-all duration-300 group">
                <div className="font-bold text-sm text-gray-800 group-hover:text-[#DC143C] transition-colors mb-1">{link.label}</div>
                <div className="text-xs text-gray-500">{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Start Your Personality Development Journey in Uran Today
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            Join Sheetal Academy on Kamtha Road, Uran — 35+ years of proven results, individual coaching, no batch system, and a 100% guarantee.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Free consultation · No commitment · Mon–Sat, 8 AM–9 PM
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
              Book Free Consultation →
            </a>
            <a href="https://wa.me/919967286368?text=Hi%2C+I%27m+interested+in+Personality+Development+classes+at+Sheetal+Academy." target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#25D366] text-white font-bold rounded-xl text-lg hover:bg-[#1ebe5d] transition-all duration-300 shadow-xl hover:-translate-y-1">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}