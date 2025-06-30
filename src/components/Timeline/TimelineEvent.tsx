
import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent as TimelineEventType } from '../../data/timelineEvents';
import TimelineTooltip from './TimelineTooltip';

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  onClick: (index: number) => void;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  event,
  index,
  isHovered,
  onHover,
  onClick
}) => {
  const IconComponent = event.icon;

  const handleMouseEnter = () => {
    onHover(index);
  };

  const handleMouseLeave = () => {
    onHover(null);
  };

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer group relative"
      style={{ width: '140px' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(index)}
    >
      {/* Event Icon */}
      <motion.div 
        className={`w-24 h-24 ${event.color} rounded-full flex items-center justify-center mb-6 shadow-lg relative overflow-hidden z-10`}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(0, 40, 104, 0.3)",
        }}
        animate={isHovered ? {
          boxShadow: [
            "0 0 20px rgba(191, 10, 48, 0.5)",
            "0 0 40px rgba(191, 10, 48, 0.3)",
            "0 0 20px rgba(191, 10, 48, 0.5)",
          ],
        } : {}}
        transition={{ duration: 0.3 }}
      >
        <IconComponent className="w-12 h-12 text-white" />
        
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { 
            scale: [0, 1.5], 
            opacity: [0.3, 0] 
          } : {}}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
      
      {/* Event Text */}
      <div className="text-center mb-8 relative z-10">
        <motion.div 
          className="font-bold text-[#002868] text-xl mb-2"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        >
          {event.year}
        </motion.div>
        <div className="text-sm text-gray-600 font-medium leading-tight max-w-28">{event.title}</div>
      </div>

      {/* Tooltip */}
      <TimelineTooltip event={event} isVisible={isHovered} />
    </motion.div>
  );
};

export default TimelineEvent;
