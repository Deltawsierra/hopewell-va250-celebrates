
import React from 'react';
import Lottie from 'lottie-react';

// Using a public Lottie animation URL for the waving American flag
// This is a common practice for demonstration - in production you'd download and host locally
const flagAnimationData = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 120,
  "w": 800,
  "h": 600,
  "nm": "American Flag Wave",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Flag",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [400, 300, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "rc",
              "d": 1,
              "s": {"a": 0, "k": [800, 600]},
              "p": {"a": 0, "k": [0, 0]},
              "r": {"a": 0, "k": 0}
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.749, 0.039, 0.188, 1]},
              "o": {"a": 0, "k": 100}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 120,
      "st": 0
    }
  ]
};

interface HeroFlagLottieOverlayProps {
  opacity?: number;
  mixBlendMode?: string;
}

const HeroFlagLottieOverlay: React.FC<HeroFlagLottieOverlayProps> = ({ 
  opacity = 0.28, 
  mixBlendMode = "lighten" 
}) => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none"
      style={{
        zIndex: 12,
        opacity,
        mixBlendMode: mixBlendMode as any,
      }}
    >
      {/* Fallback: CSS-based animated flag pattern */}
      <div className="w-full h-full relative overflow-hidden">
        {/* Animated stripes */}
        <div className="absolute inset-0">
          {[...Array(13)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-[7.69%] ${
                i % 2 === 0 ? 'bg-red-600' : 'bg-white'
              }`}
              style={{
                top: `${i * 7.69}%`,
                opacity: i % 2 === 0 ? 0.4 : 0.2,
                animation: `wave-stripe ${3 + (i * 0.1)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        
        {/* Blue canton */}
        <div 
          className="absolute top-0 left-0 bg-blue-900"
          style={{
            width: '40%',
            height: '53.8%', // 7 stripes worth
            opacity: 0.4,
            animation: 'wave-canton 4s ease-in-out infinite',
          }}
        >
          {/* Stars grid */}
          <div className="relative w-full h-full p-2">
            {Array.from({ length: 50 }).map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;
              const isOddRow = row % 2 === 1;
              const starsInRow = isOddRow ? 5 : 6;
              
              if (isOddRow && col >= 5) return null;
              if (!isOddRow && col >= 6) return null;
              
              return (
                <div
                  key={i}
                  className="absolute text-white text-xs"
                  style={{
                    left: `${(col * (100 / (starsInRow + 1))) + (100 / (starsInRow + 1))}%`,
                    top: `${(row * 10) + 5}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `twinkle ${2 + (i * 0.05)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  ★
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFlagLottieOverlay;
