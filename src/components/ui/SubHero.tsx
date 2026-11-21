import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { TechNeuralBackground } from '@/components/ui/TechNeuralBackground';

interface SubHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
  className?: string;
}

export function SubHero({ title, subtitle, breadcrumb, className }: SubHeroProps) {
  return (
    <section
      className={cn(
        'bg-hero-gradient pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden',
        className
      )}
      aria-labelledby="subhero-heading"
    >
      {/* Background Neural Nodes & Circuit Grid */}
      <TechNeuralBackground variant="cyan" opacity="opacity-35" />

      {/* Ambient Luminous Orbs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60 font-body">
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90" aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1
          id="subhero-heading"
          className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/75 text-lg font-body max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
