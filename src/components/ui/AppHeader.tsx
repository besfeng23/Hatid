import Link from 'next/link';
import { ArrowLeft, Bell } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export type AppHeaderProps = { title?: string; subtitle?: string; backHref?: string; notificationHref?: string; className?: string };

export function AppHeader({ title = 'Hatid', subtitle, backHref, notificationHref, className }: AppHeaderProps) {
  return (
    <header className={cn('flex min-h-20 items-center justify-between gap-3 px-5 py-4', className)}>
      <div className="flex min-w-0 items-center gap-3">
        {backHref ? <Button asChild variant="secondary" size="icon" className="shrink-0 rounded-full"><Link href={backHref} aria-label="Go back"><ArrowLeft className="h-5 w-5" /></Link></Button> : <div aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-black text-white">H</div>}
        <div className="min-w-0"><p className="truncate text-2xl font-black leading-tight tracking-tight text-[#001144]">{title}</p>{subtitle ? <p className="truncate text-sm text-slate-500">{subtitle}</p> : null}</div>
      </div>
      {notificationHref ? <Button asChild variant="secondary" size="icon" className="shrink-0 rounded-full"><Link href={notificationHref} aria-label="Notifications"><Bell className="h-5 w-5" /></Link></Button> : null}
    </header>
  );
}
