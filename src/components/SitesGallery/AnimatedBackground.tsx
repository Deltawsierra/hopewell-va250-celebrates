
import React from 'react';
import { Vortex } from '../ui/vortex';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={400}
        baseHue={0}
        rangeSpeed={3}
        baseSpeed={1}
        baseRadius={1.2}
        rangeRadius={2.5}
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
