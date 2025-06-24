
import React from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HistoricSite } from '../../data/historicSites';

interface SiteCardProps {
  site: HistoricSite;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const SiteCard = ({ site, isHovered, onHoverStart, onHoverEnd }: SiteCardProps) => {
  return (
    <motion.div
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      transition={{ duration: 0.6, ease: "easeOut" }}
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
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {/* Glowing Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ 
          background: "linear-gradient(45deg, transparent, transparent)" 
        }}
        animate={isHovered ? {
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
            {isHovered && (
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
  );
};

export default SiteCard;
