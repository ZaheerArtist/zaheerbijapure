import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Zaheer Bijapure | AI Film Director & Creative, Dubai',
  description: 'Zaheer Bijapure is an AI film director and creative based in Dubai: cinematic AI films, advertising concepts and visual campaigns, built on over a decade of animation and film VFX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Courier+Prime:wght@400;700&family=Figtree:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans bg-background text-textPrimary min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 