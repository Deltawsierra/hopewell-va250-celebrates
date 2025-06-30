
import React from 'react';
import { Vortex } from '../ui/vortex';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={300}
        baseHue={220}
        rangeSpeed={2}
        baseSpeed={0.5}
        baseRadius={0.8}
        rangeRadius={1.5}
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
