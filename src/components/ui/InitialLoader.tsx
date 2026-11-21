import React, { useState, useEffect } from 'react';

/**
 * Initial Site Preloader
 * Renders the Uiverse.io Speeder Loader at first visit while 3D Vanta WebGL and DOM initialize,
 * then smoothly fades out.
 */
export const InitialLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Keep loader active on first load to allow Three.js / Vanta WebGL canvas to mount
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    // Remove element from DOM after transition completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2100);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070D1E] transition-opacity duration-700 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Loading SUDHVI TECH platform"
      role="status"
    >
      {/* Supersonic Speeder Loader (From Uiverse.io by anand_4957) */}
      <div className="relative w-80 h-40 overflow-hidden speeder-light flex items-center justify-center">
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

      {/* Brand Emblem & Status */}
      <div className="mt-6 text-center flex flex-col items-center gap-2">
        <p className="font-heading font-extrabold tracking-widest text-xl text-white">
          SUDHVI <span className="text-secondary">TECH</span>
        </p>
        <p className="text-xs text-cyan-400 font-mono tracking-wider animate-pulse">
          INITIALIZING PLATFORM...
        </p>
      </div>
    </div>
  );
};

export default InitialLoader;
