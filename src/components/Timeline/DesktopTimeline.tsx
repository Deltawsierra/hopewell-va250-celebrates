
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
  const barRef = useRef<HTMLDivElement>(null);
  const [fillWidth, setFillWidth] = useState(0);

  // Update progress bar width based on scroll position
  const updateScrollState = () => {
    const el = scrollRef.current;
    const bar = barRef.current;
    if (!el || !bar) return;
    
    const totalScrollable = el.scrollWidth - el.clientWidth;
    const progress = totalScrollable === 0 ? 1 : el.scrollLeft / totalScrollable;
    setFillWidth(progress * bar.offsetWidth);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    // Add scroll listener for progress bar
    const handleScroll = () => updateScrollState();
    el.addEventListener('scroll', handleScroll, { passive: true });

    // Add resize listener
    const handleResize = () => updateScrollState();
    window.addEventListener('resize', handleResize);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Enable mouse wheel horizontal scrolling when hovering timeline
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    const onWheel = (e: WheelEvent) => {
      // Only intercept vertical wheel for horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none 
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none 
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
          <div className="relative py-12 select-none">
            {/* Timeline Bar (track) */}
            <div
              ref={barRef}
              className="absolute left-0 right-0 h-2 bg-gray-300/40 rounded-full pointer-events-none"
              style={{ 
                top: '280px',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            />
            
            {/* Timeline Bar (fill/progress) */}
            <div
              className="absolute left-0 h-2 rounded-full pointer-events-none"
              style={{ 
                top: '280px',
                background: 'linear-gradient(90deg, #002868 0%, #BF0A30 50%, #002868 100%)',
                boxShadow: '0 2px 8px rgba(0, 40, 104, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
                width: fillWidth,
                transition: 'width 0.3s ease-out'
              }}
            />

            {/* Timeline Events */}
            <div className="flex w-max space-x-12">
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
          </div>
        </div>
      </div>

      <style>{`
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
