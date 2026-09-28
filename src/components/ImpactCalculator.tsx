import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const ImpactCalculator: React.FC = () => {
  const [wasteKg, setWasteKg] = useState<number>(50);

  // Conversion calculations based on real BSF bioconversion ratios
  const freshMaggotKg = Math.round(wasteKg * 0.22 * 10) / 10;
  const driedMaggotKg = Math.round(freshMaggotKg * 0.32 * 10) / 10;
  const kasgotKg = Math.round(wasteKg * 0.28 * 10) / 10;
  const pocLiters = Math.round(wasteKg * 0.18 * 10) / 10;
  const co2ReducedKg = Math.round(wasteKg * 2.5 * 10) / 10;
  const estimatedEconomicValue = Math.round((kasgotKg * 15000) + (pocLiters * 15000) + (driedMaggotKg * 100000));

  return (
    <section id="kalkulator" className="py-16 sm:py-20 bg-white border-b-2 border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Calculator Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/10 text-emerald-800 text-xs font-black uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulasi Nilai Olahan Sampah</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase font-display leading-[1.1] text-balance">
              HITUNG KEAJAIBAN ORGANIK ANDA!
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-medium leading-relaxed">
              Berapa banyak pakan sang juara dan pupuk organik emas hitam yang dapat diciptakan dari sisa hidangan lezat Anda? Geser penentu di bawah ini untuk melihat hasil panen instan!
            </p>

            {/* Interactive Slider Box */}
            <div className="p-6 bg-stone-50 rounded-3xl border-2 border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <label htmlFor="waste-slider" className="text-xs font-black uppercase tracking-wider text-stone-800 font-mono">
                  Jumlah Sisa Makanan Organik:
                </label>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-800 tabular-nums">
                    {wasteKg}
                  </span>
                  <span className="text-xs font-bold text-stone-600 ml-1 uppercase">Kg Sisa Makanan</span>
                </div>
              </div>

              <input
                id="waste-slider"
                type="range"
                min="5"
                max="500"
                step="5"
                value={wasteKg}
                onChange={(e) => setWasteKg(Number(e.target.value))}
                className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />

              <div className="flex justify-between text-[11px] font-mono font-bold text-stone-400">
                <span>5 Kg (Rumah Tangga)</span>
                <span>250 Kg</span>
                <span>500 Kg (Tenant Kuliner)</span>
              </div>
            </div>

            <div className="p-4.5 bg-emerald-50/70 rounded-2xl border-2 border-emerald-200 flex items-start gap-3">
              <Flame className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5 fill-current" />
              <p className="text-xs text-stone-800 leading-relaxed font-medium">
                Di <strong>Rest Area KM 164B Tol Cipali</strong>, pengolahan mandiri <strong>1.500 Kg sampah per hari</strong> sukses mencegah lebih dari <strong>3.750 Kg emisi karbon</strong> dari udara bebas dan memproduksi ribuan produk organik bermutu tinggi setiap bulannya!
              </p>
            </div>
          </div>

          {/* Right Column: Calculated Impact Metrics Output */}
          <div className="lg:col-span-6 bg-stone-900 text-white rounded-3xl p-6 sm:p-9 space-y-6 shadow-2xl border-4 border-emerald-800">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <span className="text-xs font-mono font-black tracking-wider uppercase text-lime-300">
                HASIL PANEN DARI {wasteKg} KG SAMPAH:
              </span>
              <span className="text-xs text-white font-mono font-black bg-emerald-800 px-3 py-1 rounded-lg uppercase tracking-wider">
                100% Zero-Waste
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-stone-800/90 border border-stone-700">
                <span className="text-xs text-stone-300 font-bold uppercase">Pupuk Kasgot Padat</span>
                <p className="text-2xl sm:text-3xl font-black font-display text-white mt-1 tabular-nums">
                  {kasgotKg} <span className="text-xs font-bold text-stone-400">Kg</span>
                </p>
                <p className="text-[11px] text-stone-400 mt-1">Pupuk gembur kaya hara</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-800/90 border border-stone-700">
                <span className="text-xs text-stone-300 font-bold uppercase">Pupuk Organik Cair</span>
                <p className="text-2xl sm:text-3xl font-black font-display text-lime-300 mt-1 tabular-nums">
                  {pocLiters} <span className="text-xs font-bold text-stone-400">Liter</span>
                </p>
                <p className="text-[11px] text-stone-400 mt-1">Konsentrat booster daun</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-800/90 border border-stone-700">
                <span className="text-xs text-stone-300 font-bold uppercase">Maggot Super Protein</span>
                <p className="text-2xl sm:text-3xl font-black font-display text-emerald-400 mt-1 tabular-nums">
                  {driedMaggotKg} <span className="text-xs font-bold text-stone-400">Kg</span>
                </p>
                <p className="text-[11px] text-stone-400 mt-1">Pakan protein tinggi 42%</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-800/90 border border-stone-700">
                <span className="text-xs text-stone-300 font-bold uppercase">Emisi CO2e Dicegah</span>
                <p className="text-2xl sm:text-3xl font-black font-display text-emerald-300 mt-1 tabular-nums">
                  {co2ReducedKg} <span className="text-xs font-bold text-stone-400">Kg</span>
                </p>
                <p className="text-[11px] text-stone-400 mt-1">Langit jalan tol tetap bersih</p>
              </div>
            </div>

            {/* Estimated Value */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-stone-900 border-2 border-emerald-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-lime-300 font-bold uppercase">Estimasi Nilai Manfaat Ekonomi:</span>
                <p className="text-2xl sm:text-3xl font-black font-display text-white mt-0.5 tabular-nums">
                  Rp {estimatedEconomicValue.toLocaleString('id-ID')}
                </p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Halo Admin Rest Area KM 164B Cipali, saya baru saja mencoba kalkulator dampak sampah (${wasteKg} kg). Tertarik ingin berkonsultasi dan memesan menu produk olahan.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-black uppercase tracking-wider text-stone-900 bg-lime-400 hover:bg-lime-500 rounded-xl transition-all whitespace-nowrap shadow-md text-center active:scale-95"
              >
                Konsultasi WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
