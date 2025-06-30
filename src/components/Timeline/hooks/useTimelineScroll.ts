
import { useRef, useEffect, useState, useCallback } from 'react';

export const useTimelineScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleProgress, setVisibleProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);

  const updateScrollState = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const clientWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;
      
      // Basic scroll progress (0 to 1)
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollLeft / maxScroll, 0), 1) : 0;
      setScrollProgress(progress);
      
      // Calculate visible content progress
      // This represents how much of the timeline is "filled" based on what's visible
      const visibleEnd = scrollLeft + clientWidth;
      const visibleContentProgress = Math.min(visibleEnd / scrollWidth, 1);
      setVisibleProgress(visibleContentProgress);
      
      // Update scroll capabilities
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < maxScroll - 5);
      
      // Update dimensions
      setContainerWidth(clientWidth);
      setTotalWidth(scrollWidth);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        updateScrollState();
      };
      
      // Use passive listener for better performance
      container.addEventListener('scroll', handleScroll, { passive: true });
      
      // Use ResizeObserver to handle container size changes
      const resizeObserver = new ResizeObserver(() => {
        updateScrollState();
      });
      
      resizeObserver.observe(container);
      
      // Initial update with a small delay to ensure DOM is ready
      const timeoutId = setTimeout(updateScrollState, 100);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        resizeObserver.disconnect();
        clearTimeout(timeoutId);
      };
    }
  }, [updateScrollState]);

  return {
    containerRef,
    scrollerRef,
    scrollProgress,
    visibleProgress,
    canScrollLeft,
    canScrollRight,
    containerWidth,
    totalWidth,
    updateScrollState
  };
};
