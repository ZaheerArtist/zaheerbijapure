import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Zaheer Bijapure, AI Filmmaker & VFX Artist, Dubai',
  description: 'Career of Zaheer Bijapure: AI Senior Designer at Saatchi & Saatchi ME in Dubai, AI VFX Lead at Studio Blo, and layout and tracking at MPC, DNEG and Red Chillies.',
  alternates: { canonical: 'https://zaheerartist.github.io/experience/' },
  openGraph: {
    title: 'Experience | Zaheer Bijapure, AI Filmmaker & VFX Artist, Dubai',
    description: 'Career of Zaheer Bijapure: AI Senior Designer at Saatchi & Saatchi ME in Dubai, AI VFX Lead at Studio Blo, and layout and tracking at MPC, DNEG and Red Chillies.',
    url: 'https://zaheerartist.github.io/experience/',
    siteName: 'Zaheer Bijapure',
    images: [{ url: 'https://zaheerartist.github.io/images/og-card.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
