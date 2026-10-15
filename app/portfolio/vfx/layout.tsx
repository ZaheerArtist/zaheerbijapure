import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VFX Portfolio | Zaheer Bijapure, AI Filmmaker & VFX Artist, Dubai',
  description: 'VFX showreels by Zaheer Bijapure: layout, cinematic camera, previz and body tracking for feature films at MPC, DNEG and Red Chillies.',
  alternates: { canonical: 'https://zaheerartist.github.io/portfolio/vfx/' },
  openGraph: {
    title: 'VFX Portfolio | Zaheer Bijapure, AI Filmmaker & VFX Artist, Dubai',
    description: 'VFX showreels by Zaheer Bijapure: layout, cinematic camera, previz and body tracking for feature films at MPC, DNEG and Red Chillies.',
    url: 'https://zaheerartist.github.io/portfolio/vfx/',
    siteName: 'Zaheer Bijapure',
    images: [{ url: 'https://zaheerartist.github.io/images/og-card.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
