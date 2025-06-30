
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressLineProps {
  scrollProgress: number;
  isScrolling: 'left' | 'right' | false;
  containerWidth?: number;
  totalWidth?: number;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ 
  scrollProgress, 
  isScrolling, 
  containerWidth = 0, 
  totalWidth = 0 
}) => {
  // Calculate the progress line width based on scroll position
  // The line should extend from left edge to the right edge of the visible area
  const visibleRatio = containerWidth > 0 && totalWidth > 0 ? containerWidth / totalWidth : 0;
  const scrollRatio = scrollProgress;
  
  // Progress width should be: visible portion + scrolled portion of the remaining timeline
  const progressWidth = Math.min((visibleRatio + scrollRatio * (1 - visibleRatio)) * 100, 100);

  // Calculate the actual pixel width for the background line to span full timeline
  const backgroundWidth = totalWidth > 0 ? totalWidth - 64 : 'calc(100% - 64px)'; // 64px = left-8 + right-8

  return (
    <>
      {/* Background Timeline Line - spans full timeline width */}
      <div 
        className="absolute left-8 h-3 bg-gray-200 rounded-full pointer-events-none"
        style={{ 
          top: '280px',
          width: typeof backgroundWidth === 'number' ? `${backgroundWidth}px` : backgroundWidth
        }}
      />
      
      {/* Dynamic Progress Timeline Line */}
      <motion.div 
        className="absolute left-8 h-3 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] rounded-full pointer-events-none shadow-lg"
        style={{ 
          top: '280px',
          width: typeof backgroundWidth === 'number' ? `${(backgroundWidth * progressWidth) / 100}px` : `${progressWidth}%`
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
