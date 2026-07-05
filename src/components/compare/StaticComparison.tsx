import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Check, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { carLabel, POWERTRAIN_LABELS, type Car } from '@/src/data/cars';
import { compareCars, computeRanges } from '@/src/lib/compare';
import { SPEC_ROWS, betterOnRow } from '@/src/lib/carSpecRows';

function modelName(car: Car): string {
  return car.name.toLowerCase().startsWith(car.brand.toLowerCase())
    ? car.name.slice(car.brand.length).trim()
    : car.name;
}

/**
 * Comparaison rendue côté serveur (SEO) pour une paire fixe, sur l'ensemble
 * des critères (verdict « équilibré »). Un lien renvoie vers le comparateur
 * interactif pour personnaliser selon son profil.
 */
export default function StaticComparison({ a, b }: { a: Car; b: Car }) {
  const result = compareCars(a, b, [], computeRanges());
  const winnerCar = result.winner === 'a' ? a : result.winner === 'b' ? b : null;

  return (
    <div className="space-y-8">
      {/* Cartes */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {([['a', a, result.scoreA], ['b', b, result.scoreB]] as const).map(([key, car, score]) => {
          const isWinner = result.winner === key;
          return (
            <div
              key={key}
              className={cn(
                'relative flex flex-col overflow-hidden rounded-3xl border bg-white',
                isWinner ? 'border-red-500 ring-2 ring-red-500/30' : 'border-gray-200',
              )}
            >
              {isWinner && (
                <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow">
                  <Trophy className="h-4 w-4" aria-hidden="true" />
                  Notre choix
                </div>
              )}
              <div className="relative aspect-[16/10] bg-white">
                <Image
                  src={car.image}
                  alt={carLabel(car)}
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="object-contain p-2"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-red-600">{car.brand}</p>
                <p className="text-lg font-bold text-gray-900">{modelName(car)}</p>
                <p className="text-sm text-gray-500">
                  {car.segment} · {POWERTRAIN_LABELS[car.powertrain]}
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className={cn('text-5xl font-extrabold tabular-nums', isWinner ? 'text-red-600' : 'text-gray-400')}>
                    {score}
                  </span>
                  <span className="mb-1 text-sm font-semibold text-gray-400">/ 100</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={cn('h-full rounded-full', isWinner ? 'bg-red-600' : 'bg-gray-300')}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Résumé */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-start gap-3">
          <Trophy className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
              Verdict {winnerCar ? `— ${carLabel(winnerCar)}` : ''}
            </p>
            <p
              className="mt-2 text-base leading-7 text-gray-700"
              dangerouslySetInnerHTML={{ __html: result.summary }}
            />
            <p className="mt-2 text-xs text-gray-500">
              Verdict établi sur l'ensemble des critères. Selon vos priorités, le
              classement peut changer.
            </p>
          </div>
        </div>
      </div>

      {/* CTA personnalisation */}
      <Link
        href="/comparateur"
        className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 hover:bg-red-100"
      >
        <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
        Personnaliser selon votre profil de conducteur
      </Link>

      {/* Tableau détaillé */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">Comparatif technique détaillé</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-semibold text-gray-500">Caractéristique</th>
                <th className="px-4 py-3 font-bold text-gray-900">{carLabel(a)}</th>
                <th className="px-4 py-3 font-bold text-gray-900">{carLabel(b)}</th>
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row) => {
                const betterKey = betterOnRow(row, a, b);
                return (
                  <tr key={row.label} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-500">{row.label}</td>
                    <td className={cn('px-4 py-3', betterKey === 'a' ? 'font-bold text-red-600' : 'text-gray-900')}>
                      <span className="inline-flex items-center gap-1.5">
                        {betterKey === 'a' && <Check className="h-4 w-4" aria-hidden="true" />}
                        {row.value(a)}
                      </span>
                    </td>
                    <td className={cn('px-4 py-3', betterKey === 'b' ? 'font-bold text-red-600' : 'text-gray-900')}>
                      <span className="inline-flex items-center gap-1.5">
                        {betterKey === 'b' && <Check className="h-4 w-4" aria-hidden="true" />}
                        {row.value(b)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">
          Valeurs indicatives (fiches wandaloo.com et constructeurs), variables selon finitions et marchés.
        </p>
      </div>
    </div>
  );
}
