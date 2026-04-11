import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Sheetal Academy Uran | #1 English Speaking Institute Since 1989',
  description:
    "Sheetal Academy — Uran's most trusted English speaking institute since 1989. Spoken English, grammar, vocabulary, personality development, corporate training & more. No batch system. Flexible timings 8 AM–9 PM. 100% guarantee.",
  keywords: [
    'Sheetal Academy Uran',
    'Sheetal Academy',
    'english classes uran',
    'english classes in uran',
    'spoken english classes uran',
    'english academy uran',
    'english speaking course uran',
    'spoken english in uran',
    'best english classes in uran',
    'english coaching uran',
    'top english institute uran',
    'spoken english near uran',
    'english speaking classes navi mumbai',
    'spoken english navi mumbai',
    'english institute uran navi mumbai',
    'personality development uran',
    'personality development classes uran',
    'spoken english classes for beginners uran',
    'english communication course uran',
    'english classes for job interview uran',
    'corporate communication training uran',
    'call centre training uran',
    'american accent training uran',
    'public speaking classes uran',
    'english speaking course near me',
    'best spoken english classes in uran',
    'english fluency course uran',
    'spoken english for students uran',
    'spoken english for professionals uran',
    'grammar course uran',
    'vocabulary building uran',
    'pronunciation training uran',
    'confidence speaking course uran',
    'interview preparation english uran',
    'online english classes uran',
    // Competitor-beating geo additions
    'english classes panvel',
    'spoken english panvel',
    'english institute panvel',
    'english speaking classes near panvel',
    'english classes near uran',
    'english coaching near panvel',
    'english academy raigad',
    'best english classes raigad district',
    'english speaking classes new panvel',
    'spoken english khopoli',
    'english classes alibag',
    'english coaching pen maharashtra',
    'english classes belapur',
    'english institute nerul',
    'english coaching kharghar',
    'uran english tuition',
    'uran spoken english tutor',
    'english medium coaching uran',
    'english speaking training uran maharashtra',
    'sheetal academy fees',
    'sheetal academy uran fees',
    'sheetal academy uran contact',
    'sheetal academy uran address',
    'english class near me uran',
  ],
  authors: [{ name: 'Sheetal Academy, Uran', url: 'https://sheetal-academy.vercel.app/' }],
  creator: 'Sheetal Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  metadataBase: new URL('https://sheetal-academy.vercel.app/'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sheetal Academy Uran | #1 English Speaking Institute Since 1989',
    description:
      "Join Sheetal Academy in Uran — spoken English, grammar, vocabulary, personality development, corporate training & call centre coaching. No batch. Flexible timings. 100% guarantee.",
    url: 'https://sheetal-academy.vercel.app/',
    siteName: 'Sheetal Academy, Uran',
    images: [{ url: '/Card.png', width: 1200, height: 630, alt: 'Sheetal Academy — English Speaking Institute, Uran' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheetal Academy Uran | English Speaking Classes & Personality Development',
    description: "Uran's most trusted English institute since 1989. Spoken English, personality development, corporate training. Open Mon–Sat, 8 AM–9 PM.",
    images: ['/Card.png'],
    creator: '@sheetalacademyuran',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': 'https://sheetal-academy.vercel.app/#organization',
  name: 'Sheetal Academy',
  alternateName: ['Sheetal Academy Uran', 'Sheetal English Academy', 'Sheetal Academy English Speaking Institute'],
  url: 'https://sheetal-academy.vercel.app/',
  logo: 'https://sheetal-academy.vercel.app/logo.jpg',
  image: 'https://sheetal-academy.vercel.app/Card.png',
  foundingDate: '1989',
  priceRange: '₹₹',
  telephone: '+91-9967286368',
  sameAs: [
    'https://instagram.com/sheetalacademyuran',
    'https://wa.me/919967286368',
  ],
  description:
    "Sheetal Academy, established in 1989, is Uran's most trusted English speaking institute offering spoken English, grammar, vocabulary, personality development, corporate training, and call centre coaching with individual attention and no batch system.",
  areaServed: [
    { '@type': 'City', name: 'Uran' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Panvel' },
    { '@type': 'City', name: 'Belapur' },
    { '@type': 'City', name: 'Nerul' },
    { '@type': 'City', name: 'Kharghar' },
    { '@type': 'City', name: 'New Panvel' },
    { '@type': 'AdministrativeArea', name: 'Raigad District' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'English Speaking & Personality Development Courses',
    itemListElement: [
      {
        '@type': 'Course',
        name: 'English Speaking Classes in Uran',
        url: 'https://sheetal-academy.vercel.app/english-speaking-classes-uran',
        description:
          'Comprehensive spoken English training covering grammar, vocabulary, pronunciation, fluency, and speaking practice. Best English speaking classes in Uran since 1989.',
        provider: { '@type': 'EducationalOrganization', name: 'Sheetal Academy', url: 'https://sheetal-academy.vercel.app/' },
      },
      {
        '@type': 'Course',
        name: 'Personality Development Course in Uran',
        url: 'https://sheetal-academy.vercel.app/personality-development',
        description:
          'Business communication, voice & accent training, soft skills, body language, confidence boosting, leadership, and motivating sessions — 15 modules.',
        provider: { '@type': 'EducationalOrganization', name: 'Sheetal Academy', url: 'https://sheetal-academy.vercel.app/' },
      },
      {
        '@type': 'Course',
        name: 'Communication Skills Course in Uran',
        url: 'https://sheetal-academy.vercel.app/communication-skills',
        description:
          'Build professional English communication for career and social success — public speaking, GD, debate, interview preparation, and corporate etiquette.',
        provider: { '@type': 'EducationalOrganization', name: 'Sheetal Academy', url: 'https://sheetal-academy.vercel.app/' },
      },
      {
        '@type': 'Course',
        name: 'Interview Preparation in Uran',
        url: 'https://sheetal-academy.vercel.app/interview-preparation',
        description:
          'Mock interviews, group discussion, professional English coaching, and speaking practice for job seekers in Uran and Navi Mumbai.',
        provider: { '@type': 'EducationalOrganization', name: 'Sheetal Academy', url: 'https://sheetal-academy.vercel.app/' },
      },
      {
        '@type': 'Course',
        name: 'Online English Course',
        url: 'https://sheetal-academy.vercel.app/online-english-course',
        description:
          'Learn spoken English from home — individual coaching with doorstep course material delivery. Available across India.',
        provider: { '@type': 'EducationalOrganization', name: 'Sheetal Academy', url: 'https://sheetal-academy.vercel.app/' },
      },
    ],
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '21:00',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9967286368',
    contactType: 'customer support',
    availableLanguage: ['English', 'Hindi', 'Marathi'],
    areaServed: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Suresh P.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'I joined with zero confidence. After 4 months I cleared my BPO interview. Individual attention made the difference.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priya M.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Joined at age 38. Within 6 months I was speaking at community events. No homework, no pressure — just results.',
    },
  ],
  location: [
    {
      '@type': 'Place',
      name: 'Sheetal Academy — Uran Branch',
      hasMap: 'https://maps.google.com/?q=Sheetal+Academy+Uran+Kamtha+Road',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.8907,
        longitude: 72.9381,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop no - 43, Shreeraj Nagar Apartment, Kamtha Road',
        addressLocality: 'Uran',
        addressRegion: 'Maharashtra',
        postalCode: '400702',
        addressCountry: 'IN',
      },
      telephone: '+91-9967286368',
    },
  ],
  hasPart: [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best English academy in Uran?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sheetal Academy, established since 1989, is Uran's most trusted and longest-running English speaking institute with individual attention, no batch system, and a 100% success guarantee.",
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best English speaking class near Panvel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sheetal Academy in Uran is the nearest and most reputed English speaking institute for students from Panvel, New Panvel, and surrounding areas. Established since 1989, it offers individual attention, no batch system, and flexible timings.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to learn spoken English at Sheetal Academy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The course duration is 6 months for 1-hour daily sessions or 3 months for 2-hour daily sessions. Classes are available Monday to Saturday, 8 AM to 9 PM.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a batch system at Sheetal Academy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Sheetal Academy follows an individual attention model — one teacher for one student. There is no group or batch system.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the age limit to join Sheetal Academy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no age limit. Anyone between 4 years to 70 years of age can join Sheetal Academy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sheetal Academy offer online English classes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sheetal Academy offers both online and offline English speaking courses with door-step course material delivery and session compensation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to improve spoken English in Uran?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enroll at Sheetal Academy in Uran for a structured spoken English program covering grammar, vocabulary, pronunciation, modern English, and extensive speaking practice sessions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sheetal Academy offer personality development classes in Uran?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sheetal Academy offers a comprehensive 15-module personality development course covering voice & accent training, body language, confidence boosting, leadership, corporate communication, and more.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Sheetal Academy address in Uran?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sheetal Academy is located at Shop no 43, Shreeraj Nagar Apartment, Kamtha Road, Uran, Navi Mumbai — 400702. Contact: +91-9967286368.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sheetal Academy issue a certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, a Certificate of Excellence is issued to students upon successful completion of the course.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the fee for English classes at Sheetal Academy Uran?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Please contact Sheetal Academy directly at +91-9967286368 for current fee details. The initial consultation is free.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Sheetal Academy the best coaching class in Uran?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sheetal Academy is Uran's longest-running English speaking institute, established in 1989. With a strict individual-attention model, no batch system, and a 100% success guarantee, it is consistently the top-rated coaching institute in Uran for English speaking and personality development.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are there English speaking classes near Panvel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sheetal Academy in Uran is the closest and most trusted English speaking institute to Panvel and New Panvel — approximately 20–30 minutes by road. Online classes are also available.',
          },
        },
      ],
    },
  ],
};

// WebSite schema — enables Google Sitelinks Search Box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://sheetal-academy.vercel.app/#website',
  name: 'Sheetal Academy',
  url: 'https://sheetal-academy.vercel.app/',
  description: "Uran's most trusted English speaking institute since 1989.",
  publisher: { '@id': 'https://sheetal-academy.vercel.app/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sheetal-academy.vercel.app/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// BreadcrumbList for homepage
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sheetal-academy.vercel.app/' },
    { '@type': 'ListItem', position: 2, name: 'English Speaking Classes in Uran', item: 'https://sheetal-academy.vercel.app/english-speaking-classes-uran' },
    { '@type': 'ListItem', position: 3, name: 'Personality Development', item: 'https://sheetal-academy.vercel.app/personality-development' },
    { '@type': 'ListItem', position: 4, name: 'Communication Skills', item: 'https://sheetal-academy.vercel.app/communication-skills' },
    { '@type': 'ListItem', position: 5, name: 'Interview Preparation', item: 'https://sheetal-academy.vercel.app/interview-preparation' },
    { '@type': 'ListItem', position: 6, name: 'Spoken English Near Panvel', item: 'https://sheetal-academy.vercel.app/spoken-english-panvel' },
    { '@type': 'ListItem', position: 7, name: 'English Classes Near Uran', item: 'https://sheetal-academy.vercel.app/english-classes-near-uran' },
    { '@type': 'ListItem', position: 8, name: 'Online English Course', item: 'https://sheetal-academy.vercel.app/online-english-course' },
    { '@type': 'ListItem', position: 9, name: 'How to Improve English Speaking', item: 'https://sheetal-academy.vercel.app/how-to-improve-english-speaking' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-black font-sans`}>
        <Script id="sheetal-org-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="sheetal-website-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script id="sheetal-breadcrumb-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(breadcrumbSchema)}
        </Script>
        {children}
      </body>
    </html>
  );
}