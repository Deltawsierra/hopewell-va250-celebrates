
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressLineProps {
  scrollProgress: number;
  isScrolling: 'left' | 'right' | false;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ scrollProgress, isScrolling }) => {
  return (
    <>
      {/* Background Timeline Line */}
      <div 
        className="absolute left-8 right-8 h-3 bg-gray-200 rounded-full pointer-events-none"
        style={{ top: '280px' }}
      />
      
      {/* Dynamic Progress Timeline Line */}
      <motion.div 
        className="absolute left-8 h-3 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] rounded-full pointer-events-none shadow-lg"
        style={{ 
          top: '280px',
          width: `${Math.max(scrollProgress * 100, 0)}%`
        }}
        animate={{
          boxShadow: isScrolling 
            ? '0 0 20px rgba(191, 10, 48, 0.6), 0 0 40px rgba(191, 10, 48, 0.3)' 
            : '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ 
          boxShadow: { duration: 0.3 }
        }}
      />
    </>
  );
};

export default ProgressLine;
