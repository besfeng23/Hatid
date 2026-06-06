import { ProviderMap } from '@/components/maps/ProviderMap';

export type MapMode = 'home' | 'search' | 'quote' | 'driver-state';
export type MapViewProps = {
  mode?: MapMode;
  className?: string;
  confirmedDriver?: unknown;
  showUserPin?: boolean;
  showPickupPin?: boolean;
  showDestinationPin?: boolean;
  showRoute?: boolean;
};

const labels: Record<MapMode, string> = {
  home: 'Pickup map area',
  search: 'Destination map area',
  quote: 'Route preview area',
  'driver-state': 'Active trip map area',
};

export function MapView({ mode = 'home', className }: MapViewProps) {
  return (
    <ProviderMap
      label={labels[mode]}
      className={className}
      description="Live maps, routes, traffic, and driver positions are not connected in this prototype."
    />
  );
}
