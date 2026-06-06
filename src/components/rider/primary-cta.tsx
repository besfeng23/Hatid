import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Props = ButtonProps & { href?: string };

export function PrimaryCta({ href, children, className, ...props }: Props) {
  return (
    <Button asChild={Boolean(href)} size="lg" className={cn('w-full rounded-[1.25rem]', className)} {...props}>
      {href ? <Link href={href}>{children}</Link> : children}
    </Button>
  );
}
