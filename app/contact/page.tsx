'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter, FaImdb } from 'react-icons/fa';
import { ContactInfo } from '@/components/ContactInfo';
import { useSearchParams } from 'next/navigation';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Check for success parameter in URL (for Formspree redirect)
  useEffect(() => {
    if (searchParams?.get('success') === 'true') {
      setSuccess(true);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (submitting) return;
    
    setSubmitting(true);
    setError('');
    
    try {
      // Basic form validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill out all required fields');
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }
      
      // If validation passes, submit the form to Formspree
      // We'll let the native form submission handle the actual submission
      if (formRef.current) {
        formRef.current.submit();
        
        // Reset form data
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (err) {
      console.error('Error validating form:', err);
      setError(err instanceof Error ? err.message : 'There was an error with your submission. Please try again.');
      setSubmitting(false);
    }
  };
  
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container-custom">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-20 h-1 bg-accent1 mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg">
            Interested in working together or have a question? Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-primary rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <ContactInfo showIcons={true} className="space-y-6" />
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium text-white mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/zaheerbijapure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-accent1 transition-colors duration-300 p-3 rounded-lg text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/zaheerartist/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-accent1 transition-colors duration-300 p-3 rounded-lg text-white"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com/zaheerartist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-accent1 transition-colors duration-300 p-3 rounded-lg text-white"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.imdb.com/name/nm12429900/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-accent1 transition-colors duration-300 p-3 rounded-lg text-white"
                    aria-label="IMDb"
                  >
                    <FaImdb />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-primary rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 text-green-400 p-4 rounded-lg"
                >
                  <p className="font-medium">Thank you for your message!</p>
                  <p>I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-4 py-2 bg-green-500/30 hover:bg-green-500/40 text-green-400 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form 
                  ref={formRef} 
                  action="https://formspree.io/f/mqapaqqq"
                  method="POST"
                  onSubmit={handleSubmit} 
                  noValidate
                >
                  {/* Hidden fields for Formspree */}
                  <input type="hidden" name="_subject" value="New contact from zaheerbijapure.com" />
                  <input type="hidden" name="_next" value="https://zaheerartist.github.io/zaheerbijapure/contact/?success=true" />
                  {/* Honeypot field to prevent spam */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-textSecondary mb-2">
                        Your Name <span className="text-accent1">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary border-2 border-secondary focus:border-accent1 rounded-lg p-3 text-white outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-textSecondary mb-2">
                        Your Email <span className="text-accent1">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary border-2 border-secondary focus:border-accent1 rounded-lg p-3 text-white outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-textSecondary mb-2">
                      Subject <span className="text-accent1">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border-2 border-secondary focus:border-accent1 rounded-lg p-3 text-white outline-none transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-textSecondary mb-2">
                      Message <span className="text-accent1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-secondary border-2 border-secondary focus:border-accent1 rounded-lg p-3 text-white outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6"
                    >
                      {error}
                    </motion.div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`btn-primary w-full ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 