import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

type Tone = 'red' | 'green' | 'blue' | 'amber' | 'gray';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  icon?: ReactNode;
}

const TONE_STYLES: Record<Tone, string> = {
  red: 'bg-red-50 text-red-700 ring-red-600/20',
  green: 'bg-green-50 text-green-700 ring-green-600/20',
  blue: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  amber: 'bg-amber-50 text-amber-800 ring-amber-600/20',
  gray: 'bg-gray-100 text-gray-700 ring-gray-500/20',
};

export default function Badge({
  tone = 'red',
  icon,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
        TONE_STYLES[tone],
        className,
      )}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
