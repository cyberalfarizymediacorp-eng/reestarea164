import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, ArrowLeftRight, Check, ShoppingBag, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/mockData';

interface BeforeAfterSliderProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onAddToCart }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const kasgotProduct = PRODUCTS.find((p) => p.id === 'kasgot') || PRODUCTS[0];
  const pocProduct = PRODUCTS.find((p) => p.id === 'poc') || PRODUCTS[0];

  const handleOrderBundle = () => {
    const text = encodeURIComponent(
      'Halo Admin Rest Area KM 164B Tol Cipali, saya tertarik memesan Paket Komplit Subur (1x Kasgot 1kg + 1x POC 500ml) seharga Rp 30.000 setelah melihat uji perbandingan tanah 14 hari.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleAddBundleToCart = () => {
    onAddToCart(kasgotProduct, 1);
    onAddToCart(pocProduct, 1);
  };

  return (
    <div className="my-12 p-6 sm:p-8 bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Laboratorium Uji Lapangan Rest Area KM 164B</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Perbandingan Nyata 14 Hari: Tanah Biasa vs Diberi Kasgot & POC
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-pretty">
            Geser bilah interaktif di bawah untuk melihat transformasi regenerasi tanah pot yang tandus dan memadat menjadi gembur berhumus tinggi serta memicu tunas baru.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleAddBundleToCart}
            className="px-4 py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>+ Paket Subur (Rp 30.000)</span>
          </button>
          <button
            onClick={handleOrderBundle}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Order Paket via WA</span>
          </button>
        </div>
      </div>

      {/* Interactive Before-After Comparison Container */}
      <div 
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden select-none cursor-ew-resize bg-stone-900 shadow-md border border-stone-300"
      >
        {/* AFTER IMAGE (Underneath, full width) */}
        <img
          src="/images/soil_lush_after_1790566410584.jpg"
          alt="Sesudah: Tanaman subur dan tanah gembur berkat Kasgot"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER BADGE */}
        <div className="absolute top-4 right-4 z-10 bg-emerald-800/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono shadow-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>HARI KE-14: Kasgot + POC KM 164B</span>
        </div>

        {/* BEFORE IMAGE (Clipped on top by percentage) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="/images/soil_dry_before_1790566395909.jpg"
            alt="Sebelum: Tanah kering pecah-pecah tanpa kasgot"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ 
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />

          {/* BEFORE BADGE */}
          <div className="absolute top-4 left-4 z-10 bg-stone-900/90 backdrop-blur-xs text-stone-200 px-3 py-1.5 rounded-lg text-xs font-bold font-mono shadow-sm">
            <span>HARI KE-0: Tanah Padat & Kering</span>
          </div>
        </div>

        {/* DIVIDER LINE WITH DRAG HANDLE */}
        <div 
          className="absolute inset-y-0 z-20 w-1 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-emerald-900 border-2 border-emerald-600 shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4 text-emerald-800" />
          </div>
        </div>

        {/* Help Tip Overlay */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none z-10">
          <span className="bg-stone-900/70 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/20">
            ← Geser kursor / jari ke kiri & kanan →
          </span>
        </div>
      </div>

      {/* Comparison Fact Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-stone-200">
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
          <p className="text-xs font-mono font-bold text-stone-500 uppercase">Struktur & Porositas Tanah</p>
          <div className="text-xs text-stone-700 space-y-1">
            <p className="text-stone-400 line-through">Sebelum: Padat liat, akar tercekik & tidak bernapas</p>
            <p className="font-semibold text-emerald-900 flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sesudah: Remah gembur aerasi oksigen meningkat 300%</span>
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
          <p className="text-xs font-mono font-bold text-stone-500 uppercase">Aktivitas Biologis & Humat</p>
          <div className="text-xs text-stone-700 space-y-1">
            <p className="text-stone-400 line-through">Sebelum: Nol mikroba pengikat, hara hanyut terbawa air</p>
            <p className="font-semibold text-emerald-900 flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sesudah: Kaya asam humat & jutaan bakteri penyubur tanah</span>
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
          <p className="text-xs font-mono font-bold text-stone-500 uppercase">Respon Daun & Pembungaan</p>
          <div className="text-xs text-stone-700 space-y-1">
            <p className="text-stone-400 line-through">Sebelum: Daun pucat kusam dan bunga rontok</p>
            <p className="font-semibold text-emerald-900 flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sesudah: Daun hijau mengilap tebal & tunas baru aktif</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
