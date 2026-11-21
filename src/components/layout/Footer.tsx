import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const QUICK_LINKS = [
  { label: 'Home',     to: '/'        },
  { label: 'About',    to: '/about'   },
  { label: 'Courses',  to: '/courses' },
  { label: 'Projects', to: '/projects'},
  { label: 'Contact',  to: '/contact' },
  { label: 'Enroll Now', to: '/enroll'},
];

const COURSE_LINKS = [
  { label: 'AI & Machine Learning', to: '/courses/ai-machine-learning'  },
  { label: 'Generative AI',         to: '/courses/generative-ai'         },
  { label: 'Python Programming',    to: '/courses/python-programming'    },
  { label: 'Java Full Stack',       to: '/courses/java-full-stack'       },
  { label: 'Data Analytics',        to: '/courses/data-analytics'        },
  { label: 'View All Courses →',    to: '/courses'                       },
];

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-white/60 hover:text-white text-sm font-body transition-colors duration-200 focus:outline-none focus-visible:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="SUDHVI TECH Logo"
                className="w-11 h-11 object-contain rounded-full bg-white p-0.5 shadow-md group-hover:scale-105 transition-transform"
                width="44"
                height="44"
              />
              <span className="font-heading font-bold text-xl text-white">
                SUDHVI<span className="text-secondary"> TECH</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs">
              Industry Readiness &amp; Project Development Partner helping B.Tech, Degree, and MCA students bridge the gap between academia and industry.
            </p>
            <p className="text-xs text-white/40 font-body italic">
              "From Campus to Career"
            </p>

            {/* Social Channels */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2 font-heading">
                Follow Us
              </p>
              <a
                href="https://www.instagram.com/sudhvi_tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-body text-pink-400 hover:text-pink-300 transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
                aria-label="Follow SUDHVI TECH on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@sudhvi_tech</span>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/80 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, to }) => (
                <FooterLink key={to} to={to}>{label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Courses ── */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/80 mb-5">
              Programs
            </h3>
            <ul className="space-y-3">
              {COURSE_LINKS.map(({ label, to }) => (
                <FooterLink key={to} to={to}>{label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/80 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3.5 font-body text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden>📞</span>
                <div className="flex flex-col">
                  <a href="tel:+917093642973" className="hover:text-white transition-colors">
                    +91 7093642973
                  </a>
                  <a href="tel:+917981292208" className="hover:text-white transition-colors">
                    +91 7981292208
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden>✉️</span>
                <a href="mailto:ksudheerbasha@gmail.com" className="hover:text-white transition-colors break-all">
                  ksudheerbasha@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden>💬</span>
                <div className="flex flex-col">
                  <a
                    href="https://wa.me/917093642973?text=Hi%20SUDHVI%20TECH%2C%20I%20would%20like%20to%20inquire%20about%20your%20programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    WhatsApp: +91 7093642973
                  </a>
                  <a
                    href="https://wa.me/917981292208?text=Hi%20SUDHVI%20TECH%2C%20I%20would%20like%20to%20inquire%20about%20your%20programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    WhatsApp: +91 7981292208
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0" aria-hidden>📍</span>
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className={cn(
            'mt-14 pt-8 border-t border-white/10',
            'flex flex-col sm:flex-row items-center justify-between gap-4'
          )}
        >
          <p className="text-white/40 text-xs font-body">
            © {year} SUDHVI TECH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-white/40 hover:text-white/70 text-xs font-body transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/40 hover:text-white/70 text-xs font-body transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
