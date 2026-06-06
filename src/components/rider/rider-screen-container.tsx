import { cn } from '@/lib/utils';

export function RiderScreenContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return <main className={cn('min-h-dvh bg-[#f7f9fc] text-slate-950', className)}>{children}</main>;
}
