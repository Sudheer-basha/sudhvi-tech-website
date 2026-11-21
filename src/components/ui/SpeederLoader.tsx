import React from 'react';
import { cn } from '@/lib/utils';

interface SpeederLoaderProps {
  /**
   * 'dark': original #000 black speeder (from Uiverse.io snippet)
   * 'light': luminous white speeder with cyan speed lines (ideal for dark buttons/navy headers)
   */
  variant?: 'dark' | 'light';
  /**
   * Scale sizing:
   * - 'button': scaled down to seamlessly fit inside 44-52px action buttons
   * - 'sm': compact badge/widget size (0.5x)
   * - 'md': standard size (1x)
   * - 'screen': full-container overlay
   */
  size?: 'button' | 'sm' | 'md' | 'screen';
  className?: string;
  label?: string;
}

export const SpeederLoader: React.FC<SpeederLoaderProps> = ({
  variant = 'light',
  size = 'button',
  className = '',
  label,
}) => {
  const isLight = variant === 'light';

  if (size === 'button') {
    return (
      <div
        className={cn(
          'speeder-button-container',
          isLight && 'speeder-light',
          className
        )}
        aria-hidden="true"
      >
        <div className="speeder-button-scale">
          {/* Uiverse Speeder HTML */}
          <div className="loader">
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="base">
              <span></span>
              <div className="face"></div>
            </div>
          </div>
          <div className="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  if (size === 'screen') {
    return (
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark/80 backdrop-blur-md',
          isLight && 'speeder-light',
          className
        )}
        role="status"
        aria-live="polite"
      >
        <div className="relative w-64 h-32 overflow-hidden rounded-2xl bg-slate-900/40 border border-cyan-500/20 shadow-glow-blue">
          <div className="loader">
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="base">
              <span></span>
              <div className="face"></div>
            </div>
          </div>
          <div className="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {label && (
          <p className="mt-4 text-sm font-semibold tracking-wide text-cyan-300 font-heading animate-pulse">
            {label}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative w-48 h-24 overflow-hidden',
        isLight && 'speeder-light',
        size === 'sm' && 'scale-75',
        className
      )}
      role="status"
      aria-label={label || 'Loading...'}
    >
      <div className="loader">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SpeederLoader;
