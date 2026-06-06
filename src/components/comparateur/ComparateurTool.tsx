'use client';

import { useState, useEffect, useCallback } from 'react';
import { Trophy, ChevronDown, RotateCcw, Zap, Shield, Wrench, Star, TrendingUp, Gauge, Car, Cpu, Heart, Scale } from 'lucide-react';
import {
  type CarModel,
  carsDatabase,
  getBrands,
  getModelsByBrand,
  RATING_LABELS,
  SPEC_LABELS,
} from '@/src/data/cars-database';

const RATING_ICONS: Record<keyof CarModel['ratings'], typeof Trophy> = {
  fiabilite: Wrench,
  robustesse: Shield,
  disponibilitePieces: Car,
  avisUsagers: Star,
  prixRevente: TrendingUp,
  puissanceMoteur: Gauge,
  securite: Shield,
  confort: Heart,
  technologie: Cpu,
  rapportQualitePrix: Scale,
};

function formatPrice(val: number): string {
  return new Intl.NumberFormat('fr-FR').format(val);
}

function AnimatedBar({ value, max, color, delay }: { value: number; max: number; color: string; delay: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth((value / max) * 100), delay);
    return () => clearTimeout(t);
  }, [value, max, delay]);
  return (
    <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function AnimatedNumber({ value, suffix, delay }: { value: number; suffix?: string; delay: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();
      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return <>{display}{suffix}</>;
}

function CircularGauge({ score, color, label, delay }: { score: number; color: string; label: string; delay: number }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setProgress(score), delay);
    return () => clearTimeout(t);
  }, [score, delay]);

  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="12" />
          <circle
            cx="70" cy="70" r={radius} fill="none"
            stroke={color} strokeWidth="12" strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-[1500ms] ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-black text-gray-900">
            <AnimatedNumber value={score} delay={delay} />
          </span>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-600 text-center leading-tight">{label}</span>
    </div>
  );
}

function RadarChart({ car1, car2, color1, color2 }: { car1: CarModel; car2: CarModel; color1: string; color2: string }) {
  const keys: (keyof CarModel['ratings'])[] = [
    'fiabilite', 'robustesse', 'securite', 'technologie', 'confort',
    'puissanceMoteur', 'rapportQualitePrix', 'avisUsagers', 'disponibilitePieces', 'prixRevente',
  ];
  const labels = keys.map((k) => RATING_LABELS[k]);
  const n = keys.length;
  const cx = 200, cy = 200, maxR = 150;

  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  function getPoint(index: number, value: number): [number, number] {
    const angle = (2 * Math.PI * index) / n - Math.PI / 2;
    const r = animated ? (value / 100) * maxR : 0;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  }

  function polygon(car: CarModel): string {
    return keys.map((k, i) => getPoint(i, car.ratings[k]).join(',')).join(' ');
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <svg viewBox="0 0 400 400" className="w-full">
        {[20, 40, 60, 80, 100].map((level) => (
          <polygon
            key={level}
            points={Array.from({ length: n }, (_, i) => {
              const angle = (2 * Math.PI * i) / n - Math.PI / 2;
              const r = (level / 100) * maxR;
              return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
            }).join(' ')}
            fill="none" stroke="#e5e7eb" strokeWidth="1"
          />
        ))}
        {keys.map((_, i) => {
          const angle = (2 * Math.PI * i) / n - Math.PI / 2;
          return (
            <line key={i} x1={cx} y1={cy} x2={cx + maxR * Math.cos(angle)} y2={cy + maxR * Math.sin(angle)} stroke="#e5e7eb" strokeWidth="1" />
          );
        })}
        <polygon
          points={polygon(car1)}
          fill={`${color1}33`} stroke={color1} strokeWidth="2.5"
          className="transition-all duration-[1200ms] ease-out"
        />
        <polygon
          points={polygon(car2)}
          fill={`${color2}33`} stroke={color2} strokeWidth="2.5"
          className="transition-all duration-[1200ms] ease-out"
        />
        {labels.map((label, i) => {
          const angle = (2 * Math.PI * i) / n - Math.PI / 2;
          const r = maxR + 28;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          const short = label.length > 12 ? label.slice(0, 11) + '.' : label;
          return (
            <text
              key={i} x={x} y={y}
              textAnchor="middle" dominantBaseline="central"
              className="fill-gray-600 text-[11px] font-medium"
            >
              {short}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function BattleBar({
  label, icon: Icon, val1, val2, color1, color2, delay,
}: {
  label: string; icon: typeof Trophy; val1: number; val2: number; color1: string; color2: string; delay: number;
}) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const max = Math.max(val1, val2);
  const w1 = animated ? (val1 / 100) * 100 : 0;
  const w2 = animated ? (val2 / 100) * 100 : 0;
  const winner = val1 > val2 ? 1 : val2 > val1 ? 2 : 0;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-semibold text-gray-700">{label}</span>
        </div>
        {winner > 0 && (
          <Trophy className={`w-4 h-4 ${winner === 1 ? 'text-red-500' : 'text-blue-500'}`} />
        )}
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-sm font-bold w-8 text-right ${winner === 1 ? 'text-red-600' : 'text-gray-500'}`}>{val1}</span>
        <div className="flex-1 flex h-4 rounded-full overflow-hidden bg-gray-100 gap-0.5">
          <div className="flex-1 flex justify-end">
            <div
              className={`h-full rounded-l-full transition-all duration-1000 ease-out ${winner === 1 ? 'bg-red-500' : 'bg-red-300'}`}
              style={{ width: `${w1}%` }}
            />
          </div>
          <div className="flex-1 flex justify-start">
            <div
              className={`h-full rounded-r-full transition-all duration-1000 ease-out ${winner === 2 ? 'bg-blue-500' : 'bg-blue-300'}`}
              style={{ width: `${w2}%` }}
            />
          </div>
        </div>
        <span className={`text-sm font-bold w-8 ${winner === 2 ? 'text-blue-600' : 'text-gray-500'}`}>{val2}</span>
      </div>
    </div>
  );
}

function CarSelector({
  label, color, selectedBrand, selectedModel, onBrandChange, onModelChange,
}: {
  label: string; color: string; selectedBrand: string; selectedModel: string;
  onBrandChange: (b: string) => void; onModelChange: (m: string) => void;
}) {
  const brands = getBrands();
  const models = selectedBrand ? getModelsByBrand(selectedBrand) : [];
  const car = carsDatabase.find((c) => c.id === selectedModel);

  return (
    <div className={`relative flex-1 rounded-2xl border-2 p-6 transition-all duration-300 ${car ? `border-current shadow-lg` : 'border-gray-200 bg-white'}`} style={car ? { borderColor: color } : {}}>
      <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color }}>{label}</div>

      <div className="space-y-3">
        <div className="relative">
          <select
            value={selectedBrand}
            onChange={(e) => { onBrandChange(e.target.value); onModelChange(''); }}
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-gray-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
          >
            <option value="">Choisir la marque</option>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={selectedModel}
            onChange={(e) => onModelChange(e.target.value)}
            disabled={!selectedBrand}
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-gray-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 disabled:bg-gray-50 disabled:text-gray-400"
          >
            <option value="">Choisir le modèle</option>
            {models.map((m) => <option key={m.id} value={m.id}>{m.model} ({m.year})</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {car && (
        <div className="mt-5 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Car className="w-5 h-5" style={{ color }} />
            <h3 className="text-lg font-bold text-gray-900">{car.brand} {car.model}</h3>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
            <span className="rounded-full bg-gray-100 px-2.5 py-1">{car.segment}</span>
            <span className="rounded-full bg-gray-100 px-2.5 py-1">{car.engine}</span>
            <span className="rounded-full bg-gray-100 px-2.5 py-1">{car.year}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function SpecRow({ label, unit, val1, val2, higherIsBetter }: { label: string; unit: string; val1: number | null; val2: number | null; higherIsBetter: boolean }) {
  const fmt = (v: number | null) => v === null ? '—' : unit === 'MAD' ? formatPrice(v) : v.toLocaleString('fr-FR');
  const winner = val1 == null || val2 == null ? 0
    : higherIsBetter ? (val1 > val2 ? 1 : val2 > val1 ? 2 : 0)
    : (val1 < val2 ? 1 : val2 < val1 ? 2 : 0);

  return (
    <div className="grid grid-cols-3 items-center py-3 border-b border-gray-100 last:border-0">
      <div className={`text-sm text-right pr-4 font-semibold ${winner === 1 ? 'text-red-600' : 'text-gray-700'}`}>
        {fmt(val1)} {unit !== 'MAD' && val1 !== null ? unit : ''}
        {unit === 'MAD' && val1 !== null ? <span className="text-xs text-gray-400 ml-1">MAD</span> : ''}
      </div>
      <div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</div>
      <div className={`text-sm pl-4 font-semibold ${winner === 2 ? 'text-blue-600' : 'text-gray-700'}`}>
        {fmt(val2)} {unit !== 'MAD' && val2 !== null ? unit : ''}
        {unit === 'MAD' && val2 !== null ? <span className="text-xs text-gray-400 ml-1">MAD</span> : ''}
      </div>
    </div>
  );
}

function Verdict({ car1, car2 }: { car1: CarModel; car2: CarModel }) {
  const avg = (car: CarModel) => {
    const vals = Object.values(car.ratings);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  };
  const s1 = avg(car1);
  const s2 = avg(car2);
  const winner = s1 > s2 ? car1 : s2 > s1 ? car2 : null;
  const loser = winner === car1 ? car2 : car1;
  const diff = Math.abs(s1 - s2);

  const ratingKeys = Object.keys(car1.ratings) as (keyof CarModel['ratings'])[];
  const strengths = (car: CarModel, other: CarModel) =>
    ratingKeys
      .filter((k) => car.ratings[k] > other.ratings[k])
      .sort((a, b) => (car.ratings[b] - other.ratings[b]) - (car.ratings[a] - other.ratings[a]))
      .slice(0, 3)
      .map((k) => RATING_LABELS[k]);

  return (
    <div className="mt-12 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-10 text-white">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Trophy className="w-7 h-7 text-yellow-400" />
        <h3 className="text-2xl font-black">Verdict final</h3>
      </div>

      {winner ? (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-2">Notre recommandation :</p>
            <p className="text-3xl font-black text-yellow-400">
              {winner.brand} {winner.model}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Score global : {Math.round(avg(winner))}/100 vs {Math.round(avg(loser))}/100
              {diff < 3 && ' — résultat très serré !'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-sm font-bold text-red-400 mb-3">
                Points forts {car1.brand} {car1.model}
              </p>
              <ul className="space-y-2">
                {strengths(car1, car2).map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-3.5 h-3.5 text-red-400 shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-sm font-bold text-blue-400 mb-3">
                Points forts {car2.brand} {car2.model}
              </p>
              <ul className="space-y-2">
                {strengths(car2, car1).map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-white/10">
            {diff >= 5 ? (
              <p className="text-sm text-gray-300">
                Le <strong className="text-white">{winner.brand} {winner.model}</strong> l&apos;emporte clairement sur la majorité des critères.
                {winner.specs.prix < loser.specs.prix
                  ? ' Et il est moins cher !'
                  : ` Malgré un prix supérieur de ${formatPrice(winner.specs.prix - loser.specs.prix)} MAD, ses qualités justifient l'investissement.`}
              </p>
            ) : (
              <p className="text-sm text-gray-300">
                Les deux véhicules sont très proches. Votre choix dépendra de vos priorités :
                le <strong className="text-red-400">{car1.brand} {car1.model}</strong> si vous privilégiez {strengths(car1, car2)[0]?.toLowerCase()},
                le <strong className="text-blue-400">{car2.brand} {car2.model}</strong> si vous préférez {strengths(car2, car1)[0]?.toLowerCase()}.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-300">
          Match nul parfait ! Les deux véhicules obtiennent exactement le même score.
          Votre choix se fera sur vos préférences personnelles.
        </p>
      )}
    </div>
  );
}

export default function ComparateurTool() {
  const [brand1, setBrand1] = useState('');
  const [brand2, setBrand2] = useState('');
  const [model1, setModel1] = useState('');
  const [model2, setModel2] = useState('');
  const [showResults, setShowResults] = useState(false);

  const car1 = carsDatabase.find((c) => c.id === model1);
  const car2 = carsDatabase.find((c) => c.id === model2);
  const ready = !!car1 && !!car2;

  const compare = useCallback(() => {
    if (ready) {
      setShowResults(false);
      setTimeout(() => setShowResults(true), 50);
    }
  }, [ready]);

  const reset = () => {
    setBrand1(''); setBrand2(''); setModel1(''); setModel2('');
    setShowResults(false);
  };

  const avg = (car: CarModel) => {
    const vals = Object.values(car.ratings);
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  };

  const ratingKeys = Object.keys(RATING_LABELS) as (keyof CarModel['ratings'])[];
  const specKeys = Object.keys(SPEC_LABELS) as (keyof CarModel['specs'])[];
  const COLOR1 = '#ef4444';
  const COLOR2 = '#3b82f6';

  return (
    <div>
      {/* ── Sélection ── */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <CarSelector label="Voiture A" color={COLOR1} selectedBrand={brand1} selectedModel={model1} onBrandChange={setBrand1} onModelChange={setModel1} />
        <div className="flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white font-black text-lg shadow-xl">
            VS
          </div>
        </div>
        <CarSelector label="Voiture B" color={COLOR2} selectedBrand={brand2} selectedModel={model2} onBrandChange={setBrand2} onModelChange={setModel2} />
      </div>

      {/* ── Boutons ── */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={compare}
          disabled={!ready}
          className="group relative inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
        >
          <Zap className="w-5 h-5" />
          Lancer la comparaison
          {ready && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-ping" />
          )}
        </button>
        {showResults && (
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Réinitialiser
          </button>
        )}
      </div>

      {/* ── Résultats ── */}
      {showResults && car1 && car2 && (
        <div className="mt-12 space-y-12 animate-fade-in">
          {/* Header VS */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-2 mx-auto">
                <Car className="w-10 h-10 text-red-500" />
              </div>
              <p className="text-base font-black text-gray-900">{car1.brand}</p>
              <p className="text-sm text-gray-500">{car1.model}</p>
            </div>
            <div className="text-3xl font-black text-gray-300">VS</div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-2 mx-auto">
                <Car className="w-10 h-10 text-blue-500" />
              </div>
              <p className="text-base font-black text-gray-900">{car2.brand}</p>
              <p className="text-sm text-gray-500">{car2.model}</p>
            </div>
          </div>

          {/* Score global */}
          <section>
            <h2 className="text-xl font-black text-gray-900 text-center mb-8">Score global</h2>
            <div className="flex items-center justify-center gap-8 md:gap-16">
              <CircularGauge score={avg(car1)} color={COLOR1} label={`${car1.brand} ${car1.model}`} delay={100} />
              <CircularGauge score={avg(car2)} color={COLOR2} label={`${car2.brand} ${car2.model}`} delay={300} />
            </div>
          </section>

          {/* Radar */}
          <section>
            <h2 className="text-xl font-black text-gray-900 text-center mb-2">Vue d&apos;ensemble</h2>
            <p className="text-sm text-gray-500 text-center mb-6">10 critères comparés simultanément</p>
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" /><span className="text-xs font-medium text-gray-600">{car1.brand} {car1.model}</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-xs font-medium text-gray-600">{car2.brand} {car2.model}</span></div>
            </div>
            <RadarChart car1={car1} car2={car2} color1={COLOR1} color2={COLOR2} />
          </section>

          {/* Battle bars */}
          <section>
            <h2 className="text-xl font-black text-gray-900 text-center mb-8">Détail par critère</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {ratingKeys.map((key, i) => (
                <BattleBar
                  key={key}
                  label={RATING_LABELS[key]}
                  icon={RATING_ICONS[key]}
                  val1={car1.ratings[key]}
                  val2={car2.ratings[key]}
                  color1={COLOR1}
                  color2={COLOR2}
                  delay={100 + i * 80}
                />
              ))}
            </div>
          </section>

          {/* Fiche technique */}
          <section>
            <h2 className="text-xl font-black text-gray-900 text-center mb-8">Fiche technique</h2>
            <div className="max-w-2xl mx-auto rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 py-3 px-4 bg-gray-50 border-b border-gray-100">
                <div className="text-right pr-4 text-xs font-bold text-red-600 uppercase">{car1.brand} {car1.model}</div>
                <div className="text-center text-xs font-bold text-gray-400 uppercase">Spec</div>
                <div className="pl-4 text-xs font-bold text-blue-600 uppercase">{car2.brand} {car2.model}</div>
              </div>
              <div className="px-4">
                {specKeys.map((key) => {
                  const info = SPEC_LABELS[key];
                  const v1 = car1.specs[key];
                  const v2 = car2.specs[key];
                  if (key === 'autonomie' && v1 === null && v2 === null) return null;
                  if (key === 'consommation' && v1 === 0 && v2 === 0) return null;
                  return (
                    <SpecRow
                      key={key}
                      label={info.label}
                      unit={info.unit}
                      val1={v1}
                      val2={v2}
                      higherIsBetter={info.higherIsBetter}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* Verdict */}
          <Verdict car1={car1} car2={car2} />
        </div>
      )}
    </div>
  );
}
