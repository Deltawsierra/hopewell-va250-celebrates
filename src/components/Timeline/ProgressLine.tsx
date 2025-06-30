
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressLineProps {
  scrollProgress: number;
  isScrolling: 'left' | 'right' | false;
  containerWidth: number;
  totalWidth: number;
  visibleProgress: number;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ 
  scrollProgress, 
  isScrolling, 
  containerWidth, 
  totalWidth,
  visibleProgress
}) => {
  // Calculate the background line width (full timeline)
  const backgroundWidth = totalWidth > 0 ? Math.max(totalWidth - 128, containerWidth - 128) : 'calc(100% - 128px)';
  
  // Calculate the dynamic progress fill based on visible content
  const progressWidth = visibleProgress * 100;

  return (
    <>
      {/* Background Timeline Line - Full width */}
      <div 
        className="absolute left-16 h-2 bg-gray-300/40 rounded-full pointer-events-none"
        style={{ 
          top: '280px',
          width: typeof backgroundWidth === 'number' ? `${backgroundWidth}px` : backgroundWidth,
          boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      />
      
      {/* Dynamic Progress Fill Line */}
      <motion.div 
        className="absolute left-16 h-2 rounded-full pointer-events-none"
        style={{ 
          top: '280px',
          background: 'linear-gradient(90deg, #002868 0%, #BF0A30 50%, #002868 100%)',
          boxShadow: isScrolling 
            ? '0 0 25px rgba(191, 10, 48, 0.6), 0 0 45px rgba(191, 10, 48, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)' 
            : '0 2px 8px rgba(0, 40, 104, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)'
        }}
        animate={{
          width: typeof backgroundWidth === 'number' 
            ? `${(backgroundWidth * progressWidth) / 100}px` 
            : `${progressWidth}%`,
          boxShadow: isScrolling 
            ? '0 0 25px rgba(191, 10, 48, 0.6), 0 0 45px rgba(191, 10, 48, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)' 
            : '0 2px 8px rgba(0, 40, 104, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)'
        }}
        transition={{ 
          width: { duration: 0.3, ease: "easeOut" },
          boxShadow: { duration: 0.3 }
        }}
      />
    </>
  );
};

export default ProgressLine;
