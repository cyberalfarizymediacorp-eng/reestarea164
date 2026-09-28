import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShoppingBag, MessageCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/mockData';

interface ProductFinderWidgetProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductFinderWidget: React.FC<ProductFinderWidgetProps> = ({ onAddToCart }) => {
  const [selectedTarget, setSelectedTarget] = useState<string>('tanaman-hias');
  const [selectedGoal, setSelectedGoal] = useState<string>('tanah-padat');

  const targets = [
    { id: 'tanaman-hias', label: '🪴 Tanaman Hias & Daun', desc: 'Monstera, Aglonema, Philo' },
    { id: 'tanaman-buah', label: '🌶️ Cabai & Pohon Buah', desc: 'Tabulampot, Sayur Organik' },
    { id: 'ikan-hias', label: '🐟 Ikan Koi, Channa & Predator', desc: 'Akuarium & Kolam Hias' },
    { id: 'unggas-burung', label: '🦜 Burung Kicau & Unggas', desc: 'Murai, Kacer, Ayam Petelur' }
  ];

  const goalsByTarget: Record<string, Array<{ id: string; label: string }>> = {
    'tanaman-hias': [
      { id: 'tanah-padat', label: 'Tanah pot keras, memadat & susah bertunas' },
      { id: 'daun-kusam', label: 'Warna daun kusam & ingin mengilap segar' },
      { id: 'komplit-pot', label: 'Ingin paket lengkap rawat akar & daun' }
    ],
    'tanaman-buah': [
      { id: 'bunga-rontok', label: 'Bunga cabai/tomat sering rontok sebelum berbuah' },
      { id: 'tanah-kebun', label: 'Perlu penggembur tanah bedengan organik' },
      { id: 'panen-maksimal', label: 'Ingin hasil buah lebat bebas pestisida kimia' }
    ],
    'ikan-hias': [
      { id: 'warna-pudar', label: 'Corak warna ikan pudar & butuh booster alami' },
      { id: 'air-keruh', label: 'Pakan pelet bikin air akuarium cepat keruh' },
      { id: 'tumbuh-bulky', label: 'Mempercepat pertumbuhan fisik tebal (bulky)' }
    ],
    'unggas-burung': [
      { id: 'extra-fooding', label: 'Extra fooding alami berprotein tinggi 42%' },
      { id: 'stamina-kicau', label: 'Tingkatkan stamina burung kicau agar rajin bunyi' },
      { id: 'penggemukan', label: 'Penggemukan ayam/bebek secara sehat & hemat' }
    ]
  };

  const getRecommendation = () => {
    if (selectedTarget === 'ikan-hias' || selectedTarget === 'unggas-burung') {
      const maggot = PRODUCTS.find((p) => p.id === 'maggot-kering') || PRODUCTS[2];
      return {
        product: maggot,
        badge: '99% Sangat Cocok untuk Akuakultur & Hobiis',
        headline: 'Maggot Kering BSF Super Protein 42%',
        explanation: 'Kandungan protein 42% dan asam laurat alaminya memicu pertumbuhan bulky tanpa mengotori air akuarium, sekaligus mendongkrak pigmen warna sisik ikan secara tajam.',
        dosage: 'Berikan 1–2 kali sehari secukupnya yang habis dalam 3 menit.'
      };
    }

    if (selectedGoal === 'daun-kusam' || selectedGoal === 'bunga-rontok') {
      const poc = PRODUCTS.find((p) => p.id === 'poc') || PRODUCTS[0];
      return {
        product: poc,
        badge: '98% Sangat Cocok untuk Semprot Daun & Bunga',
        headline: 'Pupuk Organik Cair (POC) Konsentrat 500 ml',
        explanation: 'Konsentrat auksin dan mikroba mikronya diserap instan melalui stomata daun saat pagi hari, menghentikan kerontokan bunga dan membuat daun hijau berkilau.',
        dosage: 'Campur 1–2 tutup botol per 1 liter air, semprotkan 1x seminggu di pagi hari.'
      };
    }

    const kasgot = PRODUCTS.find((p) => p.id === 'kasgot') || PRODUCTS[1];
    return {
      product: kasgot,
      badge: '98% Sangat Cocok untuk Menggemburkan Media Tanam',
      headline: 'Pupuk Kasgot Padat Super 1 Kg',
      explanation: 'Residu biokonversi larva BSF yang dingin dan kaya asam humat alami. Mengembalikan rongga aerasi tanah yang telah padat serta mengikat unsur hara agar tidak mudah larut.',
      dosage: 'Tabur 3–5 sendok makan melingkari tajuk tanaman atau campur media 1:2 tanah.'
    };
  };

  const currentGoals = goalsByTarget[selectedTarget] || goalsByTarget['tanaman-hias'];
  const recommendation = getRecommendation();

  const handleOrderWa = () => {
    const text = encodeURIComponent(
      `Halo Admin Rest Area KM 164B Tol Cipali, dari hasil rekomendasi cerdas saya cocok menggunakan ${recommendation.product.name} (${recommendation.product.priceFormatted}). Saya ingin memesan produk ini.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="my-10 p-6 sm:p-8 bg-stone-900 text-white rounded-3xl shadow-md border border-stone-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Asisten Cepat Rekomendasi Nutrisi</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Temukan Solusi Organik yang Tepat untuk Kebutuhan Anda
          </h3>
          <p className="text-xs text-stone-300">
            Pilih kategori dan kendala yang Anda hadapi untuk melihat produk yang paling teruji hasilnya.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Step Questions */}
        <div className="lg:col-span-6 space-y-6">
          {/* Step 1: Target Selection */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
              Langkah 1: Apa yang Ingin Anda Rawat / Pelihara?
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {targets.map((t) => {
                const isSelected = selectedTarget === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedTarget(t.id);
                      setSelectedGoal(goalsByTarget[t.id][0].id);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-emerald-950 border-emerald-500 text-white shadow-xs ring-1 ring-emerald-500/50'
                        : 'bg-stone-800/80 border-stone-700/80 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <p className="text-xs font-bold">{t.label}</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">{t.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Goal / Issue Selection */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
              Langkah 2: Apa Kendala atau Target Utama Anda?
            </label>
            <div className="space-y-2">
              {currentGoals.map((g) => {
                const isSelected = selectedGoal === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-200'
                        : 'bg-stone-800/80 border-stone-700/80 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{g.label}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Instant Recommendation Card */}
        <div className="lg:col-span-6 bg-stone-800/90 rounded-2xl p-6 border border-stone-700 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-900 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-700/60">
              {recommendation.badge}
            </span>
            <span className="text-xs font-mono font-bold text-white tabular-nums">
              {recommendation.product.priceFormatted}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-700 shrink-0 border border-stone-600">
              <img
                src={recommendation.product.image}
                alt={recommendation.product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold font-display text-white">
                {recommendation.headline}
              </h4>
              <p className="text-xs text-stone-300">
                Kemasan {recommendation.product.weight} · Diproduksi di Rest Area KM 164B Cipali
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
            {recommendation.explanation}
          </p>

          <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-700/80 space-y-1">
            <p className="text-[11px] font-mono font-bold text-emerald-400 uppercase">
              Petunjuk Penggunaan Cepat:
            </p>
            <p className="text-xs text-stone-300">{recommendation.dosage}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => onAddToCart(recommendation.product, 1)}
              className="py-2.5 px-3 text-xs font-semibold bg-stone-700 hover:bg-stone-600 text-white rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>+ Keranjang</span>
            </button>
            <button
              onClick={handleOrderWa}
              className="py-2.5 px-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pesan via WA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
