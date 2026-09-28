import React, { useState } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/mockData';
import { Product } from '../types';
import { ProductDetailModal } from './ProductDetailModal';
import { 
  MessageCircle, 
  ShoppingBag, 
  Info, 
  Check, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Flame, 
  Tag, 
  Copy, 
  Layers, 
  Award,
  ChevronRight,
  Package
} from 'lucide-react';

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
  selectedProductIdForModal?: string | null;
  onClearSelectedModalProduct?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  selectedProductIdForModal,
  onClearSelectedModalProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'combo' | 'pupuk' | 'pakan'>('all');
  const [inspectProduct, setInspectProduct] = useState<Product | null>(null);
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  // Sync external request to inspect product if triggered from workflow
  React.useEffect(() => {
    if (selectedProductIdForModal) {
      const found = PRODUCTS.find((p) => p.id === selectedProductIdForModal);
      if (found) {
        setInspectProduct(found);
      }
    }
  }, [selectedProductIdForModal]);

  const handleCloseModal = () => {
    setInspectProduct(null);
    if (onClearSelectedModalProduct) {
      onClearSelectedModalProduct();
    }
  };

  const handleQuickWaOrder = (product: Product) => {
    const text = encodeURIComponent(
      `Halo Admin Rest Area KM 164B Tol Cipali,\n` +
      `Saya ingin memesan menu favorit:\n` +
      `- 1x ${product.name} (${product.weight}) seharga ${product.priceFormatted}.\n\n` +
      `Mohon info ketersediaan stok dan rekening pembayaran resmi. Terima kasih!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2500);
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="produk" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/10 text-emerald-800 text-xs font-black uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Katalog Resmi Menu Sirkular KM 164B</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase font-display">
            MENU SPESIAL & PAKET KOMBO
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-medium">
            Pilih menu organik unggulan langsung dari sentra pengolahan Rest Area KM 164B Tol Cipali. 
            Semua produk siap dikirim ke alamat Anda atau diambil saat singgah di rest area!
          </p>
        </div>

        {/* Interactive Category Tabs in Leaf Green */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xs flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-emerald-800 text-white shadow-md scale-102'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
            }`}
          >
            <Package className="w-4 h-4 text-lime-300" />
            <span>Semua Menu ({PRODUCTS.length})</span>
          </button>
          
          <button
            onClick={() => setSelectedCategory('combo')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xs flex items-center gap-1.5 ${
              selectedCategory === 'combo'
                ? 'bg-emerald-800 text-white shadow-md scale-102'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-lime-300 fill-current" />
            <span>Kombo Super Besar</span>
          </button>

          <button
            onClick={() => setSelectedCategory('pupuk')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xs ${
              selectedCategory === 'pupuk'
                ? 'bg-emerald-800 text-white shadow-md scale-102'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
            }`}
          >
            🌿 Pupuk Kasgot & POC
          </button>

          <button
            onClick={() => setSelectedCategory('pakan')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xs ${
              selectedCategory === 'pakan'
                ? 'bg-emerald-800 text-white shadow-md scale-102'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
            }`}
          >
            🐟 Maggot Super Protein
          </button>
        </div>

        {/* Promo Deals / Voucher Banner */}
        <div className="mb-12 bg-white rounded-3xl border-2 border-stone-200 shadow-lg p-5 sm:p-7 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-800" />
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-emerald-800" />
                <span className="text-xs font-black uppercase text-emerald-800 tracking-wider">
                  Kupon Promo Spesial Bulan Ini
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase font-display text-stone-900">
                Klaim Kupon Diskon Rest Area KM 164B!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Gunakan kode kupon di bawah saat konfirmasi pesanan via WhatsApp untuk mendapatkan potongan harga langsung.
              </p>
            </div>

            {/* Coupons List */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Coupon 1 */}
              <div className="flex items-center border-2 border-dashed border-emerald-700 rounded-xl bg-emerald-50/60 p-2.5 gap-3">
                <div>
                  <span className="text-[10px] font-bold text-stone-500 uppercase block">Kupon Hemat</span>
                  <span className="text-sm font-black font-mono text-emerald-800">SUPERBESAR5K</span>
                </div>
                <button
                  onClick={() => handleCopyCoupon('SUPERBESAR5K')}
                  className="px-2.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-[11px] font-black rounded-lg transition-colors flex items-center gap-1 uppercase"
                >
                  {copiedCoupon === 'SUPERBESAR5K' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCoupon === 'SUPERBESAR5K' ? 'Tersalin' : 'Klaim'}</span>
                </button>
              </div>

              {/* Coupon 2 */}
              <div className="flex items-center border-2 border-dashed border-stone-400 rounded-xl bg-stone-100 p-2.5 gap-3">
                <div>
                  <span className="text-[10px] font-bold text-stone-500 uppercase block">Gratis Konsul Tani</span>
                  <span className="text-sm font-black font-mono text-stone-800">CIPALIJOSS</span>
                </div>
                <button
                  onClick={() => handleCopyCoupon('CIPALIJOSS')}
                  className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-900 text-white text-[11px] font-black rounded-lg transition-colors flex items-center gap-1 uppercase"
                >
                  {copiedCoupon === 'CIPALIJOSS' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCoupon === 'CIPALIJOSS' ? 'Tersalin' : 'Klaim'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isCombo = product.category === 'combo';

            return (
              <div
                key={product.id}
                className={`flex flex-col rounded-3xl border-2 transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden group bg-white ${
                  isCombo ? 'border-emerald-800' : 'border-stone-200 hover:border-emerald-700'
                }`}
              >
                {/* Product Image Frame */}
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* Dark gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge (Leaf Green Flag) */}
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-emerald-800 text-white text-xs font-black tracking-wider uppercase px-3 py-1 rounded-xl shadow-md flex items-center gap-1">
                      <Flame className="w-3 h-3 text-lime-300 fill-current" />
                      <span>{product.badge}</span>
                    </div>
                  )}

                  {/* Portion / Net Weight Badge */}
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg">
                    {product.weight}
                  </div>

                  {/* Floating Price in Leaf Green Theme */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
                    <div>
                      {product.originalPriceFormatted && (
                        <span className="text-xs line-through text-stone-300 font-mono block">
                          {product.originalPriceFormatted}
                        </span>
                      )}
                      <span className="text-2xl font-black font-display tracking-tight text-white drop-shadow-md">
                        {product.priceFormatted}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-lime-300 uppercase">
                      /{product.unit}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-stone-900 group-hover:text-emerald-800 transition-colors uppercase font-display leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="py-2.5 px-3 rounded-xl bg-stone-100 border border-stone-200/80 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-stone-700">
                      <span className="font-bold text-stone-900">Keunggulan Utama:</span>
                      <span className="font-mono text-emerald-800 font-bold text-[10px]">100% Organik</span>
                    </div>
                    <p className="text-[11px] text-stone-600 line-clamp-1 italic">
                      "{product.tagline}"
                    </p>
                  </div>

                  {/* Action Buttons: Add to Cart + Inspect */}
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => onAddToCart(product, 1)}
                      className="w-full py-3 px-4 text-xs font-black uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>+ Tambah ke Keranjang</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setInspectProduct(product)}
                        className="flex-1 py-2 px-3 text-xs font-bold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Info className="w-3.5 h-3.5 text-stone-500" />
                        <span>Detail Menu</span>
                      </button>

                      <button
                        onClick={() => handleQuickWaOrder(product)}
                        className="flex-1 py-2 px-3 text-xs font-bold text-stone-900 bg-lime-400 hover:bg-lime-500 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Order WA</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-emerald-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-800 flex items-center justify-center text-white shrink-0 shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-black uppercase font-display text-white">
                Jaminan Kualitas 100% Organik Rest Area KM 164B Tol Cipali
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                Bebas kuman patogen, tanpa bahan kimia sintetis, dan telah melewati uji laboratorium pertanian terstandarisasi.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Halo Admin Rest Area KM 164B, saya ingin konsultasi kebutuhan produk organik untuk tanaman/ternak saya.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-lime-400 hover:text-stone-950 font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md active:scale-95"
          >
            Konsultasi Gratis dengan Tim Ahli
          </a>
        </div>

      </div>

      {/* Product Detail Modal */}
      {inspectProduct && (
        <ProductDetailModal
          product={inspectProduct}
          onClose={handleCloseModal}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
};
