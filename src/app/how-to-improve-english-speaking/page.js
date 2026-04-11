import SubPageLayout from '@/components/SubPageLayout';

// ─── SEO HIERARCHY ROLE: INFORMATIONAL TOP-OF-FUNNEL PAGE ─────────────────────
// Primary keyword  : "how to improve english speaking"
// Secondary        : "tips to improve spoken english", "how to speak english fluently",
//                    "how to improve english speaking skills at home"
// Intent           : INFORMATIONAL — person researching before deciding to join
// Canonical        : self
// Links to         : /english-speaking-classes-uran (primary — the solution)
//                    /online-english-course (for remote readers)
// ──────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'How to Improve English Speaking Fast — Proven 3-Step Method | Sheetal Academy',
  description:
    "Struggling to speak English confidently? Sheetal Academy's proven 3-step method — Grammar, Vocabulary, and daily Speaking Practice — has transformed thousands of learners since 1989. Discover how to improve your English speaking.",
  keywords: [
    'how to improve english speaking',
    'how to improve spoken english',
    'tips to improve spoken english',
    'how to speak english fluently',
    'how to improve english speaking skills at home',
    'how to speak fluent english',
    'improve english speaking skills',
    'spoken english improvement tips',
    'how to learn english speaking fast',
    'english speaking improvement method',
    'how to get fluent in english',
    'spoken english practice tips',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/how-to-improve-english-speaking' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'How to Improve English Speaking Fast — Proven 3-Step Method | Sheetal Academy',
    description:
      "Sheetal Academy's proven 3-step method to improve English speaking: Grammar → Vocabulary → Speaking Practice. Trusted by thousands since 1989.",
    url: 'https://sheetal-academy.vercel.app/how-to-improve-english-speaking',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — How to Improve English Speaking' }],
  },
};

const steps = [
  {
    step: 'Step 1',
    title: 'Master Grammar — the Architecture of English',
    body: "Grammar is not something you memorise for exams — it is the structural foundation that allows you to construct any sentence correctly. Most people cannot speak English fluently because they were never taught how sentences are built. At Sheetal Academy, we cover every essential grammar concept — tenses, modal verbs (will/would, shall/should), sentence formation, and common error correction — in a way that is immediately applicable to daily speech. Within days of beginning, students start forming correct sentences naturally.",
  },
  {
    step: 'Step 2',
    title: 'Build Vocabulary — the Fuel of Fluency',
    body: "Grammar gives you the structure, but vocabulary gives you the content. You cannot speak fluently if you keep searching for words mid-sentence. At Sheetal Academy, vocabulary is taught through our unique Animated Vocabulary programme — words are explained through stories, relatable examples, and visual association, so they stick permanently. We also cover modern English expressions, commonly mispronounced words, and pairs of similar-sounding words that confuse most learners. Our Spoken English Book covers the most frequently used sentences in daily life — practise these and your fluency increases dramatically.",
  },
  {
    step: 'Step 3',
    title: 'Practise Speaking — Every Day, Out Loud',
    body: "This is the single most important step — and the one most people skip. You cannot improve at swimming by reading about it. The same is true for speaking English. You must speak out loud, regularly, and in varied real-world scenarios. Sheetal Academy's Speaking Practice Programme is the most comprehensive in the Uran–Navi Mumbai region: Group Discussion, Debate, Interview Practice, Stage Speaking, Public Speaking, Talk Shows, Freedom Speaking, Newspaper Reading, American Accent Training, and Listening Practice — all conducted with expert mentors from different professional backgrounds. This is what separates students who truly become fluent from those who remain stuck.",
  },
];

const commonMistakes = [
  { mistake: 'Studying grammar endlessly without speaking', fix: 'Use grammar in real sentences from day one — theory without practice does not produce fluency.' },
  { mistake: 'Translating from your mother tongue', fix: 'Train your brain to think directly in English by building sentence patterns through repetition.' },
  { mistake: 'Waiting until you are "ready" to speak', fix: 'Speak imperfectly now. Mistakes are how fluency is built — not something to wait to eliminate first.' },
  { mistake: 'Studying alone with apps or textbooks', fix: 'Real speaking improvement requires live interaction — feedback on your accent, speed, clarity, and content from a real teacher.' },
  { mistake: 'Group classes where teacher attention is divided', fix: 'Individual coaching means your specific weaknesses are identified and corrected — not glossed over in a one-size-fits-all lesson.' },
];

export default function HowToImproveEnglishSpeaking() {
  return (
    <SubPageLayout pageTitle="How to Improve English Speaking">

      {/* ── HERO ── */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ Proven Method · 35+ Years · 100% Guarantee
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            How to Improve
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">English Speaking</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            Improving your English speaking is not about talent, age, or which medium school you attended. It is about following the right method in the right sequence. <strong className="text-white">Sheetal Academy</strong> has been perfecting this formula since <strong className="text-[#DC143C]">1989</strong> — and the results speak for themselves.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/english-speaking-classes-uran" className="glow-red inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Join English Classes in Uran →
            </a>
            <a href="/#contact" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* ── 3-STEP METHOD ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">The Method</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            The Proven 3-Step Method to Improve Your English Speaking
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl text-sm">
            People often spend years on English without achieving fluency — because they follow the wrong approach or skip critical steps. This method addresses the root causes of the problem, not the symptoms.
          </p>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm border border-[#f5d0d0] border-l-4 border-l-[#DC143C] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-xs text-[#DC143C] font-bold tracking-widest uppercase mb-2">{s.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#B22222] mb-4">
            5 Mistakes That Stop Most People from Improving Their English
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl text-sm">
            These are the patterns that keep people stuck at the same level for years — and what to do instead.
          </p>
          <div className="space-y-4">
            {commonMistakes.map((item, i) => (
              <div key={i} className="bg-[#fdf5f5] rounded-2xl p-6 border border-[#f5d0d0]">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-red-500 font-bold text-sm flex-shrink-0 mt-0.5">✗</span>
                  <h3 className="font-bold text-gray-800 text-sm">{item.mistake}</h3>
                </div>
                <div className="flex items-start gap-3 ml-5">
                  <span className="text-[#DC143C] font-bold text-sm flex-shrink-0 mt-0.5">✔</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW SHEETAL ACADEMY APPLIES THIS ── */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-5">
            How Sheetal Academy Applies This Method
          </h2>
          <p className="text-white/65 text-sm leading-relaxed mb-5">
            Every element of this 3-step method is built into Sheetal Academy&apos;s English speaking programme in Uran. The difference is that at Sheetal Academy, you do not follow this method in a group — you follow it in a private, individual session where your teacher focuses exclusively on your progress.
          </p>
          <p className="text-white/65 text-sm leading-relaxed mb-8">
            This is why students at Sheetal Academy improve in 3–6 months what takes years of self-study or group coaching to achieve. If you are in Uran or Navi Mumbai, you can attend in person. If you are anywhere else in India, our online course delivers the same individual coaching to your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/english-speaking-classes-uran" className="inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition shadow-lg">
              English Classes in Uran — Full Details →
            </a>
            <a href="/online-english-course" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition">
              Online English Course
            </a>
          </div>
        </div>
      </section>

      {/* ── SELF-STUDY FAILURE SECTION (converts researchers to leads) ── */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B22222] mb-6">
            Why Apps, YouTube, and Group Classes Don&apos;t Improve Your Spoken English
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Every year, thousands of people in Uran and Navi Mumbai try to improve their English through apps like Duolingo, YouTube videos, or joining group coaching classes. And every year, most of them are in the same place — knowing grammar but still unable to speak.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The reason is simple: <strong>you cannot learn to speak English without actually speaking English</strong> — out loud, regularly, and with someone who can correct you in real time. Apps give you grammar exercises. YouTube gives you examples. But neither actually makes you speak.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Group classes are closer — but in a group of 20 students, how much time do you actually spend speaking? A few minutes per session, if that. The teacher cannot focus on your specific accent, your specific grammar errors, or your specific vocabulary gaps.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            At <strong>Sheetal Academy, Uran</strong>, your teacher is focused on <em>you alone</em> in every session. Every error you make is caught and corrected. Every session is a speaking session — not a lecture. This is why our students improve spoken English faster than any other method in the region.
          </p>
          <a
            href="/english-speaking-classes-uran"
            className="inline-block px-7 py-3 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition text-sm"
          >
            See English Speaking Classes in Uran — Enrol Today →
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-4">
            Stop Wondering. Start Speaking.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Join Sheetal Academy, Uran — and experience the 3-step method that has transformed thousands of English learners since 1989. Individual coaching. No batch. 100% guarantee.
          </p>
          <a href="/#contact" className="glow-red inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1">
            Enquire Now — It&apos;s Free →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
