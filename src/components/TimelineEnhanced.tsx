
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../data/timelineEvents';
import DesktopTimeline from './Timeline/DesktopTimeline';
import MobileTimeline from './Timeline/MobileTimeline';
import TimelineModal from './Timeline/TimelineModal';
import ErrorBoundary from './ErrorBoundary';

const TimelineEnhanced = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const handleEventClick = (index: number) => {
    setSelectedEvent(index === -1 ? null : index);
  };

  return (
    <section id="timeline" className="py-20 pb-8 bg-gradient-to-b from-blue-50 via-red-50 to-red-100 relative overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#002868] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="w-full relative z-10">
        <motion.div 
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Four Centuries of History
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the pivotal moments that shaped Hopewell and America from 1613 to today
          </p>
        </motion.div>

        {/* Desktop Timeline - Wrapped in Error Boundary */}
        <ErrorBoundary fallback={
          <div className="text-center py-8">
            <p className="text-gray-600">Timeline temporarily unavailable. Please refresh the page.</p>
          </div>
        }>
          <div className="w-full">
            <DesktopTimeline
              hoveredEvent={hoveredEvent}
              setHoveredEvent={setHoveredEvent}
              onEventClick={handleEventClick}
              selectedEvent={selectedEvent}
            />
          </div>
        </ErrorBoundary>

        {/* Mobile Timeline - Wrapped in Error Boundary */}
        <ErrorBoundary>
          <div className="px-6">
            <MobileTimeline
              onEventClick={handleEventClick}
              selectedEvent={selectedEvent}
            />
          </div>
        </ErrorBoundary>

        {/* Event Details Modal - Wrapped in Error Boundary */}
        <ErrorBoundary>
          <TimelineModal
            event={selectedEvent !== null ? timelineEvents[selectedEvent] : null}
            isOpen={selectedEvent !== null}
            onClose={() => setSelectedEvent(null)}
          />
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default TimelineEnhanced;
