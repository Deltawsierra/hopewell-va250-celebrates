
import React, { useRef, useState, useEffect } from 'react';
import { timelineEvents } from '../../data/timelineEvents';
import TimelineEvent from './TimelineEvent';
import NavigationArrows from './NavigationArrows';
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isScrolling, setIsScrolling] = useState<'left' | 'right' | false>(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleProgress, setVisibleProgress] = useState(0);

  // Update scroll state and progress
  const updateScrollState = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const clientWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    
    // Update scroll capabilities with small buffer to prevent edge issues
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);
    
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

  // Smooth scroll functions
  const scrollLeft = () => {
    if (!scrollRef.current) return;
    setIsScrolling('left');
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 300);
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    setIsScrolling('right');
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 300);
  };

  return (
    <div className="hidden md:block relative pb-64">
      {/* Timeline Container - This is the positioned parent for arrows */}
      <div className="relative w-full">
        {/* Navigation Arrows - Fixed at container edges */}
        <NavigationArrows
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          isScrolling={isScrolling}
          onScrollLeft={scrollLeft}
          onScrollRight={scrollRight}
        />

        {/* Scrollable Timeline Content */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide px-16"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          <div 
            ref={contentRef}
            className="relative py-12"
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
              isScrolling={isScrolling}
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
