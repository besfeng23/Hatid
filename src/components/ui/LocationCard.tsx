import { MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card } from './Card';

export type LocationCardProps = {
  label: string;
  address: string;
  icon?: React.ReactNode;
  note?: string;
  onSelect?: () => void;
  selected?: boolean;
};

export function LocationCard({ label, address, icon, note, onSelect, selected }: LocationCardProps) {
  const content = <><span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary', selected && 'bg-primary text-white')}>{icon ?? <MapPin className="h-5 w-5" />}</span><span className="min-w-0 flex-1"><span className="block font-black text-[#001144]">{label}</span><span className="mt-0.5 block text-sm leading-5 text-slate-500">{address}</span>{note ? <span className="mt-1 block text-xs text-slate-400">{note}</span> : null}</span></>;
  return (
    <Card padding="none" interactive={Boolean(onSelect)} className={cn(selected && 'border-primary')}>
      {onSelect ? <button type="button" onClick={onSelect} className="flex min-h-20 w-full items-center gap-3 rounded-[1.5rem] p-4 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20">{content}</button> : <div className="flex min-h-20 items-center gap-3 p-4">{content}</div>}
    </Card>
  );
}
