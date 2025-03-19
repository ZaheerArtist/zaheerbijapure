'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTimes, FaExpand, FaPlay } from 'react-icons/fa';

// Sample VFX projects data - in a real application, this would come from a database or CMS
const vfxProjects = [
  {
    id: 1,
    title: 'Cinematic Layout for Feature Film',
    category: 'Layout',
    description: 'Camera movement and scene composition for a high-action sequence.',
    imagePath: '/placeholder-image.jpg',
    videoUrl: '#',
  },
  {
    id: 2,
    title: '3D Environment Creation',
    category: 'Modeling',
    description: 'Detailed 3D environment design for a science fiction TV series.',
    imagePath: '/placeholder-image.jpg',
    videoUrl: '#',
  },
  {
    id: 3,
    title: 'Character Animation Layout',
    category: 'Animation',
    description: 'Camera and character blocking for an animated feature.',
    imagePath: '/placeholder-image.jpg',
    videoUrl: '#',
  },
  {
    id: 4,
    title: 'Visual Effects Integration',
    category: 'Compositing',
    description: 'Seamless integration of visual effects elements in live-action footage.',
    imagePath: '/placeholder-image.jpg',
    videoUrl: '#',
  },
  {
    id: 5,
    title: 'Virtual Production Setup',
    category: 'Technical',
    description: 'Technical direction for a virtual production environment.',
    imagePath: '/placeholder-image.jpg',
    videoUrl: '#',
  },
  {
    id: 6,
    title: 'CG Asset Creation',
    category: 'Modeling',
    description: 'High-detail 3D asset creation for a blockbuster film.',
    imagePath: '/placeholder-image.jpg',
    videoUrl: '#',
  },
];

export default function VFXPortfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof vfxProjects[0] | null>(null);
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Layout', 'Modeling', 'Animation', 'Compositing', 'Technical'];
  
  const filteredProjects = filter === 'All' 
    ? vfxProjects 
    : vfxProjects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">VFX Portfolio</h1>
          <div className="w-20 h-1 bg-accent1 mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg">
            Showcasing my work in visual effects, layout, and 3D modeling for film and television projects.
          </p>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full border-2 transition-all ${
                filter === category 
                  ? 'border-accent1 bg-accent1 text-white' 
                  : 'border-secondary text-textSecondary hover:border-accent1'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary rounded-lg overflow-hidden group"
            >
              <div className="relative h-60 overflow-hidden">
                {/* Replace with actual project images in production */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-2xl text-white/50">{project.title}</span>
                </div>
                
                <div className="absolute inset-0 bg-accent1/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    className="bg-background/90 text-white p-3 rounded-full mx-2 hover:bg-accent1 transition-colors duration-200"
                    onClick={() => setSelectedProject(project)}
                  >
                    <FaExpand />
                  </button>
                  <button 
                    className="bg-background/90 text-white p-3 rounded-full mx-2 hover:bg-accent1 transition-colors duration-200"
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-accent1 text-sm font-medium mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-textSecondary text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-primary rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-6 border-b border-secondary">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                className="text-textSecondary hover:text-accent1 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video bg-secondary mb-6 rounded-lg flex items-center justify-center">
                <span className="text-4xl text-white/50">Project Preview</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold mb-4">Project Details</h4>
                  <p className="text-textSecondary mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                    rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                  </p>
                  <p className="text-textSecondary">
                    Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. 
                    Praesent id metus massa, ut blandit odio. Proin quis tortor orci.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Project Info</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm text-textSecondary mb-1">Category</h5>
                      <p>{selectedProject.category}</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-textSecondary mb-1">Client</h5>
                      <p>Major Film Studio</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-textSecondary mb-1">Technology</h5>
                      <p>Maya, 3D Equalizer, Nuke</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-textSecondary mb-1">Year</h5>
                      <p>2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 