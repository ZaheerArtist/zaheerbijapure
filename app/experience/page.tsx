'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCode, FaFilm, FaAward, FaCertificate, FaUsers, FaLightbulb, FaTasks, FaTools, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const experiences = [
    {
      period: 'Sep 2025 – Present',
      title: 'AI Senior Designer',
      company: 'Saatchi & Saatchi MEA · Publicis Groupe',
      location: 'Dubai, United Arab Emirates · On-site',
      description: 'Taking creative briefs through to final delivery across advertising films and campaigns, digital ads and web banners, OOH and DOOH, social media, emailers and radio.',
      responsibilities: [
        'Take creative briefs through to final delivery',
        'Advertising films and campaigns',
        'Digital ads and web banners',
        'OOH and DOOH, including bridge banners, metro and lamp-post advertising',
        'Social media creatives',
        'Emailers and radio advertising',
        'Develop AI-driven visual concepts, images and films for brands',
        'Work closely with creative and strategy teams to turn ideas into clear, cinematic visuals',
        'Combine AI and VFX craft across different brands and formats'
      ],
      technologies: ['AI image generation', 'AI video generation', 'Photoshop', 'After Effects', 'Premiere Pro']
    },
    {
      period: 'Apr 2025 – Jul 2025',
      title: 'AI VFX Lead',
      company: 'Studio Blo',
      location: 'Mumbai, India · Hybrid',
      description: 'Led the creative and technical direction of AI-integrated VFX projects, bringing film VFX craft into new AI workflows.',
      responsibilities: [
        'Delivered VFX projects from concept to final delivery',
        'Generated AI images and videos for concept development and production',
        'Trained teams and introduced AI-led VFX workflows',
        'Brought in the right talent for specialised VFX tasks',
        'Supervised VFX on set for live-action shoots',
        'Tested and integrated new AI tools across pre- and post-production'
      ],
      technologies: ['AI image generation', 'AI video generation', 'Runway', 'Kling']
    },
    {
      period: 'Jun 2022 – Mar 2025',
      title: 'Senior VFX Layout / Previz / Techviz / Matchmove / Roto Animation Artist',
      company: 'MPC',
      location: 'Mumbai, India · Hybrid',
      description: 'Layout, previz and techviz for feature films including The Flash and Kraven the Hunter. Two Technicolor Creative Studios awards.',
      responsibilities: [
        'Previsualisation and techviz',
        'Master scenes and camera animation',
        'Repositioning, retimes and camera stitching',
        'Proxy models and set dressing',
        'Basic lighting, shading and texturing',
        'Matchmove and roto animation support across shows'
      ],
      technologies: ['Autodesk Maya', '3DEqualizer', 'Nuke', 'Houdini']
    },
    {
      period: 'Mar 2018 – May 2022',
      title: 'Layout / Senior Bodytrack / Matchmove / Upskill Trainer',
      company: 'DNEG',
      location: 'Mumbai, India',
      description: 'Managed layout on Devotion, delivered complex tracking shots early on The Matrix Resurrections, and trained artists in body tracking and matchmove.',
      responsibilities: [
        'Managed the layout team on Devotion and built master scenes for client presentations',
        'Trained artists in body tracking, matchmove and layout as an upskill trainer',
        'Delivered shots ahead of schedule in a 50-artist team on The Matrix Resurrections, including face replacements, body performances and deformer-based tracking',
        'Tracked cameras for water sequences and solved difficult shots with limited reference points',
        'Led problem-solving on the hardest layout tasks, including flying sequences'
      ],
      projects: ['The Matrix Resurrections', 'Devotion'],
      technologies: ['Autodesk Maya', '3DEqualizer', 'Nuke']
    },
    {
      period: 'Aug 2017 – Mar 2018',
      title: 'Animator & Bodytrack Artist',
      company: 'Red Chillies Entertainment',
      location: 'Mumbai, India',
      description: 'VFX animation and body tracking for the feature film Zero.',
      responsibilities: [
        'Body tracking and realistic VFX animation for the live-action feature film Zero'
      ],
      projects: ['Zero (feature film)'],
      technologies: ['Autodesk Maya']
    },
    {
      period: 'Feb 2016 – Jun 2017',
      title: 'Animator & CG Layout Artist',
      company: 'Tata Elxsi',
      location: 'Mumbai, India',
      description: 'Character animation and CG layout for the TV series Maya the Bee, Tata Motors advertising and e-learning content.',
      responsibilities: [
        'Character animation for TV series and commercials',
        'Shots for the French TV series Maya the Bee, delivered to the show’s creative and technical standards',
        'Animation for Tata Motors advertising and e-learning projects'
      ],
      projects: ['Maya the Bee (TV series)', 'Tata Motors advertising', 'E-learning'],
      technologies: ['Autodesk Maya', 'Adobe Creative Suite']
    },
    {
      period: 'Mar 2014 – Sep 2015',
      title: '3D Animator & 3D Artist',
      company: 'Vertex Volt',
      location: 'Mumbai, India',
      description: 'Modelling, texturing, rigging and animation for TV series and commercials.',
      responsibilities: [
        '3D models, textures and animation for commercials and TV series',
        'Creature and character animation for TV series'
      ],
      projects: ['Devon Ke Dev Mahadev (TV series)', 'Hatim (TV series)', 'TV commercials'],
      technologies: ['Autodesk Maya', 'Adobe Creative Suite']
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedJob === index) {
      setExpandedJob(null);
    } else {
      setExpandedJob(index);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <div className="w-20 h-1 bg-accent1 mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg mb-6">
            Over <span className="text-accent1 font-medium">a decade</span> in animation and film VFX, now directing with AI
          </p>
          <p className="text-textSecondary mb-8">
            From TV animation in Mumbai to layout on Hollywood features, and now AI Senior Designer at
            Saatchi &amp; Saatchi MEA, Publicis Groupe, in Dubai.
          </p>
        </motion.div>

        {/* Experience Timeline Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative border-l-2 border-secondary pl-10 ml-5 md:ml-10">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="mb-12 relative"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="absolute -left-[53px] bg-background border-4 border-accent1 w-8 h-8 rounded-full"></div>
                <div className="absolute -left-[45px] bg-accent1 w-4 h-4 rounded-none mt-2"></div>
                
                <div className={`bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent1/10 transition-all duration-300 ${expandedJob === index ? 'border-l-4 border-accent1' : ''}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <span className="text-accent1 text-sm font-medium mb-2 block flex items-center">
                        <FaCalendarAlt className="mr-2" /> {exp.period}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-start leading-tight">
                        <FaBuilding className="mr-3 mt-1 shrink-0 text-accent1" /> <span>{exp.company}</span>
                      </h4>
                      <h3 className="text-lg font-semibold text-accent1 mb-1">{exp.title}</h3>
                      <p className="text-sm text-textSecondary mb-4">{exp.location}</p>
                    </div>
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="self-start mt-2 md:mt-0 px-3 py-1 bg-secondary hover:bg-accent1/20 text-sm rounded-none transition-all flex items-center"
                    >
                      {expandedJob === index ? (
                        <>Show less <FaChevronUp className="ml-1" /></>
                      ) : (
                        <>Show more <FaChevronDown className="ml-1" /></>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-textSecondary mb-4">{exp.description}</p>
                  
                  {expandedJob === index && (
                    <div className="mt-4 space-y-6 animate-fadeIn">
                      <div>
                        <h5 className="font-bold mb-2 text-accent1">What I did</h5>
                        <ul className="list-disc pl-5 space-y-1 text-textSecondary">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h5 className="font-bold mb-2 text-accent1">Tools</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="bg-background px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Key Achievements Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent1">
              <div className="flex items-center mb-4">
                <FaAward className="text-accent1 text-2xl mr-3" />
                <h3 className="text-xl font-bold">The Spotlight Award</h3>
              </div>
              <p className="text-textSecondary">
                Technicolor Creative Studios · MPC · December 2023
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent1">
              <div className="flex items-center mb-4">
                <FaAward className="text-accent1 text-2xl mr-3" />
                <h3 className="text-xl font-bold">The Star Performer Award</h3>
              </div>
              <p className="text-textSecondary">
                Technicolor Creative Studios · MPC · February 2023
              </p>
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
          <h2 className="text-2xl font-bold mb-4">Let’s work together</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            Have a film, campaign or idea in mind? Tell me about it.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href="/portfolio/ai" className="btn-secondary">
              See the films
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 