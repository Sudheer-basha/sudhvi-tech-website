import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  id,
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        align === 'left'   && 'text-left',
        className
      )}
    >
      {label && (
        <p
          className={cn(
            'text-xs font-semibold font-body uppercase tracking-widest mb-3',
            light ? 'text-secondary' : 'text-secondary'
          )}
        >
          {label}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed',
            light ? 'text-white/75' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
