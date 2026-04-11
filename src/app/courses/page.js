// app/courses/page.js
import HomePage from '../HomePage';

export async function generateMetadata({ params }) {
  // Default to Uran if no dynamic location route
  const location = params?.location?.replace('-', ' ') || 'Uran';
  const services = ['English Speaking', 'Personality Development', 'Communication Skills', 'Interview Preparation'];

  const title = `${services.join(', ')} Courses in ${location} | Sheetal Academy`;
  const description = `Enroll in ${services.join(', ').toLowerCase()} courses at Sheetal Academy in ${location}. Improve English fluency, communication, personality development, and interview skills.`;

  return {
    title,
    description,
    alternates: { canonical: '/courses' },
    openGraph: { title, description, url: `https://www.sheetalacademy.com/courses`, siteName: 'Sheetal Academy', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page({ params }) {
  const location = params?.location?.replace('-', ' ') || 'Uran';
  return <HomePage location={location} service="Courses" />;
}