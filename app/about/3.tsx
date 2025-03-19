'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDesktop, FaCube, FaCode, FaLightbulb, FaRocket, FaGraduationCap, FaCamera, FaFilm, FaRobot, FaVideo } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const skills = [
    { name: 'VFX Layout', icon: <FaDesktop />, level: 95 },
    { name: 'Cinematic Camera', icon: <FaVideo />, level: 95 },
    { name: 'Leadership', icon: <FaRocket />, level: 90 },
    { name: 'Techviz & Previz', icon: <FaCode />, level: 90 },
    { name: 'Cross-Department Collaboration', icon: <FaRocket />, level: 97 },
    { name: 'AI Integration', icon: <FaRobot />, level: 85 },
  ];

  const experiences = [
    {
      period: 'Jun 2022 - Present',
      title: 'Senior VFX Layout/ Matchmove / Roto Animation Artist',
      company: 'MPC',
      description: 'Contributing to high-profile film projects with expertise in layout, camera tracking, and complex movement solutions for seamless visual effects integration.',
    },
    {
      period: 'Mar 2018 - May 2022',
      title: 'Layout / Senior Bodytrack / Matchmove / Upskill Trainer',
      company: 'DNEG',
      description: 'Delivered precise body tracking and camera solutions for blockbuster productions while mentoring junior artists and developing innovative workflows.',
    },
    {
      period: 'Aug 2017 - Mar 2018',
      title: 'Animator & Bodytrack Artist',
      company: 'Red Chillies Entertainment',
      description: 'Created dynamic character animations and implemented accurate body tracking for Bollywood productions, enhancing visual storytelling through technical execution.',
    },
    {
      period: 'Feb 2016 - Jun 2017',
      title: 'Animator',
      company: 'Tata Elxsi',
      description: 'Developed character animations and motion sequences for diverse commercial and entertainment projects, focusing on creating believable movement and emotional impact.',
    },
    {
      period: 'Mar 2014 - Sep 2015',
      title: '3D Animator & 3D Artist',
      company: 'Freelance',
      description: 'Provided versatile 3D animation and modeling services across multiple industries, building a foundation of technical skills and creative problem-solving abilities.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
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
            VFX Layout | Camera & Body Tracking | Techviz & reviz | AI
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Simplified photo display without frames */}
            <div className="w-full flex justify-center items-center">
              <div className="relative w-96 aspect-[3/4] rounded-lg overflow-hidden">
                <Image 
                  src={`/zaheer-bijapure.jpg?refresh=${Date.now()}`}
                  alt="Zaheer Bijapure - VFX Layout & 3D Artist" 
                  fill
                  sizes="384px"
                  quality={100}
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  priority
                  loading="eager"
                  unoptimized={true}
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent1 rounded-lg"></div>
          </motion.div>

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
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Maya</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">3D Equalizer</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Nuke</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Houdini</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Adobe Photoshop</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Adobe After Effects</div>
              <div className="bg-primary rounded-lg px-4 py-2 text-sm">Adobe Premiere Pro</div>
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
                <li>• Animation – Creating smooth</li>
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

        {/* Experience Section */}
        <motion.div
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
          <div className="relative border-l-2 border-secondary pl-10 ml-5">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="mb-12 relative"
              >
                <div className="absolute -left-[53px] bg-background border-4 border-accent1 w-8 h-8 rounded-full"></div>
                <div className="absolute -left-[45px] bg-accent1 w-4 h-4 rounded-full mt-2"></div>
                <div className="bg-primary p-6 rounded-lg">
                  <span className="text-accent1 text-sm font-medium mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-textSecondary mb-4">{exp.company}</h4>
                  <p className="text-textSecondary">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Want to Work Together?</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a href="/contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
} 