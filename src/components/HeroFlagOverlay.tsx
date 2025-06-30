
import React from 'react';

const HeroFlagOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none"
      style={{
        zIndex: 12,
        opacity: 0.23,
        mixBlendMode: 'lighten',
      }}
    >
      <svg
        viewBox="0 0 480 320"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <defs>
          <filter id="wave" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="5" result="turb" />
            <feDisplacementMap in2="turb" in="SourceGraphic" scale="12" xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" values="12;22;12" dur="5.2s" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
          <filter id="gentleWave" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="1" seed="3" result="turb" />
            <feDisplacementMap in2="turb" in="SourceGraphic" scale="6" xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" values="6;10;6" dur="4s" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
          <symbol id="star" viewBox="0 0 12 12">
            <path d="M6 1 L7.2 4.8 L11 4.8 L8.4 7.2 L9.6 11 L6 8.4 L2.4 11 L3.6 7.2 L1 4.8 L4.8 4.8 Z" fill="#fff" stroke="#fff" strokeWidth="0.2" />
          </symbol>
        </defs>
        <g filter="url(#wave)">
          {/* 13 alternating red and white stripes */}
          {Array.from({ length: 13 }).map((_, i) => (
            <rect
              key={i}
              y={i * 24.6}
              width={480}
              height={24.6}
              fill={i % 2 === 0 ? "#BF0A30" : "#fff"}
              opacity={i % 2 === 0 ? 0.31 : 0.15}
            />
          ))}
          {/* Blue canton */}
          <rect x={0} y={0} width={192} height={172.2} fill="#002868" opacity={0.36} />
        </g>
        
        {/* Stars with gentler wave effect to prevent stretching */}
        <g filter="url(#gentleWave)">
          {[
            [0, 6, 18, 20],   // Row 1: 6 stars
            [1, 5, 32, 32],   // Row 2: 5 stars  
            [2, 6, 46, 20],   // Row 3: 6 stars
            [3, 5, 60, 32],   // Row 4: 5 stars
            [4, 6, 74, 20],   // Row 5: 6 stars
            [5, 5, 88, 32],   // Row 6: 5 stars
            [6, 6, 102, 20],  // Row 7: 6 stars
            [7, 5, 116, 32],  // Row 8: 5 stars
            [8, 6, 130, 20],  // Row 9: 6 stars
          ].map(([row, numStars, y, xStart]) =>
            Array.from({ length: numStars }).map((_, i) => (
              <use
                href="#star"
                key={`star-${row}-${i}`}
                x={xStart + i * 26}
                y={y}
                width={10}
                height={10}
                opacity={0.92}
              />
            ))
          )}
        </g>
      </svg>
    </div>
  );
};

export default HeroFlagOverlay;
