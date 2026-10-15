'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactInfoProps {
  showIcons?: boolean;
  className?: string;
  isVertical?: boolean;
}

export const ContactInfo = ({ 
  showIcons = true, 
  className = '', 
  isVertical = true 
}: ContactInfoProps) => {
  
  const contactItems = [
    { 
      id: 'email', 
      icon: <FaEnvelope />, 
      content: 'zaheerartist@gmail.com',
      href: 'mailto:zaheerartist@gmail.com' 
    },
    { 
      id: 'phone', 
      icon: <FaPhone />, 
      content: '+971 56 756 7948',
      href: 'tel:+971567567948' 
    },
    { 
      id: 'location', 
      icon: <FaMapMarkerAlt />, 
      content: 'Dubai, United Arab Emirates',
      href: null 
    }
  ];

  return (
    <div className={`${className} ${isVertical ? 'flex flex-col space-y-2' : 'flex flex-row space-x-4'}`}>
      {contactItems.map(item => (
        <div 
          key={item.id} 
          className={`flex items-center ${isVertical ? '' : 'mr-4'}`}
        >
          {showIcons && (
            <span className="text-accent1 mr-2">
              {item.icon}
            </span>
          )}
          {item.href ? (
            <a 
              href={item.href} 
              className="text-textSecondary hover:text-accent1 transition-colors"
            >
              {item.content}
            </a>
          ) : (
            <span className="text-textSecondary">
              {item.content}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}; 