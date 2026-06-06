import { Bookmark, Home, MapPin, User } from 'lucide-react';
import { BottomNav } from '@/components/ui/BottomNav';

const items = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/rider/search', label: 'Book', icon: MapPin },
  { href: '/rider/saved-places', label: 'Saved', icon: Bookmark },
  { href: '/profile', label: 'Profile', icon: User },
] as const;

const hrefByLabel: Record<string, string> = Object.fromEntries(items.map((item) => [item.label, item.href]));

export function RiderBottomNav({ active = 'Home' }: { active?: string }) {
  return <BottomNav items={items} activeHref={hrefByLabel[active] ?? '/'} />;
}
