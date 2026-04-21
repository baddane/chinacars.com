import Link from 'next/link';
import Image from 'next/image';
import { Zap, Gauge, Battery } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Badge from '@/src/components/ui/Badge';

interface CarCardProps {
  car: {
    slug: string;
    brandSlug: string;
    name: string;
    brand: string;
    price: string;
    image: string;
    type: 'electrique' | 'hybride' | 'hybride-rechargeable' | 'thermique';
    autonomy?: string;
    power?: string;
    excerpt?: string;
  };
  className?: string;
}

const typeLabels: Record<CarCardProps['car']['type'], string> = {
  electrique: 'Électrique',
  hybride: 'Hybride',
  'hybride-rechargeable': 'Hybride recharg.',
  thermique: 'Thermique',
};

const typeTone: Record<CarCardProps['car']['type'], 'green' | 'blue' | 'blue' | 'gray'> = {
  electrique: 'green',
  hybride: 'blue',
  'hybride-rechargeable': 'blue',
  thermique: 'gray',
};

export default function CarCard({ car, className }: CarCardProps) {
  const href = `/marques/${car.brandSlug}/${car.slug}`;
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:-translate-y-1',
        className,
      )}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
        {car.image ? (
          <Image
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-300">{car.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
            {car.brand}
          </span>
          <Badge
            tone={typeTone[car.type]}
            icon={car.type === 'electrique' ? <Zap className="h-3 w-3" /> : null}
          >
            {typeLabels[car.type]}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          <Link href={href}>
            <span className="absolute inset-0" aria-hidden="true" />
            {car.name}
          </Link>
        </h3>
        {car.excerpt && (
          <p className="text-sm leading-5 text-gray-500 line-clamp-2 mb-3">{car.excerpt}</p>
        )}
        <p className="text-base font-bold text-gray-900 mb-4">{car.price}</p>
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
          {car.autonomy && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Battery className="h-4 w-4 text-gray-400 shrink-0" aria-hidden="true" />
              <span>{car.autonomy}</span>
            </div>
          )}
          {car.power && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Gauge className="h-4 w-4 text-gray-400 shrink-0" aria-hidden="true" />
              <span>{car.power}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
