import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main red gradient for embossed effect - light from top-left */}
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4444" />
            <stop offset="20%" stopColor="#ff0000" />
            <stop offset="50%" stopColor="#cc0000" />
            <stop offset="80%" stopColor="#990000" />
            <stop offset="100%" stopColor="#660000" />
          </linearGradient>
          
          {/* Bright highlight for top-left (light source) */}
          <radialGradient id="topHighlight" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ff8888" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#ff4444" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#ff0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          
          {/* Dark shadow for bottom-right */}
          <radialGradient id="bottomShadow" cx="70%" cy="70%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="#660000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#330000" stopOpacity="0.8" />
          </radialGradient>
          
          {/* Drop shadow filter for depth */}
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
            <feOffset dx="2.5" dy="2.5" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Shadow layer behind text for depth */}
        <text
          x="50"
          y="60"
          fontSize="56"
          fontWeight="900"
          fill="#330000"
          fillOpacity="0.6"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          transform="translate(3, 3)"
        >
          Ł P
        </text>
        
        {/* Main text - embossed base */}
        <text
          x="50"
          y="60"
          fontSize="56"
          fontWeight="900"
          fill="url(#redGradient)"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          filter="url(#dropShadow)"
        >
          Ł P
        </text>
        
        {/* Top highlight overlay (light source from top-left) */}
        <text
          x="50"
          y="60"
          fontSize="56"
          fontWeight="900"
          fill="url(#topHighlight)"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          opacity="0.8"
        >
          Ł P
        </text>
        
        {/* Bottom shadow overlay (shadow from bottom-right) */}
        <text
          x="50"
          y="60"
          fontSize="56"
          fontWeight="900"
          fill="url(#bottomShadow)"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          opacity="0.6"
        >
          Ł P
        </text>
      </svg>
    </div>
  );
};

export default Logo;
