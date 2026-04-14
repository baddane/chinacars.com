import { cn } from '@/src/lib/utils';

interface BrandLogoProps {
  name: string;
  logo: string;
  className?: string;
}

export default function BrandLogo({ name, logo, className }: BrandLogoProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-gray-200">
        <img
          src={logo}
          alt={`Logo de la marque ${name}`}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-xs font-bold text-gray-500 uppercase tracking-tight">{name}</span>
    </div>
  );
}
