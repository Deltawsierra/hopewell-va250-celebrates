
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
  const [animationSpeed, setAnimationSpeed] = useState('0s');

  // Update scroll progress and boundary states
  const updateScrollState = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Calculate scroll progress (0 to 1)
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
      
      // Update boundary states
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < maxScroll - 5);
    }
  };

  // Set CSS custom properties for smooth animation
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      
      if (isScrolling) {
        // Set animation properties
        container.style.setProperty('--animation-duration', '0.5s');
        container.style.setProperty(
          '--animation-direction', 
          isScrolling === 'left' ? 'reverse' : 'forwards'
        );
        setAnimationSpeed('0.5s');
      } else {
        container.style.setProperty('--animation-duration', '0s');
        setAnimationSpeed('0s');
      }
    }
  }, [isScrolling]);

  // Smooth scroll functionality
  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    if (isScrolling && containerRef.current) {
      scrollInterval = setInterval(() => {
        if (containerRef.current) {
          const container = containerRef.current;
          const scrollAmount = isScrolling === 'left' ? -2 : 2;
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
        }
      }, 16); // ~60fps for smooth movement
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
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
      
      container.addEventListener('scroll', handleScroll);
      // Initial state
      updateScrollState();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const threshold = 150; // pixels from edge to trigger scroll

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
          scrollBehavior: 'smooth'
        }}
      >
        {/* Left Navigation Hover Zone */}
        {canScrollLeft && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-100/20 via-gray-100/10 to-transparent z-20 flex items-center justify-start pl-6 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isScrolling === 'left' ? 0.9 : 0.4,
              background: isScrolling === 'left' 
                ? 'linear-gradient(to right, rgba(156, 163, 175, 0.3), transparent)' 
                : 'linear-gradient(to right, rgba(156, 163, 175, 0.2), transparent)'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ 
                x: isScrolling === 'left' ? [-2, 2, -2] : 0,
                scale: isScrolling === 'left' ? 1.1 : 1
              }}
              transition={{ 
                x: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
            >
              <ChevronLeft className="w-10 h-10 text-[#002868] drop-shadow-lg" />
            </motion.div>
          </motion.div>
        )}

        {/* Right Navigation Hover Zone */}
        {canScrollRight && (
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-100/20 via-gray-100/10 to-transparent z-20 flex items-center justify-end pr-6 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isScrolling === 'right' ? 0.9 : 0.4,
              background: isScrolling === 'right' 
                ? 'linear-gradient(to left, rgba(156, 163, 175, 0.3), transparent)' 
                : 'linear-gradient(to left, rgba(156, 163, 175, 0.2), transparent)'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ 
                x: isScrolling === 'right' ? [2, -2, 2] : 0,
                scale: isScrolling === 'right' ? 1.1 : 1
              }}
              transition={{ 
                x: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
            >
              <ChevronRight className="w-10 h-10 text-[#002868] drop-shadow-lg" />
            </motion.div>
          </motion.div>
        )}

        <div 
          ref={scrollerRef}
          className="relative min-w-full py-12 px-8 transition-transform duration-300 ease-out"
          style={{
            transform: isScrolling ? `translateX(${isScrolling === 'left' ? '2px' : '-2px'})` : 'translateX(0)',
          }}
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
              width: `${scrollProgress * 100}%`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              boxShadow: isScrolling ? '0 0 20px rgba(191, 10, 48, 0.4)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            transition={{ 
              scaleX: { duration: 0.3, ease: "easeOut" },
              boxShadow: { duration: 0.3 }
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .timeline-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-container::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-2px); }
        }
      `}</style>
    </div>
  );
};

export default DesktopTimeline;
