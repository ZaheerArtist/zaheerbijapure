'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaYoutube, FaImdb } from 'react-icons/fa';
import { ContactInfo } from './ContactInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/zaheer-bijapure/', ariaLabel: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/zaheerbijapure/', ariaLabel: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@ZaheerBijapure', ariaLabel: 'YouTube' },
    { icon: <FaImdb />, url: 'https://www.imdb.com/name/nm12429900/', ariaLabel: 'IMDb' },
  ];

  return (
    <footer className="bg-primary pt-12 pb-8 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Short Bio */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center mb-4">
              <div className="flex items-center justify-center border border-accent1 w-8 h-8">
                <span className="font-heading font-bold text-sm text-textPrimary">ZB</span>
              </div>
              <div className="ml-2">
                <span className="text-lg font-heading font-bold text-white block text-center">
                  Zaheer <span className="text-accent1">Bijapure</span>
                </span>
                <span className="text-[0.62rem] text-textSecondary font-mono uppercase tracking-[0.2em] block">AI Film Director</span>
              </div>
            </Link>
            <p className="text-sm text-textSecondary mb-6">
              AI film director and creative. Cinematic AI films and campaigns, built on 10 years of VFX for Hollywood and Indian films. Currently AI Senior Designer at Saatchi & Saatchi ME, Publicis Groupe.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-textSecondary hover:text-accent1 transition-colors duration-300 text-xl"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about/' },
                { name: 'VFX Portfolio', path: '/portfolio/vfx/' },
                { name: 'AI Portfolio', path: '/portfolio/ai/' },
                { name: 'Experience', path: '/experience/' },
                { name: 'Contact', path: '/contact/' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-textSecondary hover:text-accent1 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ContactInfo />
            <Link
              href="/contact/"
              className="bg-accent1 text-background hover:bg-accent1/80 transition-all duration-300 rounded-none inline-block mt-4 text-sm px-4 py-2"
            >
              Get in Touch, Let's Create Together
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-secondary text-center text-sm text-textSecondary">
          <p>© {currentYear} Zaheer Bijapure. All Rights Reserved.</p>
          <p className="mt-2">Website designed with <span className="text-accent1">❤</span> by Zaheer Bijapure</p>
        </div>
      </div>
    </footer>
  );
}; 