
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { historicSites } from '../data/historicSites';
import AnimatedBackground from './SitesGallery/AnimatedBackground';
import SectionHeader from './SitesGallery/SectionHeader';
import SiteCard from './SitesGallery/SiteCard';

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="sites" className="py-20 bg-gradient-to-b from-red-50 to-blue-50 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader />

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
              variants={cardVariants}
            >
              <SiteCard
                site={site}
                isHovered={hoveredSite === site.id}
                onHoverStart={() => setHoveredSite(site.id)}
                onHoverEnd={() => setHoveredSite(null)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SitesGalleryEnhanced;
