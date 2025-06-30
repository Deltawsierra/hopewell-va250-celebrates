
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { historicSites } from '../data/historicSites';
import AnimatedBackground from './SitesGallery/AnimatedBackground';
import SectionHeader from './SitesGallery/SectionHeader';
import SiteCard from './SitesGallery/SiteCard';
import ErrorBoundary from './ErrorBoundary';

const SitesGalleryEnhanced = () => {
  const [hoveredSite, setHoveredSite] = useState<number | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <section id="sites" className="py-20 bg-gradient-to-b from-red-50 to-blue-50 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader />

        <ErrorBoundary fallback={
          <div className="text-center py-8">
            <p className="text-gray-600">Gallery temporarily unavailable. Please refresh the page.</p>
          </div>
        }>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {historicSites.map((site) => (
              <motion.div
                key={site.id}
                variants={cardVariants}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <ErrorBoundary>
                  <SiteCard
                    site={site}
                    isHovered={hoveredSite === site.id}
                    onHoverStart={() => setHoveredSite(site.id)}
                    onHoverEnd={() => setHoveredSite(null)}
                  />
                </ErrorBoundary>
              </motion.div>
            ))}
          </motion.div>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default SitesGalleryEnhanced;
