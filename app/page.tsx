'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter, FaImdb, FaPlay } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import ParticleBackground from '../components/ParticleBackground';
import VideoBackground from '../components/VideoBackground';
import ImagePathDebug from '../components/ImagePathDebug';
import CustomImage from '../components/CustomImage';

// Skills and tools data
const tools = [
  { 
    name: 'Autodesk Maya', 
    logo: '/logos/software/maya.png',
    altText: 'Maya Logo'
  },
  { 
    name: '3D Equalizer', 
    logo: '/logos/software/3dequalizer.png',
    altText: '3D Equalizer Logo'
  },
  { 
    name: 'Adobe Photoshop', 
    logo: '/logos/software/Photoshop.png',
    altText: 'Photoshop Logo'
  },
  { 
    name: 'Adobe After Effects', 
    logo: '/logos/software/aftereffects.png',
    altText: 'After Effects Logo'
  },
  { 
    name: 'Adobe Premiere Pro', 
    logo: '/logos/software/premierepro.png',
    altText: 'Premiere Pro Logo'
  },
  { 
    name: 'Nuke', 
    logo: '/logos/software/nuke.png',
    altText: 'Nuke Logo'
  },
  { 
    name: 'Houdini', 
    logo: '/logos/software/houdini.png',
    altText: 'Houdini Logo'
  },
  { 
    name: 'Runway', 
    logo: '/logos/software/runway.png',
    altText: 'Runway Logo'
  },
  { 
    name: 'Freepik', 
    logo: '/logos/software/freepik.png',
    altText: 'Freepik Logo'
  },
  { 
    name: 'Kling', 
    logo: '/logos/software/kling.png',
    altText: 'Kling Logo'
  },
  { 
    name: 'Midjourney', 
    logo: '/logos/software/midjourney.png',
    altText: 'Midjourney Logo'
  }
];

// Companies worked with
const companies = [
  { 
    name: 'MPC (Moving Picture Company)', 
    logo: '/logos/mpc.jpg', 
    color: '#E50914',
    altText: 'MPC Logo'
  },
  { 
    name: 'DNEG', 
    logo: '/logos/DNEG.jpg', 
    color: '#0078D7',
    altText: 'DNEG Logo'
  },
  { 
    name: 'Red Chillies VFX', 
    logo: '/logos/Redchilliesvfx.png', 
    color: '#FF9800',
    altText: 'Red Chillies VFX Logo'
  },
  { 
    name: 'Tata Elxsi', 
    logo: '/logos/TataElxsi.jpg', 
    color: '#4CAF50',
    altText: 'Tata Elxsi Logo'
  }
];

const awards = [
  { name: 'Spotlight Award', year: '2023', color: '#FFD700' },
  { name: 'Star Performer Award', year: '2022', color: '#FF6B6B' },
];

const process = [
  { title: 'Concept', description: 'Research and ideation phase' },
  { title: 'Research', description: 'Technical exploration and testing' },
  { title: 'Execution', description: 'Implementation and refinement' },
  { title: 'Post-Production', description: 'Final touches and delivery' },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(true);
  const [currentCompany, setCurrentCompany] = useState(0);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % companies.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mqapaqqq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {useVideo ? (
          <VideoBackground 
            videoSrc="/videos/background.mp4" 
            fallbackImageSrc="/images/background-fallback.jpg"
            opacity={0.6}
            showControls={false}
          />
        ) : (
          <ParticleBackground />
        )}
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-accent1 bg-clip-text text-transparent">
              Zaheer Bijapure
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                VFX & AI Artist Crafting Future Realities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-textSecondary mb-8">
              VFX Layout | Previz & Techviz | Camera & Bodytrack | Animation | AI
            </p>
            <div className="flex gap-6 justify-center">
                <Link
                  href="/portfolio/vfx"
                  className="btn-primary group"
                >
                  View VFX Work
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio/ai"
                  className="btn-secondary group"
                >
                  Explore AI Projects
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            
            {/* IMDb and LinkedIn profile links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center gap-4 mt-8"
            >
              <a 
                href="https://www.imdb.com/name/nm12429900/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-[#f5c518] hover:bg-[#e3b408] text-black font-medium py-2 px-4 rounded-lg transition-all duration-300"
              >
                <FaImdb className="mr-2 text-xl" /> IMDb Profile
              </a>
              <a 
                href="http://www.linkedin.com/in/zaheer-bijapure" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-[#0077b5] hover:bg-[#005e8c] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
              >
                <FaLinkedin className="mr-2 text-xl" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent2"
          >
            <HiArrowRight className="transform rotate-90 w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* Companies & Skills Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
          <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Worked With</h2>
            <div className="w-20 h-1 bg-accent2 mx-auto mb-6"></div>
          </motion.div>

          {/* Companies Slideshow */}
          <div className="relative h-80 mb-16 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ 
                    opacity: currentCompany === index ? 1 : 0,
                    x: currentCompany === index ? '0%' : index < currentCompany ? '-100%' : '100%',
                    position: currentCompany === index ? 'relative' : 'absolute',
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className="w-full flex flex-col items-center justify-center"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: currentCompany === index ? 'auto' : 'none'
                  }}
                >
                  <motion.div 
                    className="w-48 h-48 mb-8 rounded-lg flex items-center justify-center bg-white p-4 shadow-lg"
                    animate={{ scale: 1 }}
                    initial={{ scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="relative w-full h-full">
                        <CustomImage
                        src={company.logo}
                        alt={company.altText}
                        fill
                        sizes="(max-width: 768px) 192px, 192px"
                        className="object-contain"
                        unoptimized={true}
                      />
                    </div>
                  </motion.div>
                  <motion.h3 
                    className="text-center font-bold text-2xl mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {company.name}
                  </motion.h3>
                </motion.div>
              ))}
              </div>
              
            {/* Slide indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-6">
              {companies.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentCompany === index ? 'bg-accent1 w-6' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentCompany(index)}
                  aria-label={`View company ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Tools Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Software</h2>
            <div className="w-20 h-1 bg-accent2 mx-auto mb-6"></div>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => {
              // Determine if this is a priority tool that needs highlighting
              const isAdobe = tool.name.includes('Adobe');
              const isVFXTool = ['Nuke', 'Houdini'].includes(tool.name);
              const needsHighlight = isAdobe || isVFXTool;
              
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`h-20 w-full flex items-center justify-center text-center p-2 rounded-lg ${needsHighlight ? 'bg-accent1/10 border border-accent1/30' : 'bg-primary/60'} hover:bg-accent1/20 transition-all duration-300`}
                  >
                    <p className="font-medium">{tool.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-textSecondary mb-6">
                With over 9 years in the VFX industry and a passion for AI, I blend technical precision
                with creative vision to craft immersive digital experiences. My journey has taken me from
                traditional VFX to the cutting edge of AI-powered creativity.
              </p>
              <div className="flex gap-4 mb-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center bg-primary p-4 rounded-lg"
                  >
                    <div 
                      className="w-8 h-8 mr-3 rounded-full flex items-center justify-center text-black text-xs font-bold"
                      style={{ backgroundColor: award.color }}
                    >
                      {award.name.substring(0, 2).toUpperCase()}
                </div>
                    <div>
                      <p className="font-medium">{award.name}</p>
                      <p className="text-sm text-textSecondary">{award.year}</p>
                </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/about" className="btn-secondary inline-flex items-center group">
                Learn More
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-primary inline-flex items-center group ml-4">
                Get in Touch, Let's Create Together
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent2/20 to-accent1/20 max-w-[300px] w-full mx-auto"
            >
                <CustomImage
                src={`/images/profile.jpg?v=${Date.now()}`}
                alt="Zaheer Bijapure - VFX & AI Artist"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover hover:scale-105 transition-all duration-500"
                priority
                unoptimized={true}
              />
            </motion.div>
          </div>
          </div>
        </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background/90">
          <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
            <div className="w-20 h-1 bg-accent2 mx-auto mb-6"></div>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's collaborate on your next project
              and create something extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-textSecondary">Feel free to reach out through any channel:</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="http://www.linkedin.com/in/zaheer-bijapure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#C13584] hover:text-[#C13584]/80 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.imdb.com/name/nm12429900/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#f5c518] hover:text-[#f5c518]/80 transition-colors"
                  aria-label="IMDb Profile"
                >
                  <FaImdb />
                </a>
              </div>
              <div className="pt-4">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:zaheerartist@gmail.com" className="text-accent2 hover:underline">zaheerartist@gmail.com</a></p>
                <p className="mb-2"><strong>Location:</strong> Mumbai, India</p>
                <p><strong>Phone:</strong> <a href="tel:+919730326776" className="text-accent2 hover:underline">+91 9730 326 776</a></p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
                onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                    name="name"
                    required
                  className="w-full bg-primary border border-secondary rounded-lg p-3 focus:border-accent2 focus:outline-none transition-colors"
                  placeholder="Your name"
                    disabled={formStatus === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                    name="email"
                    required
                  className="w-full bg-primary border border-secondary rounded-lg p-3 focus:border-accent2 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                    disabled={formStatus === 'submitting'}
                />
            </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                    name="message"
                    required
                  rows={4}
                  className="w-full bg-primary border border-secondary rounded-lg p-3 focus:border-accent2 focus:outline-none transition-colors"
                  placeholder="Tell me about your project"
                    disabled={formStatus === 'submitting'}
                ></textarea>
            </div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`btn-primary w-full flex items-center justify-center gap-2 group ${
                    formStatus === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                Send Message
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
              </button>
            </motion.form>
            </div>
          </div>
        </section>

        {/* Image Path Debug */}
        <ImagePathDebug />
      </div>
    </div>
  );
} 