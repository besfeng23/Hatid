import { MapPinned } from 'lucide-react';
import { cn } from '../../lib/utils';

export type MapPlaceholderProps = {
  label?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function MapPlaceholder({ label = 'Map area', description = 'A live map provider is not connected in this prototype.', className, children }: MapPlaceholderProps) {
  return (
    <section aria-label={label} className={cn('relative flex min-h-56 items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6', className)}>
      <div className="max-w-xs text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm"><MapPinned className="h-7 w-7" /></span>
        <p className="mt-4 font-black text-[#001144]">{label}</p>
        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
      {children}
    </section>
  );
}
