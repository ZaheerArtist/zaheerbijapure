import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zaheer Bijapure, AI Film Director, Dubai',
  description: 'Zaheer Bijapure, AI film director and creative in Dubai. From animation and Hollywood VFX at DNEG and MPC to AI films and campaigns at Saatchi & Saatchi ME.',
  alternates: { canonical: 'https://zaheerartist.github.io/about/' },
  openGraph: {
    title: 'About | Zaheer Bijapure, AI Film Director, Dubai',
    description: 'Zaheer Bijapure, AI film director and creative in Dubai. From animation and Hollywood VFX at DNEG and MPC to AI films and campaigns at Saatchi & Saatchi ME.',
    url: 'https://zaheerartist.github.io/about/',
    siteName: 'Zaheer Bijapure',
    images: [{ url: 'https://zaheerartist.github.io/images/og-card.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
