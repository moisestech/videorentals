import type { Metadata } from 'next';
import LandingContent from '@/components/landing/LandingContent';

export const metadata: Metadata = {
  title: 'Video Rentals Miami | TV Rentals for Artists & Galleries',
  description: 'High-quality TV and display rentals for Miami\'s creative community. Perfect for art galleries, installations, student exhibitions, and immersive experiences. Flexible, affordable, community-focused.',
  keywords: 'TV rental Miami, art gallery displays, exhibition screens, digital art installation, creative display rental, art show equipment, gallery TV rental, student exhibition rental',
  openGraph: {
    title: 'Video Rentals Miami | TV Rentals for Artists & Galleries',
    description: 'High-quality TV and display rentals for Miami\'s creative community. Perfect for art galleries, installations, student exhibitions, and immersive experiences.',
    type: 'website',
    url: 'https://tv305.miami',
    images: [
      {
        url: 'https://tv305.miami/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Video Rentals Miami - TV Displays for Creative Exhibitions'
      }
    ],
    locale: 'en_US',
    siteName: 'Video Rentals Miami'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Rentals Miami | TV Rentals for Artists & Galleries',
    description: 'High-quality TV and display rentals for Miami\'s creative community. Perfect for art galleries, installations, and immersive experiences.',
    images: ['https://tv305.miami/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://tv305.miami'
  }
};

export default function Home() {
  return <LandingContent />;
}
