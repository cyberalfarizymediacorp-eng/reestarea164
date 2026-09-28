import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/mockData';
import { 
  Truck, 
  Layers, 
  Zap, 
  Cpu, 
  PackageCheck, 
  Recycle, 
  ArrowRight, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Flame,
  Award
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  PackageCheck: <PackageCheck className="w-5 h-5" />,
  Recycle: <Recycle className="w-5 h-5" />
};

export const WorkflowSection: React.FC<{ onSelectProduct: (productId: string) => void }> = ({ onSelectProduct }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  return (
    <section id="alur" className="py-16 sm:py-20 bg-white border-b-2 border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/10 text-emerald-800 text-xs font-black uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Rahasia Formula Kualitas Higienis</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase font-display">
            RAHASIA DAPUR BIOKONVERSI KM 164B
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-medium">
            Bagaimana 1,5 ton sisa hidangan lezat pemudik Tol Cipali disulap menjadi pakan sang juara dan pupuk organik emas hitam melalui 6 tahapan higienis terstandarisasi.
          </p>
        </div>

        {/* Stepper Progress Tabs in Leaf Green */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-2 bg-stone-100 rounded-2xl mb-8 border border-stone-200">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.code}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl text-center transition-all ${
                  isActive
                    ? 'bg-emerald-800 text-white font-black shadow-md scale-102'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70 font-bold'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-black ${
                    isActive ? 'bg-white text-emerald-800' : 'bg-stone-300 text-stone-700'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className="truncate uppercase text-[11px] tracking-wider">Tahap {step.stepNumber}</span>
                </div>
                <span className="text-[10px] truncate w-full mt-1 opacity-90 hidden md:block">
                  {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-stone-50 rounded-3xl border-2 border-stone-200 shadow-md p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stage Left: Description and Key Data */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-xs font-mono font-black bg-emerald-800 text-white rounded-lg uppercase tracking-wider">
                  {activeStep.code}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-stone-600 font-bold">
                  <Clock className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{activeStep.duration}</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-stone-600 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{activeStep.location}</span>
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase font-display">
                  {activeStep.stepNumber}. {activeStep.title}
                </h3>
                <p className="text-sm font-bold text-emerald-800">
                  {activeStep.subtitle}
                </p>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-pretty pt-1">
                  {activeStep.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-black text-stone-900 uppercase tracking-wider font-mono">
                  SOP & Standar Kualitas Dapur:
                </p>
                <div className="space-y-2">
                  {activeStep.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environmental Benefit Banner */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Dampak Nyata bagi Lingkungan Tol Cipali:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                  {activeStep.ecoBenefit}
                </p>
              </div>
            </div>

            {/* Stage Right: Input vs Output Schema Box */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border-2 border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-xs font-black tracking-wider uppercase text-stone-900 font-mono">
                  Bagan Transformasi Produk
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  QC Teruji
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
                  <span className="text-[11px] font-black text-stone-500 uppercase tracking-wider font-mono">
                    Bahan Masukan (Input):
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {activeStep.input}
                  </p>
                </div>

                <div className="flex justify-center text-emerald-800">
                  <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                </div>

                <div className="bg-emerald-50/80 p-4 rounded-xl border-2 border-emerald-200 space-y-1">
                  <span className="text-[11px] font-black text-emerald-800 uppercase tracking-wider font-mono">
                    Hasil Luaran (Output Unggulan):
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {activeStep.output}
                  </p>
                </div>
              </div>

              {/* Action buttons inside workflow card */}
              <div className="pt-2">
                {activeStep.stepNumber >= 5 ? (
                  <div className="space-y-2.5">
                    <p className="text-xs text-stone-600 font-bold uppercase">Menu yang dihasilkan tahap ini:</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => onSelectProduct('poc')}
                        className="px-3 py-2 text-xs font-black uppercase tracking-wider bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 transition-colors shadow-xs"
                      >
                        POC Booster (Rp 15.000)
                      </button>
                      <button
                        onClick={() => onSelectProduct('kasgot')}
                        className="px-3 py-2 text-xs font-black uppercase tracking-wider bg-stone-900 text-white rounded-xl hover:bg-black transition-colors shadow-xs"
                      >
                        Kasgot Emas Hitam (Rp 15.000)
                      </button>
                      <button
                        onClick={() => onSelectProduct('maggot-kering')}
                        className="px-3 py-2 text-xs font-black uppercase tracking-wider bg-lime-400 text-stone-900 rounded-xl hover:bg-lime-500 transition-colors shadow-xs"
                      >
                        Maggot Kering (Rp 10.000)
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
                    className="w-full flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl transition-colors"
                  >
                    <span>Lanjut ke Tahap {activeStep.stepNumber + 1}</span>
                    <ChevronRight className="w-4 h-4 text-emerald-800" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Overview Bento Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black tracking-wider uppercase text-stone-800 font-mono">
              Ringkasan 6 Tahapan Pengolahan Terpadu
            </h3>
            <span className="text-xs text-emerald-800 font-bold">Pilih kartu untuk melihat detail</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <div
                  key={step.code}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'bg-white border-emerald-800 shadow-md ring-2 ring-emerald-800/20'
                      : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-white bg-emerald-800 px-2.5 py-0.5 rounded-lg">
                      {step.code}
                    </span>
                    <span className="text-emerald-800">
                      {iconMap[step.icon]}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-stone-900 uppercase font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-bold">
                    <span>{step.duration}</span>
                    <span className="text-emerald-800">Buka Detail →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
