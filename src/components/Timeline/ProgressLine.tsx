import React from 'react';

interface ProgressLineProps {
  scrollProgress: number;
  isScrolling: 'left' | 'right' | false;
  containerWidth: number;
  totalWidth: number;
  visibleProgress: number;
}

// This component is now integrated directly into DesktopTimeline
// but keeping it for potential future use or if needed elsewhere
const ProgressLine: React.FC<ProgressLineProps> = ({ 
  visibleProgress,
  containerWidth, 
  totalWidth
}) => {
  const backgroundWidth = totalWidth > 0 ? Math.max(totalWidth - 128, containerWidth - 128) : 'calc(100% - 128px)';
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
      <div 
        className="absolute left-16 h-2 rounded-full pointer-events-none"
        style={{ 
          top: '280px',
          background: 'linear-gradient(90deg, #002868 0%, #BF0A30 50%, #002868 100%)',
          boxShadow: '0 2px 8px rgba(0, 40, 104, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
          width: typeof backgroundWidth === 'number' 
            ? `${(backgroundWidth * progressWidth) / 100}px` 
            : `${progressWidth}%`,
          transition: 'width 0.3s ease-out'
        }}
      />
    </>
  );
};

export default ProgressLine;
