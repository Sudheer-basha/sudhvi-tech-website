import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import vantaModule from 'vanta/dist/vanta.net.min';

interface VantaBackgroundProps {
  className?: string;
}

export const VantaBackground: React.FC<VantaBackgroundProps> = ({ className = '' }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    // Respect reduced motion accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Expose THREE globally as required by Vanta's internal renderer
    if (typeof window !== 'undefined') {
      (window as any).THREE = THREE;
    }

    // Resolve the initialization function across ESM, CJS, and browser globals
    const resolveNet = (): any => {
      if (typeof (vantaModule as any)?.default?.default === 'function') {
        return (vantaModule as any).default.default;
      }
      if (typeof (vantaModule as any)?.default === 'function') {
        return (vantaModule as any).default;
      }
      if (typeof (vantaModule as any) === 'function') {
        return vantaModule;
      }
      if (typeof (window as any)?.VANTA?.NET === 'function') {
        return (window as any).VANTA.NET;
      }
      return null;
    };

    const NET = resolveNet();

    if (NET && vantaRef.current && !effectRef.current) {
      try {
        effectRef.current = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0ea5e9,           // High-tech Cyan for synapse lines & nodes
          backgroundColor: 0x070d1e, // SUDHVI TECH Deep Navy
          points: 12.0,              // Crisp node constellation
          maxDistance: 24.0,         // Connected distance
          spacing: 16.0,
          showDots: true,
        });
        console.log('[SUDHVI TECH] Vanta 3D WebGL background initialized successfully.');
      } catch (err) {
        console.error('[SUDHVI TECH] Error starting Vanta 3D background:', err);
      }
    } else if (!NET) {
      console.error('[SUDHVI TECH] Could not resolve Vanta NET function.', vantaModule);
    }

    // Resize handler to ensure 3D canvas stays responsive
    const handleResize = () => {
      if (effectRef.current && typeof effectRef.current.resize === 'function') {
        effectRef.current.resize();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (e) {
          // Ignore destruction cleanup
        }
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      id="vanta-canvas-bg"
      className={`fixed inset-0 w-full h-full z-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default VantaBackground;
