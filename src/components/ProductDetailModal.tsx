import React from 'react';
import { X, Check, MessageCircle, ShoppingBag, Leaf, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data/mockData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return null;

  const handleDirectWaOrder = () => {
    const total = product.price * quantity;
    const text = encodeURIComponent(
      `Halo Admin Rest Area KM 164B Tol Cipali,\n` +
      `Saya ingin memesan produk:\n` +
      `- ${product.name} (${product.weight}): ${quantity} ${product.unit}\n` +
      `Total: Rp ${total.toLocaleString('id-ID')}\n\n` +
      `Mohon info ketersediaan stok & ongkos kirim ke alamat saya. Terima kasih!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header bar with clean typography */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 font-mono">
            <Leaf className="w-4 h-4 text-emerald-700" />
            <span>Spesifikasi Produk Resmi · Rest Area KM 164B Tol Cipali</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 aspect-4/3">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-7 space-y-2">
              <span className="inline-block text-[11px] font-mono font-bold text-emerald-900 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/80">
                {product.weight} / {product.unit}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-emerald-800 font-semibold">{product.tagline}</p>

              <div className="pt-2 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-stone-900 font-display tabular-nums">
                  {product.priceFormatted}
                </span>
                <span className="text-xs text-stone-500 font-medium">/ {product.unit}</span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1 text-pretty">
                {product.fullDescription}
              </p>
            </div>
          </div>

          {/* Benefits list */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
              Keunggulan & Manfaat Utama:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
              Spesifikasi Mutu & Laboratorium:
            </h4>
            <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden text-xs">
              {product.specs.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between px-4 py-2.5 bg-white even:bg-stone-50/70">
                  <span className="text-stone-600 font-medium">{s.label}</span>
                  <span className="text-stone-900 font-semibold font-mono">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Guide */}
          <div className="space-y-2.5 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
              Petunjuk Pemakaian Resmi:
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-stone-700 leading-relaxed">
              {product.usageGuide.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-stone-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs text-stone-600 font-medium">Jumlah:</span>
            <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold text-xs"
              >
                -
              </button>
              <span className="px-3 py-1.5 text-xs font-mono font-bold tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold text-xs"
              >
                +
              </button>
            </div>
            <span className="text-xs font-mono font-bold text-stone-900 tabular-nums">
              = Rp {(product.price * quantity).toLocaleString('id-ID')}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onAddToCart(product, quantity);
                onClose();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>+ Keranjang</span>
            </button>
            <button
              onClick={handleDirectWaOrder}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Beli via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
