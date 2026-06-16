import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'TATSU Global | Telecom, OFC, Networking & Solar',
  description: 'Leading infrastructure solutions provider specializing in telecom towers, optical fiber cables, networking, solar installations, and IT solutions. 15+ years of excellence, 500+ projects completed.',
  keywords: 'telecom infrastructure, optical fiber, OFC, networking, solar solutions, IT solutions, tower installation, fiber optic, 5G infrastructure, technical manpower',
  openGraph: {
    type: 'website',
    url: 'https://tatsuglobal.in/',
    title: 'TATSU Global | Telecom, OFC, Networking & Solar',
    description: 'Leading infrastructure solutions provider specializing in telecom towers, optical fiber cables, networking, solar installations, and IT solutions.',
    images: ['https://tatsuglobal.in/telecom-tower.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TATSU Global | Telecom, OFC, Networking & Solar',
    description: 'Leading infrastructure solutions provider specializing in telecom towers, optical fiber cables, networking, solar installations, and IT solutions.',
    images: ['https://tatsuglobal.in/telecom-tower.jpg'],
  },
  alternates: {
    canonical: 'https://tatsuglobal.in/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%94%B7%3C/text%3E%3C/svg%3E" />
      </head>
      <body className={`bg-[#050505] text-white antialiased ${inter.className} ${inter.variable} ${spaceGrotesk.variable}`}>
        <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
