
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { timelineEvents } from '../../data/timelineEvents';
import TimelineEvent from './TimelineEvent';

interface DesktopTimelineProps {
  hoveredEvent: number | null;
  setHoveredEvent: (index: number | null) => void;
  onEventClick: (index: number) => void;
  selectedEvent: number | null;
  isScrolling: 'left' | 'right' | false;
  setIsScrolling: (scrolling: 'left' | 'right' | false) => void;
}

const DesktopTimeline: React.FC<DesktopTimelineProps> = ({
  hoveredEvent,
  setHoveredEvent,
  onEventClick,
  selectedEvent,
  isScrolling,
  setIsScrolling
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll progress and boundary states with fluid animation
  const updateScrollState = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Calculate fluid scroll progress (0 to 1) with smooth interpolation
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollLeft / maxScroll, 0), 1) : 0;
      setScrollProgress(progress);
      
      // Update boundary states with small threshold for smoother UX
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < maxScroll - 1);
    }
  };

  // Smooth continuous scroll functionality
  useEffect(() => {
    let animationFrame: number;
    
    const smoothScroll = () => {
      if (isScrolling && containerRef.current) {
        const container = containerRef.current;
        const scrollSpeed = 1.5; // Slower, smoother scrolling
        const scrollAmount = isScrolling === 'left' ? -scrollSpeed : scrollSpeed;
        const newScrollLeft = container.scrollLeft + scrollAmount;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Stop scrolling if we've reached the boundaries
        if ((isScrolling === 'left' && newScrollLeft <= 0) || 
            (isScrolling === 'right' && newScrollLeft >= maxScroll)) {
          setIsScrolling(false);
          return;
        }
        
        container.scrollLeft = newScrollLeft;
        updateScrollState();
        
        // Continue the smooth animation
        animationFrame = requestAnimationFrame(smoothScroll);
      }
    };

    if (isScrolling) {
      animationFrame = requestAnimationFrame(smoothScroll);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isScrolling, setIsScrolling]);

  // Listen for scroll events to update progress
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        updateScrollState();
      };
      
      container.addEventListener('scroll', handleScroll, { passive: true });
      // Initial state
      updateScrollState();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const threshold = 120; // pixels from edge to trigger scroll

    if (x < threshold && canScrollLeft) {
      setIsScrolling('left');
    } else if (x > rect.width - threshold && canScrollRight) {
      setIsScrolling('right');
    } else {
      setIsScrolling(false);
    }
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
    setHoveredEvent(null);
  };

  return (
    <div className="hidden md:block relative pb-64">
      <div 
        ref={containerRef}
        className="timeline-container overflow-x-auto overflow-y-hidden scrollbar-hide cursor-pointer w-full relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          height: 'auto'
        }}
      >
        {/* Sticky Left Navigation Arrow - Fixed to left edge */}
        {canScrollLeft && (
          <motion.div
            className="fixed left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isScrolling === 'left' ? 1 : 0.7,
              x: 0,
              scale: isScrolling === 'left' ? 1.2 : 1
            }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
              <motion.div
                animate={{ 
                  x: isScrolling === 'left' ? [-3, 3, -3] : 0
                }}
                transition={{ 
                  x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <ChevronLeft className="w-8 h-8 text-[#002868]" />
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Sticky Right Navigation Arrow - Fixed to right edge */}
        {canScrollRight && (
          <motion.div
            className="fixed right-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isScrolling === 'right' ? 1 : 0.7,
              x: 0,
              scale: isScrolling === 'right' ? 1.2 : 1
            }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
              <motion.div
                animate={{ 
                  x: isScrolling === 'right' ? [3, -3, 3] : 0
                }}
                transition={{ 
                  x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <ChevronRight className="w-8 h-8 text-[#002868]" />
              </motion.div>
            </div>
          </motion.div>
        )}

        <div 
          ref={scrollerRef}
          className="relative min-w-full py-12 px-8"
        >
          {/* Timeline Events */}
          <div className="flex justify-between items-start relative w-full" style={{ minWidth: '1800px' }}>
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                index={index}
                isHovered={hoveredEvent === index}
                onHover={setHoveredEvent}
                onClick={(eventIndex) => onEventClick(selectedEvent === eventIndex ? -1 : eventIndex)}
              />
            ))}
          </div>
          
          {/* Background Timeline Line - Full width */}
          <div 
            className="absolute left-8 right-8 h-3 bg-gray-200 rounded-full pointer-events-none"
            style={{ top: '280px' }}
          />
          
          {/* Dynamic Fluid Progress Timeline Line */}
          <motion.div 
            className="absolute left-8 h-3 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] rounded-full pointer-events-none shadow-lg"
            style={{ 
              top: '280px',
            }}
            animate={{ 
              width: `${scrollProgress * 100}%`,
              boxShadow: isScrolling 
                ? '0 0 20px rgba(191, 10, 48, 0.6), 0 0 40px rgba(191, 10, 48, 0.3)' 
                : '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            transition={{ 
              width: { 
                duration: 0.1, 
                ease: "linear",
                type: "tween"
              },
              boxShadow: { duration: 0.3 }
            }}
          />
        </div>
      </div>

      <style>{`
        .timeline-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-container::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default DesktopTimeline;
