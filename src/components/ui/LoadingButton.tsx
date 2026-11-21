import React from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  speederVariant?: 'dark' | 'light';
  children: React.ReactNode;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  loadingText,
  variant = 'primary',
  size = 'md',
  speederVariant,
  className,
  children,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      loading={isLoading}
      speederVariant={speederVariant}
      className={cn('relative', className)}
      {...props}
    >
      {isLoading && loadingText ? loadingText : children}
    </Button>
  );
};

export default LoadingButton;
