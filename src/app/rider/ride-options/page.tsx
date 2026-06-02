'use client';

import { useState } from 'react';
import AuthGuard from '@/components/auth-guard';
import { MapView } from '@/components/map-view';
import { RideOptionCard, type RideOption } from '@/components/ride-option-card';
import { PrimaryCta } from '@/components/rider/primary-cta';
import { RiderScreenContainer } from '@/components/rider/rider-screen-container';
import { RiderTopBar } from '@/components/rider/rider-top-bar';
import { FareEstimateNotice } from '@/components/rider/booking/fare-estimate-notice';
import { PaymentPreferenceRow } from '@/components/rider/booking/payment-preference-row';
import { PromoRow } from '@/components/rider/booking/promo-row';
import { TripSummaryCard } from '@/components/rider/booking/trip-summary-card';
import { demoDestination, demoPickup } from '@/lib/demo/location-suggestions';
import { supportedRideOptions } from '@/lib/demo/rider-service-options';

function RiderRideOptionsPage() {
  const [selected, setSelected] = useState<RideOption>(supportedRideOptions[0]);
  return <RiderScreenContainer className="pb-6"><RiderTopBar showBack backHref="/rider/search" title="Fare estimates" subtitle="Prototype quote only" /><div className="space-y-4 px-4"><TripSummaryCard pickup={demoPickup} destination={demoDestination} /><div className="h-48 overflow-hidden rounded-3xl"><MapView mode="quote" className="h-full" /></div><FareEstimateNotice /><PaymentPreferenceRow /><div className="space-y-3">{supportedRideOptions.filter((option) => option.availability !== 'unavailable').map((option) => <RideOptionCard key={option.id} option={option} isSelected={selected.id === option.id} onSelect={setSelected} />)}</div><PromoRow /><PrimaryCta onClick={() => undefined}>Confirm estimate — ₱{selected.price.toFixed(0)}</PrimaryCta><p className="text-center text-xs text-muted-foreground">Confirming records no live driver match and performs no payment charge in this phase.</p></div></RiderScreenContainer>;
}
export default function RiderRideOptionsPageWithAuth() { return <AuthGuard><RiderRideOptionsPage /></AuthGuard>; }
