import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Flame, 
  Award, 
  Car, 
  Tag, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Truck
} from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/mockData';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreWorkflow: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onExploreWorkflow
}) => {
  const [activePromoTab, setActivePromoTab] = useState<'combo' | 'drivethru' | 'quality'>('combo');

  const handleDirectWa = () => {
    const message = encodeURIComponent(
      'Halo Admin Rest Area KM 164B Tol Cipali, saya ingin memesan menu produk sirkular (Paket Kombo / Pupuk Kasgot / POC / Maggot Kering).'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-stone-100 border-b-4 border-emerald-800">
      {/* Top Graphic Accent - Leaf Green Stripes Ribbon */}
      <div className="h-2 w-full kfc-stripes" />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Slogan Tag in Leaf Green */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800 text-white text-xs font-black uppercase tracking-wider shadow-sm">
              <Flame className="w-4 h-4 text-lime-300 fill-current animate-pulse" />
              <span>JAGONYA ORGANIK TOL CIPALI</span>
              <span className="text-white/40">|</span>
              <span className="text-lime-200">REST AREA KM 164B</span>
            </div>

            {/* Giant Bold Headline in Leaf Green Tone */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-black text-stone-900 tracking-tight uppercase font-display leading-[1.05] text-balance">
              SUPER BESAR!{' '}
              <span className="text-emerald-800 drop-shadow-xs">
                100% ORGANIK,
              </span>{' '}
              HASIL NYATA BUAT TANAMAN & TERNAK
            </h1>

            {/* Energetic Subtitle */}
            <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed max-w-2xl text-pretty">
              Dari meja makan ribuan pemudik Tol Cipali disulap menjadi pakan sang juara dan penyubur tanah no. 1 di Indonesia. Nikmati menu andalan: <strong>Kombo Super Tani Rp 25.000</strong>
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Lihat Seluruh Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleDirectWa}
                className="px-5 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-50 border-2 border-stone-300 hover:border-emerald-700 rounded-xl transition-all flex items-center gap-2 shadow-xs active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-800" />
                <span>Order WhatsApp (24 Jam)</span>
              </button>

              <button
                onClick={onExploreWorkflow}
                className="px-4 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-stone-600 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
              >
                <span>Rahasia Dapur</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Promotional Highlights Card (Interactive Tabs) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-stone-200 shadow-md">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-3 mb-3 text-xs font-black uppercase tracking-wider">
                <button
                  onClick={() => setActivePromoTab('combo')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activePromoTab === 'combo'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  🔥 Kombo Hemat
                </button>
                <button
                  onClick={() => setActivePromoTab('quality')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activePromoTab === 'quality'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  ⭐ Jaminan Kualitas
                </button>
              </div>

              {activePromoTab === 'combo' && (
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-black text-stone-900 uppercase">
                      PAKET KOMBO SUPER TANI (Kasgot 1kg + POC 500ml)
                    </p>
                    <p className="text-xs text-stone-600">
                      Duet maut kesuburan tanah & daun. Hemat Rp 5.000 dibanding beli satuan!
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="line-through text-xs text-stone-400 block font-mono">Rp 30.000</span>
                    <span className="text-lg font-black text-emerald-800 font-mono">Rp 25.000</span>
                  </div>
                </div>
              )}

              {activePromoTab === 'quality' && (
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-black text-stone-900 uppercase">
                      100% NATURAL BIO-FERMENTASI BSF
                    </p>
                    <p className="text-xs text-stone-600">
                      Higienis, di-oven dengan suhu terkontrol, bebas telur lalat liar, dan tanpa bahan pengawet sintetik.
                    </p>
                  </div>
                  <span className="px-3 py-1.5 bg-emerald-700 text-white font-black text-xs rounded-lg uppercase tracking-wider shrink-0">
                    Green Cert
                  </span>
                </div>
              )}
            </div>

            {/* Metric Highlights in Leaf Green Theme */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border-2 border-stone-200 shadow-xs text-center">
                <p className="text-2xl sm:text-3xl font-black text-emerald-800 font-display tabular-nums">
                  1,5<span className="text-base font-bold text-stone-700"> Ton</span>
                </p>
                <p className="text-[11px] font-extrabold uppercase text-stone-500 mt-0.5">Sampah Diolah / Hari</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border-2 border-stone-200 shadow-xs text-center">
                <p className="text-2xl sm:text-3xl font-black text-emerald-800 font-display tabular-nums">
                  42<span className="text-base font-bold text-stone-700">%</span>
                </p>
                <p className="text-[11px] font-extrabold uppercase text-stone-500 mt-0.5">Protein Maggot Kering</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border-2 border-stone-200 shadow-xs text-center">
                <p className="text-2xl sm:text-3xl font-black text-emerald-800 font-display tabular-nums">
                  100<span className="text-base font-bold text-stone-700">%</span>
                </p>
                <p className="text-[11px] font-extrabold uppercase text-stone-500 mt-0.5">Alami Tanpa Kimia</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border-2 border-stone-200 shadow-xs text-center">
                <p className="text-2xl sm:text-3xl font-black text-emerald-800 font-display tabular-nums">
                  24<span className="text-base font-bold text-stone-700"> Jam</span>
                </p>
                <p className="text-[11px] font-extrabold uppercase text-stone-500 mt-0.5">Layanan Rest Area</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Banner with Leaf Green Border */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-4 border-emerald-800 shadow-2xl bg-stone-900 group">
              
              {/* Product hero image */}
              <img
                src="/src/assets/images/hero_tps_rest_area_cipali_1790564641900.jpg"
                alt="Sentra Biokonversi BSF Rest Area KM 164B Tol Cipali"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 bg-emerald-800 text-white px-3.5 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Award className="w-4 h-4 text-lime-300" />
                <span>Pusat Inovasi Cipali</span>
              </div>

              {/* Top Right Delivery & Drive-Thru Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-stone-900 px-3 py-1.5 rounded-xl font-black text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-800" />
                <span>Kirim Se-Indonesia</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-lime-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Dibuat Segar Setiap Hari di KM 164B</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-display text-white">
                  Instalasi Biokonversi BSF Terbesar di Tol Cipali
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Menjamin pupuk kasgot dingin yang aman untuk tanaman kesayangan Anda dan maggot renyah berprotein 42% untuk pakan ikan hias dan unggas juara.
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-[11px] font-mono bg-white/10 px-2.5 py-1 rounded-md text-stone-200">
                    📍 KM 164B Arah Jakarta
                  </span>
                  <span className="text-[11px] font-mono bg-emerald-800 px-2.5 py-1 rounded-md text-white font-bold">
                    #JagonyaOrganik
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
