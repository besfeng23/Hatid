import { cn } from '@/lib/utils';

export type BottomSheetProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  labelledBy?: string;
};

export function BottomSheet({ children, title, description, className, labelledBy = 'bottom-sheet-title' }: BottomSheetProps) {
  return (
    <section
      aria-labelledby={title ? labelledBy : undefined}
      className={cn('animate-hatid-slide-up rounded-t-[2rem] border border-b-0 border-slate-200 bg-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_32px_-24px_rgba(15,23,42,0.35)]', className)}
    >
      <div aria-hidden="true" className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-200" />
      {title ? <h2 id={labelledBy} className="text-xl font-black tracking-tight text-[#001144]">{title}</h2> : null}
      {description ? <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p> : null}
      <div className={cn((title || description) && 'mt-5')}>{children}</div>
    </section>
  );
}
