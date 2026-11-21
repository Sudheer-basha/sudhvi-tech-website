import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';
import { TechNeuralBackground } from '@/components/ui/TechNeuralBackground';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  className?: string;
}

export function CTABanner({
  title      = 'Ready to Become Industry-Ready?',
  subtitle   = 'Take the first step towards your career today. Book a free consultation with our experts.',
  primaryLabel   = 'Book Free Consultation',
  primaryTo      = '/contact',
  secondaryLabel = 'Explore Courses',
  secondaryTo    = '/courses',
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn('bg-cta-gradient section-padding relative overflow-hidden', className)}
      aria-labelledby="cta-heading"
    >
      {/* Background Neural Nodes & Circuit Grid */}
      <TechNeuralBackground variant="dark" opacity="opacity-35" />

      {/* Glowing Ambient Mesh Orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-teal-400/25 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom text-center relative z-10">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          light
          id="cta-heading"
        />
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryTo}>
            <Button variant="accent" size="lg" className="shadow-lg hover:shadow-xl">
              {primaryLabel}
            </Button>
          </Link>
          <Link to={secondaryTo}>
            <Button variant="outline-white" size="lg" className="backdrop-blur-sm">
              {secondaryLabel}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
