'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTimes, FaExpand, FaPlay, FaVimeo, FaYoutube, FaLock } from 'react-icons/fa';

// VFX projects data with actual video links and password protection
const vfxProjects: Array<{
  id: number;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  videoUrl: string;
  videoType: string;
  isPasswordProtected: boolean;
}> = [
  {
    id: 1,
    title: 'Production Layout Showreel',
    category: 'VFX Layout',
    description: 'Production layout work showcasing CG cinematic cameras, retiming, reracking, proxy creation, crowd placements, ingestions, and more.',
    imagePath: 'public/thumbnail/Production-Layout.jpg',
    videoUrl: 'https://vimeo.com/1060745371',
    videoType: 'vimeo',
    isPasswordProtected: false
  },
  {
    id: 2,
    title: 'Personal Layout Showreel',
    category: 'Cinematic Camera',
    description: 'Cinematic camera, stitched camera, and multiple projection work demonstrating dynamic framing, movement, and visual storytelling techniques.',
    imagePath: 'public\thumbnail\Cinematic-Camera.jpg',
    videoUrl: 'https://vimeo.com/1062331587/1a0097ad99',
    videoType: 'vimeo',
    isPasswordProtected: false
  },
  {
    id: 3,
    title: 'Previsualization & Layout Showreel',
    category: 'Previz',
    description: 'Comprehensive previsualization work showcasing complex sequence planning, technical visualization, and creative problem-solving for production.',
    imagePath: '\public\thumbnail\Previz-Layout.jpg',
    videoUrl: 'https://vimeo.com/1062328741/dd9829b4a8',
    videoType: 'vimeo',
    isPasswordProtected: false
  },
  {
    id: 4,
    title: 'Camera & Body Tracking Showreel',
    category: 'Camera & Body Tracking',
    description: 'High-precision camera and body tracking demonstrations for seamless VFX integration with live-action footage.',
    imagePath: '/zaheerbijapure/images/vfx/camera-bodytrack.jpg',
    videoUrl: 'https://youtu.be/Vqj1RU_uJCk',
    videoType: 'youtube',
    isPasswordProtected: false
  }
];

export default function VFXPortfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof vfxProjects[0] | null>(null);
  const [filter, setFilter] = useState('All');
  const [playingVideo, setPlayingVideo] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const categories = ['All', 'VFX Layout', 'Cinematic Camera', 'Previz', 'Camera & Body Tracking'];
  
  const filteredProjects = filter === 'All' 
    ? vfxProjects 
    : vfxProjects.filter(project => project.category === filter);

  // Password mapping for protected videos
  const projectPasswords: Record<number, string> = {};

  const handlePlayVideo = (project: typeof vfxProjects[0]) => {
    if (project.isPasswordProtected) {
      setSelectedProject(project);
      setShowPasswordModal(true);
    } else {
      setSelectedProject(project);
      setPlayingVideo(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProject && projectPasswords[selectedProject.id] === password) {
      setShowPasswordModal(false);
      setPlayingVideo(true);
      setPasswordError(false);
      setPassword('');
    } else {
      setPasswordError(true);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setPlayingVideo(false);
    setShowPasswordModal(false);
    setPassword('');
    setPasswordError(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Function to format video URLs for embedding
  const getEmbedUrl = (project: typeof vfxProjects[0]) => {
    if (project.videoType === 'youtube') {
      let videoId = project.videoUrl.split('youtu.be/')[1];
      if (!videoId) {
        videoId = project.videoUrl.split('v=')[1];
        if (videoId) {
          const ampersandPosition = videoId.indexOf('&');
          if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
          }
        }
      }
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (project.videoType === 'vimeo') {
      const vimeoRegex = /vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/;
      const match = project.videoUrl.match(vimeoRegex);
      if (match) {
        const videoId = match[1];
        const hash = match[2] ? `h=${match[2]}&` : '';
        return `https://player.vimeo.com/video/${videoId}?${hash}title=0&byline=0&portrait=0`;
      }
      return project.videoUrl;
    }
    return project.videoUrl;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">VFX Portfolio</h1>
          <div className="w-20 h-1 bg-accent1 mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg">
            Showcasing professional work in visual effects, layout, cinematography, and technical visualization for film and television projects.
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
                <div className="thumbnail-skeleton"></div>
                <Image 
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 image-fade-in"
                  priority={project.id <= 2}
                  loading={project.id <= 2 ? "eager" : "lazy"}
                  quality={85}
                  unoptimized={true}
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.complete) {
                      img.classList.add('loaded');
                      // Find parent and remove skeleton
                      const parent = img.parentElement;
                      if (parent) {
                        const skeleton = parent.querySelector('.thumbnail-skeleton');
                        if (skeleton) skeleton.remove();
                      }
                    }
                  }}
                  style={{
                    transition: 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out'
                  }}
                  onError={(e) => {
                    console.log(`Failed to load image: ${project.imagePath}`);
                    const imgElement = e.currentTarget;
                    imgElement.src = '/placeholder-image.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      className="bg-background/90 text-white p-3 rounded-full mx-2 hover:bg-accent1 transition-colors duration-200"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaExpand className="text-xl" />
                    </button>
                    <button 
                      className="bg-background/90 text-white p-3 rounded-full mx-2 hover:bg-accent1 transition-colors duration-200"
                      onClick={() => handlePlayVideo(project)}
                    >
                      <div className="flex items-center">
                        <FaPlay className="text-xl" />
                        {project.isPasswordProtected && <FaLock className="ml-1 text-sm" />}
                      </div>
                    </button>
                  </div>
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
      
      {/* Password Modal */}
      {showPasswordModal && selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-primary rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Enter Password</h3>
              <button 
                className="text-textSecondary hover:text-accent1"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handlePasswordSubmit}>
              <p className="text-textSecondary mb-4">
                This video is password protected. Please enter the password to view.
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 bg-secondary rounded border border-accent1/20 focus:border-accent1 outline-none"
                placeholder="Enter password"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mb-4">
                  Incorrect password. Please try again.
                </p>
              )}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-textSecondary hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-accent1 text-white px-4 py-2 rounded hover:bg-accent1/80"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedProject && !showPasswordModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-primary rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-6 border-b border-secondary">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                className="text-textSecondary hover:text-accent1 text-xl"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video bg-secondary mb-6 rounded-lg flex items-center justify-center overflow-hidden">
                {playingVideo ? (
                  <div className="w-full h-full">
                    <iframe
                      src={getEmbedUrl(selectedProject)}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <span className="text-2xl text-white/50 mb-4">{selectedProject.title}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPlayingVideo(true)}
                        className="bg-accent1 hover:bg-accent1/80 text-white py-2 px-4 rounded-full flex items-center"
                      >
                        <FaPlay className="mr-2" /> Play Video
                      </button>
                      {selectedProject.videoType === 'vimeo' && (
                        <Link href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer" 
                          className="text-accent1 hover:text-accent1/80 flex items-center gap-1">
                          <FaVimeo /> Watch on Vimeo
                        </Link>
                      )}
                      {selectedProject.videoType === 'youtube' && (
                        <Link href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer"
                          className="text-accent1 hover:text-accent1/80 flex items-center gap-1">
                          <FaYoutube /> Watch on YouTube
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold mb-4">Project Details</h4>
                  <p className="text-textSecondary mb-4">
                  Showcasing my expertise in shot, VFX layout, Cinematic camera, Previz, Camera and Bodytracking. With 9 years of experience in the VFX and CG industry, I have contributed to major productions, ensuring seamless camera staging, shot continuity, and storytelling precision.
                  </p>
                  <p className="text-textSecondary">
                    
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
                      <h5 className="text-sm text-textSecondary mb-1"></h5>
                      <p></p>
                    </div>
                    <div>
                      <h5 className="text-sm text-textSecondary mb-1"></h5>
                      <p></p>
                    </div>
                    <div>
                      <h5 className="text-sm text-textSecondary mb-1"></h5>
                      <p></p>
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