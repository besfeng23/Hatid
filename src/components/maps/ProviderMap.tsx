import { MapPlaceholder, type MapPlaceholderProps } from './MapPlaceholder';

export type MapProvider = 'google' | 'mapbox';
export type ProviderMapProps = MapPlaceholderProps & { provider?: MapProvider; providerReady?: boolean };

export function ProviderMap({ provider, providerReady = false, description, ...props }: ProviderMapProps) {
  const providerDescription = provider
    ? `${provider === 'google' ? 'Google Maps' : 'Mapbox'} integration is reserved for the maps phase and is not connected here.`
    : 'Google Maps or Mapbox can be connected here during the maps phase.';

  return <MapPlaceholder description={description ?? (providerReady ? 'Map provider loading area.' : providerDescription)} {...props} />;
}
