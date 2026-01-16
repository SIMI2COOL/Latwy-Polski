import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  // Shield path - classic shield/coat of arms shape with smooth rounded edges
  // Using curves (Q command) for smoother, rounder edges
  const shieldPath = `
    M 50 8 
    Q 75 10 82 18 
    Q 88 25 90 40 
    Q 92 55 88 70 
    Q 85 82 75 88 
    Q 65 94 50 97 
    Q 35 94 25 88 
    Q 15 82 12 70 
    Q 8 55 10 40 
    Q 12 25 18 18 
    Q 25 10 50 8 
    Z
  `;
  
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
          {/* Red gradient for shield body */}
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3333" />
            <stop offset="50%" stopColor="#cc0000" />
            <stop offset="100%" stopColor="#990000" />
          </linearGradient>
          
          {/* Light highlight from top-left for embossed effect */}
          <radialGradient id="lightHighlight" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ff6666" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          
          {/* Shadow for bottom-right depth */}
          <radialGradient id="shadowGradient" cx="70%" cy="70%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="100%" stopColor="#660000" stopOpacity="0.6" />
          </radialGradient>
          
          {/* Embossed effect for letters */}
          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
          
          {/* Letter shadow for depth */}
          <filter id="letterShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Shield border (dark blue) */}
        <path
          d={shieldPath}
          fill="none"
          stroke="#003366"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        
        {/* Shield body (red) */}
        <path
          d={shieldPath}
          fill="url(#redGradient)"
          stroke="#003366"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        
        {/* Light highlight overlay */}
        <path
          d={shieldPath}
          fill="url(#lightHighlight)"
          stroke="none"
        />
        
        {/* Shadow overlay for depth */}
        <path
          d={shieldPath}
          fill="url(#shadowGradient)"
          stroke="none"
        />
        
        {/* Letter shadow for embossed effect */}
        <text
          x="50"
          y="58"
          fontSize="40"
          fontWeight="900"
          fill="#000000"
          fillOpacity="0.2"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          letterSpacing="-4"
          transform="translate(1.5, 1.5)"
        >
          ŁP
        </text>
        
        {/* Main letters - white with embossed effect */}
        <text
          x="50"
          y="58"
          fontSize="40"
          fontWeight="900"
          fill="url(#letterGradient)"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          letterSpacing="-4"
          filter="url(#letterShadow)"
        >
          ŁP
        </text>
        
        {/* Top highlight on letters for embossed look */}
        <text
          x="50"
          y="58"
          fontSize="40"
          fontWeight="900"
          fill="#ffffff"
          fillOpacity="0.6"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          letterSpacing="-4"
          transform="translate(-1, -1)"
        >
          ŁP
        </text>
      </svg>
    </div>
  );
};

export default Logo;
