import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Sheetal Academy, Uran | English Speaking Classes & Career Skills',
  description:
    'Master fluent English with Sheetal Academy, Uran. Join Navi Mumbai’s trusted institute for spoken English, personality development, and job readiness. Enroll today and grow your confidence!',
  keywords: [
    'Sheetal Academy Uran',
    'English Speaking Classes Uran',
    'Spoken English Navi Mumbai',
    'Personality Development',
    'Corporate Training',
    'Fluency Coaching',
    'English Classes Uran Navi Mumbai',
    'Communication Skills',
    'Interview Preparation',
    'Public Speaking',
  ],
  authors: [{ name: 'Sheetal Academy, Uran', url: 'http://sheetal-academy.vercel.app/' }],
  creator: 'Sheetal Academy',
  robots: 'index, follow',
  metadataBase: new URL('http://sheetal-academy.vercel.app/'),
  openGraph: {
    title: 'Sheetal Academy, Uran | Speak English Fluently with Confidence',
    description:
      'Join Sheetal Academy in Uran for expert-led English speaking and career skill training. Trusted by 1000+ students. 8 AM – 9 PM daily.',
    url: 'http://sheetal-academy.vercel.app/',
    siteName: 'Sheetal Academy Uran',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Sheetal Academy Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheetal Academy, Uran | English Fluency & Career Skills',
    description:
      'Fluent English, confident speaking, and career development at Sheetal Academy, Uran. Open 8 AM – 10 PM daily.',
    images: ['/logo.jpg'],
    creator: '@sheetalacademyuran',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
