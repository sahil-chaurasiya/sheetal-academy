import SubPageLayout from '@/components/SubPageLayout';

export const metadata = {
  metadataBase: new URL('https://sheetal-academy.vercel.app'),
  title: 'FAQs | Sheetal Academy — English Speaking Classes Uran',
  description:
    'Answers to frequently asked questions about Sheetal Academy, Uran — courses, timings, age limit, batch system, fees, online classes, speaking practice, address, and more.',
  keywords: [
    'sheetal academy faq',
    'sheetal academy uran fees',
    'sheetal academy timings',
    'sheetal academy address',
    'english classes uran faq',
    'sheetal academy contact',
    'how to join sheetal academy',
    'sheetal academy courses',
  ],
  alternates: { canonical: 'https://sheetal-academy.vercel.app/faqs' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'FAQs | Sheetal Academy — English Speaking Classes Uran',
    description: 'All your questions about Sheetal Academy Uran answered — courses, timings, age limit, batch system, address, and more.',
    url: 'https://sheetal-academy.vercel.app/faqs',
    siteName: 'Sheetal Academy Uran',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best English speaking institute in Uran?',
      acceptedAnswer: { '@type': 'Answer', text: "Sheetal Academy, established since 1989, is Uran's most trusted and longest-running English speaking institute. With individual attention, no batch system, and a 100% success guarantee, it is consistently the top choice in Uran and Navi Mumbai." },
    },
    {
      '@type': 'Question',
      name: 'What is Sheetal Academy address in Uran?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sheetal Academy is located at Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran, Navi Mumbai – 400 702. Phone: +91-9967286368.' },
    },
    {
      '@type': 'Question',
      name: 'What are the timings of Sheetal Academy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sheetal Academy is open Monday to Saturday, 8 AM to 9 PM. Students can attend at any time during these hours — there is no fixed batch or group schedule.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to learn spoken English at Sheetal Academy?',
      acceptedAnswer: { '@type': 'Answer', text: 'The course is 6 months at 1 hour per day, or 3 months at 2 hours per day, Monday to Saturday.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a batch or group system at Sheetal Academy?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Sheetal Academy has no batch or group system. Every student receives individual, one-on-one attention. One teacher, one student — always.' },
    },
    {
      '@type': 'Question',
      name: 'What is the age limit to join Sheetal Academy?',
      acceptedAnswer: { '@type': 'Answer', text: 'There is no age bar. Anyone from 4 years to 70 years of age is welcome. The teaching approach is tailored for every learner.' },
    },
    {
      '@type': 'Question',
      name: 'What does the spoken English course at Sheetal Academy cover?',
      acceptedAnswer: { '@type': 'Answer', text: 'The course covers Grammar, Vocabulary (animated & modern English), Spoken English (frequently used sentences), Smart English (idioms, proverbs, phrases), and Speaking Practice — including Group Discussion, Debate, Interview Practice, Stage Speaking, Newspaper Reading, and Listening Practice.' },
    },
    {
      '@type': 'Question',
      name: 'What is the Personality Development course at Sheetal Academy?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 15-module course covers: Business Communication, Voice & Accent Training, Soft Skills, Letter Writing, Email Drafting, Telephone Etiquette, Table Manners, Stress Management, Time Management, Leadership Skill, Positive Thinking, Stage & Crowd Holding, Confidence Boosting, Body Language, and Motivating Sessions.' },
    },
    {
      '@type': 'Question',
      name: 'Does Sheetal Academy offer online English classes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Both online and offline courses are available. Online students get individual teaching, session compensation for missed classes, doorstep material delivery, and are welcome to visit the branch for speaking practice.' },
    },
    {
      '@type': 'Question',
      name: 'Is there homework at Sheetal Academy?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All learning and practice happens during class. There is no homework or home assignment.' },
    },
    {
      '@type': 'Question',
      name: 'Does Sheetal Academy offer Call Centre and American Accent training?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Call centre training including American Accent coaching is part of the Speaking Practice programme and also available as part of the Corporate Training modules.' },
    },
    {
      '@type': 'Question',
      name: 'Is a certificate issued at Sheetal Academy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. A Certificate of Excellence is issued to all students upon successful course completion.' },
    },
    {
      '@type': 'Question',
      name: 'How to reach Sheetal Academy from Panvel?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sheetal Academy in Uran is about 20–30 minutes from Panvel by road. For students who cannot commute, online classes with doorstep material delivery are also available.' },
    },
  ],
};

const faqs = faqSchema.mainEntity;

export default function FAQsPage() {
  return (
    <SubPageLayout pageTitle="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section
        className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#DC143C]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC143C] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#DC143C] text-white text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
            ✦ All Your Questions Answered
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            Frequently Asked
            <br className="hidden md:block" />
            <span className="text-[#DC143C] drop-shadow-[0_2px_8px_rgba(220,20,60,0.5)]">Questions</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-2xl mb-8">
            Everything you need to know about <strong className="text-white">Sheetal Academy, Uran</strong> — our courses, timings, approach, address, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="inline-block px-8 py-3.5 bg-[#DC143C] text-white font-semibold rounded-xl hover:bg-[#b8102e] transition-all duration-300 shadow-lg">
              Still Have Questions? Contact Us
            </a>
            <a href="/" className="inline-block px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#DC143C]/40 to-transparent" />

      {/* FAQ LIST */}
      <section className="bg-[#fdf5f5] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#f5d0d0] hover:border-[#DC143C]/40 transition-colors"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h2
                className="font-bold text-gray-800 mb-3 text-base"
                itemProp="name"
              >
                {faq.name}
              </h2>
              <div
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-20"
        style={{ background: 'linear-gradient(135deg, #1a0404 0%, #2d0808 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#DC143C22,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Sheetal Academy?</h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Your questions are answered — now take the first step. Contact us today for a free consultation and start your English speaking journey.
          </p>
          <a
            href="/#contact"
            className="inline-block px-10 py-4 bg-[#DC143C] text-white font-bold rounded-xl text-lg hover:bg-[#b8102e] transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Enquire Now →
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
