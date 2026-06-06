import AuthGuard from '@/components/auth-guard';
import { MapView } from '@/components/map-view';
import { BottomSheet } from '@/components/ui/BottomSheet';
import { InlineTrustBanner } from '@/components/rider/inline-trust-banner';
import { RiderBottomNav } from '@/components/rider/rider-bottom-nav';
import { RiderScreenContainer } from '@/components/rider/rider-screen-container';
import { RiderTopBar } from '@/components/rider/rider-top-bar';
import { LocationEntryCard } from '@/components/rider/booking/location-entry-card';
import { SavedShortcutsRow } from '@/components/rider/booking/saved-shortcuts-row';
import { ServiceModeRow } from '@/components/rider/booking/service-mode-row';

function RiderHomePage() {
  return (
    <RiderScreenContainer className="pb-20">
      <div className="mx-auto min-h-dvh max-w-[430px] bg-[#f7f9fc]">
        <RiderTopBar title="Hatid" subtitle="Plan a prototype ride quote" />
        <div className="space-y-4 px-4">
          <ServiceModeRow />
          <MapView mode="home" className="h-64" />
        </div>
        <BottomSheet title="Where are you going?" description="Choose a pickup and destination to review an estimate." className="mt-4">
          <div className="space-y-4">
            <LocationEntryCard />
            <SavedShortcutsRow />
            <InlineTrustBanner title="Safety starts with clear boundaries">Maps, fares, dispatch, and payment processing are not live in this prototype.</InlineTrustBanner>
          </div>
        </BottomSheet>
        <div className="fixed inset-x-0 bottom-0 z-20"><RiderBottomNav active="Home" /></div>
      </div>
    </RiderScreenContainer>
  );
}

export default function RiderHomePageWithAuth() {
  return <AuthGuard><RiderHomePage /></AuthGuard>;
}
