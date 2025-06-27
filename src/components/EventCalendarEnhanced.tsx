import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EventCalendarEnhanced = () => {
  const [selectedView, setSelectedView] = useState<'month' | 'list'>('list');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const events = [
    {
      id: 1,
      title: 'VA250 Kickoff at Weston Manor',
      date: '2026-07-04',
      time: '2:00 PM',
      location: 'Weston Manor',
      type: 'history',
      description: 'Grand opening celebration with tours, reenactments, live music, and colonial demonstrations at the historic Georgian plantation house.',
      image: '/lovable-uploads/4ef163f0-80dd-406a-9417-18f599ad2fb4.png'
    },
    {
      id: 2,
      title: 'City Point History Walk',
      date: '2026-08-15',
      time: '10:00 AM',
      location: 'City Point Waterfront',
      type: 'history',
      description: 'Monthly guided walking tour exploring 400+ years of history at the confluence of the James and Appomattox rivers.',
      image: '/lovable-uploads/610d8137-4117-41b8-9ccc-545384c32298.png'
    },
    {
      id: 3,
      title: 'Family Day at Beacon Theatre',
      date: '2026-08-17',
      time: '11:00 AM',
      location: 'Beacon Theatre',
      type: 'family',
      description: 'Enjoy live music, local food, and free tours of the historic Art Deco theatre with family-friendly activities.',
      image: '/lovable-uploads/344b973c-e994-4ca6-9ad0-c656d473c838.png'
    },
    {
      id: 4,
      title: 'Civil War Living History',
      date: '2026-09-15',
      time: '10:00 AM',
      location: 'Appomattox Manor',
      type: 'history',
      description: 'Experience Grant\'s headquarters come alive with authentic Civil War demonstrations and historical interpretation.',
      image: '/lovable-uploads/3d6ba77e-c74b-47fe-919e-0a1a2a29d809.png'
    },
    {
      id: 5,
      title: 'VA250 Community Festival',
      date: '2026-10-12',
      time: '9:00 AM',
      location: 'Downtown Hopewell',
      type: 'community',
      description: 'Celebrate America\'s 250th with local vendors, live music, family activities, and exhibits showcasing Hopewell\'s 400+ year history.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png'
    },
    {
      id: 6,
      title: 'Industrial Heritage Tour',
      date: '2026-11-08',
      time: '1:00 PM',
      location: 'Historic Downtown',
      type: 'history',
      description: 'Explore Hopewell\'s transformation from colonial tobacco port to 20th-century industrial powerhouse.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png'
    }
  ];

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const marqueeText = "Next Up: VA250 Kickoff at Weston Manor • City Point History Walk • Family Day at Beacon Theatre • Civil War Living History • ";

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-red-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#002868_25%,_transparent_25%,_transparent_75%,_#002868_75%,_#002868),_linear-gradient(45deg,_#002868_25%,_transparent_25%,_transparent_75%,_#002868_75%,_#002868)] bg-[length:20px_20px] bg-[position:0_0,_10px_10px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* 3D Marquee Effect */}
        <div className="mb-8 overflow-hidden bg-gradient-to-r from-[#002868] to-[#BF0A30] rounded-lg shadow-lg">
          <motion.div
            className="flex whitespace-nowrap py-4 text-white font-bold text-lg"
            animate={{ x: [0, -2000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <span className="px-8">{marqueeText}</span>
            <span className="px-8">{marqueeText}</span>
            <span className="px-8">{marqueeText}</span>
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

        {/* Enhanced Controls */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 shadow-inner">
            <motion.button
              onClick={() => setSelectedView('list')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                selectedView === 'list'
                  ? 'bg-[#002868] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#002868]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              List View
            </motion.button>
            <motion.button
              onClick={() => setSelectedView('month')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                selectedView === 'month'
                  ? 'bg-[#002868] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#002868]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Month View
            </motion.button>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <motion.button
                key={type.value}
                onClick={() => setSelectedFilter(type.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === type.value
                    ? 'bg-[#BF0A30] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Events Grid with Card Spotlight Effect */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Spotlight Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(191, 10, 48, 0.1) 0%, transparent 70%)`,
                  }}
                />
                
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"
                  />
                  
                  {/* Glowing Border on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-t-xl"
                    initial={{ boxShadow: "inset 0 0 0 0px rgba(191, 10, 48, 0)" }}
                    whileHover={{ 
                      boxShadow: "inset 0 0 0 2px rgba(191, 10, 48, 0.5)",
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  <div className="absolute top-4 right-4">
                    <motion.span 
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${
                        event.type === 'family' ? 'bg-green-500' :
                        event.type === 'history' ? 'bg-blue-500' :
                        event.type === 'community' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {event.type}
                    </motion.span>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <motion.h3 
                    className="text-xl font-bold text-[#002868] mb-3 group-hover:text-[#BF0A30] transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {event.title}
                  </motion.h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#BF0A30]" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#BF0A30]" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#BF0A30]" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    {event.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <motion.button 
                      className="flex-1 bg-[#002868] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                    <motion.button 
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Star className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-lg">No events found for the selected filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventCalendarEnhanced;
