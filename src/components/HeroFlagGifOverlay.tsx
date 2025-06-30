
import React from 'react';

export default function HeroFlagGifOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none"
      style={{
        opacity: 1,
        mixBlendMode: 'screen',
        zIndex: 20,
      }}
    >
      <img
        src="/lovable-uploads/0161e249-0a21-4052-b752-39b5da822c7d.png"
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
        draggable={false}
        onLoad={() => console.log('Flag overlay image loaded')}
        onError={() => console.log('Flag overlay image failed to load')}
      />
    </div>
  );
}
