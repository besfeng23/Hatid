import { CheckCircle2, Users } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card } from './Card';

export type RideCardProps = {
  id: string;
  rideType: string;
  description?: string;
  eta: string;
  fareEstimate: string;
  capacity: number;
  icon?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: (id: string) => void;
};

export function RideCard({ id, rideType, description, eta, fareEstimate, capacity, icon, selected, disabled, onSelect }: RideCardProps) {
  return (
    <Card padding="none" interactive className={cn(selected && 'border-primary ring-2 ring-primary/15', disabled && 'opacity-50')}>
      <button
        type="button"
        disabled={disabled}
        aria-pressed={selected}
        aria-label={`Select ${rideType}, ${eta}, ${fareEstimate}`}
        onClick={() => onSelect?.(id)}
        className="flex min-h-28 w-full items-center gap-4 rounded-[1.5rem] p-4 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
      >
        <span className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary', selected && 'bg-primary text-white')}>{icon}</span>
        <span className="min-w-0 flex-1">
          <span className="flex items-start justify-between gap-3">
            <span>
              <span className="block text-lg font-black tracking-tight text-[#001144]">{rideType}</span>
              {description ? <span className="mt-1 block text-sm leading-5 text-slate-500">{description}</span> : null}
            </span>
            {selected ? <CheckCircle2 aria-hidden="true" className="h-6 w-6 shrink-0 text-primary" /> : <span aria-hidden="true" className="h-6 w-6 shrink-0 rounded-full border-2 border-slate-300" />}
          </span>
          <span className="mt-3 flex items-end justify-between gap-3">
            <span className="flex flex-wrap gap-x-3 text-sm text-slate-500"><span>{eta}</span><span className="inline-flex items-center gap-1"><Users className="h-4 w-4" />{capacity}</span></span>
            <span className="text-lg font-black text-slate-950">{fareEstimate}</span>
          </span>
        </span>
      </button>
    </Card>
  );
}
