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
  ChevronDown,
  X,
  Plus,
  Check,
  Minus,
  Fuel,
  BaggageClaim,
} from 'lucide-react';
import { cars, segments, brands, type CarSpec } from '@/src/data/cars';

function fmt(n: number) {
  return new Intl.NumberFormat('fr-FR').format(n);
}

function CarSelector({
  selected,
  onSelect,
  exclude,
}: {
  selected: CarSpec | null;
  onSelect: (car: CarSpec) => void;
  exclude: string[];
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
        return (
          c.name.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, filterSegment, exclude]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col items-center justify-center w-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-2xl hover:border-red-500 hover:bg-red-50/50 transition-all group"
      >
        {selected ? (
          <>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 400px, 100vw"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-medium text-red-600 uppercase">{selected.brand}</p>
              <p className="text-lg font-bold text-gray-900">{selected.name}</p>
              <p className="text-sm text-gray-500 mt-1">{fmt(selected.price)} €</p>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-red-500">
                Cliquer pour changer
              </p>
            </div>
          </>
        ) : (
          <>
            <Plus className="h-10 w-10 text-gray-400 group-hover:text-red-500 transition-colors" />
            <p className="mt-3 text-sm font-medium text-gray-500 group-hover:text-red-600">
              Choisir un véhicule
            </p>
          </>
        )}
      </button>
    );
  }

  return (
    <div className="border-2 border-red-500 rounded-2xl bg-white shadow-xl overflow-hidden">
      <div className="p-3 border-b border-gray-100 flex gap-2">
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
          autoFocus
        />
        <button
          onClick={() => setOpen(false)}
          className="rounded-lg p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="px-3 py-2 flex gap-1 flex-wrap border-b border-gray-100">
        <button
          onClick={() => setFilterSegment('')}
          className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
            !filterSegment ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Tous
        </button>
        {segments.map((s) => (
          <button
            key={s}
            onClick={() => setFilterSegment(s === filterSegment ? '' : s)}
            className={`px-2 py-1 rounded-full text-xs font-medium capitalize transition-colors ${
              filterSegment === s ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="max-h-[320px] overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">Aucun véhicule trouvé</p>
        ) : (
          filtered.map((car) => (
            <button
              key={car.slug}
              onClick={() => {
                onSelect(car);
                setOpen(false);
                setSearch('');
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left border-b border-gray-50 last:border-0"
            >
              <div className="relative h-12 w-16 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{car.name}</p>
                <p className="text-xs text-gray-500">
                  {car.segment} · {car.origin} · {fmt(car.price)} €
                </p>
              </div>
              <span
                className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  car.origin === 'chinoise'
                    ? 'bg-red-100 text-red-700'
                    : car.origin === 'européenne'
                    ? 'bg-blue-100 text-blue-700'
                    : car.origin === 'coréenne'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-purple-100 text-purple-700'
                }`}
              >
                {car.origin}
              </span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

function CompRow({
  label,
  icon: Icon,
  valA,
  valB,
  unit,
  lowerIsBetter = false,
}: {
  label: string;
  icon: React.ElementType;
  valA: number | string | undefined;
  valB: number | string | undefined;
  unit?: string;
  lowerIsBetter?: boolean;
}) {
  const a = typeof valA === 'number' ? valA : undefined;
  const b = typeof valB === 'number' ? valB : undefined;
  let winnerA = false;
  let winnerB = false;
  if (a !== undefined && b !== undefined && a !== b) {
    if (lowerIsBetter) {
      winnerA = a < b;
      winnerB = b < a;
    } else {
      winnerA = a > b;
      winnerB = b > a;
    }
  }

  function formatVal(v: number | string | undefined) {
    if (v === undefined) return '—';
    if (typeof v === 'string') return v;
    return fmt(v);
  }

  return (
    <div className="grid grid-cols-3 items-center py-3 border-b border-gray-100 last:border-0">
      <div
        className={`text-right text-sm font-semibold pr-4 ${
          winnerA ? 'text-green-600' : 'text-gray-900'
        }`}
      >
        {formatVal(valA)}
        {unit && valA !== undefined && <span className="text-xs text-gray-400 ml-1">{unit}</span>}
        {winnerA && <Check className="inline h-3.5 w-3.5 ml-1 text-green-500" />}
      </div>
      <div className="flex flex-col items-center text-center">
        <Icon className="h-4 w-4 text-gray-400 mb-1" />
        <span className="text-xs text-gray-500 font-medium">{label}</span>
      </div>
      <div
        className={`text-left text-sm font-semibold pl-4 ${
          winnerB ? 'text-green-600' : 'text-gray-900'
        }`}
      >
        {winnerB && <Check className="inline h-3.5 w-3.5 mr-1 text-green-500" />}
        {formatVal(valB)}
        {unit && valB !== undefined && <span className="text-xs text-gray-400 ml-1">{unit}</span>}
      </div>
    </div>
  );
}

export default function ComparateurTool() {
  const [carA, setCarA] = useState<CarSpec | null>(null);
  const [carB, setCarB] = useState<CarSpec | null>(null);

  function swap() {
    setCarA(carB);
    setCarB(carA);
  }

  const excludeA = carB ? [carB.slug] : [];
  const excludeB = carA ? [carA.slug] : [];

  const bothSelected = carA && carB;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-start">
        <CarSelector selected={carA} onSelect={setCarA} exclude={excludeA} />
        <button
          onClick={swap}
          disabled={!bothSelected}
          className="hidden md:flex self-center rounded-full p-3 bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600 disabled:opacity-30 transition-colors"
          aria-label="Inverser"
        >
          <ArrowLeftRight className="h-5 w-5" />
        </button>
        <CarSelector selected={carB} onSelect={setCarB} exclude={excludeB} />
      </div>

      {bothSelected && (
        <div className="mt-10">
          {/* Price bar */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4 text-center">
              Prix
            </h3>
            <div className="grid grid-cols-3 items-center">
              <p className="text-right text-2xl font-bold text-gray-900 pr-4">
                {fmt(carA.price)} <span className="text-base text-gray-400">€</span>
              </p>
              <div className="text-center">
                <p
                  className={`text-sm font-bold ${
                    carA.price < carB.price
                      ? 'text-green-600'
                      : carA.price > carB.price
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  {carA.price < carB.price
                    ? `−${fmt(carB.price - carA.price)} €`
                    : carA.price > carB.price
                    ? `+${fmt(carA.price - carB.price)} €`
                    : 'Même prix'}
                </p>
              </div>
              <p className="text-left text-2xl font-bold text-gray-900 pl-4">
                {fmt(carB.price)} <span className="text-base text-gray-400">€</span>
              </p>
            </div>
          </div>

          {/* Specs table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 grid grid-cols-3 border-b border-gray-200">
              <p className="text-right text-sm font-bold text-gray-700 pr-4">{carA.name}</p>
              <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-wide">
                Spécifications
              </p>
              <p className="text-left text-sm font-bold text-gray-700 pl-4">{carB.name}</p>
            </div>

            <div className="px-4">
              <CompRow label="Puissance" icon={Zap} valA={carA.power} valB={carB.power} unit="ch" />
              <CompRow label="Couple" icon={Gauge} valA={carA.torque} valB={carB.torque} unit="Nm" />
              <CompRow
                label="0-100 km/h"
                icon={Timer}
                valA={carA.acceleration}
                valB={carB.acceleration}
                unit="s"
                lowerIsBetter
              />
              <CompRow
                label="Vitesse max"
                icon={Gauge}
                valA={carA.topSpeed}
                valB={carB.topSpeed}
                unit="km/h"
              />
              {(carA.autonomy || carB.autonomy) && (
                <CompRow
                  label="Autonomie WLTP"
                  icon={Battery}
                  valA={carA.autonomy}
                  valB={carB.autonomy}
                  unit="km"
                />
              )}
              {(carA.batteryCapacity || carB.batteryCapacity) && (
                <CompRow
                  label="Batterie"
                  icon={Battery}
                  valA={carA.batteryCapacity}
                  valB={carB.batteryCapacity}
                  unit="kWh"
                />
              )}
              {(carA.chargingSpeed || carB.chargingSpeed) && (
                <CompRow
                  label="Recharge rapide"
                  icon={Zap}
                  valA={carA.chargingSpeed}
                  valB={carB.chargingSpeed}
                  unit="kW"
                />
              )}
              <CompRow
                label="Consommation"
                icon={Fuel}
                valA={carA.consumption}
                valB={carB.consumption}
                unit={carA.consumptionUnit}
                lowerIsBetter
              />
              <CompRow
                label="CO₂"
                icon={Minus}
                valA={carA.co2}
                valB={carB.co2}
                unit="g/km"
                lowerIsBetter
              />
              <CompRow
                label="Poids"
                icon={Weight}
                valA={carA.weight}
                valB={carB.weight}
                unit="kg"
                lowerIsBetter
              />
              <CompRow
                label="Longueur"
                icon={Ruler}
                valA={carA.length}
                valB={carB.length}
                unit="mm"
              />
              <CompRow
                label="Coffre"
                icon={BaggageClaim}
                valA={carA.bootSpace}
                valB={carB.bootSpace}
                unit="L"
              />
              {(carA.ncapStars !== undefined || carB.ncapStars !== undefined) && (
                <CompRow
                  label="Euro NCAP"
                  icon={Shield}
                  valA={carA.ncapStars !== undefined ? `${carA.ncapStars} ★` : undefined}
                  valB={carB.ncapStars !== undefined ? `${carB.ncapStars} ★` : undefined}
                />
              )}
              <CompRow
                label="Garantie"
                icon={Shield}
                valA={carA.warranty}
                valB={carB.warranty}
              />
            </div>
          </div>

          {/* Pros / Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[carA, carB].map((car) => (
              <div key={car.slug} className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-bold text-gray-900">{car.name}</p>
                  <p className="text-xs text-gray-500">{car.brand} · {car.origin}</p>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">
                      Points forts
                    </p>
                    <ul className="space-y-1">
                      {car.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">
                      Points faibles
                    </p>
                    <ul className="space-y-1">
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
        </div>
      )}
    </div>
  );
}
