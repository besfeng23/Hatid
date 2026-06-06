'use client';

import { cn } from '@/lib/utils';
import { CheckCircle2, Users } from 'lucide-react';
import React from 'react';

export type RideOption = {
  id: string;
  name: string;
  description: string;
  capacity?: number;
  price: number;
  eta: string;
  icon: React.ReactNode;
  availability?: 'available' | 'limited' | 'unavailable';
  estimateLabel?: string;
};

type RideOptionCardProps = {
  option: RideOption;
  isSelected: boolean;
  onSelect: (option: RideOption) => void;
};

export function RideOptionCard({ option, isSelected, onSelect }: RideOptionCardProps) {
  const unavailable = option.availability === 'unavailable';

  return (
    <button
      type="button"
      onClick={() => !unavailable && onSelect(option)}
      disabled={unavailable}
      className={cn(
        'flex w-full items-center gap-4 rounded-[1.9rem] border bg-white px-4 py-4 text-left shadow-sm transition-all',
        isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 hover:border-primary/40',
        unavailable && 'cursor-not-allowed opacity-50'
      )}
    >
      <div className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.4rem]', isSelected ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-primary')}>
        {option.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-[1.1rem] font-extrabold leading-tight tracking-tight text-slate-950">{option.name}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-500">{option.description}</p>
          </div>
          <div className="text-right">
            {isSelected ? <CheckCircle2 className="ml-auto h-6 w-6 text-primary" /> : <div className="h-6 w-6 rounded-full border-2 border-slate-300" />}
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            {option.capacity ? (
              <span className="inline-flex items-center gap-1">
                <Users className="h-4 w-4" />
                {option.capacity}
              </span>
            ) : null}
            <span>ETA: {option.eta}</span>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{option.estimateLabel || 'Estimate'}</p>
            <p className="text-[1.45rem] font-black tracking-tight text-slate-950">₱{option.price.toFixed(0)}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
