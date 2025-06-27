
import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../../data/timelineEvents';

interface MobileTimelineProps {
  onEventClick: (index: number) => void;
  selectedEvent: number | null;
}

const MobileTimeline: React.FC<MobileTimelineProps> = ({ onEventClick, selectedEvent }) => {
  return (
    <div className="md:hidden space-y-8">
      {timelineEvents.map((event, index) => {
        const IconComponent = event.icon;
        return (
          <motion.div
            key={index}
            className="flex items-start space-x-4 cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => onEventClick(index)}
          >
            <motion.div 
              className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center flex-shrink-0`}
              whileTap={{ scale: 0.9 }}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <div className="font-bold text-[#002868] text-lg">{event.year}</div>
              <div className="font-semibold text-gray-800">{event.title}</div>
              <div className="text-sm text-gray-600 mt-1">{event.description}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MobileTimeline;
