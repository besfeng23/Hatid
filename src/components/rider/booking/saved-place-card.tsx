import { Briefcase, Building2, Heart, Home, MoreHorizontal, Plane } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LocationCard } from '@/components/ui/LocationCard';
import type { DemoPlace } from '@/lib/demo/location-suggestions';

function Icon({ tag, name }: { tag?: DemoPlace['tag']; name: string }) {
  if (tag === 'home') return <Home className="h-5 w-5" />;
  if (tag === 'work') return <Briefcase className="h-5 w-5" />;
  if (/terminal|airport/i.test(name)) return <Plane className="h-5 w-5" />;
  if (tag === 'favorite') return <Heart className="h-5 w-5" />;
  return <Building2 className="h-5 w-5" />;
}

export function SavedPlaceCard({ place, onSelect, editable = false }: { place: DemoPlace; onSelect?: (place: DemoPlace) => void; editable?: boolean }) {
  if (editable) {
    return (
      <div className="relative">
        <LocationCard label={place.name} address={place.address} note={place.note} icon={<Icon tag={place.tag} name={place.name} />} onSelect={onSelect ? () => onSelect(place) : undefined} />
        <Button type="button" variant="ghost" size="icon" aria-label={`Edit ${place.name}`} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-slate-500"><MoreHorizontal className="h-5 w-5" /></Button>
      </div>
    );
  }
  return <LocationCard label={place.name} address={place.address} note={place.note} icon={<Icon tag={place.tag} name={place.name} />} onSelect={onSelect ? () => onSelect(place) : undefined} />;
}
