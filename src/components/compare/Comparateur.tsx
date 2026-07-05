'use client';

import { useMemo, useState } from 'react';
import { Trophy, Check, ArrowRight, ArrowLeft, RotateCcw, Zap } from 'lucide-react';
import ImageWithFallback from '@/src/components/ui/ImageWithFallback';
import { cn } from '@/src/lib/utils';
import { CARS, getCar, carLabel, type Car } from '@/src/data/cars';
import { SPEC_ROWS, betterOnRow } from '@/src/lib/carSpecRows';
import {
  CRITERIA,
  DRIVER_PROFILES,
  POPULAR_DUELS,
  compareCars,
  computeRanges,
  type CriterionId,
} from '@/src/lib/compare';

/** Nom du modèle sans la marque (pour l'afficher sous le libellé de marque). */
function modelName(car: Car): string {
  return car.name.toLowerCase().startsWith(car.brand.toLowerCase())
    ? car.name.slice(car.brand.length).trim()
    : car.name;
}

const carsByBrand = CARS.reduce<Record<string, Car[]>>((acc, car) => {
  (acc[car.brand] ??= []).push(car);
  return acc;
}, {});

const STEPS = [
  { id: 1, label: 'Profil' },
  { id: 2, label: 'Priorités' },
  { id: 3, label: 'Voitures' },
  { id: 4, label: 'Résultat' },
] as const;

type StepId = (typeof STEPS)[number]['id'];

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

/** Aperçu compact d'une voiture choisie (photo + libellé). */
function CarPreview({ car }: { car: Car }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3">
      <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <ImageWithFallback
          src={car.image}
          alt={carLabel(car)}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-600">{car.brand}</p>
        <p className="truncate text-sm font-bold text-gray-900">{modelName(car)}</p>
        <p className="truncate text-xs text-gray-500">{car.segment}</p>
      </div>
    </div>
  );
}

function Stepper({
  step,
  canReach,
  onGo,
}: {
  step: StepId;
  canReach: (target: StepId) => boolean;
  onGo: (target: StepId) => void;
}) {
  return (
    <ol className="flex items-center">
      {STEPS.map((s, i) => {
        const state = s.id < step ? 'done' : s.id === step ? 'current' : 'todo';
        const reachable = canReach(s.id);
        return (
          <li key={s.id} className={cn('flex items-center', i < STEPS.length - 1 && 'flex-1')}>
            <button
              type="button"
              onClick={() => reachable && onGo(s.id)}
              disabled={!reachable}
              aria-current={state === 'current' ? 'step' : undefined}
              className={cn(
                'group flex items-center gap-2 rounded-full',
                reachable ? 'cursor-pointer' : 'cursor-not-allowed',
              )}
            >
              <span
                className={cn(
                  'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors',
                  state === 'done' && 'bg-red-600 text-white',
                  state === 'current' && 'bg-red-600 text-white ring-4 ring-red-500/20',
                  state === 'todo' && 'bg-gray-100 text-gray-400',
                )}
              >
                {state === 'done' ? <Check className="h-4 w-4" aria-hidden="true" /> : s.id}
              </span>
              <span
                className={cn(
                  'hidden text-sm font-semibold sm:inline',
                  state === 'todo' ? 'text-gray-400' : 'text-gray-900',
                )}
              >
                {s.label}
              </span>
            </button>
            {i < STEPS.length - 1 && (
              <span
                className={cn(
                  'mx-2 h-0.5 flex-1 rounded-full transition-colors',
                  s.id < step ? 'bg-red-600' : 'bg-gray-200',
                )}
                aria-hidden="true"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function Comparateur() {
  const [step, setStep] = useState<StepId>(1);
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

  const winnerCar = result?.winner === 'a' ? carA : result?.winner === 'b' ? carB : null;

  function selectProfile(id: string) {
    const profile = DRIVER_PROFILES.find((p) => p.id === id);
    if (!profile) return;
    setProfileId(id);
    setCriteria(profile.criteria);
    setStep(2);
  }

  function toggleCriterion(id: CriterionId) {
    setCriteria((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }

  function startDuel(a: string, b: string) {
    setCarAId(a);
    setCarBId(b);
    setStep(4);
  }

  function restart() {
    setProfileId(null);
    setCriteria([]);
    setStep(1);
  }

  // On peut atteindre l'étape 4 seulement avec deux modèles différents.
  const canReach = (target: StepId) => (target === 4 ? !sameCar : true);

  function goTo(target: StepId) {
    if (canReach(target)) setStep(target);
  }

  return (
    <div>
      {/* Barre de progression */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 sm:p-5">
        <Stepper step={step} canReach={canReach} onGo={goTo} />
      </div>

      <div className="mt-10">
        {/* ÉTAPE 1 — Profil conducteur */}
        {step === 1 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              <span className="mr-2 text-red-600">1.</span>Quel conducteur êtes-vous ?
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Choisissez le profil qui vous ressemble — il pré-sélectionne vos priorités.
              Vous pourrez tout ajuster ensuite.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
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
                      : 'border-gray-200 bg-white hover:border-red-300 hover:shadow-sm',
                  )}
                >
                  <span className="text-2xl" aria-hidden="true">{profile.emoji}</span>
                  <span className="mt-2 text-sm font-bold text-gray-900">{profile.label}</span>
                  <span className="mt-1 text-xs leading-5 text-gray-500">{profile.description}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-red-600"
              >
                Passer cette étape
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </section>
        )}

        {/* ÉTAPE 2 — Priorités */}
        {step === 2 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              <span className="mr-2 text-red-600">2.</span>Qu&apos;est-ce qui compte pour vous ?
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Cochez ce que vous recherchez. Ajustez librement la sélection issue de votre profil.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
                Aucune priorité sélectionnée : le score sera calculé sur l&apos;ensemble des critères.
              </p>
            )}
            <NavButtons
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
              nextLabel="Choisir les voitures"
            />
          </section>
        )}

        {/* ÉTAPE 3 — Choix des voitures */}
        {step === 3 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              <span className="mr-2 text-red-600">3.</span>Choisissez deux voitures
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Sélectionnez les deux modèles à départager, ou lancez un duel populaire.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <CarSelect label="Voiture A" value={carAId} exclude={carBId} onChange={setCarAId} />
                <CarPreview car={carA} />
              </div>
              <div className="space-y-3">
                <CarSelect label="Voiture B" value={carBId} exclude={carAId} onChange={setCarBId} />
                <CarPreview car={carB} />
              </div>
            </div>

            {sameCar && (
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                Choisissez deux modèles différents pour lancer la comparaison.
              </p>
            )}

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Duels populaires
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_DUELS.map((duel) => (
                  <button
                    key={duel.label}
                    type="button"
                    onClick={() => startDuel(duel.a, duel.b)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-red-400 hover:text-red-600"
                  >
                    <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                    {duel.label}
                  </button>
                ))}
              </div>
            </div>

            <NavButtons
              onBack={() => setStep(2)}
              onNext={() => setStep(4)}
              nextLabel="Voir le verdict"
              nextIcon={<Trophy className="h-4 w-4" aria-hidden="true" />}
              nextDisabled={sameCar}
            />
          </section>
        )}

        {/* ÉTAPE 4 — Résultat */}
        {step === 4 && result && (
          <section aria-live="polite">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Le verdict pour votre profil</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-red-400 hover:text-red-600"
                >
                  Modifier mes priorités
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-red-400 hover:text-red-600"
                >
                  Changer de voitures
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-red-400 hover:text-red-600"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Recommencer
                </button>
              </div>
            </div>

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
                      const betterKey = betterOnRow(row, carA, carB);
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

            <div className="mt-10 flex justify-start">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:border-red-400 hover:text-red-600"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Retour aux voitures
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/** Barre de navigation Retour / Continuer réutilisée entre les étapes. */
function NavButtons({
  onBack,
  onNext,
  nextLabel,
  nextIcon,
  nextDisabled,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
  nextIcon?: React.ReactNode;
  nextDisabled?: boolean;
}) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-red-600"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Retour
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className={cn(
          'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors',
          nextDisabled ? 'cursor-not-allowed bg-gray-300' : 'bg-red-600 hover:bg-red-500',
        )}
      >
        {nextLabel}
        {nextIcon ?? <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
