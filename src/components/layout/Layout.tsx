import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { VantaBackground } from '@/components/ui/VantaBackground';
import { InitialLoader } from '@/components/ui/InitialLoader';

export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="relative min-h-screen text-gray-800 bg-transparent selection:bg-cyan-500 selection:text-white">
      {/* Initial Page Preloader with Speeder Loader */}
      <InitialLoader />

      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Interactive 3D Vanta.js WebGL Background across all pages */}
      <VantaBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main id="main-content" tabIndex={-1} className="outline-none flex-grow">
          <Outlet />
        </main>

        <Footer />

        {/* Floating Instant WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </div>
  );
}
