import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
  description: 'Zaheer Bijapure, cinematic creative and VFX artist in Dubai. From animation and Hollywood VFX at DNEG and MPC to AI films and campaigns at Saatchi & Saatchi MEA.',
  alternates: { canonical: 'https://zaheerbijapure.com/about/' },
  openGraph: {
    title: 'About | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
    description: 'Zaheer Bijapure, cinematic creative and VFX artist in Dubai. From animation and Hollywood VFX at DNEG and MPC to AI films and campaigns at Saatchi & Saatchi MEA.',
    url: 'https://zaheerbijapure.com/about/',
    siteName: 'Zaheer Bijapure',
    images: [{ url: 'https://zaheerbijapure.com/images/og-card.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
