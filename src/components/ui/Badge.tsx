import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
}

const variantClasses = {
  primary:   'bg-primary-light text-primary',
  secondary: 'bg-secondary-light text-secondary',
  accent:    'bg-accent-light text-accent',
  neutral:   'bg-gray-100 text-gray-600',
};

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wide',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
