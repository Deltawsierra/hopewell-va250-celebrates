
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
            <feDisplacementMap in2="turb" in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" values="18;32;18" dur="5.2s" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
          <symbol id="star" viewBox="0 0 10 10">
            <polygon points="5,1 6,4 9,4 6.5,6 7.5,9 5,7 2.5,9 3.5,6 1,4 4,4" fill="#fff" />
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
          {/* Stars in the canton - 50 stars in 9 rows */}
          <g>
            {[
              [0, 6, 14, 16],   // Row 1: 6 stars
              [1, 5, 36, 28],   // Row 2: 5 stars
              [2, 6, 58, 16],   // Row 3: 6 stars
              [3, 5, 80, 28],   // Row 4: 5 stars
              [4, 6, 102, 16],  // Row 5: 6 stars
              [5, 5, 124, 28],  // Row 6: 5 stars
              [6, 6, 146, 16],  // Row 7: 6 stars
              [7, 5, 168, 28],  // Row 8: 5 stars
              [8, 6, 190, 16],  // Row 9: 6 stars
            ].map(([row, numStars, y, xStart]) =>
              Array.from({ length: numStars }).map((_, i) => (
                <use
                  href="#star"
                  key={`star-${row}-${i}`}
                  x={xStart + i * 24}
                  y={y}
                  width={11}
                  height={11}
                  opacity={0.88}
                />
              ))
            )}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default HeroFlagOverlay;
