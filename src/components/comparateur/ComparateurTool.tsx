'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  ArrowLeftRight,
  Zap,
  Gauge,
  Battery,
  Weight,
  Ruler,
  Timer,
  Shield,
  X,
  Plus,
  Check,
  Minus,
  Fuel,
  BaggageClaim,
  Car,
  Users,
  MapPin,
  Leaf,
  TrendingUp,
  Trophy,
} from 'lucide-react';
import { cars, segments, type CarSpec } from '@/src/data/cars';

// ─── Profils conducteur ────────────────────────────────────────────────────────

type ProfileId = 'citadin' | 'famille' | 'voyageur' | 'sportif' | 'budget';

interface Criterion {
  key: keyof CarSpec;
  label: string;
  weight: number;
  lowerIsBetter?: boolean;
}

interface Profile {
  id: ProfileId;
  label: string;
  emoji: string;
  description: string;
  icon: React.ElementType;
  color: string;
  criteria: Criterion[];
}

const profiles: Profile[] = [
  {
    id: 'citadin',
    label: 'Citadin·e',
    emoji: '🏙️',
    icon: Car,
    color: 'violet',
    description: 'Trajets courts, parking serré, faible conso.',
    criteria: [
      { key: 'price', label: 'Prix abordable', weight: 3, lowerIsBetter: true },
      { key: 'length', label: 'Compacité', weight: 3, lowerIsBetter: true },
      { key: 'consumption', label: 'Faible conso', weight: 2, lowerIsBetter: true },
      { key: 'bootSpace', label: 'Coffre utile', weight: 1 },
    ],
  },
  {
    id: 'famille',
    label: 'Famille',
    emoji: '👨‍👩‍👧‍👦',
    icon: Users,
    color: 'blue',
    description: 'Espace, sécurité, confort et coffre spacieux.',
    criteria: [
      { key: 'bootSpace', label: 'Volume coffre', weight: 3 },
      { key: 'length', label: 'Espace habitacle', weight: 2 },
      { key: 'ncapStars', label: 'Sécurité NCAP', weight: 3 },
      { key: 'price', label: 'Rapport qualité/prix', weight: 2, lowerIsBetter: true },
    ],
  },
  {
    id: 'voyageur',
    label: 'Grand voyageur',
    emoji: '🛣️',
    icon: MapPin,
    color: 'amber',
    description: 'Longs trajets, autonomie et recharge rapide.',
    criteria: [
      { key: 'autonomy', label: 'Autonomie WLTP', weight: 4 },
      { key: 'chargingSpeed', label: 'Recharge rapide', weight: 3 },
      { key: 'topSpeed', label: 'Vitesse max', weight: 2 },
      { key: 'consumption', label: 'Efficience', weight: 1, lowerIsBetter: true },
    ],
  },
  {
    id: 'sportif',
    label: 'Sportif·ve',
    emoji: '🏎️',
    icon: TrendingUp,
    color: 'red',
    description: 'Performances, accélération et sensations.',
    criteria: [
      { key: 'power', label: 'Puissance (ch)', weight: 3 },
      { key: 'torque', label: 'Couple (Nm)', weight: 3 },
      { key: 'acceleration', label: '0-100 km/h', weight: 4, lowerIsBetter: true },
      { key: 'topSpeed', label: 'Vitesse max', weight: 2 },
    ],
  },
  {
    id: 'budget',
    label: 'Éco / Budget',
    emoji: '🌿',
    icon: Leaf,
    color: 'green',
    description: 'Coût maîtrisé, faibles émissions, garantie longue.',
    criteria: [
      { key: 'price', label: "Prix d'achat", weight: 4, lowerIsBetter: true },
      { key: 'co2', label: 'Émissions CO₂', weight: 3, lowerIsBetter: true },
      { key: 'consumption', label: 'Conso réelle', weight: 2, lowerIsBetter: true },
    ],
  },
];

// ─── Score calculation ─────────────────────────────────────────────────────────

function scoreForProfile(car: CarSpec, profile: Profile): number {
  let totalWeight = 0;
  let weightedScore = 0;

  for (const crit of profile.criteria) {
    const raw = car[crit.key];
    if (raw === undefined || raw === null || typeof raw !== 'number') continue;
    const val = raw as number;
    if (val === 0) continue;

    const all = cars
      .map((c) => c[crit.key])
      .filter((v): v is number => typeof v === 'number' && v > 0);

    const min = Math.min(...all);
    const max = Math.max(...all);
    const range = max - min;
    let normalized = range === 0 ? 1 : (val - min) / range;
    if (crit.lowerIsBetter) normalized = 1 - normalized;

    totalWeight += crit.weight;
    weightedScore += normalized * crit.weight;
  }

  return totalWeight === 0 ? 0 : Math.round((weightedScore / totalWeight) * 100);
}

function getVerdict(carA: CarSpec, carB: CarSpec, profile: Profile) {
  const sA = scoreForProfile(carA, profile);
  const sB = scoreForProfile(carB, profile);
  const diff = Math.abs(sA - sB);

  if (diff < 5) {
    return { winner: null, loser: null, scoreA: sA, scoreB: sB, reason: `Les deux véhicules se valent pour ce profil (écart de ${diff} pts). Fiez-vous à vos préférences personnelles.` };
  }

  const winner = sA >= sB ? carA : carB;
  const loser = sA >= sB ? carB : carA;
  const sW = sA >= sB ? sA : sB;
  const sL = sA >= sB ? sB : sA;

  const topCrit = profile.criteria
    .filter((c) => {
      const vW = winner[c.key];
      const vL = loser[c.key];
      if (typeof vW !== 'number' || typeof vL !== 'number') return false;
      return c.lowerIsBetter ? vW < vL : vW > vL;
    })
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 2)
    .map((c) => c.label.toLowerCase());

  const reason = topCrit.length > 0
    ? `${winner.name} l'emporte grâce à ${topCrit.join(' et ')} (${sW}/100 vs ${sL}/100).`
    : `${winner.name} est globalement plus adapté à ce profil (${sW}/100 vs ${sL}/100).`;

  return { winner, loser, scoreA: sA, scoreB: sB, reason };
}

// ─── Circular score gauge (SVG) ───────────────────────────────────────────────

function ScoreGauge({ score, color, isWinner }: { score: number; color: string; isWinner: boolean }) {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  const colors: Record<string, { stroke: string; text: string; bg: string }> = {
    red: { stroke: '#ef4444', text: 'text-red-600', bg: 'text-red-100' },
    blue: { stroke: '#3b82f6', text: 'text-blue-600', bg: 'text-blue-100' },
    green: { stroke: '#22c55e', text: 'text-green-600', bg: 'text-green-100' },
    amber: { stroke: '#f59e0b', text: 'text-amber-600', bg: 'text-amber-100' },
    violet: { stroke: '#8b5cf6', text: 'text-violet-600', bg: 'text-violet-100' },
    gold: { stroke: '#f59e0b', text: 'text-amber-600', bg: 'text-amber-100' },
  };

  const c = colors[isWinner ? 'gold' : color] ?? colors.red;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="50" cy="50" r={r}
            fill="none"
            stroke={c.stroke}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {isWinner && <Trophy className="h-4 w-4 text-amber-400 mb-0.5" />}
          <span className={`text-2xl font-black ${isWinner ? 'text-amber-500' : c.text}`}>{score}</span>
          <span className="text-[10px] text-gray-400 font-medium">/100</span>
        </div>
      </div>
      {isWinner && (
        <span className="mt-1 text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
          🏆 Gagnant
        </span>
      )}
    </div>
  );
}

// ─── Radar-style bar chart for criteria ───────────────────────────────────────

function CriteriaChart({
  carA,
  carB,
  profile,
}: {
  carA: CarSpec;
  carB: CarSpec;
  profile: Profile;
}) {
  return (
    <div className="space-y-3">
      {profile.criteria.map((crit) => {
        const rawA = carA[crit.key];
        const rawB = carB[crit.key];
        const vA = typeof rawA === 'number' ? rawA : 0;
        const vB = typeof rawB === 'number' ? rawB : 0;

        if (vA === 0 && vB === 0) return null;

        const max = Math.max(vA, vB);
        const pA = max === 0 ? 50 : Math.round((vA / max) * 100);
        const pB = max === 0 ? 50 : Math.round((vB / max) * 100);

        const winA = crit.lowerIsBetter ? vA < vB : vA > vB;
        const winB = crit.lowerIsBetter ? vB < vA : vB > vA;

        return (
          <div key={String(crit.key)}>
            <div className="flex justify-between text-[11px] text-gray-500 mb-1">
              <span className={`font-semibold ${winA ? 'text-green-600' : ''}`}>
                {vA > 0 ? new Intl.NumberFormat('fr-FR').format(vA) : '—'}
                {winA && ' ✓'}
              </span>
              <span className="font-medium text-gray-600">{crit.label}</span>
              <span className={`font-semibold ${winB ? 'text-green-600' : ''}`}>
                {winB && '✓ '}
                {vB > 0 ? new Intl.NumberFormat('fr-FR').format(vB) : '—'}
              </span>
            </div>
            <div className="flex gap-1 h-2">
              {/* Bar A (right-aligned) */}
              <div className="flex-1 flex justify-end">
                <div className="w-full bg-gray-100 rounded-l-full overflow-hidden flex justify-end">
                  <div
                    className={`h-full rounded-l-full transition-all duration-700 ${winA ? 'bg-green-400' : 'bg-red-300'}`}
                    style={{ width: `${pA}%` }}
                  />
                </div>
              </div>
              <div className="w-px bg-gray-300 shrink-0" />
              {/* Bar B (left-aligned) */}
              <div className="flex-1">
                <div className="w-full bg-gray-100 rounded-r-full overflow-hidden">
                  <div
                    className={`h-full rounded-r-full transition-all duration-700 ${winB ? 'bg-green-400' : 'bg-blue-300'}`}
                    style={{ width: `${pB}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return new Intl.NumberFormat('fr-FR').format(n);
}

// ─── CarSelector ──────────────────────────────────────────────────────────────

function CarSelector({
  selected,
  onSelect,
  exclude,
  sideLabel,
  sideColor,
}: {
  selected: CarSpec | null;
  onSelect: (car: CarSpec) => void;
  exclude: string[];
  sideLabel: string;
  sideColor: 'red' | 'blue';
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filterSegment, setFilterSegment] = useState('');

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      if (exclude.includes(c.slug)) return false;
      if (filterSegment && c.segment !== filterSegment) return false;
      if (search) {
        const q = search.toLowerCase();
        return c.name.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q);
      }
      return true;
    });
  }, [search, filterSegment, exclude]);

  const borderColor = sideColor === 'red' ? 'border-red-400 bg-red-50' : 'border-blue-400 bg-blue-50';
  const labelColor = sideColor === 'red' ? 'text-red-600' : 'text-blue-600';

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="group w-full text-left">
        <p className={`text-xs font-bold uppercase tracking-widest mb-2 text-center ${labelColor}`}>{sideLabel}</p>
        {selected ? (
          <div className={`border-2 ${borderColor} rounded-2xl overflow-hidden transition-colors group-hover:shadow-md`}>
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image src={selected.image} alt={selected.name} fill className="object-cover" sizes="(min-width: 768px) 400px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs font-semibold text-white/70">{selected.brand}</p>
                <p className="text-xl font-black text-white leading-tight">{selected.name}</p>
              </div>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${selected.origin === 'chinoise' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{selected.origin}</span>
                <span className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{selected.type}</span>
              </div>
              <p className="text-base font-bold text-gray-900">{fmt(selected.price)} €</p>
            </div>
            <p className="text-center text-xs text-gray-400 group-hover:text-gray-600 pb-2 transition-colors">Changer →</p>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 group-hover:border-red-400 rounded-2xl flex flex-col items-center justify-center min-h-[200px] transition-colors bg-white">
            <Plus className="h-10 w-10 text-gray-300 group-hover:text-red-400 transition-colors" />
            <p className="mt-3 text-sm font-semibold text-gray-400 group-hover:text-red-500">Choisir un véhicule</p>
            <p className="text-xs text-gray-300 mt-1">28 modèles disponibles</p>
          </div>
        )}
      </button>
    );
  }

  return (
    <div className="border-2 border-red-500 rounded-2xl bg-white shadow-xl overflow-hidden">
      <div className="p-3 border-b border-gray-100 flex gap-2">
        <input
          type="text"
          placeholder="BYD, MG, Tesla, Renault..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
          autoFocus
        />
        <button onClick={() => { setOpen(false); setSearch(''); }} className="p-2 text-gray-400 hover:text-gray-600">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="px-3 py-2 flex gap-1 flex-wrap border-b border-gray-100">
        {['', ...segments].map((s) => (
          <button key={s} onClick={() => setFilterSegment(s === filterSegment ? '' : s)}
            className={`px-2 py-1 rounded-full text-xs font-medium capitalize transition-colors ${filterSegment === s ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {s === '' ? 'Tous' : s}
          </button>
        ))}
      </div>
      <div className="max-h-[320px] overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">Aucun véhicule trouvé</p>
        ) : filtered.map((car) => (
          <button key={car.slug}
            onClick={() => { onSelect(car); setOpen(false); setSearch(''); }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left border-b border-gray-50 last:border-0">
            <div className="relative h-12 w-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <Image src={car.image} alt={car.name} fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{car.name}</p>
              <p className="text-xs text-gray-500">{car.segment} · {fmt(car.price)} €</p>
            </div>
            <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${car.origin === 'chinoise' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
              {car.origin}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── CompRow ──────────────────────────────────────────────────────────────────

function CompRow({ label, icon: Icon, valA, valB, unit, lowerIsBetter = false }: {
  label: string;
  icon: React.ElementType;
  valA: number | string | undefined;
  valB: number | string | undefined;
  unit?: string;
  lowerIsBetter?: boolean;
}) {
  const a = typeof valA === 'number' ? valA : undefined;
  const b = typeof valB === 'number' ? valB : undefined;
  const winA = a !== undefined && b !== undefined && (lowerIsBetter ? a < b : a > b);
  const winB = a !== undefined && b !== undefined && (lowerIsBetter ? b < a : b > a);

  const fv = (v: number | string | undefined) => {
    if (v === undefined) return '—';
    return typeof v === 'string' ? v : fmt(v);
  };

  return (
    <div className={`grid grid-cols-3 items-center py-3 border-b border-gray-100 last:border-0 ${winA ? 'bg-red-50/40' : winB ? 'bg-blue-50/40' : ''}`}>
      <div className={`text-right text-sm font-semibold pr-4 ${winA ? 'text-red-600' : 'text-gray-800'}`}>
        {fv(valA)}{unit && valA !== undefined && <span className="text-xs text-gray-400 ml-1">{unit}</span>}
        {winA && <span className="ml-1">✓</span>}
      </div>
      <div className="flex flex-col items-center text-center">
        <Icon className="h-4 w-4 text-gray-400 mb-0.5" />
        <span className="text-xs text-gray-500 font-medium leading-tight">{label}</span>
      </div>
      <div className={`text-left text-sm font-semibold pl-4 ${winB ? 'text-blue-600' : 'text-gray-800'}`}>
        {winB && <span className="mr-1">✓</span>}
        {fv(valB)}{unit && valB !== undefined && <span className="text-xs text-gray-400 ml-1">{unit}</span>}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ComparateurTool() {
  const [carA, setCarA] = useState<CarSpec | null>(null);
  const [carB, setCarB] = useState<CarSpec | null>(null);
  const [activeProfile, setActiveProfile] = useState<ProfileId>('citadin');

  const profile = profiles.find((p) => p.id === activeProfile)!;
  const bothSelected = carA && carB;

  const verdict = bothSelected ? getVerdict(carA, carB, profile) : null;
  const winnerIsA = !!verdict && verdict.winner?.slug === carA?.slug;
  const winnerIsB = !!verdict && verdict.winner?.slug === carB?.slug;

  return (
    <div className="space-y-12">

      {/* ── Étape 1 : Profil ── */}
      <section>
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white text-xs font-black">1</span>
          <h2 className="text-lg font-bold text-gray-900">Quel type de conducteur êtes-vous ?</h2>
        </div>
        <p className="text-sm text-gray-500 ml-9 mb-5">L&apos;analyse s&apos;adapte automatiquement à votre profil.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {profiles.map((p) => {
            const active = activeProfile === p.id;
            return (
              <button key={p.id} onClick={() => setActiveProfile(p.id)}
                className={`relative flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-all ${
                  active ? 'border-red-500 bg-red-50 shadow-md scale-105' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                <span className="text-3xl">{p.emoji}</span>
                <span className={`text-sm font-bold ${active ? 'text-red-700' : 'text-gray-700'}`}>{p.label}</span>
                <span className="text-[11px] text-gray-400 leading-tight hidden sm:block">{p.description}</span>
                {active && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                    ● Actif
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Étape 2 : Sélection ── */}
      <section>
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white text-xs font-black">2</span>
          <h2 className="text-lg font-bold text-gray-900">Choisissez deux véhicules</h2>
        </div>
        <p className="text-sm text-gray-500 ml-9 mb-5">28 modèles disponibles — chinois, européens, coréens.</p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-start">
          <CarSelector selected={carA} onSelect={setCarA} exclude={carB ? [carB.slug] : []} sideLabel="Véhicule A" sideColor="red" />
          <div className="hidden md:flex flex-col items-center gap-2 self-center pt-6">
            <button onClick={() => { setCarA(carB); setCarB(carA); }} disabled={!bothSelected}
              className="rounded-full p-3 bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 disabled:opacity-30 transition-colors">
              <ArrowLeftRight className="h-5 w-5" />
            </button>
            <span className="text-sm font-black text-gray-300">VS</span>
          </div>
          <CarSelector selected={carB} onSelect={setCarB} exclude={carA ? [carA.slug] : []} sideLabel="Véhicule B" sideColor="blue" />
        </div>
      </section>

      {/* ── Résultats ── */}
      {bothSelected ? (
        <>
          {/* ── Étape 3 : Verdict & Scores ── */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white text-xs font-black">3</span>
              <h2 className="text-lg font-bold text-gray-900">
                Résultat pour <span className="text-red-600">{profile.emoji} {profile.label}</span>
              </h2>
            </div>

            {/* Score gauges */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
              <div className="flex flex-col items-center gap-3">
                <p className="text-xs font-bold text-red-600 uppercase tracking-widest">{carA.name}</p>
                <ScoreGauge score={verdict!.scoreA} color="red" isWinner={winnerIsA} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-16 bg-gray-200" />
                <span className="text-xs font-black text-gray-300">VS</span>
                <div className="w-px h-16 bg-gray-200" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{carB.name}</p>
                <ScoreGauge score={verdict!.scoreB} color="blue" isWinner={winnerIsB} />
              </div>
            </div>

            {/* Verdict banner */}
            <div className={`rounded-2xl p-5 mb-8 border ${
              verdict!.winner
                ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300'
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-start gap-3">
                {verdict!.winner ? (
                  <Trophy className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                ) : (
                  <span className="text-xl shrink-0">⚖️</span>
                )}
                <div>
                  <p className="font-bold text-gray-900 mb-1">
                    {verdict!.winner ? `Notre recommandation : ${verdict!.winner.name}` : 'Match nul sur ce profil'}
                  </p>
                  <p className="text-sm text-gray-600">{verdict!.reason}</p>
                </div>
              </div>
            </div>

            {/* Criteria chart */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="grid grid-cols-3 text-xs font-bold mb-4">
                <span className="text-red-600 text-center truncate">{carA.name}</span>
                <span className="text-gray-400 text-center uppercase tracking-wide">Critères {profile.emoji}</span>
                <span className="text-blue-600 text-center truncate">{carB.name}</span>
              </div>
              <CriteriaChart carA={carA} carB={carB} profile={profile} />
            </div>
          </section>

          {/* ── Scores tous profils ── */}
          <section>
            <h3 className="text-base font-bold text-gray-900 mb-4">🏅 Scores sur tous les profils</h3>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 px-5 py-3 bg-gray-50 border-b border-gray-200 text-xs font-bold">
                <span className="text-red-600 text-center truncate">{carA.name}</span>
                <span className="text-gray-400 text-center">Profil</span>
                <span className="text-blue-600 text-center truncate">{carB.name}</span>
              </div>
              {profiles.map((p) => {
                const sA = scoreForProfile(carA, p);
                const sB = scoreForProfile(carB, p);
                const wA = sA > sB + 4;
                const wB = sB > sA + 4;
                return (
                  <button key={p.id} onClick={() => setActiveProfile(p.id)}
                    className={`w-full grid grid-cols-3 items-center px-5 py-3 border-b border-gray-100 last:border-0 transition-colors ${
                      p.id === activeProfile ? 'bg-red-50' : 'hover:bg-gray-50'
                    }`}>
                    <div className="flex items-center justify-end gap-2">
                      <span className={`text-sm font-black ${wA ? 'text-amber-500' : 'text-gray-600'}`}>
                        {wA && '🏆 '}{sA}
                      </span>
                      <div className="w-14 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className={`h-full rounded-full transition-all ${wA ? 'bg-amber-400' : 'bg-red-300'}`} style={{ width: `${sA}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${p.id === activeProfile ? 'bg-red-600 text-white' : 'text-gray-500'}`}>
                        {p.emoji} {p.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-14 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className={`h-full rounded-full transition-all ${wB ? 'bg-amber-400' : 'bg-blue-300'}`} style={{ width: `${sB}%` }} />
                      </div>
                      <span className={`text-sm font-black ${wB ? 'text-amber-500' : 'text-gray-600'}`}>
                        {sB}{wB && ' 🏆'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Étape 4 : Spécifications ── */}
          <section>
            <h3 className="text-base font-bold text-gray-900 mb-4">📋 Spécifications détaillées</h3>

            <div className="bg-gray-50 rounded-2xl p-5 mb-4">
              <div className="grid grid-cols-3 items-center">
                <p className={`text-right text-2xl font-black pr-4 ${carA.price < carB.price ? 'text-green-600' : 'text-gray-900'}`}>
                  {fmt(carA.price)} <span className="text-base font-normal text-gray-400">€</span>
                </p>
                <div className="text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Prix</p>
                  <p className={`text-sm font-bold ${carA.price !== carB.price ? 'text-green-600' : 'text-gray-500'}`}>
                    {carA.price < carB.price ? `A moins cher de ${fmt(carB.price - carA.price)} €` :
                     carA.price > carB.price ? `B moins cher de ${fmt(carA.price - carB.price)} €` : 'Prix identique'}
                  </p>
                </div>
                <p className={`text-left text-2xl font-black pl-4 ${carB.price < carA.price ? 'text-green-600' : 'text-gray-900'}`}>
                  {fmt(carB.price)} <span className="text-base font-normal text-gray-400">€</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 grid grid-cols-3 border-b border-gray-200">
                <p className="text-right text-sm font-bold text-red-600 pr-4 truncate">{carA.name}</p>
                <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-wide">Fiche</p>
                <p className="text-left text-sm font-bold text-blue-600 pl-4 truncate">{carB.name}</p>
              </div>
              <div className="px-4">
                <CompRow label="Puissance" icon={Zap} valA={carA.power} valB={carB.power} unit="ch" />
                <CompRow label="Couple" icon={Gauge} valA={carA.torque} valB={carB.torque} unit="Nm" />
                <CompRow label="0-100 km/h" icon={Timer} valA={carA.acceleration} valB={carB.acceleration} unit="s" lowerIsBetter />
                <CompRow label="Vitesse max" icon={Gauge} valA={carA.topSpeed} valB={carB.topSpeed} unit="km/h" />
                {(carA.autonomy || carB.autonomy) && (
                  <CompRow label="Autonomie WLTP" icon={Battery} valA={carA.autonomy} valB={carB.autonomy} unit="km" />
                )}
                {(carA.batteryCapacity || carB.batteryCapacity) && (
                  <CompRow label="Batterie" icon={Battery} valA={carA.batteryCapacity} valB={carB.batteryCapacity} unit="kWh" />
                )}
                {(carA.chargingSpeed || carB.chargingSpeed) && (
                  <CompRow label="Recharge rapide" icon={Zap} valA={carA.chargingSpeed} valB={carB.chargingSpeed} unit="kW" />
                )}
                <CompRow label="Consommation" icon={Fuel} valA={carA.consumption} valB={carB.consumption} unit={carA.consumptionUnit} lowerIsBetter />
                <CompRow label="CO₂" icon={Minus} valA={carA.co2} valB={carB.co2} unit="g/km" lowerIsBetter />
                <CompRow label="Poids" icon={Weight} valA={carA.weight} valB={carB.weight} unit="kg" lowerIsBetter />
                <CompRow label="Longueur" icon={Ruler} valA={carA.length} valB={carB.length} unit="mm" />
                <CompRow label="Coffre" icon={BaggageClaim} valA={carA.bootSpace} valB={carB.bootSpace} unit="L" />
                {(carA.ncapStars !== undefined || carB.ncapStars !== undefined) && (
                  <CompRow label="Euro NCAP" icon={Shield}
                    valA={carA.ncapStars !== undefined ? `${carA.ncapStars} ★` : undefined}
                    valB={carB.ncapStars !== undefined ? `${carB.ncapStars} ★` : undefined} />
                )}
                <CompRow label="Garantie" icon={Shield} valA={carA.warranty} valB={carB.warranty} />
              </div>
            </div>
          </section>

          {/* ── Points forts / faibles ── */}
          <section>
            <h3 className="text-base font-bold text-gray-900 mb-4">💪 Points forts &amp; faibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {([
                { car: carA, color: 'red', isWin: winnerIsA },
                { car: carB, color: 'blue', isWin: winnerIsB },
              ] as const).map(({ car, color, isWin }) => (
                <div key={car.slug} className={`rounded-2xl border-2 overflow-hidden ${isWin ? 'border-amber-400' : 'border-gray-200'}`}>
                  <div className={`px-5 py-4 border-b flex items-center justify-between ${color === 'red' ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
                    <div>
                      <p className={`text-base font-bold ${color === 'red' ? 'text-red-700' : 'text-blue-700'}`}>
                        {isWin && '🏆 '}{car.name}
                      </p>
                      <p className="text-xs text-gray-500">{car.brand} · {car.origin} · {fmt(car.price)} €</p>
                    </div>
                    {isWin && <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Gagnant</span>}
                  </div>
                  <div className="p-5 space-y-4 bg-white">
                    <div>
                      <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">✅ Points forts</p>
                      <ul className="space-y-1.5">
                        {car.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">⚠️ Points faibles</p>
                      <ul className="space-y-1.5">
                        {car.cons.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                            <Minus className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <Car className="h-14 w-14 mx-auto mb-4 opacity-20" />
          <p className="text-base font-semibold">Sélectionnez deux véhicules pour lancer la comparaison</p>
          <p className="text-sm mt-2 opacity-70">Le score et le trophée s&apos;afficheront selon votre profil</p>
        </div>
      )}
    </div>
  );
}
