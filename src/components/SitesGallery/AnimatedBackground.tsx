
import React from 'react';
import { Vortex } from '../ui/vortex';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={0}
        rangeSpeed={3}
        baseSpeed={0.5}
        baseRadius={1.5}
        rangeRadius={1.5}
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
