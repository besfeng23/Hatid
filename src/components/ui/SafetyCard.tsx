import { ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card } from './Card';

export type SafetyCardProps = { title: string; children: React.ReactNode; action?: React.ReactNode; tone?: 'info' | 'urgent'; className?: string };

export function SafetyCard({ title, children, action, tone = 'info', className }: SafetyCardProps) {
  return (
    <Card padding="md" className={cn('flex gap-3', tone === 'info' ? 'border-blue-100 bg-blue-50/80' : 'border-red-200 bg-red-50', className)}>
      <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm', tone === 'info' ? 'text-primary' : 'text-red-700')}><ShieldCheck className="h-5 w-5" /></span>
      <div className="min-w-0 flex-1"><h3 className="font-black text-[#001144]">{title}</h3><div className="mt-1 text-sm leading-6 text-slate-600">{children}</div>{action ? <div className="mt-3">{action}</div> : null}</div>
    </Card>
  );
}
