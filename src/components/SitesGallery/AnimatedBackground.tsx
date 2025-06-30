
import React from 'react';
import { Vortex } from '../ui/vortex';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Vortex
        backgroundColor="transparent"
        rangeY={950}
        particleCount={500}
        baseHue={100}
        rangeSpeed={1.5}
        baseSpeed={0.25}
        baseRadius={2.5}
        rangeRadius={3}
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
