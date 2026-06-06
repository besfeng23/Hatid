import * as React from 'react';
import { cn } from '../../lib/utils';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & { padding?: 'none' | 'sm' | 'md' | 'lg'; interactive?: boolean };
const paddingClasses = { none: '', sm: 'p-4', md: 'p-5', lg: 'p-6' } as const;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, padding = 'none', interactive, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-[1.5rem] border border-slate-200/80 bg-white text-card-foreground shadow-[0_12px_32px_-18px_rgba(15,23,42,0.28)]', interactive && 'transition-colors hover:border-primary/30 focus-within:border-primary/40 motion-reduce:transition-none', paddingClasses[padding], className)} {...props} />
));
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />);
CardHeader.displayName = 'CardHeader';
export const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />);
CardTitle.displayName = 'CardTitle';
export const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />);
CardDescription.displayName = 'CardDescription';
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />);
CardContent.displayName = 'CardContent';
export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />);
CardFooter.displayName = 'CardFooter';
