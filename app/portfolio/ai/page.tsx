'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTimes, FaExpand, FaPlay, FaTag, FaCalendarAlt, FaTools, FaImage, FaSearch } from 'react-icons/fa';

// Helper function to extract YouTube video ID from various URL formats
const getYoutubeVideoId = (url: string): string => {
  if (!url) return '';
  
  // Handle youtu.be format
  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1]?.split('?')[0] || '';
  }
  
  // Handle youtube.com format with v= parameter
  if (url.includes('v=')) {
    return url.split('v=')[1]?.split('&')[0] || '';
  }
  
  // Return the original URL if no known format is matched
  return url;
};

// AI-generated image samples for gallery
const aiImageGallery = [
  {
    id: 1,
    title: 'Johnson\'s Baby Poster Design 1',
    description: 'AI-generated poster design for Johnson\'s Baby products showcasing the gentle care and nurturing elements essential for infant skincare. Created with attention to soft colors and calming visuals.',
    imagePath: '/images/ai/johnsons-baby-poster1.png',
    tool: 'Freepik AI + Adobe Photoshop'
  },
  {
    id: 2,
    title: 'Johnson\'s Baby Poster Design 2',
    description: 'Second variation of Johnson\'s Baby promotional material highlighting the brand\'s commitment to natural ingredients and baby-safe formulations, designed with a harmonious color palette and soothing imagery.',
    imagePath: '/images/ai/johnsons-baby-poster2.png',
    tool: 'Freepik AI + Adobe Photoshop'
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'More AI-generated imagery projects in development',
    imagePath: '/images/placeholder.jpg',
    tool: 'Various AI Tools'
  }
];

// AI projects data with more comprehensive offerings
const aiProjects = [
  {
    id: 1,
    title: 'Effortless Elegance, Redefined',
    category: 'Fashion',
    description: 'Experience the fusion of creativity and innovation in this AI-crafted ad inspired by ZARA, showcasing versatile, modern styles that blend effortless elegance with comfort and adaptability for every occasion.',
    imagePath: 'https://img.youtube.com/vi/koywWFCnhhg/hqdefault.jpg',
    videoUrl: 'https://youtu.be/koywWFCnhhg',
    videoType: 'youtube',
    technologies: 'Freepik, Adobe Premiere Pro, Runway ML',
    year: '2025'
  },
  {
    id: 2,
    title: 'Happy Noodles Ad: The Viral Sensation!',
    category: 'Food',
    description: 'AI-generated Happy Noodles ad—an iconic blend of humor, creativity, and storytelling that showcases how AI can create engaging and memorable food advertising content.',
    imagePath: 'https://img.youtube.com/vi/Ra4tNXg4hSI/hqdefault.jpg',
    videoUrl: 'https://youtu.be/Ra4tNXg4hSI',
    videoType: 'youtube',
    technologies: 'Vidu, Kling, Adobe Premiere Pro, Runway ML',
    year: '2025'
  },
  {
    id: 3,
    title: 'The Ultimate Showcase of AI-Generated',
    category: 'Random',
    description: 'Explore the future of filmmaking with this AI-generated masterpiece, crafted using Runway, Vidu, Kling, and Minimax to blend creativity and technology in stunning, story-driven visuals.',
    imagePath: 'https://img.youtube.com/vi/P4x1BBZdlyU/hqdefault.jpg',
    videoUrl: 'https://youtu.be/P4x1BBZdlyU',
    videoType: 'youtube',
    technologies: 'Vidu, Kling, Adobe Premiere Pro, Runway ML',
    year: '2025'
  },
  {
    id: 4,
    title: 'Exclusive New York to Dubai Flight Deal',
    category: 'Travel',
    description: 'Ready for an unforgettable journey? Fly from New York to Dubai and enjoy an exclusive offer of 2 FREE nights at a premium hotel when you book your flight via Dubai. Experience luxury, comfort, and top-tier service inspired by world-class airlines.',
    imagePath: 'https://img.youtube.com/vi/Q1QOJ3eY4Fo/hqdefault.jpg',
    videoUrl: 'https://youtu.be/Q1QOJ3eY4Fo',
    videoType: 'youtube',
    technologies: 'Freepik, Adobe Premiere Pro, Runway ML',
    year: '2025'
  }
];

export default function AIPortfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof aiProjects[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<typeof aiImageGallery[0] | null>(null);
  const [filter, setFilter] = useState('All');
  
  // Filter out any projects with empty titles
  const validProjects = aiProjects.filter(project => project.title && project.videoUrl);
  
  // Extract unique categories from projects and add 'All'
  const categories = ['All', ...Array.from(new Set(validProjects.map(project => project.category)))] as string[];
  
  const filteredProjects = filter === 'All' 
    ? validProjects 
    : validProjects.filter(project => project.category === filter);

  // Handle escape key press for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedImage(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject, selectedImage]);
  
  const handleSelectProject = useCallback((project: typeof aiProjects[0]) => {
    setSelectedProject(project);
  }, []);
  
  const handleSelectImage = useCallback((image: typeof aiImageGallery[0]) => {
    setSelectedImage(image);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Portfolio</h1>
          <div className="w-20 h-1 bg-accent2 mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg mb-4">
            Exploring the intersection of artificial intelligence and visual effects to create next-generation tools and experiences that push the boundaries of creative possibility.
          </p>
          <p className="text-accent2 text-md">
            From concept to execution, these projects showcase how AI can enhance storytelling and visual communication.
          </p>
        </div>
        
        {/* AI Image Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold flex items-center mb-2">
                <FaImage className="mr-3 text-accent2" />
                AI-Generated Imagery
              </h2>
              <p className="text-textSecondary text-sm md:max-w-xl">
                Showcasing the power of AI in creating compelling visual content for brands and creative projects
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-accent2/10 text-accent2 px-4 py-2 rounded-full text-sm font-medium">
                Powered by AI + Human Creativity
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
            {/* Johnson's Baby Posters - Featured with larger size */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary rounded-lg overflow-hidden shadow-md group cursor-pointer col-span-1 sm:col-span-2 lg:col-span-1 row-span-1"
              onClick={() => handleSelectImage(aiImageGallery[0])}
            >
              <div className="h-72 relative overflow-hidden">
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <Image
                    src={aiImageGallery[0].imagePath}
                    alt={aiImageGallery[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={true}
                    onError={(e) => {
                      // If image fails to load, display a colored placeholder with text
                      const imgElement = e.currentTarget as HTMLImageElement;
                      const container = imgElement.parentElement;
                      if (container) {
                        container.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-center p-4">
                            <div>
                              <p class="text-sm font-medium text-white">${aiImageGallery[0].title}</p>
                              <p class="text-xs text-accent2 mt-2">Generated with ${aiImageGallery[0].tool}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-accent2/80 text-white p-2 rounded-full">
                      <FaSearch />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium truncate">{aiImageGallery[0].title}</p>
                  <span className="bg-accent2/10 text-accent2 text-xs px-2 py-1 rounded-full">Featured</span>
                </div>
                <p className="text-xs text-accent2">{aiImageGallery[0].tool}</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary rounded-lg overflow-hidden shadow-md group cursor-pointer col-span-1 sm:col-span-2 lg:col-span-1 row-span-1"
              onClick={() => handleSelectImage(aiImageGallery[1])}
            >
              <div className="h-72 relative overflow-hidden">
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <Image
                    src={aiImageGallery[1].imagePath}
                    alt={aiImageGallery[1].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={true}
                    onError={(e) => {
                      // If image fails to load, display a colored placeholder with text
                      const imgElement = e.currentTarget as HTMLImageElement;
                      const container = imgElement.parentElement;
                      if (container) {
                        container.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-center p-4">
                            <div>
                              <p class="text-sm font-medium text-white">${aiImageGallery[1].title}</p>
                              <p class="text-xs text-accent2 mt-2">Generated with ${aiImageGallery[1].tool}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-accent2/80 text-white p-2 rounded-full">
                      <FaSearch />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium truncate">{aiImageGallery[1].title}</p>
                  <span className="bg-accent2/10 text-accent2 text-xs px-2 py-1 rounded-full">Featured</span>
                </div>
                <p className="text-xs text-accent2">{aiImageGallery[1].tool}</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary rounded-lg overflow-hidden shadow-md group cursor-pointer col-span-1 row-span-1"
              onClick={() => handleSelectImage(aiImageGallery[2])}
            >
              <div className="h-72 relative overflow-hidden">
                <div className="w-full h-full bg-accent2/5 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-lg font-bold text-accent2 mb-2">Coming Soon</h3>
                    <p className="text-sm text-textSecondary">More AI-generated designs are on the way</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium truncate">Future AI Projects</p>
                <p className="text-xs text-accent2">Various AI Tools</p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-accent2 hover:bg-accent2/80 text-white py-2 px-6 rounded-full transition-colors duration-300"
            >
              Interested in AI design? Let's work together!
            </a>
          </div>
        </motion.div>
        
        {/* Video Projects Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <FaPlay className="mr-3 text-accent2" />
            AI Video Projects
          </h2>
        
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full border-2 transition-all ${
                  filter === category 
                    ? 'border-accent2 bg-accent2 text-white' 
                    : 'border-secondary text-textSecondary hover:border-accent2'
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
                className="bg-primary rounded-lg overflow-hidden group shadow-lg hover:shadow-accent2/20 transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  {/* Project image with fallback */}
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    {project.imagePath ? (
                      <Image 
                        src={project.imagePath} 
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (project.videoType === 'youtube' && project.videoUrl) {
                            const videoId = project.videoUrl.split('/').pop();
                            if (videoId) {
                              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                              target.onerror = () => {
                                target.src = '/placeholder-image.jpg';
                              };
                            } else {
                              target.src = '/placeholder-image.jpg';
                            }
                          } else {
                            target.src = '/placeholder-image.jpg';
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-secondary">
                        <span className="text-2xl text-white/50">{project.title}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      className="bg-accent2/90 text-white p-3 rounded-full mx-2 hover:bg-accent2 transition-colors duration-200 transform hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectProject(project);
                      }}
                      aria-label="View project details"
                    >
                      <FaExpand />
                    </button>
                    <a 
                      href={project.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-accent2/90 text-white p-3 rounded-full mx-2 hover:bg-accent2 transition-colors duration-200 transform hover:scale-110"
                      aria-label="Play video"
                    >
                      <FaPlay />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaTag className="text-accent2 mr-2" />
                    <span className="text-accent2 text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-textSecondary text-sm line-clamp-3 mb-3">{project.description}</p>
                  <div className="flex justify-between items-center text-xs text-textSecondary mt-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>{project.year}</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectProject(project);
                      }}
                      className="text-accent2 hover:underline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Coming Soon Project Card */}
            {filter === 'All' && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-primary rounded-lg overflow-hidden shadow-lg border-2 border-dashed border-accent2/20 flex flex-col items-center justify-center min-h-[400px] p-8 text-center"
              >
                <div className="bg-accent2/10 rounded-full p-6 mb-4">
                  <FaPlay className="text-3xl text-accent2/50" />
                </div>
                <h3 className="text-xl font-bold mb-3">More AI Videos Coming Soon</h3>
                <p className="text-textSecondary mb-6">
                  We're continuously developing new AI-generated video content showcasing the latest advancements in artificial intelligence.
                </p>
                <span className="px-4 py-2 rounded-full border border-accent2/30 text-accent2 text-sm">
                  Stay Tuned!
                </span>
              </motion.div>
            )}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-textSecondary text-lg">No projects found in this category.</p>
              <button
                onClick={() => setFilter('All')}
                className="mt-4 px-6 py-2 bg-accent2 text-white rounded-full hover:bg-accent2/80 transition-colors"
              >
                Show All Projects
              </button>
            </div>
          )}
          
          {/* Footer CTA */}
          <div className="text-center mt-16 py-10 bg-accent2/5 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Want Custom AI Content for Your Brand?</h3>
            <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
              I can help you create unique, engaging AI-generated content that brings your brand to life.
              From video ads to promotional materials, leverage AI to stand out from the competition.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-accent2 hover:bg-accent2/80 text-white py-3 px-8 rounded-full transition-colors duration-300 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-primary rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-secondary">
              <h3 id="project-modal-title" className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                className="text-textSecondary hover:text-accent2 text-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video bg-secondary mb-6 rounded-lg overflow-hidden">
                {selectedProject.videoUrl && selectedProject.videoUrl !== '#' && selectedProject.videoType === 'youtube' ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedProject.videoUrl)}?rel=0`}
                    title={selectedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl text-white/50">Project Preview</span>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold mb-4">Project Details</h4>
                  <p className="text-textSecondary mb-4">
                    {selectedProject.description}
                  </p>
                  <p className="text-textSecondary">
                    This project represents part of my ongoing exploration at the intersection of AI and visual media, 
                    demonstrating how artificial intelligence can enhance creative workflows, offer new aesthetic possibilities,
                    and solve technical challenges in visual effects production.
                  </p>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <FaTools className="mr-2 text-accent2" />
                    Project Info
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm text-accent2 mb-1">Category</h5>
                      <p className="font-medium">{selectedProject.category}</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-accent2 mb-1">Technologies</h5>
                      <p>{selectedProject.technologies || 'Various AI tools and software'}</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-accent2 mb-1">Research Area</h5>
                      <p>AI-Assisted Creativity, Computer Vision</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-accent2 mb-1">Year</h5>
                      <p>{selectedProject.year || '2023'}</p>
                    </div>
                    <div className="pt-4">
                      <a 
                        href={selectedProject.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-accent2 hover:bg-accent2/80 text-white py-2 px-6 rounded-full transition-colors duration-300"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-primary rounded-lg max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-secondary">
              <h3 id="image-modal-title" className="text-xl font-bold">{selectedImage.title}</h3>
              <button 
                className="text-textSecondary hover:text-accent2 text-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="relative aspect-[4/3] w-full">
              {selectedImage.imagePath && selectedImage.title !== 'Coming Soon' ? (
                <Image 
                  src={selectedImage.imagePath} 
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 1024px"
                  onError={() => {
                    // Handled by next/image
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-center p-4">
                  <div>
                    <p className="text-lg font-medium text-white">{selectedImage.title}</p>
                    <p className="text-sm text-accent2 mt-2">Coming Soon</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg mb-2">{selectedImage.title}</h4>
                  <p className="text-textSecondary">{selectedImage.description}</p>
                </div>
                <div className="bg-secondary/50 px-3 py-1 rounded-full">
                  <span className="text-accent2 text-sm font-medium">Created with {selectedImage.tool}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 