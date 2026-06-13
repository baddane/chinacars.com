import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

interface LeadCTAProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function LeadCTA({
  title = 'Besoin d’un conseil personnalisé ?',
  description = 'Nos experts vous aident à choisir le modèle qui correspond à vos besoins et votre budget. Contactez-nous gratuitement.',
  className = '',
}: LeadCTAProps) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-6 sm:p-8 text-white my-10 ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-white/20 p-2 shrink-0">
          <MessageCircle className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm text-red-100 leading-relaxed">{description}</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-50 transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </div>
  );
}
