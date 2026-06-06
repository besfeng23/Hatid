# Hatid Rider UI/UX System

## Scope and architecture boundary

This system defines the visual language for Hatid's existing rider routes. It is a presentation layer only. It does not own trips, dispatch, driver availability, fares, payments, wallets, safety incidents, onboarding approval, or compliance decisions.

The prototype remains non-production. Rider UI components receive display values through props and do not progress trip state, assign drivers, calculate fares, or create payment state. Existing routes and backend boundaries remain authoritative.

## Foundations

### Colors

The canonical TypeScript tokens live in `src/design-system/colors.ts`.

- **Primary blue — `#0033CC`:** primary actions, current navigation, selected ride state, and brand emphasis.
- **Dark blue — `#001144`:** headings and high-emphasis text.
- **White:** raised cards, sheets, and navigation surfaces.
- **Slate canvas:** separates raised content without adding visual noise.
- **Status colors:** communicate explicit information, warning, danger, or success states; color must not be the only signal.

### Typography

Tokens live in `src/design-system/typography.ts`.

- Use bold or black weights for page titles, card titles, and critical trip context.
- Use regular body copy with comfortable line height for instructions and safety explanations.
- Keep uppercase tracking limited to short metadata labels.
- Maintain a clear hierarchy: display, page title, section heading, body, label, caption.

### Spacing

Tokens live in `src/design-system/spacing.ts`. The system uses a four-pixel base rhythm and favors 16–24px gaps between related mobile sections. Interactive controls have a minimum 44px touch target.

### Radius and shadows

Cards use a 24px radius and bottom sheets use a 32px top radius. Controls use a smaller 14px radius, while avatars and compact status chips may be fully rounded. Shadows are restrained and communicate elevation rather than decoration. Tokens live in `radius.ts` and `shadows.ts`.

## Components

### Buttons

`Button` provides primary, secondary, ghost, destructive, and danger treatments with shared sizing, disabled behavior, focus rings, and button semantics. Use one primary action per decision area. Disabled prototype actions must explain why the action is unavailable nearby.

### Cards

`Card` is the common clean-white container. Use its padding options rather than repeating card border, radius, and shadow classes. Interactive cards expose visible keyboard focus through their contained control.

### Bottom sheets

`BottomSheet` groups the next rider decision over or below map context. Sheets have a visible handle, an accessible heading when a title is supplied, safe-area-aware bottom padding, and a restrained slide-up entrance.

### Ride cards

`RideCard` receives ride type, ETA, formatted fare estimate, capacity, selection state, and an optional icon through props. It does not calculate fares or infer availability. Selection is announced with `aria-pressed` and remains keyboard accessible.

### Driver cards

`DriverCard` receives driver identity, vehicle details, plate number, rating, and optional status copy through props. It contains no embedded driver record and performs no matching or dispatch work.

### Location cards

`LocationCard` displays a label, address, note, and optional selection handler. Saved and suggested places use the same hierarchy without embedding place data in the component.

### Safety cards

`SafetyCard` gives safety and prototype-boundary information stronger visual priority. Urgent styling is available for caller-owned actions, but the component does not create, resolve, or classify incidents.

### Headers and bottom navigation

`AppHeader` uses route links for back and notification destinations. `BottomNav` receives route-backed items and identifies the current route with `aria-current="page"`. Navigation must never be implemented as local screen-switching state.

## Maps

`src/components/maps/ProviderMap.tsx` and `MapPlaceholder.tsx` define the provider boundary for future Google Maps or Mapbox integration. The current placeholder intentionally contains no fake roads, route SVGs, traffic, pins, or driver positions. Production integration belongs to the maps/routing phase and must use server-authoritative fare and trip boundaries.

## Motion

`src/styles/animations.css` contains only fade and slide-up motion. Both are disabled when the user requests reduced motion. Repeated pulse, bounce, aggressive shimmer, and animation-driven trip progression are prohibited.

## Accessibility

- Preserve semantic links for navigation and semantic buttons for actions.
- Give icon-only actions an accessible name.
- Keep focus rings visible and high contrast.
- Keep touch targets at least 44px.
- Use `aria-pressed` for selectable ride cards and `aria-current` for active navigation.
- Do not rely on color alone to communicate selection, urgency, or disabled state.
- Respect `prefers-reduced-motion`.

## Current route migration

The existing rider surfaces covered by this migration are:

- `/onboarding/permissions`
- `/onboarding/profile`
- `/`
- `/rider/search`
- `/rider/saved-places`
- `/rider/ride-options`

No active-trip or trip-completion route currently exists. This migration does not invent those routes or a client-side trip state machine. `DriverCard` and `SafetyCard` are reusable presentation primitives for a future route backed by real trip read models.

## Usage rules

1. Pass rider, trip, ride option, vehicle, location, and fare display values through props.
2. Format authoritative money and status values at the route/view-model boundary.
3. Do not add timers, local dispatch simulation, fake driver assignment, fake payment results, or fake wallet balances.
4. Keep route navigation in Next.js routing, not `setCurrentScreen` or an `App.jsx` switch.
5. Treat Firestore data as a selected realtime read model, not the production source of truth for critical flows.
