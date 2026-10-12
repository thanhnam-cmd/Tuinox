import React from 'react';

interface FindLogoProps {
  className?: string;
  variant?: 'light-bg' | 'dark-bg';
  size?: 'sm' | 'md' | 'lg';
}

export const FindLogo: React.FC<FindLogoProps> = ({
  className = '',
  variant = 'light-bg',
  size = 'md',
}) => {
  const blueColor = variant === 'dark-bg' ? '#3B82F6' : '#224396';
  const redColor = '#E11D48';
  const textColor = variant === 'dark-bg' ? '#FFFFFF' : '#224396';

  const heights = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 460 190"
        className={`${heights[size]} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="FIND TUBEPINOX.VN Logo"
      >
        <defs>
          <filter id="logoShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* ===== LETTER F ===== */}
          {/* Blue top curved part of F */}
          <path
            d="M 12 60 C 12 35 30 20 65 20 L 110 20 C 114 20 115 26 110 28 L 36 28 C 22 28 17 38 17 52 L 17 65 Z"
            fill={blueColor}
          />
          <path
            d="M 12 60 L 12 28 C 12 20 25 20 60 20 L 115 20 C 118 20 118 30 110 30 L 45 30 C 26 30 22 36 22 55 L 22 75 Z"
            fill={blueColor}
          />
          <path
            d="M 14 36 C 14 24 28 20 55 20 L 112 20 C 117 20 116 28 110 30 L 42 30 C 26 30 22 38 22 56 L 22 80 C 22 92 14 92 14 80 Z"
            fill={blueColor}
          />
          {/* Complete stylized F blue hook */}
          <path
            d="M 12 45 C 12 24 30 20 60 20 L 114 20 C 118 20 118 31 111 31 L 46 31 C 28 31 23 38 23 54 L 23 75 Z"
            fill={blueColor}
          />
          <path
            d="M 13 38 C 13 22 32 19 65 19 L 112 19 C 116 19 116 30 110 30 L 48 30 C 28 30 24 36 24 50 L 24 75 Z"
            fill={blueColor}
          />

          {/* Red inner hook & stem of F */}
          <path
            d="M 13 88 C 13 74 24 67 42 67 L 90 67 C 94 67 94 77 88 78 L 45 78 C 30 78 28 84 28 94 L 28 140 C 28 148 13 148 13 140 Z"
            fill={redColor}
          />
          <path
            d="M 13 90 C 13 72 26 66 50 66 L 90 66 C 94 66 94 78 88 78 L 48 78 C 34 78 29 84 29 95 L 29 140 C 29 148 13 148 13 140 Z"
            fill={redColor}
          />

          {/* Top blue bar of F */}
          <path
            d="M 13 40 C 13 22 32 18 68 18 L 112 18 C 116 18 116 32 108 32 L 48 32 C 30 32 25 38 25 52 L 25 76 Z"
            fill={blueColor}
          />

          {/* Clean stylized F geometry */}
          <g transform="translate(0, 0)">
            <path
              d="M 13 45 C 13 24 30 18 65 18 L 112 18 C 117 18 116 32 108 32 L 48 32 C 30 32 25 38 25 52 L 25 74 L 13 74 Z"
              fill={blueColor}
            />
            {/* Red F crossbar & lower stem */}
            <path
              d="M 13 88 C 13 73 24 68 45 68 L 90 68 C 94 68 94 80 88 80 L 46 80 C 32 80 28 86 28 96 L 28 142 L 13 142 Z"
              fill={redColor}
            />
          </g>

          {/* ===== LETTER I ===== */}
          <rect x="124" y="20" width="36" height="122" rx="10" fill={blueColor} />

          {/* ===== LETTER N ===== */}
          <path
            d="M 175 30 C 175 22 182 18 190 18 L 198 18 C 206 18 212 24 218 34 L 250 88 L 250 30 C 250 22 256 18 264 18 L 274 18 C 282 18 288 24 288 32 L 288 130 C 288 138 282 142 274 142 L 265 142 C 257 142 251 136 245 126 L 213 72 L 213 130 C 213 138 207 142 199 142 L 189 142 C 181 142 175 136 175 128 Z"
            fill={blueColor}
          />

          {/* ===== LETTER D ===== */}
          <path
            d="M 308 20 L 350 20 C 392 20 422 46 422 81 C 422 116 392 142 350 142 L 308 142 C 302 142 298 137 298 130 L 298 32 C 298 25 302 20 308 20 Z M 336 48 L 336 114 L 350 114 C 374 114 388 100 388 81 C 388 62 374 48 350 48 Z"
            fill={blueColor}
          />

          {/* ===== REGISTERED MARK ® ===== */}
          <g transform="translate(434, 18)">
            <circle cx="12" cy="12" r="11" fill="none" stroke={redColor} strokeWidth="2.2" />
            <text
              x="12"
              y="16.5"
              textAnchor="middle"
              fill={redColor}
              fontSize="12"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              R
            </text>
          </g>

          {/* ===== SUB-BAR & TUBEPINOX.VN ===== */}
          {/* Blue underline bar on left */}
          <rect x="13" y="158" width="134" height="7" rx="3.5" fill={blueColor} />

          {/* Two small blue square dots */}
          <rect x="154" y="157" width="6" height="8" rx="1" fill={blueColor} />
          <rect x="164" y="157" width="6" height="8" rx="1" fill={blueColor} />

          {/* Text: TUBEPINOX.VN */}
          <g transform="translate(178, 166)" fontFamily="'Arimo', Arial, Helvetica, sans-serif" fontWeight="900" fontSize="18" letterSpacing="2">
            {/* T (Red) */}
            <text x="0" y="0" fill={redColor}>T</text>
            {/* U (Blue) */}
            <text x="14" y="0" fill={textColor}>U</text>
            {/* B (Blue) */}
            <text x="31" y="0" fill={textColor}>B</text>
            {/* E (Blue) */}
            <text x="48" y="0" fill={textColor}>E</text>
            {/* P (Blue) */}
            <text x="63" y="0" fill={textColor}>P</text>
            {/* I (Red) */}
            <text x="79" y="0" fill={redColor}>I</text>
            {/* N (Blue) */}
            <text x="90" y="0" fill={textColor}>N</text>
            {/* O (Blue) */}
            <text x="107" y="0" fill={textColor}>O</text>
            {/* X (Blue) */}
            <text x="125" y="0" fill={textColor}>X</text>
            {/* . (Blue) */}
            <text x="142" y="0" fill={textColor}>.</text>
            {/* V (Blue) */}
            <text x="150" y="0" fill={textColor}>V</text>
            {/* N (Blue) */}
            <text x="167" y="0" fill={textColor}>N</text>
          </g>
        </g>
      </svg>
    </div>
  );
};
