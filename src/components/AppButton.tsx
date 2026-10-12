import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export type ButtonVariant =
  | 'hover-fill'
  | 'scale-hover'
  | 'neon-glow'
  | 'gradient'
  | 'magnetic'
  | 'liquid'
  | 'animated-border'
  | 'shine-sweep'
  | 'ripple'
  | '3d-press'
  | 'arrow-slide'
  | 'glassmorphism';

export type ButtonColorScheme = 'blue' | 'red' | 'white' | 'dark' | 'gradient-mix';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  variant = 'scale-hover',
  colorScheme = 'blue',
  size = 'md',
  rounded = 'xl',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Ripple effect state
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  
  // Magnetic effect state
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });

  // Handle Ripple
  const handleRippleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (variant === 'ripple') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { x, y, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }
    if (onClick) onClick(e);
  };

  // Handle Magnetic mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || variant !== 'magnetic') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    setMagneticPos({ x, y });
  };

  const handleMouseLeave = () => {
    if (variant === 'magnetic') {
      setMagneticPos({ x: 0, y: 0 });
    }
  };

  // Size mappings
  const sizeClasses = {
    sm: 'text-xs py-2 px-3.5 gap-1.5 min-h-[36px]',
    md: 'text-xs sm:text-sm py-2.5 px-5 gap-2 min-h-[44px]',
    lg: 'text-sm sm:text-base py-3.5 px-7 gap-2.5 min-h-[52px]',
  };

  // Radius mappings
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  // Focus ring styling based on colorScheme
  const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500';

  // Base setup
  const baseClasses = `relative inline-flex items-center justify-center font-bold tracking-wide transition-all select-none overflow-hidden cursor-pointer ${
    fullWidth ? 'w-full' : 'w-auto'
  } ${sizeClasses[size]} ${roundedClasses[rounded]} ${focusRing} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none grayscale' : ''
  }`;

  // Variant Specific Styling & DOM
  const renderContent = () => (
    <span className="relative z-10 inline-flex items-center gap-2">
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={`shrink-0 ${variant === 'arrow-slide' ? 'transition-transform duration-300 group-hover:translate-x-1.5' : ''}`}>
          {icon}
        </span>
      )}
      {!icon && variant === 'arrow-slide' && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </span>
  );

  switch (variant) {
    // 1. HOVER FILL: Solid background fills up from bottom/left
    case 'hover-fill': {
      const colors = {
        blue: 'border-2 border-blue-700 text-blue-700 hover:text-white',
        red: 'border-2 border-rose-600 text-rose-600 hover:text-white',
        white: 'border-2 border-white text-white hover:text-slate-900',
        dark: 'border-2 border-slate-900 text-slate-900 hover:text-white',
        'gradient-mix': 'border-2 border-blue-600 text-blue-700 hover:text-white',
      };
      const fillBg = {
        blue: 'bg-blue-700',
        red: 'bg-rose-600',
        white: 'bg-white',
        dark: 'bg-slate-900',
        'gradient-mix': 'bg-gradient-to-r from-blue-700 to-rose-600',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} group ${colors[colorScheme]} ${className}`}
          {...props}
        >
          <span className={`absolute inset-0 w-full h-full ${fillBg[colorScheme]} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`} />
          {renderContent()}
        </button>
      );
    }

    // 2. SCALE HOVER: Elastic scaling
    case 'scale-hover': {
      const bgColors = {
        blue: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20',
        red: 'bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-500/20',
        white: 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm',
        dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/30',
        'gradient-mix': 'bg-gradient-to-r from-blue-700 to-rose-600 text-white shadow-md',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} active:scale-95 hover:scale-105 duration-200 ${bgColors[colorScheme]} ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
    }

    // 3. NEON GLOW: Vibrant neon glow outline & illumination
    case 'neon-glow': {
      const neonStyles = {
        blue: 'bg-slate-950 text-sky-300 border border-sky-400 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(56,189,248,0.7)] text-neon-blue active:scale-95',
        red: 'bg-slate-950 text-rose-300 border border-rose-500 hover:bg-rose-950 hover:shadow-[0_0_20px_rgba(244,63,94,0.7)] text-neon-red active:scale-95',
        white: 'bg-slate-950 text-white border border-slate-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] text-neon-white active:scale-95',
        dark: 'bg-slate-900 text-sky-400 border border-sky-500 hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] active:scale-95',
        'gradient-mix': 'bg-slate-950 text-white border border-sky-400 hover:shadow-[0_0_25px_rgba(225,29,72,0.6)] active:scale-95',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} transition-all duration-300 ${neonStyles[colorScheme]} ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
    }

    // 4. GRADIENT: Rich animated gradient
    case 'gradient': {
      const gradients = {
        blue: 'from-blue-700 via-sky-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-600/30',
        red: 'from-rose-600 via-red-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-lg shadow-rose-600/30',
        white: 'from-white via-slate-100 to-slate-200 text-slate-900 border border-slate-200 shadow-md',
        dark: 'from-slate-900 via-slate-800 to-slate-950 text-white shadow-lg',
        'gradient-mix': 'from-blue-700 via-indigo-600 to-rose-600 hover:from-blue-600 hover:to-rose-500 text-white shadow-lg shadow-indigo-500/30',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} bg-gradient-to-r bg-[length:200%_auto] hover:bg-right transition-all duration-500 ${gradients[colorScheme]} active:scale-95 ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
    }

    // 5. MAGNETIC: Tracks cursor offset
    case 'magnetic': {
      const colors = {
        blue: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25',
        red: 'bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-500/25',
        white: 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 shadow-xs',
        dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md',
        'gradient-mix': 'bg-gradient-to-r from-blue-700 to-rose-600 text-white shadow-md',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `translate(${magneticPos.x}px, ${magneticPos.y}px)`,
          }}
          className={`${baseClasses} transition-transform duration-200 ease-out active:scale-95 ${colors[colorScheme]} ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
    }

    // 6. LIQUID: Organic wave blob effect
    case 'liquid': {
      const colors = {
        blue: 'bg-blue-700 text-white hover:bg-blue-800',
        red: 'bg-rose-600 text-white hover:bg-rose-700',
        white: 'bg-slate-100 text-slate-900 hover:bg-white',
        dark: 'bg-slate-900 text-white hover:bg-slate-800',
        'gradient-mix': 'bg-gradient-to-r from-blue-800 to-rose-700 text-white',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} group ${colors[colorScheme]} ${className}`}
          {...props}
        >
          <span className="absolute -inset-full w-[300%] h-[300%] bg-white/20 rounded-[40%] group-hover:rotate-[360deg] transition-all duration-1000 ease-out -z-0 opacity-0 group-hover:opacity-100" />
          {renderContent()}
        </button>
      );
    }

    // 7. ANIMATED BORDER: Spinning glowing border
    case 'animated-border': {
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} p-[2px] bg-slate-900 text-white group overflow-hidden active:scale-95 ${className}`}
          {...props}
        >
          {/* Rotating gradient ring */}
          <span className="absolute -inset-[100%] animate-[spinSlow_4s_linear_infinite] bg-[conic-gradient(from_0deg,#2563eb,#ffffff,#e11d48,#2563eb)] opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className={`relative w-full h-full bg-slate-900 px-5 py-2.5 ${roundedClasses[rounded]} flex items-center justify-center gap-2 text-white`}>
            {icon && iconPosition === 'left' && icon}
            <span>{children}</span>
            {icon && iconPosition === 'right' && icon}
          </span>
        </button>
      );
    }

    // 8. SHINE SWEEP: Metallic shine sweep
    case 'shine-sweep': {
      const colors = {
        blue: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md',
        red: 'bg-rose-600 text-white hover:bg-rose-700 shadow-md',
        white: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
        dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md',
        'gradient-mix': 'bg-gradient-to-r from-blue-700 to-rose-600 text-white shadow-md',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} group overflow-hidden active:scale-95 ${colors[colorScheme]} ${className}`}
          {...props}
        >
          {/* Metallic light beam */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transform -translate-x-[250%] group-hover:translate-x-[350%] transition-transform duration-1000 ease-in-out" />
          {renderContent()}
        </button>
      );
    }

    // 9. RIPPLE: Click ripple expanding
    case 'ripple': {
      const colors = {
        blue: 'bg-blue-600 hover:bg-blue-700 text-white',
        red: 'bg-rose-600 hover:bg-rose-700 text-white',
        white: 'bg-white text-slate-900 border border-slate-200',
        dark: 'bg-slate-900 hover:bg-slate-800 text-white',
        'gradient-mix': 'bg-gradient-to-r from-blue-700 to-rose-600 text-white',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={handleRippleClick}
          className={`${baseClasses} ${colors[colorScheme]} ${className}`}
          {...props}
        >
          {ripples.map((rip) => (
            <span
              key={rip.id}
              style={{ left: rip.x, top: rip.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/40 rounded-full animate-ping pointer-events-none"
            />
          ))}
          {renderContent()}
        </button>
      );
    }

    // 10. 3D PRESS: Tactile physical press down
    case '3d-press': {
      const styles = {
        blue: 'bg-blue-600 text-white shadow-[0_5px_0_#1e3a8a] active:shadow-[0_1px_0_#1e3a8a] hover:bg-blue-500',
        red: 'bg-rose-600 text-white shadow-[0_5px_0_#9f1239] active:shadow-[0_1px_0_#9f1239] hover:bg-rose-500',
        white: 'bg-white text-slate-900 border border-slate-200 shadow-[0_5px_0_#cbd5e1] active:shadow-[0_1px_0_#cbd5e1] hover:bg-slate-50',
        dark: 'bg-slate-900 text-white shadow-[0_5px_0_#020617] active:shadow-[0_1px_0_#020617] hover:bg-slate-800',
        'gradient-mix': 'bg-gradient-to-r from-blue-600 to-rose-600 text-white shadow-[0_5px_0_#1e1b4b] active:shadow-[0_1px_0_#1e1b4b]',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} active:translate-y-1 transition-all duration-100 ${styles[colorScheme]} ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
    }

    // 11. ARROW SLIDE: Icon slides smoothly on hover
    case 'arrow-slide': {
      const colors = {
        blue: 'bg-blue-700 hover:bg-blue-800 text-white shadow-md shadow-blue-700/20',
        red: 'bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/20',
        white: 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200',
        dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md',
        'gradient-mix': 'bg-gradient-to-r from-blue-700 to-rose-600 text-white shadow-md',
      };
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} group ${colors[colorScheme]} active:scale-95 ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
    }

    // 12. GLASSMORPHISM: Frosted blur reflection
    case 'glassmorphism': {
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} bg-white/15 backdrop-blur-md border border-white/40 text-white hover:bg-white/25 hover:border-white/60 shadow-lg shadow-black/10 active:scale-95 duration-200 ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
    }

    default:
      return (
        <button
          ref={buttonRef}
          disabled={disabled}
          onClick={onClick}
          className={`${baseClasses} ${className}`}
          {...props}
        >
          {renderContent()}
        </button>
      );
  }
};
