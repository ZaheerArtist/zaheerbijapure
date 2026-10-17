import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
  description: 'Career of Zaheer Bijapure: AI Senior Designer at Saatchi & Saatchi MEA in Dubai, AI VFX Lead at Studio Blo, and layout and tracking at MPC, DNEG and Red Chillies.',
  alternates: { canonical: 'https://zaheerbijapure.com/experience/' },
  openGraph: {
    title: 'Experience | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
    description: 'Career of Zaheer Bijapure: AI Senior Designer at Saatchi & Saatchi MEA in Dubai, AI VFX Lead at Studio Blo, and layout and tracking at MPC, DNEG and Red Chillies.',
    url: 'https://zaheerbijapure.com/experience/',
    siteName: 'Zaheer Bijapure',
    images: [{ url: 'https://zaheerbijapure.com/images/og-card.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
