import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
  description: 'Get in touch with Zaheer Bijapure, cinematic creative and VFX artist in Dubai, about AI films, brand campaigns and creative development.',
  alternates: { canonical: 'https://zaheerbijapure.com/contact/' },
  openGraph: {
    title: 'Contact | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
    description: 'Get in touch with Zaheer Bijapure, cinematic creative and VFX artist in Dubai, about AI films, brand campaigns and creative development.',
    url: 'https://zaheerbijapure.com/contact/',
    siteName: 'Zaheer Bijapure',
    images: [{ url: 'https://zaheerbijapure.com/images/og-card.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
