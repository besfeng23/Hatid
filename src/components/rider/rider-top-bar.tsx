import { AppHeader } from '@/components/ui/AppHeader';

type Props = { title?: string; subtitle?: string; showBack?: boolean; backHref?: string; className?: string };

export function RiderTopBar({ title, subtitle, showBack, backHref = '/', className }: Props) {
  return <AppHeader title={title} subtitle={subtitle} backHref={showBack ? backHref : undefined} className={className} />;
}
