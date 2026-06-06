import React from 'react';
import { RideCard } from '@/components/ui/RideCard';

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

type RideOptionCardProps = { option: RideOption; isSelected: boolean; onSelect: (option: RideOption) => void };

export function RideOptionCard({ option, isSelected, onSelect }: RideOptionCardProps) {
  return (
    <RideCard
      id={option.id}
      rideType={option.name}
      description={option.description}
      capacity={option.capacity ?? 1}
      eta={`ETA ${option.eta}`}
      fareEstimate={`₱${option.price.toFixed(0)}`}
      icon={option.icon}
      selected={isSelected}
      disabled={option.availability === 'unavailable'}
      onSelect={() => onSelect(option)}
    />
  );
}
