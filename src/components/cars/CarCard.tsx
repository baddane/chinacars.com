import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Gauge, Battery } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Badge from '@/src/components/ui/Badge';
import ImageWithFallback from '@/src/components/ui/ImageWithFallback';

interface CarCardProps {
  car: {
    slug: string;
    brandSlug: string;
    name: string;
    brand: string;
    price: string;
    image: string;
    type: 'electrique' | 'hybride' | 'thermique';
    autonomy?: string;
    power?: string;
  };
  className?: string;
}

export default function CarCard({ car, className }: CarCardProps) {
  const href = `/marques/${car.brandSlug}/${car.slug}`;
  const typeLabel = car.type.charAt(0).toUpperCase() + car.type.slice(1);
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl',
        className,
      )}
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{car.brand}</span>
          <Badge tone={car.type === 'electrique' ? 'green' : 'blue'} icon={car.type === 'electrique' ? <Zap className="h-3 w-3" /> : null}>
            {typeLabel}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          <Link to={href}>
            <span className="absolute inset-0" aria-hidden="true" />
            {car.name}
          </Link>
        </h3>
        <p className="text-lg font-bold text-gray-900 mb-4">{car.price}</p>
        
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
          {car.autonomy && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Battery className="h-4 w-4 text-gray-400" />
              <span>{car.autonomy}</span>
            </div>
          )}
          {car.power && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Gauge className="h-4 w-4 text-gray-400" />
              <span>{car.power}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
