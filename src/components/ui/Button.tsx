import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[0.875rem] text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-[#0029a3]',
        primary: 'bg-primary text-primary-foreground shadow-[0_12px_28px_-14px_rgba(0,51,204,0.8)] hover:bg-[#0029a3]',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        danger: 'bg-red-700 text-white hover:bg-red-800',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'border border-slate-200 bg-white text-[#001144] shadow-sm hover:border-primary/30 hover:bg-blue-50/60',
        ghost: 'bg-transparent text-[#001144] hover:bg-slate-100',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-10 px-4 py-2',
        sm: 'min-h-11 px-4 py-2',
        md: 'min-h-12 px-5 py-3',
        lg: 'min-h-14 px-6 py-3.5 text-base',
        icon: 'h-11 w-11 p-0',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, type, ...props }, ref) => {
  const Component = asChild ? Slot : 'button';
  return <Component className={cn(buttonVariants({ variant, size, className }))} ref={ref} type={asChild ? undefined : type ?? 'button'} {...props} />;
});
Button.displayName = 'Button';
