'use client';

import { useMemo, useState } from 'react';
import { Trophy, Check } from 'lucide-react';
import ImageWithFallback from '@/src/components/ui/ImageWithFallback';
import { cn } from '@/src/lib/utils';
import { CARS, getCar, carLabel, POWERTRAIN_LABELS, type Car } from '@/src/data/cars';

/** Nom du modèle sans la marque (pour l'afficher sous le libellé de marque). */
function modelName(car: Car): string {
  return car.name.toLowerCase().startsWith(car.brand.toLowerCase())
    ? car.name.slice(car.brand.length).trim()
    : car.name;
}
import {
  CRITERIA,
  DRIVER_PROFILES,
  POPULAR_DUELS,
  compareCars,
  computeRanges,
  type CriterionId,
} from '@/src/lib/compare';

const carsByBrand = CARS.reduce<Record<string, Car[]>>((acc, car) => {
  (acc[car.brand] ??= []).push(car);
  return acc;
}, {});

interface SpecRow {
  label: string;
  value: (car: Car) => string;
  better?: 'higher' | 'lower';
  raw?: (car: Car) => number | null;
}

const SPEC_ROWS: SpecRow[] = [
  { label: 'Prix indicatif', value: (c) => `${c.price.toLocaleString('fr-FR')} €`, better: 'lower', raw: (c) => c.price },
  { label: 'Motorisation', value: (c) => POWERTRAIN_LABELS[c.powertrain] },
  { label: 'Puissance', value: (c) => `${c.powerHp} ch`, better: 'higher', raw: (c) => c.powerHp },
  { label: '0 à 100 km/h', value: (c) => `${c.accel0to100.toFixed(1)} s`, better: 'lower', raw: (c) => c.accel0to100 },
  { label: 'Autonomie totale', value: (c) => `${c.autonomyKm} km`, better: 'higher', raw: (c) => c.autonomyKm },
  { label: 'Recharge rapide', value: (c) => (c.chargingKw ? `${c.chargingKw} kW` : 'Plein essence'), better: 'higher', raw: (c) => c.chargingKw },
  { label: 'Batterie', value: (c) => (c.batteryKwh ? `${c.batteryKwh} kWh` : '—') },
  { label: 'Coût / 100 km', value: (c) => `≈ ${c.energyCostPer100.toFixed(1)} €`, better: 'lower', raw: (c) => c.energyCostPer100 },
  { label: 'Coffre', value: (c) => `${c.bootLiters} L`, better: 'higher', raw: (c) => c.bootLiters },
  { label: 'Places', value: (c) => `${c.seats}`, better: 'higher', raw: (c) => c.seats },
  { label: 'Longueur', value: (c) => `${(c.lengthMm / 1000).toFixed(2)} m` },
  { label: 'Sécurité Euro NCAP', value: (c) => `${c.safetyStars} ★`, better: 'higher', raw: (c) => c.safetyStars },
  { label: 'Garantie', value: (c) => `${c.warrantyYears} ans`, better: 'higher', raw: (c) => c.warrantyYears },
];

function CarSelect({
  label,
  value,
  exclude,
  onChange,
}: {
  label: string;
  value: string;
  exclude: string;
  onChange: (slug: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-gray-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
      >
        {Object.entries(carsByBrand).map(([brand, cars]) => (
          <optgroup key={brand} label={brand}>
            {cars.map((car) => (
              <option key={car.slug} value={car.slug} disabled={car.slug === exclude}>
                {carLabel(car)}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </label>
  );
}

export default function Comparateur() {
  const [profileId, setProfileId] = useState<string | null>(null);
  const [criteria, setCriteria] = useState<CriterionId[]>([]);
  const [carAId, setCarAId] = useState('byd-seal');
  const [carBId, setCarBId] = useState('zeekr-001');

  const ranges = useMemo(() => computeRanges(), []);
  const carA = getCar(carAId)!;
  const carB = getCar(carBId)!;
  const sameCar = carAId === carBId;

  const result = useMemo(
    () => (sameCar ? null : compareCars(carA, carB, criteria, ranges)),
    [carA, carB, criteria, ranges, sameCar],
  );

  function selectProfile(id: string) {
    const profile = DRIVER_PROFILES.find((p) => p.id === id);
    if (!profile) return;
    setProfileId(id);
    setCriteria(profile.criteria);
  }

  function toggleCriterion(id: CriterionId) {
    setCriteria((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }

  const winnerCar = result?.winner === 'a' ? carA : result?.winner === 'b' ? carB : null;

  return (
    <div className="space-y-12">
      {/* Étape 1 : profil conducteur */}
      <section>
        <h2 className="text-xl font-bold text-gray-900">
          <span className="mr-2 text-red-600">1.</span>Quel conducteur êtes-vous ?
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Choisissez le profil qui vous ressemble — il pré-sélectionne vos priorités.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {DRIVER_PROFILES.map((profile) => (
            <button
              key={profile.id}
              type="button"
              onClick={() => selectProfile(profile.id)}
              aria-pressed={profileId === profile.id}
              className={cn(
                'flex flex-col items-start rounded-2xl border p-4 text-left transition-all',
                profileId === profile.id
                  ? 'border-red-500 bg-red-50 ring-2 ring-red-500/30'
                  : 'border-gray-200 bg-white hover:border-gray-300',
              )}
            >
              <span className="text-2xl" aria-hidden="true">{profile.emoji}</span>
              <span className="mt-2 text-sm font-bold text-gray-900">{profile.label}</span>
              <span className="mt-1 text-xs leading-5 text-gray-500">{profile.description}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Étape 2 : préférences */}
      <section>
        <h2 className="text-xl font-bold text-gray-900">
          <span className="mr-2 text-red-600">2.</span>Qu'est-ce qui compte pour vous ?
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Cochez ce que vous recherchez (ajustez librement la sélection du profil).
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {CRITERIA.map((crit) => {
            const active = criteria.includes(crit.id);
            return (
              <button
                key={crit.id}
                type="button"
                onClick={() => toggleCriterion(crit.id)}
                aria-pressed={active}
                title={crit.description}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                  active
                    ? 'border-red-600 bg-red-600 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-red-400 hover:text-red-600',
                )}
              >
                {active && <Check className="h-4 w-4" aria-hidden="true" />}
                {crit.label}
              </button>
            );
          })}
        </div>
        {criteria.length === 0 && (
          <p className="mt-3 text-xs text-gray-500">
            Aucune priorité sélectionnée : le score est calculé sur l'ensemble des critères.
          </p>
        )}
      </section>

      {/* Étape 3 : choix des voitures */}
      <section>
        <h2 className="text-xl font-bold text-gray-900">
          <span className="mr-2 text-red-600">3.</span>Choisissez deux voitures
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CarSelect label="Voiture A" value={carAId} exclude={carBId} onChange={setCarAId} />
          <CarSelect label="Voiture B" value={carBId} exclude={carAId} onChange={setCarBId} />
        </div>
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Duels populaires
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_DUELS.map((duel) => (
              <button
                key={duel.label}
                type="button"
                onClick={() => {
                  setCarAId(duel.a);
                  setCarBId(duel.b);
                }}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-red-400 hover:text-red-600"
              >
                {duel.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Résultat */}
      {sameCar ? (
        <p className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center text-sm font-medium text-amber-800">
          Choisissez deux modèles différents pour lancer la comparaison.
        </p>
      ) : (
        result && (
          <section aria-live="polite" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900">Le verdict pour votre profil</h2>

            {/* Cartes des deux voitures */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {([['a', carA, result.scoreA], ['b', carB, result.scoreB]] as const).map(
                ([key, car, score]) => {
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
                          Recommandée
                        </div>
                      )}
                      <div className="relative aspect-[16/10] bg-gray-100">
                        <ImageWithFallback
                          src={car.image}
                          alt={carLabel(car)}
                          fill
                          sizes="(min-width: 768px) 400px, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                          {car.brand}
                        </p>
                        <p className="text-lg font-bold text-gray-900">{modelName(car)}</p>
                        <p className="text-sm text-gray-500">{car.segment}</p>
                        <div className="mt-4 flex items-end gap-2">
                          <span
                            className={cn(
                              'text-5xl font-extrabold tabular-nums',
                              isWinner ? 'text-red-600' : 'text-gray-400',
                            )}
                          >
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
                },
              )}
            </div>

            {/* Résumé */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-start gap-3">
                <Trophy className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
                    Pourquoi {winnerCar ? `la ${carLabel(winnerCar)}` : 'ce choix'} ?
                  </p>
                  <p
                    className="mt-2 text-base leading-7 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: result.summary }}
                  />
                </div>
              </div>
            </div>

            {/* Détail par critère sélectionné */}
            {result.breakdown.length > 0 && criteria.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">Détail par priorité</h3>
                <div className="mt-4 space-y-4">
                  {result.breakdown.map((b) => (
                    <div key={b.id}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="font-semibold text-gray-700">{b.label}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {(['scoreA', 'scoreB'] as const).map((k) => {
                          const val = b[k];
                          const isBetter = b.scoreA === b.scoreB ? false : (k === 'scoreA' ? b.scoreA > b.scoreB : b.scoreB > b.scoreA);
                          const car = k === 'scoreA' ? carA : carB;
                          return (
                            <div key={k} className="flex items-center gap-2">
                              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                                <div
                                  className={cn('h-full rounded-full', isBetter ? 'bg-red-600' : 'bg-gray-300')}
                                  style={{ width: `${Math.round(val * 100)}%` }}
                                />
                              </div>
                              <span className="w-9 text-right text-xs font-semibold tabular-nums text-gray-500">
                                {Math.round(val * 100)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comparatif détaillé des specs */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900">Comparatif technique détaillé</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-left">
                      <th className="py-3 pr-4 font-semibold text-gray-500">Caractéristique</th>
                      <th className="px-4 py-3 font-bold text-gray-900">{carLabel(carA)}</th>
                      <th className="px-4 py-3 font-bold text-gray-900">{carLabel(carB)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SPEC_ROWS.map((row) => {
                      const rawA = row.raw?.(carA) ?? null;
                      const rawB = row.raw?.(carB) ?? null;
                      let betterKey: 'a' | 'b' | null = null;
                      if (row.better && rawA != null && rawB != null && rawA !== rawB) {
                        const aWins = row.better === 'higher' ? rawA > rawB : rawA < rawB;
                        betterKey = aWins ? 'a' : 'b';
                      }
                      return (
                        <tr key={row.label} className="border-b border-gray-100">
                          <td className="py-3 pr-4 font-medium text-gray-500">{row.label}</td>
                          <td className={cn('px-4 py-3', betterKey === 'a' ? 'font-bold text-red-600' : 'text-gray-900')}>
                            <span className="inline-flex items-center gap-1.5">
                              {betterKey === 'a' && <Check className="h-4 w-4" aria-hidden="true" />}
                              {row.value(carA)}
                            </span>
                          </td>
                          <td className={cn('px-4 py-3', betterKey === 'b' ? 'font-bold text-red-600' : 'text-gray-900')}>
                            <span className="inline-flex items-center gap-1.5">
                              {betterKey === 'b' && <Check className="h-4 w-4" aria-hidden="true" />}
                              {row.value(carB)}
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
          </section>
        )
      )}
    </div>
  );
}
