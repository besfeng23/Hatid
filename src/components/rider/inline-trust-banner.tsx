import { SafetyCard, type SafetyCardProps } from '@/components/ui/SafetyCard';

export function InlineTrustBanner({ title = 'Prototype safety note', ...props }: Omit<SafetyCardProps, 'title'> & { title?: string }) {
  return <SafetyCard title={title} {...props} />;
}
