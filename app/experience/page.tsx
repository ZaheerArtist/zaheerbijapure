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
      period: 'Jun 2022 - Present',
      title: 'Senior VFX Layout/ Matchmove / Roto Animation Artist',
      company: 'MPC',
      location: 'Mumbai, India',
      description: 'Delivered high-quality VFX layouts, techviz, and previsualization, showcasing expertise in match move, body tracking, set dressing, and proxy modeling, while streamlining production workflows, enhancing cross-department collaboration, and earning two industry awards.',
      responsibilities: [
        'Delivered high-quality VFX layouts, techviz and previsualization, cinematic camera and framing to meet film directors creative vision',
        'Demonstrated expertise in match move, body tracking, set dressing, proxy model for complex production environments',
        'Streamlined production workflows by managing heavy environments, projections, assembling FX, characters, lights, textures',
        'Collaborated cross-departmentally, enhancing team productivity and ensuring timely project completion. And got awarded twice'
      ],
      technologies: ['Autodesk Maya', '3D Equalizer', 'Nuke', 'Houdini']
    },
    {
      period: 'Mar 2018 - May 2022',
      title: 'Layout / Senior Bodytrack / Matchmove / Upskill Trainer',
      company: 'DNEG',
      location: 'Mumbai, India',
      description: 'Led and mentored teams in advanced body tracking and match move techniques, managed layout for Devotion, pre-delivered complex shots for The Matrix Resurrections, and provided solutions for challenging sequences, including flying and water scenes.',
      responsibilities: [
        'Mentored team members in advanced body tracking and match move techniques as an Upskill Trainer and managed team in layout on Devotion movie. Created master scenes for sequences for client presentation for better understanding',
        'Developed and led training programs to upskill artists in layout and tracking techniques',
        'Created efficient solutions for challenging tracking shots with limited reference points',
        'As one of the best performers, pre-delivered shots in a 50-artist team, tracked complex face replacements, body performers, and tight tracking with deformers in movies like The Matrix Resurrections. Tracked cameras for the water sequence and delivered on time',
        'Provided leadership and hands-on problem-solving for the most challenging tasks like flying sequence in layout and complex shots'
      ],
      projects: ['Commercial Projects', 'VFX Sequences', 'Training Programs'],
      technologies: ['Autodesk Maya', '3D Equalizer', 'Nuke']
    },
    {
      period: 'Aug 2017 - Mar 2018',
      title: 'Animator & Bodytrack Artist',
      company: 'Red Chillies Entertainment',
      location: 'Mumbai, India',
      description: 'Worked as a VFX Animator and Body Tracking Artist at Red Chillies Entertainment, mastering body tracking and realistic VFX animation to create stunning visuals.',
      responsibilities: [
        'Worked as a VFX Animator and Body Tracking Artist at Red Chillies Entertainment, a leading production house in India',
        'Learned and utilized body tracking and realistic VFX animation skills to create stunning visual effects for a live-action film "Zero"'
      ],
      projects: ['Commercial Projects', 'VFX Sequences'],
      technologies: ['Autodesk Maya']
    },
    {
      period: 'Feb 2016 - Jun 2017',
      title: 'Animator',
      company: 'Tata Elxsi',
      location: 'Bangalore, India',
      description: 'Enhanced animation skills by contributing to the French TV series Maya the Bee, advertising projects like Tata Motors, and eLearning content, delivering shots that met production quality, creative vision, and technical standards.',
      responsibilities: [
        'Created character animations for commercial projects, TV shows',
        'Enhanced animation skills by contributing on French TV series "Maya the Bee" and advertising projects like Tata Motors and eLearning content. Delivered shots as per production and quality requirements of the shows, ensuring creative vision and technical standards'
      ],
      projects: ['Various TV commercials', 'films'],
      technologies: ['Autodesk Maya', 'Adobe Creative Suite']
    },
    {
      period: 'Mar 2014 - Sep 2015',
      title: '3D Animator & 3D Artist',
      company: 'Vertex Volt Studio',
      location: 'Mumbai, India',
      description: 'I worked as a 3D Animator and 3D Artist, contributing to rigging, modeling, and texturing for various projects.',
      responsibilities: [
        'Created 3D models, textures, and animations for commercial and TV Shows',
        'Animated creatures and characters for tv shows'
      ],
      projects: ['Architectural visualizations', 'Product animations', 'Corporate videos'],
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <div className="w-20 h-1 bg-accent1 mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg mb-6">
            Over <span className="text-accent1 font-medium">9 years</span> of experience in the visual effects industry
          </p>
          <p className="text-textSecondary mb-8">
            Specializing in VFX layout, camera tracking, body tracking, and animation for major feature films and productions,
            with a focus on creating seamless visual integration and enhancing storytelling through technical excellence.
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
                <div className="absolute -left-[45px] bg-accent1 w-4 h-4 rounded-full mt-2"></div>
                
                <div className={`bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent1/10 transition-all duration-300 ${expandedJob === index ? 'border-l-4 border-accent1' : ''}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <span className="text-accent1 text-sm font-medium mb-2 block flex items-center">
                        <FaCalendarAlt className="mr-2" /> {exp.period}
                      </span>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-accent1/80 mb-2 flex items-center">
                        <FaBuilding className="mr-2" /> {exp.company}
                      </h4>
                      <p className="text-sm text-textSecondary mb-4">{exp.location}</p>
                    </div>
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="self-start mt-2 md:mt-0 px-3 py-1 bg-secondary hover:bg-accent1/20 text-sm rounded-full transition-all flex items-center"
                    >
                      {expandedJob === index ? (
                        <>Show Less <FaChevronUp className="ml-1" /></>
                      ) : (
                        <>Show More <FaChevronDown className="ml-1" /></>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-textSecondary mb-4">{exp.description}</p>
                  
                  {expandedJob === index && (
                    <div className="mt-4 space-y-6 animate-fadeIn">
                      <div>
                        <h5 className="font-bold mb-2 text-accent1">Key Responsibilities:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-textSecondary">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h5 className="font-bold mb-2 text-accent1">Technologies Used:</h5>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent1">
              <div className="flex items-center mb-4">
                <FaAward className="text-accent1 text-2xl mr-3" />
                <h3 className="text-xl font-bold">Spotlight Award at MPC</h3>
              </div>
              <p className="text-textSecondary">
                Recognized for exceptional technical solutions in challenging VFX shots that contributed 
                significantly to project success.
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent1">
              <div className="flex items-center mb-4">
                <FaAward className="text-accent1 text-2xl mr-3" />
                <h3 className="text-xl font-bold">Star Performer Award at MPC</h3>
              </div>
              <p className="text-textSecondary">
                Awarded for consistently exceeding quality expectations and maintaining high performance 
                standards across multiple complex projects.
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
          <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            Let's discuss how my experience and expertise can contribute to your next creative project.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Me
            </Link>
            <Link href="/portfolio/vfx" className="btn-secondary">
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 