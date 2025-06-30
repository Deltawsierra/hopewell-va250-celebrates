
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGradient } from './ui/background-gradient';

const EventCalendarEnhanced = () => {
  const [selectedView, setSelectedView] = useState<'month' | 'list'>('list');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Empty events array - all events to be announced
  const events: any[] = [];

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'family', label: 'Family' },
    { value: 'history', label: 'History' },
    { value: 'community', label: 'Community' },
    { value: 'music', label: 'Music' }
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const marqueeText = "Events to be announced soon • Stay tuned for Hopewell VA250 celebration details • ";

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-red-100 via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Subtle Animated Background Elements - Professional Stars Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#002868] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Seamless transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-100 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Infinite Seamless Marquee Effect */}
        <div className="mb-8 overflow-hidden bg-gradient-to-r from-[#002868] to-[#BF0A30] rounded-lg shadow-lg">
          <motion.div
            className="flex whitespace-nowrap py-4 text-white font-bold text-lg"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Repeat the text multiple times to ensure seamless loop */}
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className="px-8">{marqueeText}</span>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Upcoming VA250 Events in Hopewell
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for memorable celebrations honoring America's heritage and Hopewell's unique place in history
          </p>
        </motion.div>

        {/* Enhanced Controls - Hidden when no events */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 opacity-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 shadow-inner">
            <motion.button
              className="px-6 py-3 rounded-md font-semibold text-gray-400 cursor-not-allowed"
              disabled
            >
              List View
            </motion.button>
            <motion.button
              className="px-6 py-3 rounded-md font-semibold text-gray-400 cursor-not-allowed"
              disabled
            >
              Month View
            </motion.button>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <motion.button
                key={type.value}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed"
                disabled
              >
                {type.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events to be Announced Message with BackgroundGradient */}
        <div className="flex justify-center">
          <BackgroundGradient className="rounded-xl max-w-2xl">
            <motion.div
              className="flex flex-col items-center justify-center w-full min-h-[320px] bg-white/90 rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-[#002868] mb-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Events to be announced soon
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Check back soon for Hopewell VA250 celebration event details!
              </motion.p>
              
              {/* Optional decorative element */}
              <motion.div 
                className="mt-6 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-12 h-1 bg-gradient-to-r from-[#002868] to-[#BF0A30] rounded-full"></div>
              </motion.div>
            </motion.div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
};

export default EventCalendarEnhanced;
