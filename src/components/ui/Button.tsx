import React from 'react';
import { cn } from '@/lib/utils';
import { SpeederLoader } from './SpeederLoader';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'outline-white';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  loading?: boolean;
  speederVariant?: 'dark' | 'light';
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-mid active:scale-[0.98] shadow-sm hover:shadow-md',
  accent:
    'bg-accent text-white hover:bg-orange-600 active:scale-[0.98] shadow-sm hover:shadow-md',
  outline:
    'border-2 border-primary text-primary hover:bg-primary-light active:scale-[0.98]',
  ghost:
    'text-primary hover:bg-primary-light active:scale-[0.98]',
  'outline-white':
    'border-2 border-white text-white hover:bg-white hover:text-primary active:scale-[0.98]',
};

const sizeClasses: Record<Size, string> = {
  sm:  'px-4 py-2 text-sm min-h-[38px]',
  md:  'px-6 py-3 text-sm min-h-[46px]',
  lg:  'px-8 py-4 text-base min-h-[54px]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      speederVariant,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Automatically match speeder color contrast against button style
    const effectiveSpeederVariant =
      speederVariant ||
      (variant === 'outline' || variant === 'ghost' ? 'dark' : 'light');

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold overflow-hidden',
          'transition-all duration-200 focus:outline-none focus-visible:ring-2',
          'focus-visible:ring-primary-mid focus-visible:ring-offset-2',
          'disabled:opacity-75 disabled:cursor-not-allowed disabled:active:scale-100',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            {/* Supersonic Speeder Loader from Uiverse.io */}
            <SpeederLoader variant={effectiveSpeederVariant} size="button" />
            <span className="opacity-0 select-none pointer-events-none">{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';
