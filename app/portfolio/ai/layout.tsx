import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Films | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
  description: 'AI films and brand stories directed by Zaheer Bijapure in Dubai, made with generative AI and finished with the care of film VFX.',
  alternates: { canonical: 'https://zaheerartist.github.io/portfolio/ai/' },
  openGraph: {
    title: 'AI Films | Zaheer Bijapure, Cinematic Creative & VFX Artist, Dubai',
    description: 'AI films and brand stories directed by Zaheer Bijapure in Dubai, made with generative AI and finished with the care of film VFX.',
    url: 'https://zaheerartist.github.io/portfolio/ai/',
    siteName: 'Zaheer Bijapure',
    images: [{ url: 'https://zaheerartist.github.io/images/og-card.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
