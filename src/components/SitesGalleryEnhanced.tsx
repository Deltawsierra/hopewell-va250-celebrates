import React, { useState } from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SitesGalleryEnhanced = () => {
  const [hoveredSite, setHoveredSite] = useState<number | null>(null);

  const historicSites = [
    {
      id: 1,
      name: 'Appomattox Manor',
      description: 'Grant\'s Civil War headquarters, now part of Petersburg National Battlefield. Where President Lincoln visited twice during the siege and Union hospitals treated up to 10,000 patients.',
      image: '/lovable-uploads/3d6ba77e-c74b-47fe-919e-0a1a2a29d809.png',
      hours: 'Daily 9 AM - 5 PM',
      address: 'Cedar Lane, Hopewell, VA',
      details: 'General Grant set up headquarters here in 1864, making City Point one of the world\'s busiest ports during the Petersburg Siege.'
    },
    {
      id: 2,
      name: 'Weston Manor',
      description: 'Built in 1789 by William and Christian Eppes Gilliam, this Georgian plantation house showcases the rise of ordinary people through extraordinary times, with original interiors and restored dependencies.',
      image: '/lovable-uploads/4ef163f0-80dd-406a-9417-18f599ad2fb4.png',
      hours: 'Tours: Weekdays 10 AM - 3 PM',
      address: 'Weston Lane, Hopewell, VA',
      details: 'Listed on the National Register of Historic Places. Features distinctive original moldings, wainscoting, and reconstructed summer kitchen and laundry from 2008 archaeological research.'
    },
    {
      id: 3,
      name: 'Beacon Theatre',
      description: 'Art Deco and Colonial Revival gem opened in 1928, designed by Fred Bishop (architect of Richmond\'s Byrd Theatre). Restored and reopened in 2014 as Hopewell\'s signature venue.',
      image: '/lovable-uploads/344b973c-e994-4ca6-9ad0-c656d473c838.png',
      hours: 'Event Schedule Varies',
      address: 'Main Street, Hopewell, VA',
      details: 'Served as vaudeville stage and movie theater before major city restoration. Grand reopening featured sold-out Leon Russell concert. Listed on National Register of Historic Places.'
    },
    {
      id: 4,
      name: 'Historic Downtown',
      description: 'Charming brick buildings housing local shops, restaurants, and community spaces reflecting Hopewell\'s industrial heritage and modern revitalization efforts.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
      hours: 'Always Open',
      address: 'Downtown Hopewell, VA',
      details: 'Part of the City Point Historic District, showcasing architectural evolution from colonial tobacco warehouses to 20th-century industrial buildings.'
    },
    {
      id: 5,
      name: 'City Point Waterfront',
      description: 'Scenic boardwalk and park at the historic confluence of the James and Appomattox rivers, where City Point was strategically founded in 1613.',
      image: '/lovable-uploads/610d8137-4117-41b8-9ccc-545384c32298.png',
      hours: 'Dawn to Dusk',
      address: 'City Point, Hopewell, VA',
      details: 'The strategic location that made City Point a center of commerce, conflict, and community for over 400 years. Features walking trails and river views.'
    },
    {
      id: 6,
      name: 'Hopewell Community Center',
      description: '38,000-square-foot recreation center with full gym, 25-meter heated indoor pool, racquetball courts, and meeting rooms serving all ages.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
      hours: 'Varies by Program',
      address: '300 N Main St, Hopewell, VA',
      details: 'Modern community hub offering fitness, recreation, and event hosting for residents and visitors.'
    },
    {
      id: 7,
      name: 'Appomattox Regional Library',
      description: 'Founded in 1930, ARLS provides lifelong learning and community programming. The flagship Maude Langhorne Nelson Library honors Hopewell\'s first librarian.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
      hours: 'Mon-Sat Various Hours',
      address: 'Hopewell, VA',
      details: 'Serves Hopewell, Prince George, and Dinwiddie counties through eight locations, fostering community connections and knowledge access.'
    },
    {
      id: 8,
      name: 'City Point National Cemetery',
      description: 'Historic cemetery reflecting Hopewell\'s role in American military history, particularly during the Civil War period.',
      image: '/lovable-uploads/610d8137-4117-41b8-9ccc-545384c32298.png',
      hours: 'Dawn to Dusk',
      address: 'City Point, Hopewell, VA',
      details: 'Part of the City Point Historic District, preserving the memory of those who served during America\'s defining conflicts.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="sites" className="py-20 bg-gradient-to-b from-red-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-full h-full bg-[#002868] transform rotate-45"></div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Historic Sites & Landmarks
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the places where four centuries of American history come alive
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {historicSites.map((site) => (
            <motion.div
              key={site.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              variants={cardVariants}
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.1}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileDrag={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredSite(site.id)}
              onHoverEnd={() => setHoveredSite(null)}
            >
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ 
                  background: "linear-gradient(45deg, transparent, transparent)" 
                }}
                animate={hoveredSite === site.id ? {
                  background: [
                    "linear-gradient(45deg, rgba(191, 10, 48, 0.3) 0%, transparent 50%, rgba(0, 40, 104, 0.3) 100%)",
                    "linear-gradient(45deg, rgba(0, 40, 104, 0.3) 0%, transparent 50%, rgba(191, 10, 48, 0.3) 100%)",
                    "linear-gradient(45deg, rgba(191, 10, 48, 0.3) 0%, transparent 50%, rgba(0, 40, 104, 0.3) 100%)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ 
                  padding: '2px',
                  borderRadius: '12px'
                }}
              />
              
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={site.image}
                    alt={`${site.name}, historic landmark in Hopewell, Virginia`}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay with animated gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Floating Camera Icon */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <motion.button 
                      className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Camera className="w-4 h-4 text-[#002868]" />
                    </motion.button>
                  </motion.div>

                  {/* Spotlight Effect */}
                  <AnimatePresence>
                    {hoveredSite === site.id && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)`
                        }}
                      />
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-[#002868] mb-3 group-hover:text-[#BF0A30] transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {site.name}
                  </motion.h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {site.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="w-4 h-4 mr-2 text-[#BF0A30]" />
                      <span className="text-sm">{site.hours}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-4 h-4 mr-2 text-[#BF0A30]" />
                      <span className="text-sm">{site.address}</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.button 
                      className="flex-1 bg-[#002868] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(0, 40, 104, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                    <motion.button 
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#f3f4f6"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MapPin className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SitesGalleryEnhanced;
