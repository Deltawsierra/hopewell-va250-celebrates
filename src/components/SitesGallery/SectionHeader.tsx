
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = () => {
  return (
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
  );
};

export default SectionHeader;
