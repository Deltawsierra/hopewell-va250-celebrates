
import React, { useRef, useState, useEffect } from 'react';
import { timelineEvents } from '../../data/timelineEvents';
import TimelineEvent from './TimelineEvent';
import ProgressLine from './ProgressLine';

interface DesktopTimelineProps {
  hoveredEvent: number | null;
  setHoveredEvent: (index: number | null) => void;
  onEventClick: (index: number) => void;
  selectedEvent: number | null;
}

const DesktopTimeline: React.FC<DesktopTimelineProps> = ({
  hoveredEvent,
  setHoveredEvent,
  onEventClick,
  selectedEvent
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleProgress, setVisibleProgress] = useState(0);

  // Update scroll progress
  const updateScrollState = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const clientWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    
    // Calculate scroll progress (0 to 1)
    const progress = maxScroll > 0 ? Math.min(Math.max(scrollLeft / maxScroll, 0), 1) : 0;
    setScrollProgress(progress);
    
    // Calculate visible content progress for the dynamic line
    const visibleEnd = scrollLeft + clientWidth;
    const visibleContentProgress = Math.min(visibleEnd / scrollWidth, 1);
    setVisibleProgress(visibleContentProgress);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initial state update
    updateScrollState();

    // Add scroll listener
    const handleScroll = () => updateScrollState();
    container.addEventListener('scroll', handleScroll, { passive: true });

    // Add resize listener
    const handleResize = () => updateScrollState();
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Enable mouse wheel horizontal scrolling when hovering timeline
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Already scrolling horizontally
        return;
      }
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="hidden md:block relative pb-64">
      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Visual (non-clickable) Left Arrow */}
        <div
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 z-30 
                     flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl 
                     rounded-full w-12 h-12 border border-gray-200/50 opacity-80"
          aria-hidden="true"
          style={{ 
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
            filter: 'drop-shadow(0 4px 12px rgba(0, 40, 104, 0.1))'
          }}
        >
          <span className="text-xl text-[#002868]">←</span>
        </div>

        {/* Visual (non-clickable) Right Arrow */}
        <div
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 z-30 
                     flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl 
                     rounded-full w-12 h-12 border border-gray-200/50 opacity-80"
          aria-hidden="true"
          style={{ 
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
            filter: 'drop-shadow(0 4px 12px rgba(0, 40, 104, 0.1))'
          }}
        >
          <span className="text-xl text-[#BF0A30]">→</span>
        </div>

        {/* Scrollable Timeline Content */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide px-16"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            cursor: 'grab'
          }}
          tabIndex={0}
        >
          <div 
            ref={contentRef}
            className="relative py-12 select-none"
            style={{ minWidth: '1800px' }}
          >
            {/* Timeline Events */}
            <div className="flex justify-between items-start relative w-full">
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
            
            {/* Progress Line */}
            <ProgressLine
              scrollProgress={scrollProgress}
              visibleProgress={visibleProgress}
              isScrolling={false}
              containerWidth={scrollRef.current?.clientWidth || 0}
              totalWidth={scrollRef.current?.scrollWidth || 0}
            />
          </div>
        </div>
      </div>

      <style>{`
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
