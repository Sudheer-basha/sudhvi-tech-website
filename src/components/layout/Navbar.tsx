import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Home',     to: '/'        },
  { label: 'About',    to: '/about'   },
  { label: 'Courses',  to: '/courses' },
  { label: 'Projects', to: '/projects'},
  { label: 'Contact',  to: '/contact' },
] as const;

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-white/95 backdrop-blur-md border-b border-gray-100/90',
        scrolled ? 'shadow-md' : 'shadow-sm'
      )}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid rounded-lg group"
          aria-label="SUDHVI TECH — Home"
        >
          {/* Official Logo */}
          <img
            src="/logo.png"
            alt="SUDHVI TECH Logo"
            className="w-10 h-10 object-contain rounded-full shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-200"
            width="40"
            height="40"
          />
          {/* Wordmark */}
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-heading font-bold text-lg tracking-tight text-gray-900">
              SUDHVI<span className="text-primary"> TECH</span>
            </span>
            <span className="text-[11px] text-muted font-body">From Campus to Career</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }: { isActive: boolean }) =>
                  cn(
                    'relative px-4 py-2 text-sm font-semibold font-body rounded-lg transition-colors duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid',
                    isActive
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-primary-light'
                  )
                }
              >
                {({ isActive }: { isActive: boolean }) => (
                  <>
                    {label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:block">
          <Link to="/enroll">
            <Button variant="accent" size="md">
              Enroll Now
            </Button>
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className={cn(
            'lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5',
            'rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid'
          )}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={cn(
              'block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300',
              menuOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300',
              menuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300',
              menuOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100',
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="container-custom py-4 flex flex-col gap-1" role="list">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                tabIndex={menuOpen ? 0 : -1}
                className={({ isActive }: { isActive: boolean }) =>
                  cn(
                    'block px-4 py-3 rounded-xl text-base font-semibold font-body transition-colors duration-200',
                    isActive
                      ? 'bg-primary-light text-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 border-t border-gray-100 mt-2">
            <Link to="/enroll" tabIndex={menuOpen ? 0 : -1} className="block">
              <Button variant="accent" size="md" className="w-full">
                Enroll Now →
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
