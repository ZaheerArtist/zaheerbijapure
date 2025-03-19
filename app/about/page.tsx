'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaDesktop, FaCube, FaCode, FaLightbulb, FaRocket, FaGraduationCap, FaCamera, FaFilm, FaRobot, FaVideo, FaImdb, FaAward, FaStar, FaChevronDown, FaChevronUp, FaLinkedin, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import { handleImageError } from '../utils/imagePathFixer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Force images to be visible after a timeout
  useEffect(() => {
    const forceImagesVisible = setTimeout(() => {
      console.log('🔧 Forcing all images to be visible due to timeout');
      document.querySelectorAll('img').forEach((img: HTMLImageElement) => {
        img.style.opacity = '1';
        img.classList.add('force-visible');
      });
      
      // Also remove all skeleton loaders
      document.querySelectorAll('.thumbnail-skeleton').forEach((skeleton) => {
        skeleton.remove();
      });
    }, 5000); // Force visibility after 5 seconds
    
    return () => clearTimeout(forceImagesVisible);
  }, []);
  
  // Run diagnostics when the component mounts
  useEffect(() => {
    const runDiagnostics = () => {
      console.log('=== IMAGE LOADING DIAGNOSTICS ===');
      console.log('GitHub Pages base URL: https://zaheerartist.github.io/zaheerbijapure/');
      console.log('Current page URL:', window.location.href);
      console.log('Browser:', navigator.userAgent);
      
      // Check if document supports prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      console.log('Prefers reduced motion:', prefersReducedMotion);
      
      // Test direct image access with correct GitHub Pages path
      const testImageUrl = '/images/profile.jpg';
      // Create an image element instead of using the Image constructor
      const testImg = document.createElement('img');
      testImg.onload = () => console.log(`✅ Test image loaded successfully: ${testImageUrl}`);
      testImg.onerror = () => console.log(`❌ Test image failed to load: ${testImageUrl}`);
      testImg.src = testImageUrl;
      
      // Look for any loading errors in existing images
      setTimeout(() => {
        const allImages = document.querySelectorAll('img');
        console.log(`Total images on page: ${allImages.length}`);
        
        let loadedCount = 0;
        allImages.forEach((img: HTMLImageElement) => {
          if (img.complete && img.naturalHeight !== 0) {
            loadedCount++;
          }
        });
        
        console.log(`Successfully loaded images: ${loadedCount}/${allImages.length}`);
        
        // Apply the force-visible class if too many images failed to load
        if (loadedCount < allImages.length * 0.5) {
          console.log('⚠️ Too many images failed to load, forcing visibility');
          document.querySelectorAll('.image-fade-in').forEach((el: Element) => {
            el.classList.add('force-visible');
          });
        }
      }, 3000);
    };
    
    // Run after a short delay to ensure the page is loaded
    setTimeout(runDiagnostics, 1000);
  }, []);

  // Function to map movie titles to correct filenames
  const getMovieFilename = (title: string) => {
    return title.replace(/[&:,.']/g, '').replace(/\s+/g, '-');
  };
  
  // Function to get the correct image URL for GitHub Pages
  const getGitHubPagesUrl = (path: string) => {
    // Check if we're running in development or production
    const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
    // If we're in development, use relative paths, otherwise use GitHub Pages path
    return isDev ? path : `/zaheerbijapure${path}`;
  };

  const skills = [
    { name: 'VFX Layout', icon: <FaDesktop />, level: 95 },
    { name: 'Cinematic Camera', icon: <FaVideo />, level: 95 },
    { name: 'Leadership', icon: <FaRocket />, level: 90 },
    { name: 'Techviz & Previz', icon: <FaCode />, level: 90 },
    { name: 'Cross-Department Collaboration', icon: <FaRocket />, level: 97 },
    { name: 'AI Integration', icon: <FaRobot />, level: 85 },
  ];

  // All film projects data - recent ones first
  const allProjects = [
    // Upcoming Projects
    {
      title: "Back in Action",
      year: "2025",
      isRecent: true
    },
    // Recent Projects (2024)
    {
      title: "Kraven the Hunter",
      year: "2024",
      isRecent: true
    },
    {
      title: "Atlas",
      year: "2024",
      isRecent: true
    },
    {
      title: "Halo",
      year: "2024",
      isRecent: true
    },
    {
      title: "Argylle",
      year: "2024",
      isRecent: true
    },
    {
      title: "Malaikottai Vaaliban",
      year: "2024",
      isRecent: true
    },
    // Recent Projects (2023)
    {
      title: "Aquaman and the Lost Kingdom",
      year: "2023",
      isRecent: false
    },
    {
      title: "Leo",
      year: "2023",
      isRecent: false
    },
    {
      title: "Ferrari",
      year: "2023",
      isRecent: false
    },
    {
      title: "The Flash",
      year: "2023",
      isRecent: false
    },
    {
      title: "Crater",
      year: "2023",
      isRecent: false
    },
    {
      title: "Shazam! Fury of the Gods",
      year: "2023",
      isRecent: false
    },
    {
      title: "Ant Man and the Wasp Quantumania",
      year: "2023",
      isRecent: false
    },
    // Notable Projects (2022)
    {
      title: "The School for Good and Evil",
      year: "2022",
      isRecent: false
    },
    {
      title: "Guillermo del Toro's Pinocchio",
      year: "2022",
      isRecent: false
    },
    {
      title: "Devotion",
      year: "2022",
      isRecent: false
    },
    {
      title: "Brahmastra Part One Shiva",
      year: "2022",
      isRecent: false
    },
    // Notable Projects (2021)
    {
      title: "The Matrix Resurrections",
      year: "2021",
      isRecent: false
    },
    {
      title: "Bell Bottom",
      year: "2021",
      isRecent: false
    },
    {
      title: "Venom Let There Be Carnage",
      year: "2021",
      isRecent: false
    },
    {
      title: "No Time to Die",
      year: "2021",
      isRecent: false
    },
    {
      title: "Jungle Cruise",
      year: "2021",
      isRecent: false
    },
    {
      title: "Infinite",
      year: "2021",
      isRecent: false
    },
    {
      title: "Jupiter's Legacy",
      year: "2021",
      isRecent: false
    },
    {
      title: "Zack Snyder's Justice League",
      year: "2021",
      isRecent: false
    },
    {
      title: "The Flash",
      year: "2021",
      isRecent: false
    },
    // Notable Projects (2020)
    {
      title: "Wonder Woman 1984",
      year: "2020",
      isRecent: false
    },
    {
      title: "The Boys",
      year: "2020",
      isRecent: false
    },
    {
      title: "Greyhound",
      year: "2020",
      isRecent: false
    },
    // Notable Projects (2019)
    {
      title: "The Dark Crystal Age of Resistance",
      year: "2019",
      isRecent: false
    },
    {
      title: "Curfew",
      year: "2019",
      isRecent: false
    },
    {
      title: "Fast & Furious: Hobbs & Shaw",
      year: "2019",
      isRecent: false
    },
    // Notable Projects (2018)
    {
      title: "Mission Impossible Fallout",
      year: "2018",
      isRecent: false
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindelwald",
      year: "2018",
      isRecent: false
    },
    {
      title: "2.0",
      year: "2018",
      isRecent: false
    }
  ];

  // Filter projects based on the toggle state
  const visibleProjects = showAllProjects 
    ? allProjects 
    : allProjects.filter(project => project.isRecent);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-6xl mx-auto space-y-8"
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Zaheer Bijapure</h1>
          <div className="w-20 h-1 bg-accent1 mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg gradient-text mb-2">
            "Crafting Cinematic Journeys in VFX & AI"
          </p>
          <p className="text-textSecondary text-md mb-4">
            VFX Layout | Camera & Body Tracking | Previsualization & Technical Visualization | AI
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src={getGitHubPagesUrl("/thumbnail/profile.jpg")}
              alt="Zaheer Bijapure"
              fill
              className="object-cover"
              priority
              onError={(e) => handleImageError(e, 'profile')}
            />
          </div>

          {/* Bio */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Professional Bio</h2>
            <p className="text-textSecondary mb-4">
              With over 9 years in the VFX and CG industry, I bring a deep understanding of the creative and technical processes that shape compelling visual stories. My experience across multiple departments—ranging from VFX layout, camera tracking, body tracking, cinematic camera animation, animation, to previsualization (previz) & technical visualization (techviz)—has equipped me with a versatile skill set and a unique perspective on production workflows.
            </p>
            <p className="text-textSecondary mb-4">
              This cross-department experience allows me to seamlessly collaborate with diverse teams, anticipate project needs, and contribute to more efficient and cohesive outcomes. My leadership skills have been honed through my role as an upskill trainer, where I guided teams in mastering advanced techniques, enhancing their creative capabilities, and adapting to evolving industry trends.
            </p>
            <p className="text-textSecondary mb-4">
              Embracing the future of creativity, I also explore the intersection of AI and visual storytelling. From crafting precise AI prompts to integrating AI-driven solutions into creative workflows, I leverage cutting-edge technology to enhance production processes and unlock new artistic possibilities.
            </p>
            <p className="text-textSecondary mb-4">
              I believe in blending art, technology, and innovation to push the boundaries of visual storytelling. My approach isn't just about creating visuals—it's about designing experiences that resonate and inspire.
            </p>
            <p className="text-textSecondary mb-6">
              Let's collaborate and bring bold ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Autodesk Maya</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">3D Equalizer</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Adobe Photoshop</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Adobe After Effects</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Adobe Premiere Pro</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Nuke</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Houdini</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Runway</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Freepik</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Kling</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Midjourney</div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Skills & Expertise</h2>
          
          {/* VFX & Animation Skills */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaFilm className="mr-3 text-accent1" /> 
              <span>🎬 VFX & Animation Skills</span>
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-primary rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-2xl text-accent1 mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-accent1 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-textSecondary">
                  {skill.level}%
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* Detailed Skills List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* VFX & Animation Detailed Skills */}
            <div className="bg-primary rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span>🎬 VFX & Animation Skills</span>
              </h3>
              <ul className="space-y-2 text-textSecondary">
                <li>• VFX Layout, Proxy Creation</li>
                <li>• Cinematic Camera Animation</li>
                <li>• Camera Tracking</li>
                <li>• Body Tracking</li>
                <li>• Animation – Creating smooth animations</li>
                <li>• Previsualization (Previz) & Technical Visualization (Techviz)</li>
                <li>• Scene Composition</li>
                <li>• Cross-Department Collaboration</li>
              </ul>
            </div>
            
            {/* AI & Creative Technology Skills */}
            <div className="bg-primary rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span>🤖 AI & Creative Technology Skills</span>
              </h3>
              <ul className="space-y-2 text-textSecondary">
                <li>• AI Prompt Writing</li>
                <li>• Consistency in AI Creations</li>
                <li>• AI Content Development</li>
                <li>• Brand Understanding</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Awards & Recognition Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">🏆 Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-lg p-6 border-l-4 border-accent1">
              <h3 className="text-xl font-bold mb-2">The Spotlight Award</h3>
              <p className="text-accent1 mb-4">Moving Picture Company (MPC)</p>
              <p className="text-textSecondary">
                A prestigious acknowledgment for demonstrating exceptional hard work and technical expertise in the field of Layout, contributing significantly to the advancement of key projects.
              </p>
            </div>
            
            <div className="bg-primary rounded-lg p-6 border-l-4 border-accent1">
              <h3 className="text-xl font-bold mb-2">The Star Performer Award</h3>
              <p className="text-accent1 mb-4">Moving Picture Company (MPC)</p>
              <p className="text-textSecondary">
                Awarded for exceptional performance and significant contributions to the company's success, reflecting dedication, talent, and a commitment to fostering a culture of excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="flex items-center justify-center">
              <FaGraduationCap className="mr-3 text-accent1" /> Education
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-lg p-6 border-t-4 border-accent1">
              <h3 className="text-xl font-bold mb-2">Post-Graduate Diploma</h3>
              <p className="text-accent1 mb-4">Advertising and Media</p>
              <p className="text-textSecondary">
                Advanced studies focused on media strategies, digital advertising, and creative communications.
              </p>
            </div>
            
            <div className="bg-primary rounded-lg p-6 border-t-4 border-accent1">
              <h3 className="text-xl font-bold mb-2">Bachelor's Degree</h3>
              <p className="text-accent1 mb-4">Animation and VFX</p>
              <p className="text-textSecondary">
                Comprehensive education in 3D animation, visual effects production, and creative storytelling techniques.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filmography Section - after Education */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center justify-center mb-10">
            <h2 className="text-3xl font-bold text-center flex items-center justify-center mr-4">
              <FaFilm className="mr-3 text-accent1" /> 
              {showAllProjects ? 'Complete Filmography' : 'Recent Films & TV Shows'}
            </h2>
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-accent1 hover:bg-accent1/80 text-white py-1 px-4 rounded-full text-sm flex items-center transition-all duration-300"
            >
              {showAllProjects ? (
                <>Show Recent <FaChevronUp className="ml-2" /></>
              ) : (
                <>Show All <FaChevronDown className="ml-2" /></>
              )}
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index} 
                className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-accent1/20 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="h-64 relative overflow-hidden bg-secondary">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                  <div className="thumbnail-skeleton"></div>
                  <Image
                    src={getGitHubPagesUrl(`/thumbnail/${getMovieFilename(project.title)}-${project.year}.jpg`)}
                    alt={`${project.title} (${project.year})`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110 image-fade-in"
                    priority={index < 4}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    quality={90}
                    onError={(e) => handleImageError(e, project.title)}
                  />
                  {project.isRecent && (
                    <div className="absolute top-2 right-2 bg-accent1 text-white text-xs px-2 py-1 rounded-full z-10">
                      Recent
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h4 className="text-white font-bold mb-1">{project.title}</h4>
                      <p className="text-white/80 text-sm">{project.year}</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-base font-bold truncate">{project.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-accent1 text-sm">{project.year}</span>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 space-y-4">
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.imdb.com/name/nm12429900/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-all duration-300"
              >
                <FaImdb className="mr-2 text-2xl" /> View My IMDb Profile
              </a>
              <a 
                href="http://www.linkedin.com/in/zaheer-bijapure" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-[#0077b5] hover:bg-[#006399] text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
              >
                <FaLinkedin className="mr-2 text-xl" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold mb-4">Want to Work Together?</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch, Let's Create Together
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 