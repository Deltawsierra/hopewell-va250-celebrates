
import { useRef, useEffect, useState, useCallback } from 'react';

export const useTimelineScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollLeft / maxScroll, 0), 1) : 0;
      setScrollProgress(progress);
      
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < maxScroll - 1);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        updateScrollState();
      };
      
      container.addEventListener('scroll', handleScroll, { passive: true });
      
      // Use ResizeObserver to handle container size changes
      const resizeObserver = new ResizeObserver(() => {
        updateScrollState();
      });
      
      resizeObserver.observe(container);
      updateScrollState();
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        resizeObserver.disconnect();
      };
    }
  }, [updateScrollState]);

  return {
    containerRef,
    scrollerRef,
    scrollProgress,
    canScrollLeft,
    canScrollRight,
    updateScrollState
  };
};
