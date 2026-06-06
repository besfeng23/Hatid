import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BottomNavItem = { href: string; label: string; icon: LucideIcon };
export type BottomNavProps = { items: readonly BottomNavItem[]; activeHref: string; ariaLabel?: string };

export function BottomNav({ items, activeHref, ariaLabel = 'Primary navigation' }: BottomNavProps) {
  return (
    <nav aria-label={ariaLabel} className="border-t border-slate-200 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_32px_-24px_rgba(15,23,42,0.35)] backdrop-blur">
      <ul className="mx-auto flex max-w-[430px] items-stretch justify-around gap-1">{items.map(({ href, label, icon: Icon }) => { const active = activeHref === href; return <li key={href} className="flex-1"><Link href={href} aria-current={active ? 'page' : undefined} className={cn('flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-2 text-xs font-bold text-slate-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20', active && 'bg-blue-50 text-primary')}><Icon className="h-5 w-5" /><span>{label}</span></Link></li>; })}</ul>
    </nav>
  );
}
