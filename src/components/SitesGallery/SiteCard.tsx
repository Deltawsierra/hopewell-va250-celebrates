
import React from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
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
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="relative overflow-hidden">
          <motion.img
            src={site.image}
            alt={`${site.name}, historic landmark in Hopewell, Virginia`}
            className="w-full h-64 object-cover"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          
          {/* Simplified overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Camera Icon */}
          <div className="absolute top-4 right-4">
            <motion.button 
              className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera className="w-4 h-4 text-[#002868]" />
            </motion.button>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#002868] mb-3 group-hover:text-[#BF0A30] transition-colors duration-200">
            {site.name}
          </h3>
          
          <p className="text-gray-600 mb-4 text-sm">
            {site.description}
          </p>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-[#BF0A30]" />
              <span className="text-sm">{site.hours}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-[#BF0A30]" />
              <span className="text-sm">{site.address}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <motion.button 
              className="flex-1 bg-[#002868] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
            <motion.button 
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
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
