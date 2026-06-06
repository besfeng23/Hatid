import Image from 'next/image';
import { Car, Star } from 'lucide-react';
import { Card } from './Card';

export type DriverCardProps = {
  driver: { name: string; photoUrl?: string };
  vehicle: { makeModel: string; plateNumber: string; color?: string };
  rating: number;
  statusLabel?: string;
};

export function DriverCard({ driver, vehicle, rating, statusLabel }: DriverCardProps) {
  return (
    <Card padding="md" className="flex items-center gap-4" aria-label={`Driver ${driver.name}`}>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-50 text-xl font-black text-primary">
        {driver.photoUrl ? <Image src={driver.photoUrl} alt="" width={56} height={56} className="h-full w-full object-cover" /> : driver.name.slice(0, 1).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div><h3 className="truncate text-lg font-black text-[#001144]">{driver.name}</h3><p className="mt-0.5 flex items-center gap-1 text-sm text-slate-500"><Car className="h-4 w-4" />{vehicle.color ? `${vehicle.color} · ` : ''}{vehicle.makeModel}</p></div>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-bold text-amber-800"><Star className="h-4 w-4 fill-current" />{rating.toFixed(1)}</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-sm"><span className="font-bold tracking-wide text-slate-700">{vehicle.plateNumber}</span>{statusLabel ? <span className="text-slate-500">{statusLabel}</span> : null}</div>
      </div>
    </Card>
  );
}
