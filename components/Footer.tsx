'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaImdb } from 'react-icons/fa';
import { ContactInfo } from './ContactInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/zaheerbijapure/', ariaLabel: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/zaheerartist/', ariaLabel: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com/zaheerartist', ariaLabel: 'Twitter' },
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@zaheerartist', ariaLabel: 'YouTube' },
    { icon: <FaImdb />, url: 'https://www.imdb.com/name/nm12429900/', ariaLabel: 'IMDb' },
  ];

  return (
    <footer className="bg-primary pt-12 pb-8 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Short Bio */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center mb-4">
              <div className="flex items-center justify-center bg-accent1 w-8 h-8 rounded-md">
                <span className="text-white font-bold text-sm">ZB</span>
              </div>
              <div className="ml-2">
                <span className="text-lg font-heading font-bold text-white block text-center">
                  Zaheer <span className="text-accent1">Bijapure</span>
                </span>
                <span className="text-xs text-white/80 font-medium block text-center">VFX & AI</span>
              </div>
            </Link>
            <p className="text-sm text-textSecondary mb-6">
              VFX Layout & 3D Artist with 9 years of experience creating immersive visual experiences for film, television, and digital media.
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
              {['Home', 'About', 'VFX Portfolio', 'AI Portfolio', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-textSecondary hover:text-accent1 transition-colors duration-300"
                  >
                    {item}
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
              href="/contact"
              className="bg-accent2 text-white hover:bg-accent2/80 transition-all duration-300 rounded-full inline-block mt-4 text-sm px-4 py-2"
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