
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import HeroFlagGifOverlay from './HeroFlagGifOverlay';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - z-0 */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/344b973c-e994-4ca6-9ad0-c656d473c838.png')`,
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Color Overlay - z-10 */}
      <div className="absolute inset-0 bg-[#002868] bg-opacity-70 z-10" />
      
      {/* Flag GIF Overlay - z-20 */}
      <HeroFlagGifOverlay />
      
      {/* Patriotic Stars Pattern - z-30 */}
      <div className="absolute inset-0 opacity-10 z-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-2xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ★
          </div>
        ))}
      </div>

      {/* Main Content - z-40 */}
      <div className="relative z-40 text-center px-6 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isLoaded 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hopewell VA250
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#BF0A30] mb-8">
            Celebrating 250 Years of American History
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed">
            From City Point's colonial founding in 1613 to today, Hopewell has shaped America's story. 
            Discover centuries of history, innovation, and resilience at the confluence of the James and Appomattox rivers.
          </p>
          
          <button
            onClick={() => onScrollToSection('about')}
            className="group inline-flex items-center bg-[#BF0A30] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Explore the Celebration
            <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator - z-50 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
